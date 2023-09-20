/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Symphony',
  tagline:
    'An open source, serverless runtime for adding real-time collaborative functionality to web applications',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://symphony-collaboration.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'symphony-collaboration', // Usually your GitHub org/user name.
  projectName: 'symphony-collaboration.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: "https://rsms.me/inter/inter.css",
      },
    },
  ],

  scripts: [
    {
      src: '/js/demo.js',
      async: true,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Serve docs at /my-doc instead of /docs/my-doc
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'img/og.jpg',
      metadata: [
        { name: 'og:title', content: 'Symphony' },
        { name: 'og:url', content: 'https://symphony-collaboration.github.io/' },
        { name: 'og:image', content: 'hl' },
        { name: 'og:type', content: 'website' },
        {
          name: 'og:image:alt',
          content:
            'Symphony logo and tagline: An open source, serverless runtime for building real-time collaborative web applications',
        },
        {
          name: 'og:description',
          content:
            'An open source, serverless runtime for building real-time collaborative web applications',
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Symphony',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          width: 130,
        },
        items: [
          {
            type: 'doc',
            position: 'right',
            docId: 'case-study',
            label: 'Case Study',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiDocsSidebar',
            position: 'right',
            label: 'Docs',
          },
          {
            href: 'https://github.com/symphony-collaboration/symphony',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
