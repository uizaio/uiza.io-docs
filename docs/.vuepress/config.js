module.exports = {
  title: "documentation",
  description: "Uiza Player Documentation",
  base: process.env.NODE_ENV === "development" ? "" : "/uiza.io-docs/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: "/assets/logo.png",
    sidebar: [
      {
        title: "API Reference",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ["/api-reference/introduction", "Introduction"],
          ["/api-reference/authentication", "Authentication"],
        ],
      },
      {
        title: "Player SDKs",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ["/player-sdks/website", "Website"],
          ["/player-sdks/android", "Android"],
          ["/player-sdks/ios", "iOS"],
          ["/player-sdks/react-native", "React Native"],
          ["/player-sdks/smart-tv", "Smart TV HTML5"],
        ],
      },
    ],
  },
};
