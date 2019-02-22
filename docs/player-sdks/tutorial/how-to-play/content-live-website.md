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