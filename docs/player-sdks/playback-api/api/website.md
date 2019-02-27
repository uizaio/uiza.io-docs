### UZ : <code>object</code>
__Namespace UZ is an object__

**Kind**: global namespace  

* [UZ](#UZ) : <code>object</code>
    * _instance_
        * [.ERROR](#UZ+ERROR) : <code>object</code>
            * [.RESTRICTED](#UZ+ERROR.RESTRICTED) : <code>string</code>
            * [.MEDIA_INFO_IS_INCORRECT](#UZ+ERROR.MEDIA_INFO_IS_INCORRECT) : <code>string</code>
            * [.LIVE_INFO_IS_INCORRECT](#UZ+ERROR.LIVE_INFO_IS_INCORRECT) : <code>string</code>
            * [.ABORTED_THE_MEDIA_PLAYBACK](#UZ+ERROR.ABORTED_THE_MEDIA_PLAYBACK) : <code>string</code>
            * [.THE_MEDIA_DOWNLOAD_TO_FAIL_PART_WAY](#UZ+ERROR.THE_MEDIA_DOWNLOAD_TO_FAIL_PART_WAY) : <code>string</code>
            * [.THE_MEDIA_COUND_NOT_BE_LOADED](#UZ+ERROR.THE_MEDIA_COUND_NOT_BE_LOADED) : <code>string</code>
            * [.THE_MEDIA_PLAYBACK_WAS_ABORTED](#UZ+ERROR.THE_MEDIA_PLAYBACK_WAS_ABORTED) : <code>string</code>
            * [.NO_COMPATIBLE_SOURCE](#UZ+ERROR.NO_COMPATIBLE_SOURCE) : <code>string</code>
            * [.THE_MEDIA_IS_ENCRYPTED](#UZ+ERROR.THE_MEDIA_IS_ENCRYPTED) : <code>string</code>
    * _static_
        * [.Player](#UZ.Player)
            * [new Player(id)](#new_UZ.Player_new)
            * [.iframe](#UZ.Player+iframe) : <code>Element</code>
            * [.addRemoteTextTrack(options)](#UZ.Player+addRemoteTextTrack) ⇒ <code>HTMLTrackElement</code>
            * [.aspectRatio([ratio])](#UZ.Player+aspectRatio) ⇒ <code>string</code> \| <code>undefined</code>
            * [.autoplay([value])](#UZ.Player+autoplay) ⇒ <code>string</code>
            * [.bufferedPercent()](#UZ.Player+bufferedPercent) ⇒ <code>number</code>
            * [.canPlayType(type)](#UZ.Player+canPlayType) ⇒ <code>string</code>
            * [.controls([bool])](#UZ.Player+controls) ⇒ <code>boolean</code>
            * [.currentLevel([level])](#UZ.Player+currentLevel) ⇒ <code>number</code> \| <code>undefined</code>
            * [.currentTime([time])](#UZ.Player+currentTime) ⇒ <code>number</code> \| <code>undefined</code>
            * [.dispose()](#UZ.Player+dispose)
            * [.duration()](#UZ.Player+duration) ⇒ <code>number</code> \| <code>undefined</code>
            * [.error()](#UZ.Player+error) ⇒ <code>MediaError</code> \| <code>null</code>
            * [.enterFullWindow()](#UZ.Player+enterFullWindow)
            * [.exitFullscreen()](#UZ.Player+exitFullscreen)
            * [.exitFullWindow()](#UZ.Player+exitFullWindow)
            * [.height([value])](#UZ.Player+height) ⇒ <code>number</code>
            * [.isFullscreen([isFS])](#UZ.Player+isFullscreen) ⇒ <code>boolean</code>
            * [.language([code])](#UZ.Player+language) ⇒ <code>string</code>
            * [.load()](#UZ.Player+load)
            * [.loop([value])](#UZ.Player+loop) ⇒ <code>string</code>
            * [.muted([muted])](#UZ.Player+muted) ⇒ <code>boolean</code>
            * [.off(type, fn)](#UZ.Player+off)
            * [.on(type, fn)](#UZ.Player+on)
            * [.pause()](#UZ.Player+pause) ⇒ <code>Player</code>
            * [.paused()](#UZ.Player+paused) ⇒ <code>boolean</code>
            * [.play()](#UZ.Player+play) ⇒ <code>Promise</code> \| <code>undefined</code>
            * [.playbackRate([rate])](#UZ.Player+playbackRate) ⇒ <code>number</code>
            * [.playsinline([value])](#UZ.Player+playsinline) ⇒ <code>string</code> \| <code>Player</code>
            * [.poster([src])](#UZ.Player+poster) ⇒ <code>string</code>
            * [.preload([value])](#UZ.Player+preload) ⇒ <code>string</code>
            * [.qualities()](#UZ.Player+qualities) ⇒ <code>array</code>
            * [.remainingTime()](#UZ.Player+remainingTime) ⇒ <code>number</code>
            * [.requestFullscreen()](#UZ.Player+requestFullscreen)
            * [.reset()](#UZ.Player+reset)
            * [.src([source])](#UZ.Player+src) ⇒ <code>string</code> \| <code>undefined</code>
            * [.volume([percentAsDecimal])](#UZ.Player+volume) ⇒ <code>number</code>
            * [.width([value])](#UZ.Player+width) ⇒ <code>number</code>

<a name="UZ+ERROR"></a>

### uZ.ERROR : <code>object</code>
The player playback state

**Kind**: instance namespace of [<code>UZ</code>](#UZ)  

* [.ERROR](#UZ+ERROR) : <code>object</code>
    * [.RESTRICTED](#UZ+ERROR.RESTRICTED) : <code>string</code>
    * [.MEDIA_INFO_IS_INCORRECT](#UZ+ERROR.MEDIA_INFO_IS_INCORRECT) : <code>string</code>
    * [.LIVE_INFO_IS_INCORRECT](#UZ+ERROR.LIVE_INFO_IS_INCORRECT) : <code>string</code>
    * [.ABORTED_THE_MEDIA_PLAYBACK](#UZ+ERROR.ABORTED_THE_MEDIA_PLAYBACK) : <code>string</code>
    * [.THE_MEDIA_DOWNLOAD_TO_FAIL_PART_WAY](#UZ+ERROR.THE_MEDIA_DOWNLOAD_TO_FAIL_PART_WAY) : <code>string</code>
    * [.THE_MEDIA_COUND_NOT_BE_LOADED](#UZ+ERROR.THE_MEDIA_COUND_NOT_BE_LOADED) : <code>string</code>
    * [.THE_MEDIA_PLAYBACK_WAS_ABORTED](#UZ+ERROR.THE_MEDIA_PLAYBACK_WAS_ABORTED) : <code>string</code>
    * [.NO_COMPATIBLE_SOURCE](#UZ+ERROR.NO_COMPATIBLE_SOURCE) : <code>string</code>
    * [.THE_MEDIA_IS_ENCRYPTED](#UZ+ERROR.THE_MEDIA_IS_ENCRYPTED) : <code>string</code>

<a name="UZ+ERROR.RESTRICTED"></a>

#### ERROR.RESTRICTED : <code>string</code>
Message: The video you are trying to watch cannot be viewed because of domain restrictions

**Kind**: static constant of [<code>ERROR</code>](#UZ+ERROR)  
<a name="UZ+ERROR.MEDIA_INFO_IS_INCORRECT"></a>

#### ERROR.MEDIA\_INFO\_IS\_INCORRECT : <code>string</code>
Message: The media stream could not be loaded, because the media info is incorrect.

**Kind**: static constant of [<code>ERROR</code>](#UZ+ERROR)  
<a name="UZ+ERROR.LIVE_INFO_IS_INCORRECT"></a>

#### ERROR.LIVE\_INFO\_IS\_INCORRECT : <code>string</code>
Message: The live stream could not be loaded, because the live info is incorrect.

**Kind**: static constant of [<code>ERROR</code>](#UZ+ERROR)  
<a name="UZ+ERROR.ABORTED_THE_MEDIA_PLAYBACK"></a>

#### ERROR.ABORTED\_THE\_MEDIA\_PLAYBACK : <code>string</code>
Message: You aborted the media playback

**Kind**: static constant of [<code>ERROR</code>](#UZ+ERROR)  
<a name="UZ+ERROR.THE_MEDIA_DOWNLOAD_TO_FAIL_PART_WAY"></a>

#### ERROR.THE\_MEDIA\_DOWNLOAD\_TO\_FAIL\_PART\_WAY : <code>string</code>
Message: A network error caused the media download to fail part-way.

**Kind**: static constant of [<code>ERROR</code>](#UZ+ERROR)  
<a name="UZ+ERROR.THE_MEDIA_COUND_NOT_BE_LOADED"></a>

#### ERROR.THE\_MEDIA\_COUND\_NOT\_BE\_LOADED : <code>string</code>
Message: The media could not be loaded, either because the server or network failed or because the format is not supported.

**Kind**: static constant of [<code>ERROR</code>](#UZ+ERROR)  
<a name="UZ+ERROR.THE_MEDIA_PLAYBACK_WAS_ABORTED"></a>

#### ERROR.THE\_MEDIA\_PLAYBACK\_WAS\_ABORTED : <code>string</code>
Message: The media playback was aborted due to a corruption problem or because the media used features your browser did not support.

**Kind**: static constant of [<code>ERROR</code>](#UZ+ERROR)  
<a name="UZ+ERROR.NO_COMPATIBLE_SOURCE"></a>

#### ERROR.NO\_COMPATIBLE\_SOURCE : <code>string</code>
Message: No compatible source was found for this media.

**Kind**: static constant of [<code>ERROR</code>](#UZ+ERROR)  
<a name="UZ+ERROR.THE_MEDIA_IS_ENCRYPTED"></a>

#### ERROR.THE\_MEDIA\_IS\_ENCRYPTED : <code>string</code>
Message: The media is encrypted and we do not have the keys to decrypt it.

**Kind**: static constant of [<code>ERROR</code>](#UZ+ERROR)  
<a name="UZ.Player"></a>

### UZ.Player
**Kind**: static class of [<code>UZ</code>](#UZ)  

* [.Player](#UZ.Player)
    * [new Player(id)](#new_UZ.Player_new)
    * [.iframe](#UZ.Player+iframe) : <code>Element</code>
    * [.addRemoteTextTrack(options)](#UZ.Player+addRemoteTextTrack) ⇒ <code>HTMLTrackElement</code>
    * [.aspectRatio([ratio])](#UZ.Player+aspectRatio) ⇒ <code>string</code> \| <code>undefined</code>
    * [.autoplay([value])](#UZ.Player+autoplay) ⇒ <code>string</code>
    * [.bufferedPercent()](#UZ.Player+bufferedPercent) ⇒ <code>number</code>
    * [.canPlayType(type)](#UZ.Player+canPlayType) ⇒ <code>string</code>
    * [.controls([bool])](#UZ.Player+controls) ⇒ <code>boolean</code>
    * [.currentLevel([level])](#UZ.Player+currentLevel) ⇒ <code>number</code> \| <code>undefined</code>
    * [.currentTime([time])](#UZ.Player+currentTime) ⇒ <code>number</code> \| <code>undefined</code>
    * [.dispose()](#UZ.Player+dispose)
    * [.duration()](#UZ.Player+duration) ⇒ <code>number</code> \| <code>undefined</code>
    * [.error()](#UZ.Player+error) ⇒ <code>MediaError</code> \| <code>null</code>
    * [.enterFullWindow()](#UZ.Player+enterFullWindow)
    * [.exitFullscreen()](#UZ.Player+exitFullscreen)
    * [.exitFullWindow()](#UZ.Player+exitFullWindow)
    * [.height([value])](#UZ.Player+height) ⇒ <code>number</code>
    * [.isFullscreen([isFS])](#UZ.Player+isFullscreen) ⇒ <code>boolean</code>
    * [.language([code])](#UZ.Player+language) ⇒ <code>string</code>
    * [.load()](#UZ.Player+load)
    * [.loop([value])](#UZ.Player+loop) ⇒ <code>string</code>
    * [.muted([muted])](#UZ.Player+muted) ⇒ <code>boolean</code>
    * [.off(type, fn)](#UZ.Player+off)
    * [.on(type, fn)](#UZ.Player+on)
    * [.pause()](#UZ.Player+pause) ⇒ <code>Player</code>
    * [.paused()](#UZ.Player+paused) ⇒ <code>boolean</code>
    * [.play()](#UZ.Player+play) ⇒ <code>Promise</code> \| <code>undefined</code>
    * [.playbackRate([rate])](#UZ.Player+playbackRate) ⇒ <code>number</code>
    * [.playsinline([value])](#UZ.Player+playsinline) ⇒ <code>string</code> \| <code>Player</code>
    * [.poster([src])](#UZ.Player+poster) ⇒ <code>string</code>
    * [.preload([value])](#UZ.Player+preload) ⇒ <code>string</code>
    * [.qualities()](#UZ.Player+qualities) ⇒ <code>array</code>
    * [.remainingTime()](#UZ.Player+remainingTime) ⇒ <code>number</code>
    * [.requestFullscreen()](#UZ.Player+requestFullscreen)
    * [.reset()](#UZ.Player+reset)
    * [.src([source])](#UZ.Player+src) ⇒ <code>string</code> \| <code>undefined</code>
    * [.volume([percentAsDecimal])](#UZ.Player+volume) ⇒ <code>number</code>
    * [.width([value])](#UZ.Player+width) ⇒ <code>number</code>

<a name="new_UZ.Player_new"></a>

#### new Player(id)
Create an player by id of iframe

**Returns**: <code>Player</code> - Returns a `Player` object  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Id of iframe tag. |

<a name="UZ.Player+iframe"></a>

#### player.iframe : <code>Element</code>
The iframe DOM element used for init options

**Kind**: instance property of [<code>Player</code>](#UZ.Player)  
<a name="UZ.Player+addRemoteTextTrack"></a>

#### player.addRemoteTextTrack(options) ⇒ <code>HTMLTrackElement</code>
Create an emulated TextTrack for use by addRemoteTextTrack

This is intended to be overridden by classes that inherit from
Tech in order to create native or custom TextTracks.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>HTMLTrackElement</code> - The track element that gets created.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The object should contain the options to initialize the TextTrack with. |
| [options.kind] | <code>string</code> | `TextTrack` kind (subtitles, captions, descriptions, chapters, or metadata). |
| [options.label] | <code>string</code> | Label to identify the text track |
| [options.language] | <code>string</code> | Two letter language abbreviation. |

<a name="UZ.Player+aspectRatio"></a>

#### player.aspectRatio([ratio]) ⇒ <code>string</code> \| <code>undefined</code>
A getter/setter for the `Player`'s aspect ratio.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>string</code> \| <code>undefined</code> - - The current aspect ratio of the `Player` when getting.
        - undefined when setting  

| Param | Type | Description |
| --- | --- | --- |
| [ratio] | <code>string</code> | The value to set the `Player's aspect ratio to. |

<a name="UZ.Player+autoplay"></a>

#### player.autoplay([value]) ⇒ <code>string</code>
Get or set the autoplay attribute.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>string</code> - The current value of autoplay when getting  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>boolean</code> | - true means that we should autoplay        - false means that we should not autoplay |

<a name="UZ.Player+bufferedPercent"></a>

#### player.bufferedPercent() ⇒ <code>number</code>
Get the percent (as a decimal) of the video that's been downloaded

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>number</code> - 0 means none, 1 means all.  
<a name="UZ.Player+canPlayType"></a>

#### player.canPlayType(type) ⇒ <code>string</code>
Check whether the player can play a given mimetype

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>string</code> - 'probably', 'maybe', or '' (empty string)  
**See**: https://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-navigator-canplaytype  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The mimetype to check |

<a name="UZ.Player+controls"></a>

#### player.controls([bool]) ⇒ <code>boolean</code>
Get or set whether or not the controls are showing.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>boolean</code> - The current value of controls when getting  
**Emits**: <code>Player#event:controlsenabled</code>  

| Param | Type | Description |
| --- | --- | --- |
| [bool] | <code>boolean</code> | - true to turn controls on        - false to turn controls off |

<a name="UZ.Player+currentLevel"></a>

#### player.currentLevel([level]) ⇒ <code>number</code> \| <code>undefined</code>
Get/Set the level of video quality

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>number</code> \| <code>undefined</code> - returns the current level of video quality when getting  

| Param | Type | Description |
| --- | --- | --- |
| [level] | <code>number</code> | Level to change |

<a name="UZ.Player+currentTime"></a>

#### player.currentTime([time]) ⇒ <code>number</code> \| <code>undefined</code>
Get/Set the current time

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>number</code> \| <code>undefined</code> - returns the current time when getting  

| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>string</code> | Time for seek to |

<a name="UZ.Player+dispose"></a>

#### player.dispose()
Turn off all event polyfills, clear the `Player`s properties

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Emits**: <code>Player#event:dispose</code>  
<a name="UZ.Player+duration"></a>

#### player.duration() ⇒ <code>number</code> \| <code>undefined</code>
Get the duration

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>number</code> \| <code>undefined</code> - returns the duration  
<a name="UZ.Player+error"></a>

#### player.error() ⇒ <code>MediaError</code> \| <code>null</code>
Get an error on the player.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>MediaError</code> \| <code>null</code> - The current error object on the player, or null if there isn't one.  
<a name="UZ.Player+enterFullWindow"></a>

#### player.enterFullWindow()
When fullscreen isn't supported we can stretch the
video container to as wide as the browser will let us.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Emits**: <code>Player#event:enterFullWindow</code>  
<a name="UZ.Player+exitFullscreen"></a>

#### player.exitFullscreen()
Return the video to its normal size after having been in full screen mode

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Emits**: <code>Player#event:fullscreenchange</code>  
<a name="UZ.Player+exitFullWindow"></a>

#### player.exitFullWindow()
Exit full window

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Emits**: <code>Player#event:exitFullWindow</code>  
<a name="UZ.Player+height"></a>

#### player.height([value]) ⇒ <code>number</code>
A getter/setter for the `Player`'s height. Returns the player's configured value.
To get the current height use `currentheight()`.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>number</code> - The current height of the `Player` when getting.  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>number</code> | The value to set the `Player`'s heigth to. |

<a name="UZ.Player+isFullscreen"></a>

#### player.isFullscreen([isFS]) ⇒ <code>boolean</code>
Check if the player is in fullscreen mode or tell the player that it
is or is not in fullscreen mode.

> NOTE: As of the latest HTML5 spec, isFullscreen is no longer an official
property and instead document.fullscreenElement is used. But isFullscreen is
still a valuable property for internal player workings.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>boolean</code> - - true if fullscreen is on and getting
        - false if fullscreen is off and getting  

| Param | Type | Description |
| --- | --- | --- |
| [isFS] | <code>boolean</code> | Set the players current fullscreen state |

<a name="UZ.Player+language"></a>

#### player.language([code]) ⇒ <code>string</code>
The player's language code
NOTE: The language should be set in the player options if you want the
the controls to be built with a specific language. Changing the lanugage
later will not update controls text.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>string</code> - The current language code when getting  

| Param | Type | Description |
| --- | --- | --- |
| [code] | <code>string</code> | the language code to set the player to |

<a name="UZ.Player+load"></a>

#### player.load()
Begin loading the src data.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
<a name="UZ.Player+loop"></a>

#### player.loop([value]) ⇒ <code>string</code>
Get or set the loop attribute on the video element.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>string</code> - The current value of loop when getting  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>boolean</code> | - true means that we should loop the video        - false means that we should not loop the video |

<a name="UZ.Player+muted"></a>

#### player.muted([muted]) ⇒ <code>boolean</code>
Get the current muted state, or turn mute on or off

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>boolean</code> - - true if mute is on and getting
        - false if mute is off and getting  

| Param | Type | Description |
| --- | --- | --- |
| [muted] | <code>boolean</code> | - true to mute        - false to unmute |

<a name="UZ.Player+off"></a>

#### player.off(type, fn)
Removes an `event listener` for a specific event from an instance of `Player`.
This makes it so that the `event listener` will no longer get called when the
named event happens.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> \| <code>Array.&lt;string&gt;</code> | An event name or an array of event names. |
| fn | <code>EventListener</code> | The function to remove. |

<a name="UZ.Player+on"></a>

#### player.on(type, fn)
Adds an `event listener` to an instance of an `Player`. An `event listener` is a
function that will get called when an event with a certain name gets triggered.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**See**

- [Ad events](./tutorial-Ad%20Event.html)
- [Player events](./tutorial-Player%20Event.html)


| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> \| <code>Array.&lt;string&gt;</code> | An event name or an array of event names. |
| fn | <code>EventListener</code> | The function to call. |

<a name="UZ.Player+pause"></a>

#### player.pause() ⇒ <code>Player</code>
Pause the video playback

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>Player</code> - A reference to the player object this function was called on  
<a name="UZ.Player+paused"></a>

#### player.paused() ⇒ <code>boolean</code>
Check if the player is paused or has yet to play

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>boolean</code> - - false: if the media is currently playing
        - true: if media is not currently playing  
<a name="UZ.Player+play"></a>

#### player.play() ⇒ <code>Promise</code> \| <code>undefined</code>
start media playback

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>Promise</code> \| <code>undefined</code> - Returns a `Promise` if the browser returns one, for most browsers this will
        return undefined.  
<a name="UZ.Player+playbackRate"></a>

#### player.playbackRate([rate]) ⇒ <code>number</code>
Gets or sets the current playback rate. A playback rate of
1.0 represents normal speed and 0.5 would indicate half-speed
playback, for instance.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>number</code> - The current playback rate when getting or 1.0  
**See**: https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-playbackrate  

| Param | Type | Description |
| --- | --- | --- |
| [rate] | <code>number</code> | New playback rate to set. |

<a name="UZ.Player+playsinline"></a>

#### player.playsinline([value]) ⇒ <code>string</code> \| <code>Player</code>
Set or unset the playsinline attribute.
Playsinline tells the browser that non-fullscreen playback is preferred.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>string</code> \| <code>Player</code> - - the current value of playsinline
        - the player when setting  
**See**: [Spec](https://html.spec.whatwg.org/#attr-video-playsinline)  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>boolean</code> | - true means that we should try to play inline by default        - false means that we should use the browser's default playback mode,          which in most cases is inline. iOS Safari is a notable exception          and plays fullscreen by default. |

<a name="UZ.Player+poster"></a>

#### player.poster([src]) ⇒ <code>string</code>
Get or set the poster image source url

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>string</code> - The current value of poster when getting  
**Emits**: <code>Player#event:posterchange</code>  

| Param | Type | Description |
| --- | --- | --- |
| [src] | <code>string</code> | Poster image source URL |

<a name="UZ.Player+preload"></a>

#### player.preload([value]) ⇒ <code>string</code>
Get or set the preload attribute

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>string</code> - The preload attribute value when getting  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>boolean</code> | - true means that we should preload        - false maens that we should not preload |

<a name="UZ.Player+qualities"></a>

#### player.qualities() ⇒ <code>array</code>
Get the video qualites

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>array</code> - - Array of object which have key `label` to display  
<a name="UZ.Player+remainingTime"></a>

#### player.remainingTime() ⇒ <code>number</code>
Calculates how much time is left in the video. Not part
of the native video API.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>number</code> - The time remaining in seconds  
<a name="UZ.Player+requestFullscreen"></a>

#### player.requestFullscreen()
Increase the size of the video to full screen
In some browsers, full screen is not supported natively, so it enters
"full window mode", where the video fills the browser window.
In browsers and devices that support native full screen, sometimes the
browser's default controls will be shown, and not the Video.js custom skin.
This includes most mobile devices (iOS, Android) and older versions of
Safari.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Emits**: <code>Player#event:fullscreenchange</code>  
<a name="UZ.Player+reset"></a>

#### player.reset()
Reset the player. Loads the first tech in the techOrder,
and calls `reset` on the tech`.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
<a name="UZ.Player+src"></a>

#### player.src([source]) ⇒ <code>string</code> \| <code>undefined</code>
Get or set the video source.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>string</code> \| <code>undefined</code> - If the `source` argument is missing, returns the current source
        URL. Otherwise, returns nothing/undefined.  

| Param | Type | Description |
| --- | --- | --- |
| [source] | <code>Tech~SourceObject</code> \| <code>Array.&lt;Tech~SourceObject&gt;</code> \| <code>string</code> | A SourceObject, an array of SourceObjects, or a string referencing        a URL to a media source. It is _highly recommended_ that an object        or array of objects is used here, so that source selection        algorithms can take the `type` into account.        If not provided, this method acts as a getter. |

<a name="UZ.Player+volume"></a>

#### player.volume([percentAsDecimal]) ⇒ <code>number</code>
Get or set the current volume of the media

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>number</code> - The current volume as a percent when getting  

| Param | Type | Description |
| --- | --- | --- |
| [percentAsDecimal] | <code>number</code> | The new volume as a decimal percent:         - 0 is muted/0%/off         - 1.0 is 100%/full         - 0.5 is half volume or 50% |

<a name="UZ.Player+width"></a>

#### player.width([value]) ⇒ <code>number</code>
A getter/setter for the `Player`'s width. Returns the player's configured value.
To get the current width use `currentWidth()`.

**Kind**: instance method of [<code>Player</code>](#UZ.Player)  
**Returns**: <code>number</code> - The current width of the `Player` when getting.  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>number</code> | The value to set the `Player`'s width to. |

