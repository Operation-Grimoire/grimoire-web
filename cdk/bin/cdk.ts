#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';
import { DnsStack } from '../lib/dns-stack';
import { CertStack } from '../lib/cert-stack';
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

const certs = new CertStack(app, 'GrimoireCerts', {
  env,
  domainName,
  previewSubdomain,
  hostedZone: dns.hostedZone,
});

new GithubOidcStack(app, 'GrimoireGithubOidc', { env, githubOwner, githubRepo });

if (prNumber) {
  const fqdn = `pr-${prNumber}.${previewSubdomain}.${domainName}`;
  new SiteStack(app, `GrimoireSite-pr-${prNumber}`, {
    env,
    domainNames: [fqdn],
    certificate: certs.previewCert,
    hostedZone: dns.hostedZone,
    assetPath: webappDist,
    ephemeral: true,
  });
} else {
  new SiteStack(app, 'GrimoireSite-prod', {
    env,
    domainNames: [domainName, `www.${domainName}`],
    certificate: certs.prodCert,
    hostedZone: dns.hostedZone,
    assetPath: webappDist,
  });
}
