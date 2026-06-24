import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Version } from './version';
import { Feature } from './feature';
import { Note } from './note';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Version,
    Feature,
    Note,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
