**Step 1. Add the JitPack repository to your build file**
``` java
allprojects {
  repositories {
    maven { url 'https://jitpack.io' }
  }
}
```
**Step 2. Add the dependency**
``` java
defaultConfig {  
  multiDexEnabled  true
}  
dependencies {  
  //for playing video VOD, LIVE  
  implementation 'com.github.uizaio.uiza-android-sdk-player:uizacoresdk:[lasted-release-number]'        
  
  //for live broadcaster  
  implementation 'com.github.uizaio.uiza-android-sdk-player:uizalivestream:[lasted-release-number]'  
}
```
Get lasted release number [HERE](https://github.com/uizaio/uiza-android-sdk-player/blob/dev/CHANGELOG.md).


***Please note if your project uses firebase***:
**firebase-core** & **firebase-database** ... should be same version:
Basically, you need to bump all  _Play Services_  and  _Firebase_  libraries to their latest version (which may be different for each since version 15).

You may use  [https://mvnrepository.com/](https://mvnrepository.com/)  to find the latest version for each library.
See also:  [https://firebase.google.com/support/release-notes/android#20180523](https://firebase.google.com/support/release-notes/android#20180523)

Check [example here](https://github.com/uizaio/uiza-android-sdk-player/blob/master/sample/build.gradle).
