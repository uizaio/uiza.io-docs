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