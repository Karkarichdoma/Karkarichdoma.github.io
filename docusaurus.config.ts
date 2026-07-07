import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Karkarichdoma',
  tagline: 'A Docusaurus starter for GitHub Pages',
  favicon: 'img/logo.svg',

  url: 'https://karkarichdoma.github.io',
  baseUrl: '/',
  organizationName: 'Karkarichdoma',
  projectName: 'Karkarichdoma.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Karkarichdoma',
      items: [
        { to: '/', label: 'Home', position: 'left' },
        {
          label: 'Docs',
          position: 'left',
          items: [
            { to: '/docs/intro', label: 'Overview' },
            { to: '/docs/chemistry-units/intro', label: 'Chemistry Units' },
            { to: '/docs/practice-problems/intro', label: 'Practice Problems' },
            { to: '/docs/formula-sheets/intro', label: 'Formula Sheets' },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Karkarichdoma`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
