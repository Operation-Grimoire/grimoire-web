import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';

export interface GithubOidcStackProps extends cdk.StackProps {
  readonly githubOwner: string;
  readonly githubRepo: string;
}

export class GithubOidcStack extends cdk.Stack {
  public readonly role: iam.Role;

  constructor(scope: Construct, id: string, props: GithubOidcStackProps) {
    super(scope, id, props);

    const provider = new iam.OpenIdConnectProvider(this, 'GithubOidcProvider', {
      url: 'https://token.actions.githubusercontent.com',
      clientIds: ['sts.amazonaws.com'],
    });

    const subjectClaim = `repo:${props.githubOwner}/${props.githubRepo}:*`;

    this.role = new iam.Role(this, 'GithubActionsRole', {
      roleName: 'GithubActionsDeployRole',
      assumedBy: new iam.FederatedPrincipal(
        provider.openIdConnectProviderArn,
        {
          StringEquals: { 'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com' },
          StringLike: { 'token.actions.githubusercontent.com:sub': subjectClaim },
        },
        'sts:AssumeRoleWithWebIdentity',
      ),
      description: `Deploys CDK from GitHub Actions for ${props.githubOwner}/${props.githubRepo}`,
      maxSessionDuration: cdk.Duration.hours(1),
    });

    this.role.addToPolicy(new iam.PolicyStatement({
      actions: ['sts:AssumeRole'],
      resources: [`arn:aws:iam::${this.account}:role/cdk-*`],
    }));

    new cdk.CfnOutput(this, 'RoleArn', { value: this.role.roleArn });
  }
}
