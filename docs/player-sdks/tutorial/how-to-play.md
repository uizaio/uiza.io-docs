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
``` html
<!DOCTYPE html>
<html>
  <body>
    <!-- 1. Include UIZA library. -->
    <script src='https://sdk.uiza.io/uizaplayer.js'></script>

    <!-- 2. The video player will prepend the player into this <div> tag. You should create css style for this tag -->
    <div id='player'></div>

    <script>
      // 3. This code creates an UIZA player, and return the player for the callback
      UZ.Player.init(
        '#player', // player element, exp: #element_id, .element_class
        {
          api: btoa('YOUR_DOMAIN_API'),
          appId: 'YOUR_APP_ID',
          playerId: 'YOUR_PLAYER_ID', // option
          playerVersion: 3, // you are using the newest player, the version is: 3
          entityId: 'YOUR_ENTITY_ID',
          width: '100%', // player width, percentage or pixel, exp: '400px'
          height: '100%', // player height, percentage or pixel, exp: '200px'
        },
        function(player) {
          // 4. You can add logo at here
          // 5. You can add event listeners at here
          player.on('play', function() {
            console.log('play');
          });
          player.on('pause', function() {
            console.log('pause');
          });
        }
      );
    </script>
  </body>
</html>
```
:::

::: tab iOS
``` swift
// swift
```
:::

::: tab Android
``` java
// java
```
:::

::: tab "Smart TV HTML5"
``` javascript
// javascript
```
:::

::: tab "React Native"
``` javascript
// javascript
```
:::

::::

</div>

<span block="nav-live">&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:;" onclick="if(this.querySelector('.glyphicon').classList.contains('glyphicon-plus')){this.querySelector('.glyphicon').classList.remove('glyphicon-plus');this.querySelector('.glyphicon').classList.add('glyphicon-minus');document.querySelector('[block=\'how-to-play-live\']').style.display='block';document.querySelectorAll('pre.source')[0].style.display='block';}else{this.querySelector('.glyphicon').classList.remove('glyphicon-minus');this.querySelector('.glyphicon').classList.add('glyphicon-plus');document.querySelector('[block=\'how-to-play-live\']').style.display='none';document.querySelectorAll('pre.source')[0].style.display='none';}return false;"><span class="glyphicon glyphicon-plus" style="font-size:12px"></span> Live</a></span>

<div block="how-to-play-live">

:::: tabs :options="{ useUrlFragment: false }"

::: tab Website
``` html
<!DOCTYPE html>
<html>
  <body>
    <!-- 1. Include UIZA library. -->
    <script src='https://sdk.uiza.io/uizaplayer.js'></script>

    <!-- 2. The video player will prepend the player into this <div> tag. You should create css style for this tag -->
    <div id='player'></div>

    <script>
      // 3. This code creates an UIZA player, and return the player for the callback
      UZ.Player.init(
        '#player', // player element, exp: #element_id, .element_class
        {
          api: btoa('YOUR_DOMAIN_API'),
          appId: 'YOUR_APP_ID',
          playerId: 'YOUR_PLAYER_ID', // option
          playerVersion: 3, // you are using the newest player, the version is: 3
          entityId: 'YOUR_ENTITY_ID',
          streamName: 'YOUR_STREAM_NAME',
          feedId: 'YOUR_FEED_ID',
          region: 'YOUR_REGION',
          width: '100%', // player width, percentage or pixel, exp: '400px'
          height: '100%', // player height, percentage or pixel, exp: '200px'
        },
        function(player) {
          // 4. You can add logo at here
          // 5. You can add event listeners at here
          player.on('play', function() {
            console.log('play');
          });
          player.on('pause', function() {
            console.log('pause');
          });
        }
      );
    </script>
  </body>
</html>
```
:::

::: tab iOS
``` swift
// swift
```
:::

::: tab Android
``` java
// java
```
:::

::: tab "Smart TV HTML5"
``` javascript
// javascript
```
:::

::: tab "React Native"
``` javascript
// javascript
```
:::

::::

</div>