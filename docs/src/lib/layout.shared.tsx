import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-xl font-semibold"
        >
          {appName}
        </span>
      ),
    },
    // Dark-only — drop the inert light/dark switch.
    themeSwitch: { enabled: false },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
