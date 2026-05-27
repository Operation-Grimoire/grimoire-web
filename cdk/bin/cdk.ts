#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';
import { DnsStack } from '../lib/dns-stack';
import { ProdCertStack } from '../lib/prod-cert-stack';
import { PreviewCertStack } from '../lib/preview-cert-stack';
import { SiteStack } from '../lib/site-stack';
import { GithubOidcStack } from '../lib/github-oidc-stack';

const app = new cdk.App();

const domainName = app.node.tryGetContext('domainName') ?? 'grimoireapp.org';
const previewSubdomain = app.node.tryGetContext('previewSubdomain') ?? 'preview';
const githubOwner = app.node.tryGetContext('githubOwner') ?? 'Operation-Grimoire';
const githubRepo = app.node.tryGetContext('githubRepo') ?? 'grimoire-web';
const prNumber: string | undefined = app.node.tryGetContext('prNumber');

const account = process.env.CDK_DEFAULT_ACCOUNT ?? process.env.AWS_ACCOUNT_ID;
const region = 'us-east-1';
const env = { account, region };

const webappDist = path.join(__dirname, '..', '..', 'webapp', 'dist');

const dns = new DnsStack(app, 'GrimoireDns', { env, domainName });

new GithubOidcStack(app, 'GrimoireGithubOidc', { env, githubOwner, githubRepo });

const prodCert = new ProdCertStack(app, 'GrimoireProdCert', {
  env,
  domainName,
  hostedZone: dns.hostedZone,
});

new SiteStack(app, 'GrimoireSite-prod', {
  env,
  domainNames: [domainName, `www.${domainName}`],
  certificate: prodCert.certificate,
  hostedZone: dns.hostedZone,
  assetPath: webappDist,
});

if (prNumber) {
  const previewCert = new PreviewCertStack(app, 'GrimoirePreviewCert', {
    env,
    domainName,
    previewSubdomain,
    hostedZone: dns.hostedZone,
  });

  const fqdn = `pr-${prNumber}.${previewSubdomain}.${domainName}`;
  new SiteStack(app, `GrimoireSite-pr-${prNumber}`, {
    env,
    domainNames: [fqdn],
    certificate: previewCert.certificate,
    hostedZone: dns.hostedZone,
    assetPath: webappDist,
    ephemeral: true,
  });
}
