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
/** Demo project on Github:
/*    https://github.com/uizaio/uiza-react-native-app-demo/tree/v3
**/
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import  UZPlayer from '@uiza/uiza-sdk-player-react-native';
import { Dimensions, Platform } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let self = this;

    this.listenerVod = {
      onReady: function() { console.log('onReady call'); },
      onLoad: function() { console.log('onLoad call'); },
      onLoaded: function(evt) { console.log('onLoaded call', evt); },
      onFullscreenChange: function(evt) { console.log('onLoaded call', evt); },
      onPlaybackChange: function(evt) { console.log('onLoaded call', evt); },
      onError: function(evt) { console.log('onLoaded call', evt); },
    };
  }

  render() {
    const api = 'BASE64_YOUR_API';
    const token = 'YOUR_TOKEN';
    const appId = 'YOUR_APP_ID';

    // vod config
    const entityIdVod = 'YOUR_VOD_ENTITY_ID';

    return (
      <SafeAreaView style={styles.container}>
        <Text style={{marginTop: isAndroid()? 0 : isIphoneX()? 0 : 20}}>This is VOD demo</Text>
        <UZPlayer
          debug={true}
          token={token}
          api={api}
          appId={appId}
          stream='vod'
          entityId={entityIdVod}
          style={styles.player}
          ref={
            component => {
              this.playerVod = component;
            }
          }
          listener={this.listenerVod}
          playerId={playerId}
        />
      </SafeAreaView>
    );
  }
}

export const isIphoneX = () => {
  let d = Dimensions.get('window');
  const { height, width } = d;

  return (
    // This has to be iOS duh
    Platform.OS === 'ios' &&

    // Accounting for the height in either orientation
    (height === 812 || width === 812)
  );
}

export const isAndroid = () => {
  let d = Dimensions.get('window');
  return (
    // This has to be iOS duh
    Platform.OS === 'android'
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'steelblue',
  },
  player: {
    width: '100%',
    height: '33%',
    backgroundColor: 'black',
  },
  description: {
    flex: 1,
    padding: 10,
  },
});
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
/** Demo project on Github:
/*    https://github.com/uizaio/uiza-react-native-app-demo/tree/v3
**/
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import  UZPlayer from '@uiza/uiza-sdk-player-react-native';
import { Dimensions, Platform } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let self = this;

    this.listenerLive = {
      onReady: function() { },
      onLoad: function() { },
      onLoaded: function(evt) { },
      onFullscreenChange: function(evt) { },
      onPlaybackChange: function(evt) { },
      onError: function(evt) { },
    };
  }

  render() {
    const api = 'BASE64_YOUR_API';
    const token = 'YOUR_TOKEN';
    const appId = 'YOUR_APP_ID';

    // live config
    const entityIdLive = 'YOUR_LIVE_ENTITY_ID';
    const feedId = 'YOUR_FEED_ID';
    const streamName = 'YOUR_STREAM_NAME';
    const region = 'YOUR_REGION';
    const playerId = 'YOUR_PLAYER_ID';

    return (
      <SafeAreaView style={styles.container}>
        <Text style={{marginTop: isAndroid()? 0 : isIphoneX()? 0 : 20}}>This is Live demo</Text>
        <UZPlayer
          token={token}
          api={api}
          appId={appId}
          stream='live'
          entityId={entityIdLive}
          feedId={feedId}
          streamName={streamName}
          region={region}
          style={styles.player}
          ref={
            component => {
              this.playerLive = component;
            }
          }
          listener={this.listenerLive}
          playerId={playerId}
        />
      </SafeAreaView>
    );
  }
}

export const isIphoneX = () => {
  let d = Dimensions.get('window');
  const { height, width } = d;

  return (
    // This has to be iOS duh
    Platform.OS === 'ios' &&

    // Accounting for the height in either orientation
    (height === 812 || width === 812)
  );
}

export const isAndroid = () => {
  let d = Dimensions.get('window');
  return (
    // This has to be iOS duh
    Platform.OS === 'android'
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'steelblue',
  },
  player: {
    width: '100%',
    height: '33%',
    backgroundColor: 'black',
  },
  description: {
    flex: 1,
    padding: 10,
  },
});
```
:::

::::

</div>