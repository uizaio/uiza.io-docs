var UZPlayer = {
  /**
   * Create an player by selector of element
   *
   * @class UZPlayer
   *
   * @param {string} selector
   *        Selector of element tag.
   * 
   * @param {object} options
   *        [Configuration](./tutorial-Configuration.html)
   *
   * @return {UZPlayer}
   *        Returns a `UZPlayer` object
   */
  constructor: function(selector, options) {}
};

Object.assign(UZPlayer.prototype, /** @lends UZPlayer.prototype */ {
  /**
   * The player playback state
   * @namespace
   */
  PlaybackState: {
    /** Player is not created 
     * 
     * @constant
     * @type {string}
    */
    NONE: 'NONE',
    /** Player is created but not prepared
     * 
     * @constant
     * @type {string}
    */
    IDLE: 'IDLE',
    /** Player is ready to play media
     * 
     * @constant
     * @type {string}
    */
    READY: 'READY',
    /** Player is playing media
     * 
     * @constant
     * @type {string}
    */
    PLAYING: 'PLAYING',
    /** Player is paused
     * 
     * @constant
     * @type {string}
    */
    PAUSED: 'PAUSED',
    /** Player is waiting (buffering)
     * 
     * @constant
     * @type {string}
    */
    WAITING: 'WAITING'
  },
  /**
   * Call initialize VOD.
   *
   * @param {string} entityId
   *        The entityId
   * @param {function} callback
   *        The callback function
   */
  initVOD: function (entityId, callback) {},
  /**
   * Call initialize VOD.
   *
   * @param {string} entityId
   *        The entityId
   * @param {string} entityId
   *        The streamName
   * @param {string} entityId
   *        The region
   * @param {function} callback
   *        The callback function
   */
  initLive: function (entityId, streamName, region, callback) {},
  /**
   * Set the autoplay attribute.
   *
   * @param {boolean} value
   *        The new value:
   *        - true means that we should autoplay
   *        - false means that we should not autoplay
   */
  setAutoPlay: function (value) {},
  /**
   * Get the autoplay attribute.
   *
   * @return {boolean}
   *        The current value of autoplay when getting
   */
  getAutoPlay: function () {},
  /**
   * Set the current time in seconds
   *
   * @param {number} [time]
   *        Time for seek to
   */
  setCurrentTime: function (time) {},
  /**
   * Get the current time in seconds
   *
   * @return {number}
   *         returns the current time when getting
   */
  getCurrentTime: function () {},
  /**
   * Turn off all event, clear the `UZPlayer` properties
   */
  destroy: function () {},
  /**
   * Get the duration in seconds
   *
   * @return {number}
   *         Returns the duration
   */
  getDuration: function () {},
  /**
   * Set fullscreen to on/off
   *
   * @param {boolean} fullscreen
   *        Set fullscreen
   *        - true enter fullscreen
   *        - false exit fullscreen
   */
  setFullscreen: function (fullscreen) {},
  /**
   * Toggle fullscreen to on/off
   */
  toggleFullscreen: function() {},
  /**
   * Check if the player is in fullscreen mode
   *
   * @return {boolean}
   *         true if fullscreen is on and getting; false if fullscreen is off and getting
   */
  getFullscreen: function () {},
  /**
   * Turn mute on or off
   *
   * @param {boolean} muted
   *        Turn mute on or off:
   *        - true to mute
   *        - false to unmute
   */
  setMute: function () {muted},
  /**
   * Get the current muted state
   *
   * @return {boolean}
   *         true if mute is on and getting; false if mute is off and getting
   */
  /**
   * Toggle muted state to on/off
   */
  toggleMute: function() {},
  getMute: function () {},
  /**
   * Pause media playback
   */
  pause: function () {},
  /**
   * Start media playback
   */
  play: function () {},
  /**
   * Set the current volume of the media
   *
   * @param  {number} [percentAsDecimal]
   *         The new volume as a decimal percent:
   *         - 0 is muted/0%/off
   *         - 1.0 is 100%/full
   *         - 0.5 is half volume or 50%
   */
  setVolume: function () {},
  /**
   * Get the current volume of the media
   *
   * @return {number}
   *         The current volume as a percent when getting
   */
  getVolume: function () {},
  /**
   * Set the play percentage of the media
   *
   * @param  {number} [percentage]
   *         The new percentage, in range 0~100:
   *         - 0 is seek to 0%
   *         - 10 is seek to 10%
   *         - ...
   */
  setPlayPercentage: function () {},
  /**
   * Get the play percentage of the media
   *
   * @return {number}
   *         The play percentage when getting, in range 0~100
   */
  getPlayPercentage: function () {},
  /**
   * Get the current playback state of the media
   *
   * @return {UZPlayer#PlaybackState}
   *         The current current playback state when getting
   */
  getPlaybackState: function () {},
  /**
   * Get the percent (as a decimal) of the video that's been downloaded
   *
   * @return {number}
   *         0 means none, 1 means all.
   */
  bufferedPercent: function () {},
  /**
   * Callback when current time changed.
   *
   * @param {function} callback
   *        The callback function
   */
  /**
   * Get the video qualites
   *
   * @return {array}
   *         - Array of object which have key `label` to display
   */
  qualities: function () {},
  /**
   * Get the level of video quality
   *
   * @return {number|undefined}
   *         returns the current level of video quality when getting
   */
  getCurrentLevel: function (time) {},
  /**
   * Set the level of video quality
   *
   * @param {number} [level]
   *        Level to change
   */
  setCurrentLevel: function (time) {},
  onCurrentTime: function (callback) {},
  /**
   * Callback when the end of the media resource is reached.
   *
   * @param {function} callback
   *        The callback function
   */
  onEnded: function (callback) {},
  /**
   * Callback when playback error
   *
   * @param {function} callback
   *        The callback function
   */
  onError: function (callback) {},
  /**
   * Callback when fullscreen state changed
   *
   * @param {function} callback
   *        The callback function
   */
  onFullscreen: function (callback) {},
  /**
   * Callback when the player start to load media
   *
   * @param {function} callback
   *        The callback function
   */
  onLoad: function (callback) {},
  /**
   * Callback when playback changed to PAUSED
   *
   * @see UZPlayer#PlaybackState
   * 
   * @param {function} callback
   *        The callback function
   */
  onPause: function (callback) {},
  /**
   * Callback when playback changed to PLAYING
   * 
   * @see UZPlayer#PlaybackState
   *
   * @param {function} callback
   *        The callback function
   */
  onPlay: function (callback) {},
  /**
   * Callback when playback changed
   * 
   * @see UZPlayer#PlaybackState
   *
   * @param {function} callback
   *        The callback function
   */
  onPlaybackState: function (callback) {},
  /**
   * Callback when volume changed
   *
   * @param {function} callback
   *        The callback function
   */
  onVolume: function (callback) {},
  /**
   * Callback when playback changed to WAITING
   * 
   * @see UZPlayer#PlaybackState
   *
   * @param {function} callback
   *        The callback function
   */
  onWaiting: function (callback) {},
  /**
   * Callback when the list qualities of video change
   *
   * @param {function} callback
   *        The callback function
   */
  onQualities: function (callback) {},
  /**
   * Callback when the video quality change manualy
   *
   * @param {function} callback
   *        The callback function
   */
  onLevel: function (callback) {},
});
