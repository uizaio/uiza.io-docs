# Release Notes

:::: tabs :options="{ useUrlFragment: false }"

::: tab Website
### 3.1.3 (2019-02-07)
- Optimize analytics for live

### 3.1.2 (2019-01-16)
- Optimize analytics
- Fix click callback on mobile browser

### 3.1.1 (2018-12-26)
- Optimize analytics
- Optimize disable feature

### 3.1.0 (2018-12-26)
- Support live DVR

### 3.0.24 (2018-12-21)
- Support trigger: `error`
- Add function: `error`
- Fix fullscreen status for Firefox
- Support disable feature by config: timeshift, fullscreen

### 3.0.23 (2018-12-17)
- Fix click on IE11
- Fix page scrolled after press Space bar on IE11
- Fix duplicate poster

### 3.0.22 (2018-12-12)
- Fix trigger event when one listener registered multi times

### 3.0.21 (2018-12-06)
- Trigger key events: `keydown`, `keypress`, `keyup`
- Support callback value for listeners: `durationchange`, `error`, `fullscreenchange`, `keydown`, `keypress`, `keyup`, `levelchange`, `progress`, `qualitieschange`, `ratechange`, `resize`, `timeupdate` , `volumechange`
- Fix fullscreen status after exit fullscreen (by press ESC)
- Fix trigger fullscreenchange after exit fullscreen (by press ESC)

### 3.0.20 (2018-11-26)
- Fix off function

### 3.0.19 (2018-11-21)
- Support toggle fullscreen when double click (only advance code)
- Request poster/thumbnail from https instead of http

### 3.0.18 (2018-11-19)
- Fix duplicate function onUizaIframeAPIReady

### 3.0.17 (2018-11-16)
- Polyfill the prepend instead of update innerHTML
- Restrict the player which initialized from local html

### 3.0.16 (2018-11-15)
- Fix DOM prepend

### 3.0.15 (2018-11-12)
- Trigger mouse events: `click`, `contextmenu`, `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mouseup`
- Support multiple listener
- Change document.title to entity' name
:::

::: tab iOS
### Version 6.8.8 (Jan 15 2019)
- [Fixed] unable to set livestream camera position on initialization
- [Fixed] duplicate function name might cause build error

### Version 6.8.7 (Jan 09 2019)
- [Fixed] fix audioBitrate metadata push in livestream library

### Version 6.8.6 (Jan 04 2019)
- [Fixed] unable to drag-to-minimize player after showing an alert

### Version 6.8.5 (Jan 03 2019)
- [Updated] player will keep pausing when back from background state. For auto resume, set this: 
``` swift
player.autoResumeWhenBackFromBackground = true
```

### Version 6.8.4 (Dec 28 2018)
- [Updated] able to disable/enable floating mode by setting: 
``` swift
floatingPlayerViewController.floatingHandler.isEnabled = true/false
```

### Version 6.8.3 (Dec 26 2018)
- [Updated] change message when live ended directly with 
``` swift
playerViewController.liveEndedMessage
```

### Version 6.8.2 (Dec 21 2018)
- [Updated] show message when live video has ended.

### Version 6.8 (Dec 18 2018)
- [New] use pod 'UizaSDK_8' to install SDK for project with deployment target from 8.x
Please note that this SDK does not support:
- Google Cast
- Google Ads IMA
- Picture in Picture
- Buffer duration adjustment
- Future updates like DRM, video download etc..

### Version 6.7 (Dec 17 2018)
- [Fix] Set custom LiveStreamUIView did not catch button events
- [Update] Downgrade minumum development target to iOS 9.x

### Version 6.6.5 (Dec 12 2018)
- [Update] more supports for customizing UZLiveStreamViewController, now you can customize videoConfiguration and audioConfiguration (see example)

### Version 6.6.4 (Dec 04 2018)
- [Update] able to drag the floating video out of screen to dismiss
- [Fix] UZFloatingPlayerViewController did not dismiss properly.

### Version 6.6.1 (Nov 30 2018)
- [Update] toggle timeshift for live video:
``` swift
playerController.controlView.enableTimeShiftForLiveVideo = true/false
```

### Version 6.6 (Nov 26 2018)
- [Update] Able to dock floating video to screen corners
``` swift
floatingPlayerViewController.floatingHandler.allowsCornerDocking = true
```

### Version 6.5.3 (Nov 23 2018)
- [Fix] Invalid logging URL
- [Update] Timeshift for live video
- [Update] Better support for setting custom playerViewController for UZFloatingPlayerViewController

### Version 6.5 (Oct 25 2018)
- [New] UZFloatingPlayerViewController to present player with drag down to floating mode gesture. 

### Version 6.4.4 (Oct 25 2018)
- [Fixed] Show endscreen unexpectedly when seeking after the player has ended a movie

### Version 6.4.2 (Oct 14 2018)
- [Fixed] IMA Ads did not work
- [Fixed] Player config loading not work

### Version 6.4 (Oct 14 2018)
- [New] Supports IMA Ads 

### Version 6.3.9 (Oct 08 2018)
- [Updated] New linkplay for Staging enviroment 

### Version 6.3.8 (Oct 04 2018)
- [Fixed] Unable to change progress color for custom time slider 

### Version 6.3.7 (Oct 01 2018)
- More supports for overriding UZPlayer

### Version 6.3.6 (Sep 27 2018)
- Supports overriding UZPlayer

### Version 6.3 (Sep 23 2018)

- Supports XCode 10, Swift 4.2
- New UZThemeConfig to fetch player config from workspace
``` swift
player.loadConfigId(configId: [CONFIG_ID])
```
:::

::: tab Android
### 3.2.5 (2019-1-28)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:3.2.5'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:3.2.5'

- UZVideo removed onStart() and onStop().
- Optimize mini player.
- Optimize Muiza tracking.

### 3.2.3 (2019-1-18)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:3.2.3'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:3.2.3'

- Update icon launcher.
- Iplm ping HeartBeat.
- Add func [set size](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/fb/MiniPlayerSettingActivity.java#L319) of mini player.
- Add func make mini player [appear/disappear](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/fb/MiniPlayerSettingActivity.java#L241)
- Add func make mini player switch to full-player by [tapping.](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/fb/MiniPlayerSettingActivity.java#L255)
### 3.1.9 (2019-1-14)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:3.1.9'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:3.1.9'

- Add func uzLivestream.stopPreview();
- Add UZAPIMaster.
- Remove BaseActivity and BaseFragment, use AppCompatActivity and Fragment instead.
- Fixed bug divide by zero.
### 3.1.1 (2019-1-4)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:3.1.1'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:3.1.1'

- Add first position config for mini player, check [here](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/fb/MiniPlayerSettingActivity.java#L230).
- Add func set property margin for mini player, check [here](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/fb/MiniPlayerSettingActivity.java#L243).
- Add func control mini player, check [here](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/fb/MiniPlayerSettingActivity.java).

### 3.0.8 (2018-12-27)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:3.0.8'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:3.0.8'

- Update logic livestreaming.
- Add permission draw over other app for mini player.
- Update func [uzVide.onActivityResult();](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/uzv3/UZPlayerActivity.java#L227)
- Update logic mini player.
- Change name of func onClickPipVideoInitSuccess(boolean isInitSuccess) to void onStateMiniPlayer(boolean isInitMiniPlayerSuccess), check [here](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/uzv3/UZPlayerActivity.java#L293).
- Add setting mini player, check [here](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/fb/MiniPlayerSettingActivity.java).
- Add callback onUICreate() for livestreaming, check [here](https://github.com/uizaio/uiza-android-sdk-player/blob/master/samplelivestream/src/main/java/test/loitp/samplelivestream/LivePortraitActivity.java#L371).
- Add func uzLivestream.hideTvLiveStatus().
- Update screen EventActivity help you understand how to use func [uzVideo.addUZLiveContentCallback()](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/event/EventActivity.java#L331).

### 3.0.3 (2018-12-19)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:3.0.3'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:3.0.3'

- Update UZLivestream view.
- Add sample [landscape live broadcaster](https://github.com/uizaio/uiza-android-sdk-player/blob/master/samplelivestream/src/main/java/test/loitp/samplelivestream/LiveLandscapeActivity.java).

### 3.0.0 (2018-12-17)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:3.0.0'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:3.0.0'

- Remove white space when using floating player.
- Update [CustomSkinCodeUZTimebarUTubeWithSlideActivity](https://github.com/uizaio/uiza-android-sdk-player/blob/dev/sample/src/main/java/testlibuiza/sample/v3/utube/CustomSkinCodeUZTimebarUTubeWithSlideActivity.java).
- Add feature [mini player like Facebook]()https://github.com/uizaio/uiza-android-sdk-player/blob/dev/sample/src/main/java/testlibuiza/sample/v3/fb/FBVideoActivity.java).
- Single tap to show/hide controller of mini player


### 2.9.8 (2018-12-10)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:2.9.8'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:2.9.8'

- Change function name uzVideo.setVideoListener() -> uzVideo.addVideoListener().
- Update [screen](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/utube/CustomSkinCodeUZTimebarUTubeActivity.java) custom UI like Youtube without sliding.
- Add [sample](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/utube/CustomSkinCodeUZTimebarUTubeWithSlideActivity.java) custom UI like Youtube with UZTimebar and DraggablePanel. 
- Update screen [EventActivity](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/event/EventActivity.java).
- Update screen [CustomHQActivity](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/customhq/CustomHQActivity.java).

### 2.9.5 (2018-12-5)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:2.9.5'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:2.9.5'

- Fixed auto screen rotation.


### 2.9.3 (2018-12-3)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:2.9.3'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:2.9.3'

- Change id of some components (exo_position -> uz_position, exo_duration -> uz_duration).
- Removed unused resources.
- Iplm DVR, Timeshift (The UZTimebar will be display, user  can seeks in live HLS content).
- Update UI (default skin).
- Fixed uzLivestreamCallback isInitResult() is called more times.

### 2.9.1 (2018-11-30)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:2.9.1'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:2.9.1'

- Add func getVideoFormat().
- Add func getAudioFormat().
- Add func getVideoProfileH().
- Add func getVideoProfileW().
- Add func onVideoSizeChanged().
- Add func setBackgroundColorBkg
- Update sample custom ui like youtube, UZTimeBar.
- Add sample ResizeActivity.
- Change id previewFrameLayout->preview_frame_layout.
- Update func ProgressCallback.
- Iplm DRM fearture.

### 2.8.8 (2018-11-19)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:2.8.8'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:2.8.8'

- Update sample customize skin like [Youtube](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/customskin/CustomSkinCodeUZTimebarUTubeActivity.java).
- Add func `uzVideo.addCallbackUZTimebar();`
- Remove some uzLivestreamCallback in `UZCallback` such as `onClickBack`,  `onClickListEntityRelation`,   `onClickPip`. Use this func `addItemClick();` instead.
- Ex:
- 

    @Override  
    public void onItemClick(View view) {  
        switch (view.getId()) {  
            case R.id.exo_back_screen:  
                //onClick exo_back_screen
                break;  
        }  
    }


### 2.8.6 (2018-11-16)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:2.8.6'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:2.8.6'

- Add func `addAudioListener();`
- Add sample help you know how to listen all event of SDK, [sample here](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/event/EventActivity.java).
- Update some methods name:
+ `setUZCallback` -> `addUZCallback`
+ `setUZTVCallback` -> `addUZTVCallback`
+ `setControllerStateCallback` -> `addControllerStateCallback`
+ `setProgressCallback` -> `addProgressCallback`
+ `setOnTouchEvent` -> `addOnTouchEvent`
+ `hideControllerOnTouch` -> `setHideControllerOnTouch`
- Update sample how to customize skin like [Youtube player](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/customskin/CustomSkinCodeUZTimebarUTubeActivity.java).

### 2.8.2 (2018-11-14)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:2.8.2'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:2.8.2'

- Update default skin.
- Update UI state of `ibRewIcon`, `ibFfwdIcon`.
- Add func let you can set speed of player `uzVideo.setSpeed(value);`
- Add new Speed Button (id `exo_speed`) of player controller, check [here](https://github.com/uizaio/uiza-android-sdk-player/blob/master/uizacoresdk/src/main/res/layout/uz_controller_skin_0.xml) for more details.
- Update sample demo.


### 2.8.0 (2018-11-12)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:2.8.0'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:2.8.0'

- Fixed onFocusChange for AndroidTV, AndroidBox.
- Add func `getHeightUZVideo()` of uzVideo.
- Update sample TV with custom HQ, custom audio view.
- Update sample using UZTimebar.


### 2.7.8 (2018-11-09)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:2.7.8'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:2.7.8'

- Now you can put the UZTimebar on the bottom of the video view, please check this [sample](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/customskin/CustomSkinCodeUZTimebarActivity.java) for more details.
- Fixed func volume toggle.
- Add `onScreenRotate()` in UZCallback.
- Removed some useless components (like volume seekbar, brightness seekbar).
- Update func `setOnTouchEvent()`.
- Add [sample demo volume of video](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/src/main/java/testlibuiza/sample/v3/volume/VolumeActivity.java).
- Add func `uzVideo.setVolumeCallback();`
- Fixed adaptive, uzVideo will be played with best profile based on the device's network.



### 2.7.4 (2018-11-03)

    //for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:2.7.4'
         
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:2.7.4'

- Update func `uzVideo.setProgressCallback(...);`
- Add feature play any custom linkplay (`uzVideo.initLinkPlay(...)`).
- Solved https://github.com/uizaio/uiza-android-sdk-player/issues/47

### 2.7.3 (2018-11-01)

	//for playing video VOD, LIVE  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:2.7.3'
     
    //for live broadcaster  
    implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:2.7.3'

- Update runtime permission for UZLivestream.
- Update error message and error code.
- Update sample.

### 2.7.0 (2018-10-29)

     //for playing video VOD, LIVE  
     implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:2.7.0'
     
     //for live broadcaster  
     implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:2.7.0'

- Refactor all.

### 2.4.7 (2018-10-16)

    implementation 'com.github.uizaio:uiza-android-sdk-player:2.4.7'
- Update logic for Android TV.
- Fixed bugs cannot touch controller components when replay the video.
- Update clearly error message.

### 2.4.6 (2018-10-15)

    implementation 'com.github.uizaio:uiza-android-sdk-player:2.4.6'
- Customize skin for Android TV.
- Update module sampletv.

### 2.4.5 (2018-10-12)

    implementation 'com.github.uizaio:uiza-android-sdk-player:2.4.5'
- Support IMA Ads.
- Support [SnappySmoothScroller](https://github.com/nshmura/SnappySmoothScroller
).
- Fixed bug: onFocusChange if using for Android Box, Android TV.
- Customize skin for Android TV.


### 2.4.3 (2018-10-05)

    implementation 'com.github.uizaio:uiza-android-sdk-player:2.4.3'
- Fixed issue controller playback.


### 2.4.2 (2018-10-02)

    implementation 'com.github.uizaio:uiza-android-sdk-player:2.4.2'
- Fixed mute function.
- Fixed issue controller show time out.

### 2.3.9 (2018-10-02)

    implementation 'com.github.uizaio:uiza-android-sdk-player:2.3.9'
- Add more API for UZVideo.
- Improve performance.


### 2.3.6 (2018-09-28)

    implementation 'com.github.uizaio:uiza-android-sdk-player:2.3.6'
- Add sample custom skin via using code.
- Add more API for UZVideo.

### 2.3.5 (2018-09-27)

    implementation 'com.github.uizaio:uiza-android-sdk-player:2.3.5'

**New Features**
- Support Android TV now (check sample AndroidTV)
- Add sample demo tv
- Public more API of UZVideo.
- Update skin logic.



### 2.3.2 (2018-09-17)

    implementation 'com.github.uizaio:uiza-android-sdk-player:2.3.2'

**New Features**
- Support vector drawable resources for UZImageButton.
- Add attr useDefaultIB for UZImageButton and useDefaultTV  for UZTextView. In xml layout, if you set true, Uiza will calculate size for you. But if you set false, you can customize size as you like.
:::

::: tab "Smart TV HTML5"
### 1.2.1 (2019-01-16)
- Optimize analytics
- Fix playback on Tizen

### 1.2.0 (2018-11-26)
- Support live DVR
:::

::: tab "React Native"
### 0.1.5 (2018-06-08)
- First release
:::