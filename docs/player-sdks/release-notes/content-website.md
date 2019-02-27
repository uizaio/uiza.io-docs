### 3.2.1 (2019-02-20)
Optimize analytics for live

### 3.2.0 (2019-02-12)
Support DRM

### 3.1.2 (2019-01-16)
Optimize analytics
Fix click callback on mobile browser

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