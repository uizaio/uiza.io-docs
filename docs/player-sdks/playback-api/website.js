/**
 * __Namespace UZ is an object__
 *
 * @namespace
 */
var UZ = {
  Player: {
    /**
     * Create an player by id of iframe
     *
     * @memberof UZ
     * @class UZ.Player
     *
     * @param {String} id
     *        Id of iframe tag.
     *
     * @return {Player}
     *        Returns a `Player` object
     */
    constructor: function(id) {}
  }
};

Object.assign(UZ.Player.prototype, /** @lends UZ.Player.prototype */ {
  /**
   * The iframe DOM element used for init options
   * @type {Element}
   */
  iframe: null,
  /**
   * Create an emulated TextTrack for use by addRemoteTextTrack
   *
   * This is intended to be overridden by classes that inherit from
   * Tech in order to create native or custom TextTracks.
   *
   * @param {Object} options
   *        The object should contain the options to initialize the TextTrack with.
   *
   * @param {string} [options.kind]
   *        `TextTrack` kind (subtitles, captions, descriptions, chapters, or metadata).
   *
   * @param {string} [options.label].
   *        Label to identify the text track
   *
   * @param {string} [options.language]
   *        Two letter language abbreviation.
   *
   * @return {HTMLTrackElement}
   *         The track element that gets created.
   */
  addRemoteTextTrack: function (ontions) {},
  /**
   * Get/Set the aspect ratio
   *
   * @param {string} [ratio]
   *        Aspect ratio for player
   *
   * @return {string|undefined}
   *         returns the current aspect ratio when getting
   */

  /**
   * A getter/setter for the `Player`'s aspect ratio.
   *
   * @param {string} [ratio]
   *        The value to set the `Player's aspect ratio to.
   *
   * @return {string|undefined}
   *         - The current aspect ratio of the `Player` when getting.
   *         - undefined when setting
   */
  aspectRatio: function (ratio) {},
  /**
   * Get or set the autoplay attribute.
   *
   * @param {boolean} [value]
   *        - true means that we should autoplay
   *        - false means that we should not autoplay
   *
   * @return {string}
   *         The current value of autoplay when getting
   */
  autoplay: function (value) {},
  /**
   * Get the percent (as a decimal) of the video that's been downloaded
   *
   * @return {number}
   *         0 means none, 1 means all.
   */
  bufferedPercent: function () {},
  /**
   * Check whether the player can play a given mimetype
   *
   * @see https://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-navigator-canplaytype
   *
   * @param {string} type
   *        The mimetype to check
   *
   * @return {string}
   *         'probably', 'maybe', or '' (empty string)
   */
  canPlayType: function (type) {},
  /**
   * Get or set whether or not the controls are showing.
   *
   * @fires Player#controlsenabled
   *
   * @param {boolean} [bool]
   *        - true to turn controls on
   *        - false to turn controls off
   *
   * @return {boolean}
   *         The current value of controls when getting
   */
  controls: function () {},
  /**
   * Get/Set the level of video quality
   *
   * @param {number} [level]
   *        Level to change
   *
   * @return {number|undefined}
   *         returns the current level of video quality when getting
   */
  currentLevel: function (time) {},
  /**
   * Get/Set the current time
   *
   * @param {string} [time]
   *        Time for seek to
   *
   * @return {number|undefined}
   *         returns the current time when getting
   */
  currentTime: function (time) {},
  /**
   * Turn off all event polyfills, clear the `Player`s properties
   *
   * @fires Player#dispose
   */
  dispose: function () {},
  /**
   * Get the duration
   *
   * @return {number|undefined}
   *         returns the duration
   */
  duration: function () {},
  /**
   * Get an error on the player.
   *
   * @return {MediaError|null}
   *         The current error object on the player, or null if there isn't one.
   */
  error: function () {},
  /**
   * When fullscreen isn't supported we can stretch the
   * video container to as wide as the browser will let us.
   *
   * @fires Player#enterFullWindow
   */
  enterFullWindow: function () {},
  /**
   * Return the video to its normal size after having been in full screen mode
   *
   * @fires Player#fullscreenchange
   */
  exitFullscreen: function () {},
  /**
   * Exit full window
   *
   * @fires Player#exitFullWindow
   */
  exitFullWindow: function () {},
  /**
   * A getter/setter for the `Player`'s height. Returns the player's configured value.
   * To get the current height use `currentheight()`.
   *
   * @param {number} [value]
   *        The value to set the `Player`'s heigth to.
   *
   * @return {number}
   *         The current height of the `Player` when getting.
   */
  height: function (value) {},
  /**
   * Check if the player is in fullscreen mode or tell the player that it
   * is or is not in fullscreen mode.
   *
   * > NOTE: As of the latest HTML5 spec, isFullscreen is no longer an official
   * property and instead document.fullscreenElement is used. But isFullscreen is
   * still a valuable property for internal player workings.
   *
   * @param  {boolean} [isFS]
   *         Set the players current fullscreen state
   *
   * @return {boolean}
   *         - true if fullscreen is on and getting
   *         - false if fullscreen is off and getting
   */
  isFullscreen: function () {},
  /**
   * The player's language code
   * NOTE: The language should be set in the player options if you want the
   * the controls to be built with a specific language. Changing the lanugage
   * later will not update controls text.
   *
   * @param {string} [code]
   *        the language code to set the player to
   *
   * @return {string}
   *         The current language code when getting
   */
  language: function () {},
  /**
   * Begin loading the src data.
   */
  load: function () {},
  /**
   * Get or set the loop attribute on the video element.
   *
   * @param {boolean} [value]
   *        - true means that we should loop the video
   *        - false means that we should not loop the video
   *
   * @return {string}
   *         The current value of loop when getting
   */
  loop: function () {},
  /**
   * Get the current muted state, or turn mute on or off
   *
   * @param {boolean} [muted]
   *        - true to mute
   *        - false to unmute
   *
   * @return {boolean}
   *         - true if mute is on and getting
   *         - false if mute is off and getting
   */
  muted: function () {},
  /**
   * Removes an `event listener` for a specific event from an instance of `Player`.
   * This makes it so that the `event listener` will no longer get called when the
   * named event happens.
   *
   * @param {string|string[]} type
   *        An event name or an array of event names.
   *
   * @param {EventListener} fn
   *        The function to remove.
   */
  off: function (type, fn) {},
  /**
   * Adds an `event listener` to an instance of an `Player`. An `event listener` is a
   * function that will get called when an event with a certain name gets triggered.
   *
   * @see [Ad events](./tutorial-Ad%20Event.html)
   * @see [Player events](./tutorial-Player%20Event.html)
   *
   * @param {string|string[]} type
   *        An event name or an array of event names.
   *
   * @param {EventListener} fn
   *        The function to call.
   */
  on: function () {type, fn},
  /**
   * Pause the video playback
   *
   * @return {Player}
   *         A reference to the player object this function was called on
   */
  pause: function () {},
  /**
   * Check if the player is paused or has yet to play
   *
   * @return {boolean}
   *         - false: if the media is currently playing
   *         - true: if media is not currently playing
   */
  paused: function () {},
  /**
   * start media playback
   *
   * @return {Promise|undefined}
   *         Returns a `Promise` if the browser returns one, for most browsers this will
   *         return undefined.
   */
  play: function () {},
  /**
   * Gets or sets the current playback rate. A playback rate of
   * 1.0 represents normal speed and 0.5 would indicate half-speed
   * playback, for instance.
   *
   * @see https://html.spec.whatwg.org/multipage/embedded-content.html#dom-media-playbackrate
   *
   * @param {number} [rate]
   *       New playback rate to set.
   *
   * @return {number}
   *         The current playback rate when getting or 1.0
   */
  playbackRate: function () {},
  /**
   * Set or unset the playsinline attribute.
   * Playsinline tells the browser that non-fullscreen playback is preferred.
   *
   * @param {boolean} [value]
   *        - true means that we should try to play inline by default
   *        - false means that we should use the browser's default playback mode,
   *          which in most cases is inline. iOS Safari is a notable exception
   *          and plays fullscreen by default.
   *
   * @return {string|Player}
   *         - the current value of playsinline
   *         - the player when setting
   *
   * @see [Spec]{@link https://html.spec.whatwg.org/#attr-video-playsinline}
   */
  playsinline: function (value) {},
  /**
   * Get or set the poster image source url
   *
   * @fires Player#posterchange
   *
   * @param {string} [src]
   *        Poster image source URL
   *
   * @return {string}
   *         The current value of poster when getting
   */
  poster: function () {},
  /**
   * Get or set the preload attribute
   *
   * @param {boolean} [value]
   *        - true means that we should preload
   *        - false maens that we should not preload
   *
   * @return {string}
   *         The preload attribute value when getting
   */
  preload: function () {},
  /**
   * Get the video qualites
   *
   * @return {array}
   *         - Array of object which have key `label` to display
   */
  qualities: function () {},
  /**
   * Calculates how much time is left in the video. Not part
   * of the native video API.
   *
   * @return {number}
   *         The time remaining in seconds
   */
  remainingTime: function () {},
  /**
   * Increase the size of the video to full screen
   * In some browsers, full screen is not supported natively, so it enters
   * "full window mode", where the video fills the browser window.
   * In browsers and devices that support native full screen, sometimes the
   * browser's default controls will be shown, and not the Video.js custom skin.
   * This includes most mobile devices (iOS, Android) and older versions of
   * Safari.
   *
   * @fires Player#fullscreenchange
   */
  requestFullscreen: function () {},
  /**
   * Reset the player. Loads the first tech in the techOrder,
   * and calls `reset` on the tech`.
   */
  reset: function () {},
  snapshot: function () {},
  /**
   * Get or set the video source.
   *
   * @param {Tech~SourceObject|Tech~SourceObject[]|string} [source]
   *        A SourceObject, an array of SourceObjects, or a string referencing
   *        a URL to a media source. It is _highly recommended_ that an object
   *        or array of objects is used here, so that source selection
   *        algorithms can take the `type` into account.
   *
   *        If not provided, this method acts as a getter.
   *
   * @return {string|undefined}
   *         If the `source` argument is missing, returns the current source
   *         URL. Otherwise, returns nothing/undefined.
   */
  src: function (source) {},
  title: function () {},
  /**
   * Get or set the current volume of the media
   *
   * @param  {number} [percentAsDecimal]
   *         The new volume as a decimal percent:
   *         - 0 is muted/0%/off
   *         - 1.0 is 100%/full
   *         - 0.5 is half volume or 50%
   *
   * @return {number}
   *         The current volume as a percent when getting
   */
  volume: function () {},
  /**
   * A getter/setter for the `Player`'s width. Returns the player's configured value.
   * To get the current width use `currentWidth()`.
   *
   * @param {number} [value]
   *        The value to set the `Player`'s width to.
   *
   * @return {number}
   *         The current width of the `Player` when getting.
   */
  width: function () {},
});

Object.assign(UZ.prototype, /** @lends UZ.prototype */ {
  /**
   * The player playback state
   * @namespace
   */
  ERROR: {
    /** Message: The video you are trying to watch cannot be viewed because of domain restrictions
     * 
     * @constant
     * @type {string}
    */
    RESTRICTED: 'RESTRICTED',
    /** Message: The media stream could not be loaded, because the media info is incorrect.
     * 
     * @constant
     * @type {string}
    */
    MEDIA_INFO_IS_INCORRECT: 'MEDIA_INFO_IS_INCORRECT',
    /** Message: The live stream could not be loaded, because the live info is incorrect.
     * 
     * @constant
     * @type {string}
    */
    LIVE_INFO_IS_INCORRECT: 'LIVE_INFO_IS_INCORRECT',
    /** Message: You aborted the media playback
     * 
     * @constant
     * @type {string}
    */
    ABORTED_THE_MEDIA_PLAYBACK: 'ABORTED_THE_MEDIA_PLAYBACK',
    /** Message: A network error caused the media download to fail part-way.
     * 
     * @constant
     * @type {string}
    */
    THE_MEDIA_DOWNLOAD_TO_FAIL_PART_WAY: 'THE_MEDIA_DOWNLOAD_TO_FAIL_PART_WAY',
    /** Message: The media could not be loaded, either because the server or network failed or because the format is not supported.
     * 
     * @constant
     * @type {string}
    */
    THE_MEDIA_COUND_NOT_BE_LOADED: 'THE_MEDIA_COUND_NOT_BE_LOADED',
    /** Message: The media playback was aborted due to a corruption problem or because the media used features your browser did not support.
     * 
     * @constant
     * @type {string}
    */
    THE_MEDIA_PLAYBACK_WAS_ABORTED: 'THE_MEDIA_PLAYBACK_WAS_ABORTED',
    /** Message: No compatible source was found for this media.
     * 
     * @constant
     * @type {string}
    */
    NO_COMPATIBLE_SOURCE: 'NO_COMPATIBLE_SOURCE',
    /** Message: The media is encrypted and we do not have the keys to decrypt it.
     * 
     * @constant
     * @type {string}
    */
    THE_MEDIA_IS_ENCRYPTED: 'THE_MEDIA_IS_ENCRYPTED'
  }
});
