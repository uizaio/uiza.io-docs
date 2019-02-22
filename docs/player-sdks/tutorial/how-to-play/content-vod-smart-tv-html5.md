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