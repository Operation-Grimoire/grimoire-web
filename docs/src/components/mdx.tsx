import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Version } from './version';
import { Feature } from './feature';
import { Note } from './note';
import { GuideLink, GuideButton } from './guide';
import { Mark } from './mark';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Version,
    Feature,
    Note,
    GuideLink,
    GuideButton,
    Mark,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
