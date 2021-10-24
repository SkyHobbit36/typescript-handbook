/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Карманная книга по TypeScript',
  tagline:
    'TypeScript - наиболее популярный на сегодняшний день "статический типизатор" для JavaScript. В настоящее время использование TypeScript в проектах фактически является стандартом веб-разработки',
  url: 'https://typescript-handbook.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/64.png',
  organizationName: 'harryheman', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Карманная книга по TypeScript',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Введение'
        },
        {
          type: 'doc',
          docId: 'ts-1',
          position: 'left',
          label: 'Основы'
        },
        {
          type: 'doc',
          docId: 'ts-2',
          position: 'left',
          label: 'Типы на каждый день'
        },
        {
          type: 'doc',
          docId: 'ts-3',
          position: 'left',
          label: 'Сужение типов'
        },
        {
          type: 'doc',
          docId: 'ts-4',
          position: 'left',
          label: 'Подробнее о функциях'
        },
        {
          type: 'doc',
          docId: 'ts-5',
          position: 'left',
          label: 'Объектные типы'
        },
        {
          type: 'doc',
          docId: 'ts-6',
          position: 'left',
          label: 'Манипуляции с типами'
        },
        {
          type: 'doc',
          docId: 'ts-7',
          position: 'left',
          label: 'Классы'
        },
        {
          type: 'doc',
          docId: 'ts-8',
          position: 'left',
          label: 'Модули'
        },
        {
          href: 'https://habr.com/ru/company/macloud/blog/559902/',
          label: 'Habr',
          position: 'right'
        },
        {
          href: 'https://github.com/harryheman/React-Total/blob/main/md/ts.md',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Ссылки',
          items: [
            {
              label: 'Habr',
              to: 'https://habr.com/ru/company/macloud/blog/559902/'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/harryheman/React-Total/blob/main/md/ts.md'
            }
          ]
        }
      ],
      copyright: `Разработал <a href="https://github.com/harryheman">Игорь Агапов</a> с помощью <a href="https://docusaurus.io/">Docusaurus</a>. Опубликовано на <a href="https://www.netlify.com/">Netlify</a> &copy; ${new Date().getFullYear()}`
    },
    gtag: {
      trackingID: 'G-B7FNCMHY81'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/harryheman/React-Total/blob/main/md/ts.md'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString'
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png'
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json' // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#3c3c3c'
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#3c3c3c'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/logo.png'
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.png',
            color: '#3c3c3c'
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/logo.png'
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#3c3c3c'
          }
        ]
      }
    ]
  ]
}
