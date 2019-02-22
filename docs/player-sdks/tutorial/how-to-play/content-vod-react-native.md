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