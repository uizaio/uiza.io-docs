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
<!DOCTYPE html>
<html>
  <head>
    <!-- 1. Include Smart TV library: webapis -->
    <!-- This library only for Tizen -->
    <script type='application/javascript' src='$WEBAPIS/webapis/webapis.js'></script>
    <!-- This library only for webOS -->
    <script type='application/javascript' src='./webOSTVjs-1.0.0/webOSTV.js'></script>
    <!-- 2. UIZA library -->
    <script type='application/javascript' src="https://sdk.uiza.io/sdk-smart-tv-html5/uizaplayer.js"></script>
  </head>
  <body>
    <!-- 3. The Uiza SDK will prepend the player into this tag. You should create css style for this tag -->
    <div id='playerVOD' class='player'>
      <!-- 4. You can add cutom UI into here -->
      <div class='controls'>
        <!-- some html tag of UI  -->
      </div>
    </div>
    
    <script type='application/javascript'>
      (function() {
        window.playerVOD = new UZPlayer('#playerVOD', {
          api: btoa('YOUR_API_DOMAIN'),
          appId: 'YOU_APP_ID'
        });
        
        playerVOD.initVOD('YOUR_ENTITY_ID', function(player) {
          window.console.log('playerVOD on ready: ', player);
        });

        playerVOD.onCurrentTime(function(currentTime){
          console.log('onCurrentTime: ' + currentTime + ' / ' + playerVOD.getDuration());
        });
        playerVOD.onEnded(function(){
          console.log('onEnded');
        });
        playerVOD.onError(function(){
          console.log('onError');
        });
        playerVOD.onFullscreen(function(fullscreen){
          console.log('onFullscreen: ', fullscreen);
        });
        playerVOD.onLoad(function(){
          console.log('onLoad');
        });
        playerVOD.onPause(function(){
          console.log('onPause');
        });
        playerVOD.onPlay(function(){
          console.log('onPlay');
        });
        playerVOD.onWaiting(function(){
          console.log('onWaiting');
        });
        playerVOD.onPlaybackState(function(playbackState){
          console.log('onPlaybackState: ', playbackState);
        });
        playerVOD.onVolume(function(volume){
          console.log('onVolume: ', volume);
        });

        // You should handle keyboard/remote kere
        window.addEventListener('keydown', function(evt) {
          window.console.log('keydown: ', evt);
          // do something
        });
      })();
    </script>
  </body>
</html>
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
<!DOCTYPE html>
<html>
  <head>
    <!-- 1. Include Smart TV library: webapis -->
    <!-- This library only for Tizen -->
    <script type='application/javascript' src='$WEBAPIS/webapis/webapis.js'></script>
    <!-- This library only for webOS -->
    <script type='application/javascript' src='./webOSTVjs-1.0.0/webOSTV.js'></script>
    <!-- 2. UIZA library -->
    <script type='application/javascript' src="https://sdk.uiza.io/sdk-smart-tv-html5/uizaplayer.js"></script>
  </head>
  <body>
    <!-- 3. The Uiza SDK will prepend the player into this tag. You should create css style for this tag -->
    <div id='playerLive' class='player'>
      <!-- 4. You can add cutom UI into here -->
      <div class='controls'>
        <!-- some html tag of UI  -->
      </div>
    </div>
    
    <script type='application/javascript'>
      (function() {
        window.playerLive = new UZPlayer('#playerLive', {
          api: btoa('YOUR_API_DOMAIN'),
          appId: 'YOU_APP_ID'
        });
        
        playerLive.initLive('YOUR_ENTITY_ID',
          'YOUR_STREAM_NAME',
          'YOUR_REGION',
          function(player) {
            window.console.log('playerLive on ready: ', player);
        });

        playerLive.onCurrentTime(function(currentTime){
          console.log('onCurrentTime: ' + currentTime);
        });
        playerLive.onEnded(function(){
          console.log('onEnded');
        });
        playerLive.onError(function(){
          console.log('onError');
        });
        playerLive.onFullscreen(function(fullscreen){
          console.log('onFullscreen: ', fullscreen);
        });
        playerLive.onLoad(function(){
          console.log('onLoad');
        });
        playerLive.onWaiting(function(){
          console.log('onWaiting');
        });
        playerLive.onPlaybackState(function(playbackState){
          console.log('onPlaybackState: ', playbackState);
        });
        playerLive.onVolume(function(volume){
          console.log('onVolume: ', volume);
        });

        // You should handle keyboard/remote kere
        window.addEventListener('keydown', function(evt) {
          window.console.log('keydown: ', evt);
          // do something
        });
      })();
    </script>
  </body>
</html>
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