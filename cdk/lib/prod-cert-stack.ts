import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';

export interface ProdCertStackProps extends cdk.StackProps {
  readonly domainName: string;
  readonly hostedZone: route53.IHostedZone;
}

export class ProdCertStack extends cdk.Stack {
  public readonly certificate: acm.ICertificate;

  constructor(scope: Construct, id: string, props: ProdCertStackProps) {
    super(scope, id, props);

    this.certificate = new acm.Certificate(this, 'ProdCert', {
      domainName: props.domainName,
      subjectAlternativeNames: [`www.${props.domainName}`],
      validation: acm.CertificateValidation.fromDns(props.hostedZone),
    });

    new cdk.CfnOutput(this, 'CertArn', { value: this.certificate.certificateArn });
  }
}
