``` javascript
// Use configuration from the dashboard

// And custom ads:
var options = {
  ads: [
    {
      time: 0, // preroll
      link: [
        "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/",
        "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/other-1",
        "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/other-2"
      ]
    },
    {
      time: 600, // 10 minutes
      link: "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/"
    },
    {
      time: -1, // postroll
      link: "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/"
    }
  ]
},
player.muted(true);
player.autoplay(true);
player.ima3(options);
```