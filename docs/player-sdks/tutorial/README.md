# Tutorial

## Ads
  <!-- include(player-sdks/tutorial/ads.md) -->
  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab Website
  !!!include(player-sdks/tutorial/ads/content-website.md)!!!
  :::

  ::: tab iOS
  !!!include(player-sdks/tutorial/ads/content-ios.md)!!!
  :::

  ::: tab Android
  !!!include(player-sdks/tutorial/ads/content-android.md)!!!
  :::

  ::: tab "Smart TV HTML5"
  !!!include(player-sdks/tutorial/ads/content-smart-tv-html5.md)!!!
  :::

  ::: tab "React Native"
  !!!include(player-sdks/tutorial/ads/content-react-native.md)!!!
  :::

  ::::

## Autoplay
  <!-- include(player-sdks/tutorial/autoplay.md) -->
  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab Website
  !!!include(player-sdks/tutorial/autoplay/content-website.md)!!!
  :::

  ::: tab iOS
  !!!include(player-sdks/tutorial/autoplay/content-ios.md)!!!
  :::

  ::: tab Android
  !!!include(player-sdks/tutorial/autoplay/content-android.md)!!!
  :::

  ::: tab "Smart TV HTML5"
  !!!include(player-sdks/tutorial/autoplay/content-smart-tv-html5.md)!!!
  :::

  ::: tab "React Native"
  !!!include(player-sdks/tutorial/autoplay/content-react-native.md)!!!
  :::

  ::::

## Custom UI
  <!-- include(player-sdks/tutorial/custom-ui.md) -->
  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab Website
  !!!include(player-sdks/tutorial/custom-ui/content-website.md)!!!
  :::

  ::: tab iOS
  !!!include(player-sdks/tutorial/custom-ui/content-ios.md)!!!
  :::

  ::: tab Android
  !!!include(player-sdks/tutorial/custom-ui/content-android.md)!!!
  :::

  ::: tab "Smart TV HTML5"
  !!!include(player-sdks/tutorial/custom-ui/content-smart-tv-html5.md)!!!
  :::

  ::: tab "React Native"
  !!!include(player-sdks/tutorial/custom-ui/content-react-native.md)!!!
  :::

  ::::

## How To Play
  <!-- include(player-sdks/tutorial/how-to-play/README.md) -->
  <style>
    .glyphicon {
      position: relative;
      top: -1px;
      display: inline-block;
      font-style: normal;
      font-weight: bold;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .glyphicon-plus:before {
      content: "\002b";
    }
    .glyphicon-minus:before {
      content: "\2212";
    }
    [block="how-to-play-vod"],
    [block="how-to-play-live"] {
      display: none;
    }
  </style>

  <span block="nav-vod">&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:;" onclick="if(this.querySelector('.glyphicon').classList.contains('glyphicon-plus')){this.querySelector('.glyphicon').classList.remove('glyphicon-plus');this.querySelector('.glyphicon').classList.add('glyphicon-minus');document.querySelector('[block=\'how-to-play-vod\']').style.display='block';document.querySelectorAll('pre.source')[0].style.display='block';}else{this.querySelector('.glyphicon').classList.remove('glyphicon-minus');this.querySelector('.glyphicon').classList.add('glyphicon-plus');document.querySelector('[block=\'how-to-play-vod\']').style.display='none';document.querySelectorAll('pre.source')[0].style.display='none';}return false;"><span class="glyphicon glyphicon-plus" style="font-size:12px"></span> VOD</a></span>

  <div block="how-to-play-vod">

  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab Website
  !!!include(player-sdks/tutorial/how-to-play/content-vod-website.md)!!!
  :::

  ::: tab iOS
  !!!include(player-sdks/tutorial/how-to-play/content-vod-ios.md)!!!
  :::

  ::: tab Android
  !!!include(player-sdks/tutorial/how-to-play/content-vod-android.md)!!!
  :::

  ::: tab "Smart TV HTML5"
  !!!include(player-sdks/tutorial/how-to-play/content-vod-smart-tv-html5.md)!!!
  :::

  ::: tab "React Native"
  !!!include(player-sdks/tutorial/how-to-play/content-vod-react-native.md)!!!
  :::

  ::::

  </div>

  <span block="nav-live">&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:;" onclick="if(this.querySelector('.glyphicon').classList.contains('glyphicon-plus')){this.querySelector('.glyphicon').classList.remove('glyphicon-plus');this.querySelector('.glyphicon').classList.add('glyphicon-minus');document.querySelector('[block=\'how-to-play-live\']').style.display='block';document.querySelectorAll('pre.source')[0].style.display='block';}else{this.querySelector('.glyphicon').classList.remove('glyphicon-minus');this.querySelector('.glyphicon').classList.add('glyphicon-plus');document.querySelector('[block=\'how-to-play-live\']').style.display='none';document.querySelectorAll('pre.source')[0].style.display='none';}return false;"><span class="glyphicon glyphicon-plus" style="font-size:12px"></span> Live</a></span>

  <div block="how-to-play-live">

  :::: tabs :options="{ useUrlFragment: false }"

  ::: tab Website
  !!!include(player-sdks/tutorial/how-to-play/content-live-website.md)!!!
  :::

  ::: tab iOS
  !!!include(player-sdks/tutorial/how-to-play/content-live-ios.md)!!!
  :::

  ::: tab Android
  !!!include(player-sdks/tutorial/how-to-play/content-live-android.md)!!!
  :::

  ::: tab "Smart TV HTML5"
  !!!include(player-sdks/tutorial/how-to-play/content-live-smart-tv-html5.md)!!!
  :::

  ::: tab "React Native"
  !!!include(player-sdks/tutorial/how-to-play/content-live-react-native.md)!!!
  :::

  ::::

  </div>