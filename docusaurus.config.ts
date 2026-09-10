import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {PrismTheme} from 'prism-react-renderer';

// Monochrome syntax highlighting — grayscale tokens only.
const monoLightTheme: PrismTheme = {
  plain: {color: '#1a1a1a', backgroundColor: '#f6f7f8'},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#9aa0a6', fontStyle: 'italic'}},
    {types: ['punctuation'], style: {color: '#5f6368'}},
    {types: ['tag', 'operator', 'entity', 'url'], style: {color: '#202124'}},
    {types: ['boolean', 'number', 'constant', 'symbol', 'attr-name'], style: {color: '#3c4043'}},
    {types: ['string', 'char', 'builtin', 'inserted'], style: {color: '#44484c'}},
    {types: ['atrule', 'selector', 'keyword', 'regex', 'important'], style: {color: '#111111', fontWeight: '600'}},
    {types: ['function', 'class-name', 'property'], style: {color: '#111111'}},
    {types: ['variable'], style: {color: '#2e3236'}},
  ],
};

const monoDarkTheme: PrismTheme = {
  plain: {color: '#e6e6e6', backgroundColor: '#161616'},
  styles: [
    {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#7d8287', fontStyle: 'italic'}},
    {types: ['punctuation'], style: {color: '#8f9398'}},
    {types: ['tag', 'operator', 'entity', 'url'], style: {color: '#d6d6d6'}},
    {types: ['boolean', 'number', 'constant', 'symbol', 'attr-name'], style: {color: '#b6babf'}},
    {types: ['string', 'char', 'builtin', 'inserted'], style: {color: '#a8acb1'}},
    {types: ['atrule', 'selector', 'keyword', 'regex', 'important'], style: {color: '#ffffff', fontWeight: '600'}},
    {types: ['function', 'class-name', 'property'], style: {color: '#ffffff'}},
    {types: ['variable'], style: {color: '#cfd3d6'}},
  ],
};

const config: Config = {
  title: 'Oh My Pi',
  tagline: 'Coding-Agent fürs Terminal — Dokumentation',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://ompkitty.github.io',
  baseUrl: '/OMP-Guide-German/',
  organizationName: 'ompkitty',
  projectName: 'OMP-Guide-German',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
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
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Oh My Pi',
      logo: {
        alt: 'Oh My Pi Logo',
        src: 'img/omp_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Dokumentation',
        },
        {
          href: 'https://omp.sh/docs',
          label: 'Offizielle Doku',
          position: 'right',
        },
        {
          href: 'https://github.com/can1357/oh-my-pi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentation',
          items: [
            {label: 'Was ist Oh My Pi?', to: '/docs/einstieg/was-ist-oh-my-pi'},
            {label: 'Installation', to: '/docs/installation/anleitung'},
            {label: 'Konfiguration', to: '/docs/konfiguration/grundlagen'},
            {label: 'Funktionen', to: '/docs/funktionen/uebersicht'},
          ],
        },
        {
          title: 'Projekt',
          items: [
            {label: 'Offizielle Dokumentation', href: 'https://omp.sh/docs'},
            {label: 'GitHub', href: 'https://github.com/can1357/oh-my-pi'},
            {label: 'Discord', href: 'https://discord.gg/4NMW9cdXZa'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Oh My Pi. Erstellt mit Docusaurus.`,
    },
    prism: {
      theme: monoLightTheme,
      darkTheme: monoDarkTheme,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;