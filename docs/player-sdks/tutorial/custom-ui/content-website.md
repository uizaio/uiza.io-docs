``` html
<!-- Use configuration from the dashboard -->

<!-- Custom by code: -->
<!DOCTYPE html>
<html>
  <body>
    <!-- Include UIZA library. -->
    <script src='https://sdk.uiza.io/uizaplayer.js'></script>

    <!-- The video player will prepend the player into this <div> tag. You should create css style for this tag -->
    <div id='player'>
      <!-- You can define any HTML tag into here and create css style for those as your UI -->
      <div class='controls'>
        <div class='button' onclick='/*do something with player playback API*/'>Play/Pause</div>
        <div class='button' onclick='/*do something with player playback API*/'>On/Off fullscreen</div>
        <!-- and more... -->
      </div>
    </div>

    <script>
      // This code creates an UIZA player without controls, and return the player for the callback
      UZ.Player.init(
        '#player', // player element, exp: #element_id, .element_class
        {
          api: btoa('YOUR_DOMAIN_API'),
          appId: 'YOUR_APP_ID',
          playerVersion: 3, // you are using the newest player, the version is: 3
          entityId: 'YOUR_ENTITY_ID',
          width: '100%', // player width, percentage or pixel, exp: '400px'
          height: '100%', // player height, percentage or pixel, exp: '200px'
          controls: false, // to hide the player's controls
        },
        function(player) {
          // You can add event listeners at here
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