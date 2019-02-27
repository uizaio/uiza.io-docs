module.exports = {
  title: "Docs",
  description: "Docs",
  base: process.env.NODE_ENV === "development" ? "" : "/uiza.io-docs/",
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-include'), './docs');
      const vuepressTabs = require('vuepress-tabs');
      vuepressTabs(md);
    }
  },
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/png', href: '/assets/fav.png' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    logo: "/assets/logo.png",
    nav: [
      {
        text: 'API Reference',
        link: 'https://docs.uiza.io/api/'
      }
    ],
    sidebar: {
      '/': [
        '/',
        '/authentication',
        {
          title: "Player SDKs",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ["/player-sdks/installation/", "Installation"],
            ["/player-sdks/tutorial/", "Tutorial"],
            ["/player-sdks/playback-api/", "Playback API"],
            ["/player-sdks/supported-devices/", "Supported Devices"],
            ["/player-sdks/release-notes/", "Release Notes"],
          ],
        },
        // {
        //   title: "Guideline",
        //   collapsable: false,
        //   sidebarDepth: 2,
        //   children: [
        //     ["/guideline/entity", "Entity"],
        //     ["/guideline/live-streaming", "Live"],
        //     ["/guideline/permisstion", "Permission"],
        //   ],
        // }
      ]
    }
  },
};
