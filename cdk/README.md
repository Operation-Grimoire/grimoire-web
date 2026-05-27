# Grimoire CDK

Deploys Astro webapp (`../webapp`) as static site on S3 + CloudFront with custom domain.

## Stacks

| Stack | Purpose | Lifetime |
|---|---|---|
| `GrimoireDns` | Route53 HostedZone for `grimoireapp.org` | Permanent |
| `GrimoireProdCert` | ACM cert for apex + `www.grimoireapp.org` | Permanent |
| `GrimoirePreviewCert` | ACM wildcard cert `*.preview.grimoireapp.org` | Permanent (created on first PR) |
| `GrimoireGithubOidc` | IAM role assumed by GitHub Actions via OIDC | Permanent |
| `GrimoireSite-prod` | S3 + CloudFront + A records for prod | Permanent |
| `GrimoireSite-pr-<N>` | Per-PR ephemeral preview at `pr-<N>.preview.grimoireapp.org` | Destroyed on PR close |

All stacks deploy to **us-east-1** (CloudFront/ACM requirement).

## One-time setup

### 1. Local AWS CLI

```bash
aws configure sso --profile grimoire
aws sso login --profile grimoire
export AWS_PROFILE=grimoire
```

### 2. CDK bootstrap

```bash
cd cdk
npx cdk bootstrap aws://<ACCOUNT_ID>/us-east-1
```

### 3. Build webapp once

```bash
cd ../webapp && npm ci && npm run build
```

### 4. Deploy DNS + GitHub OIDC first

```bash
cd ../cdk
npx cdk deploy GrimoireDns GrimoireGithubOidc
```

Note outputs:
- `GrimoireDns.NameServers` — 4 NS values
- `GrimoireGithubOidc.RoleArn` — IAM role ARN for GH secret

### 5. Point Porkbun at Route53

1. Log into Porkbun, Domain Management, `grimoireapp.org`
2. Authoritative Nameservers — paste the 4 NS values from step 4
3. Wait ~30min to few hours for propagation (`dig NS grimoireapp.org`)

### 6. Deploy prod site (creates ProdCert as dependency)

ACM cert DNS-validates via Route53 — only works once NS swap propagates.

```bash
npx cdk deploy GrimoireSite-prod
```

Visit `https://grimoireapp.org`. `GrimoirePreviewCert` gets created lazily on the first PR.

### 7. GitHub repo secrets

Settings, Secrets and variables, Actions, New repository secret:

| Name | Value |
|---|---|
| `AWS_ROLE_ARN` | RoleArn output from step 4 |

Push to `master` runs `deploy-prod.yml`.
Open PR runs `deploy-pr.yml`, deploys to `pr-<N>.preview.grimoireapp.org` and comments URL.
Close/merge PR runs `cleanup-pr.yml`, destroys preview stack.

## Local commands

```bash
# Synth all
npx cdk synth

# Deploy specific stack
npx cdk deploy GrimoireSite-prod

# Deploy preview locally
npx cdk deploy GrimoireSite-pr-42 --context prNumber=42

# Destroy preview
npx cdk destroy GrimoireSite-pr-42 --context prNumber=42
```

## Context overrides

| Key | Default |
|---|---|
| `domainName` | `grimoireapp.org` |
| `previewSubdomain` | `preview` |
| `githubOwner` | `Operation-Grimoire` |
| `githubRepo` | `grimoire-web` |
| `prNumber` | (unset = prod stack) |

## Notes

- `GithubActionsRole` only has `sts:AssumeRole` on `arn:aws:iam::ACCOUNT:role/cdk-*`. Actual deploy permissions live on the CDK bootstrap roles (`cdk-hnb659fds-deploy-role-*`, `-file-publishing-role-*`, `-image-publishing-role-*`, `-lookup-role-*`), which are themselves scoped by the bootstrap stack. To tighten further: re-bootstrap with `--cloudformation-execution-policies` set to a custom policy instead of `AdministratorAccess`.
- Preview cert is single wildcard `*.preview.grimoireapp.org` — all preview distros share it.
- Per-PR CloudFront distros take ~5min to create. Subsequent updates ~30s.
- Idle preview distros nearly free; data transfer + invalidations are real cost.
