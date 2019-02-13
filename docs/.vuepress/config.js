module.exports = {
  title: "Uiza Documentation",
  description: "Uiza Documentation",
  base: process.env.NODE_ENV === "development" ? "" : "/uiza.io-docs/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: "/assets/logo.png",
    sidebar: [
      {
        title: "Player SDKs",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ["/player-sdks/tutorial/", "Tutorial"],
          ["/player-sdks/playback-api/", "Playback API"],
          ["/player-sdks/supported-devices/", "Supported Devices"],
          ["/player-sdks/release-notes/", "Release Notes"],
        ],
      },
      {
        title: "API Reference",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ["/api-reference/introduction", "Introduction"],
          ["/api-reference/authentication", "Authentication"],
          ["/api-reference/user-managerment", "User Managerment"],
          ["/api-reference/entity", "Entity"],
          ["/api-reference/category", "Category"],
          ["/api-reference/storage", "Storage"],
          ["/api-reference/live-streaming", "Live Streaming"],
          ["/api-reference/callback", "Callback"],
          ["/api-reference/analytic", "Analytic"],
          ["/api-reference/embed-metadata", "Embed Metadata"],
          ["/api-reference/errors-code", "Errors Code"],
        ],
      },
    ],
  },
};
