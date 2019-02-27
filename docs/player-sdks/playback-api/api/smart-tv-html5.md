### UZPlayer
**Kind**: global class  

* [UZPlayer](#UZPlayer)
    * [new UZPlayer(selector, options)](#new_UZPlayer_new)
    * [.PlaybackState](#UZPlayer+PlaybackState) : <code>object</code>
        * [.NONE](#UZPlayer+PlaybackState.NONE) : <code>string</code>
        * [.IDLE](#UZPlayer+PlaybackState.IDLE) : <code>string</code>
        * [.READY](#UZPlayer+PlaybackState.READY) : <code>string</code>
        * [.PLAYING](#UZPlayer+PlaybackState.PLAYING) : <code>string</code>
        * [.PAUSED](#UZPlayer+PlaybackState.PAUSED) : <code>string</code>
        * [.WAITING](#UZPlayer+PlaybackState.WAITING) : <code>string</code>
    * [.initVOD(entityId, callback)](#UZPlayer+initVOD)
    * [.initLive(entityId, entityId, entityId, callback)](#UZPlayer+initLive)
    * [.setAutoPlay(value)](#UZPlayer+setAutoPlay)
    * [.getAutoPlay()](#UZPlayer+getAutoPlay) ⇒ <code>boolean</code>
    * [.setCurrentTime([time])](#UZPlayer+setCurrentTime)
    * [.getCurrentTime()](#UZPlayer+getCurrentTime) ⇒ <code>number</code>
    * [.destroy()](#UZPlayer+destroy)
    * [.getDuration()](#UZPlayer+getDuration) ⇒ <code>number</code>
    * [.setFullscreen(fullscreen)](#UZPlayer+setFullscreen)
    * [.toggleFullscreen()](#UZPlayer+toggleFullscreen)
    * [.getFullscreen()](#UZPlayer+getFullscreen) ⇒ <code>boolean</code>
    * [.setMute(muted)](#UZPlayer+setMute)
    * [.toggleMute()](#UZPlayer+toggleMute)
    * [.pause()](#UZPlayer+pause)
    * [.play()](#UZPlayer+play)
    * [.setVolume([percentAsDecimal])](#UZPlayer+setVolume)
    * [.getVolume()](#UZPlayer+getVolume) ⇒ <code>number</code>
    * [.setPlayPercentage([percentage])](#UZPlayer+setPlayPercentage)
    * [.getPlayPercentage()](#UZPlayer+getPlayPercentage) ⇒ <code>number</code>
    * [.getPlaybackState()](#UZPlayer+getPlaybackState) ⇒ [<code>PlaybackState</code>](#UZPlayer+PlaybackState)
    * [.bufferedPercent()](#UZPlayer+bufferedPercent) ⇒ <code>number</code>
    * [.qualities()](#UZPlayer+qualities) ⇒ <code>array</code>
    * [.getCurrentLevel()](#UZPlayer+getCurrentLevel) ⇒ <code>number</code> \| <code>undefined</code>
    * [.setCurrentLevel([level])](#UZPlayer+setCurrentLevel)
    * [.onEnded(callback)](#UZPlayer+onEnded)
    * [.onError(callback)](#UZPlayer+onError)
    * [.onFullscreen(callback)](#UZPlayer+onFullscreen)
    * [.onLoad(callback)](#UZPlayer+onLoad)
    * [.onPause(callback)](#UZPlayer+onPause)
    * [.onPlay(callback)](#UZPlayer+onPlay)
    * [.onPlaybackState(callback)](#UZPlayer+onPlaybackState)
    * [.onVolume(callback)](#UZPlayer+onVolume)
    * [.onWaiting(callback)](#UZPlayer+onWaiting)
    * [.onQualities(callback)](#UZPlayer+onQualities)
    * [.onLevel(callback)](#UZPlayer+onLevel)

<a name="new_UZPlayer_new"></a>

### new UZPlayer(selector, options)
Create an player by selector of element

**Returns**: [<code>UZPlayer</code>](#UZPlayer) - Returns a `UZPlayer` object  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | Selector of element tag. |
| options | <code>object</code> | [Configuration](./tutorial-Configuration.html) |

<a name="UZPlayer+PlaybackState"></a>

### uzPlayer.PlaybackState : <code>object</code>
The player playback state

**Kind**: instance namespace of [<code>UZPlayer</code>](#UZPlayer)  

* [.PlaybackState](#UZPlayer+PlaybackState) : <code>object</code>
    * [.NONE](#UZPlayer+PlaybackState.NONE) : <code>string</code>
    * [.IDLE](#UZPlayer+PlaybackState.IDLE) : <code>string</code>
    * [.READY](#UZPlayer+PlaybackState.READY) : <code>string</code>
    * [.PLAYING](#UZPlayer+PlaybackState.PLAYING) : <code>string</code>
    * [.PAUSED](#UZPlayer+PlaybackState.PAUSED) : <code>string</code>
    * [.WAITING](#UZPlayer+PlaybackState.WAITING) : <code>string</code>

<a name="UZPlayer+PlaybackState.NONE"></a>

#### PlaybackState.NONE : <code>string</code>
Player is not created

**Kind**: static constant of [<code>PlaybackState</code>](#UZPlayer+PlaybackState)  
<a name="UZPlayer+PlaybackState.IDLE"></a>

#### PlaybackState.IDLE : <code>string</code>
Player is created but not prepared

**Kind**: static constant of [<code>PlaybackState</code>](#UZPlayer+PlaybackState)  
<a name="UZPlayer+PlaybackState.READY"></a>

#### PlaybackState.READY : <code>string</code>
Player is ready to play media

**Kind**: static constant of [<code>PlaybackState</code>](#UZPlayer+PlaybackState)  
<a name="UZPlayer+PlaybackState.PLAYING"></a>

#### PlaybackState.PLAYING : <code>string</code>
Player is playing media

**Kind**: static constant of [<code>PlaybackState</code>](#UZPlayer+PlaybackState)  
<a name="UZPlayer+PlaybackState.PAUSED"></a>

#### PlaybackState.PAUSED : <code>string</code>
Player is paused

**Kind**: static constant of [<code>PlaybackState</code>](#UZPlayer+PlaybackState)  
<a name="UZPlayer+PlaybackState.WAITING"></a>

#### PlaybackState.WAITING : <code>string</code>
Player is waiting (buffering)

**Kind**: static constant of [<code>PlaybackState</code>](#UZPlayer+PlaybackState)  
<a name="UZPlayer+initVOD"></a>

### uzPlayer.initVOD(entityId, callback)
Call initialize VOD.

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| entityId | <code>string</code> | The entityId |
| callback | <code>function</code> | The callback function |

<a name="UZPlayer+initLive"></a>

### uzPlayer.initLive(entityId, entityId, entityId, callback)
Call initialize VOD.

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| entityId | <code>string</code> | The entityId |
| entityId | <code>string</code> | The streamName |
| entityId | <code>string</code> | The region |
| callback | <code>function</code> | The callback function |

<a name="UZPlayer+setAutoPlay"></a>

### uzPlayer.setAutoPlay(value)
Set the autoplay attribute.

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | The new value:        - true means that we should autoplay        - false means that we should not autoplay |

<a name="UZPlayer+getAutoPlay"></a>

### uzPlayer.getAutoPlay() ⇒ <code>boolean</code>
Get the autoplay attribute.

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**Returns**: <code>boolean</code> - The current value of autoplay when getting  
<a name="UZPlayer+setCurrentTime"></a>

### uzPlayer.setCurrentTime([time])
Set the current time in seconds

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>number</code> | Time for seek to |

<a name="UZPlayer+getCurrentTime"></a>

### uzPlayer.getCurrentTime() ⇒ <code>number</code>
Get the current time in seconds

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**Returns**: <code>number</code> - returns the current time when getting  
<a name="UZPlayer+destroy"></a>

### uzPlayer.destroy()
Turn off all event, clear the `UZPlayer` properties

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
<a name="UZPlayer+getDuration"></a>

### uzPlayer.getDuration() ⇒ <code>number</code>
Get the duration in seconds

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**Returns**: <code>number</code> - Returns the duration  
<a name="UZPlayer+setFullscreen"></a>

### uzPlayer.setFullscreen(fullscreen)
Set fullscreen to on/off

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| fullscreen | <code>boolean</code> | Set fullscreen        - true enter fullscreen        - false exit fullscreen |

<a name="UZPlayer+toggleFullscreen"></a>

### uzPlayer.toggleFullscreen()
Toggle fullscreen to on/off

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
<a name="UZPlayer+getFullscreen"></a>

### uzPlayer.getFullscreen() ⇒ <code>boolean</code>
Check if the player is in fullscreen mode

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**Returns**: <code>boolean</code> - true if fullscreen is on and getting; false if fullscreen is off and getting  
<a name="UZPlayer+setMute"></a>

### uzPlayer.setMute(muted)
Turn mute on or off

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| muted | <code>boolean</code> | Turn mute on or off:        - true to mute        - false to unmute |

<a name="UZPlayer+toggleMute"></a>

### uzPlayer.toggleMute()
Toggle muted state to on/off

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
<a name="UZPlayer+pause"></a>

### uzPlayer.pause()
Pause media playback

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
<a name="UZPlayer+play"></a>

### uzPlayer.play()
Start media playback

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
<a name="UZPlayer+setVolume"></a>

### uzPlayer.setVolume([percentAsDecimal])
Set the current volume of the media

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| [percentAsDecimal] | <code>number</code> | The new volume as a decimal percent:         - 0 is muted/0%/off         - 1.0 is 100%/full         - 0.5 is half volume or 50% |

<a name="UZPlayer+getVolume"></a>

### uzPlayer.getVolume() ⇒ <code>number</code>
Get the current volume of the media

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**Returns**: <code>number</code> - The current volume as a percent when getting  
<a name="UZPlayer+setPlayPercentage"></a>

### uzPlayer.setPlayPercentage([percentage])
Set the play percentage of the media

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| [percentage] | <code>number</code> | The new percentage, in range 0~100:         - 0 is seek to 0%         - 10 is seek to 10%         - ... |

<a name="UZPlayer+getPlayPercentage"></a>

### uzPlayer.getPlayPercentage() ⇒ <code>number</code>
Get the play percentage of the media

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**Returns**: <code>number</code> - The play percentage when getting, in range 0~100  
<a name="UZPlayer+getPlaybackState"></a>

### uzPlayer.getPlaybackState() ⇒ [<code>PlaybackState</code>](#UZPlayer+PlaybackState)
Get the current playback state of the media

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**Returns**: [<code>PlaybackState</code>](#UZPlayer+PlaybackState) - The current current playback state when getting  
<a name="UZPlayer+bufferedPercent"></a>

### uzPlayer.bufferedPercent() ⇒ <code>number</code>
Get the percent (as a decimal) of the video that's been downloaded

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**Returns**: <code>number</code> - 0 means none, 1 means all.  
<a name="UZPlayer+qualities"></a>

### uzPlayer.qualities() ⇒ <code>array</code>
Get the video qualites

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**Returns**: <code>array</code> - - Array of object which have key `label` to display  
<a name="UZPlayer+getCurrentLevel"></a>

### uzPlayer.getCurrentLevel() ⇒ <code>number</code> \| <code>undefined</code>
Get the level of video quality

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**Returns**: <code>number</code> \| <code>undefined</code> - returns the current level of video quality when getting  
<a name="UZPlayer+setCurrentLevel"></a>

### uzPlayer.setCurrentLevel([level])
Set the level of video quality

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| [level] | <code>number</code> | Level to change |

<a name="UZPlayer+onEnded"></a>

### uzPlayer.onEnded(callback)
Callback when the end of the media resource is reached.

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function |

<a name="UZPlayer+onError"></a>

### uzPlayer.onError(callback)
Callback when playback error

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function |

<a name="UZPlayer+onFullscreen"></a>

### uzPlayer.onFullscreen(callback)
Callback when fullscreen state changed

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function |

<a name="UZPlayer+onLoad"></a>

### uzPlayer.onLoad(callback)
Callback when the player start to load media

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function |

<a name="UZPlayer+onPause"></a>

### uzPlayer.onPause(callback)
Callback when playback changed to PAUSED

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**See**: UZPlayer#PlaybackState  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function |

<a name="UZPlayer+onPlay"></a>

### uzPlayer.onPlay(callback)
Callback when playback changed to PLAYING

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**See**: UZPlayer#PlaybackState  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function |

<a name="UZPlayer+onPlaybackState"></a>

### uzPlayer.onPlaybackState(callback)
Callback when playback changed

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**See**: UZPlayer#PlaybackState  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function |

<a name="UZPlayer+onVolume"></a>

### uzPlayer.onVolume(callback)
Callback when volume changed

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function |

<a name="UZPlayer+onWaiting"></a>

### uzPlayer.onWaiting(callback)
Callback when playback changed to WAITING

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  
**See**: UZPlayer#PlaybackState  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function |

<a name="UZPlayer+onQualities"></a>

### uzPlayer.onQualities(callback)
Callback when the list qualities of video change

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function |

<a name="UZPlayer+onLevel"></a>

### uzPlayer.onLevel(callback)
Callback when the video quality change manualy

**Kind**: instance method of [<code>UZPlayer</code>](#UZPlayer)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function |

