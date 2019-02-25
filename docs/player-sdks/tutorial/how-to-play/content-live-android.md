Step 1. Add the JitPack repository to your build file:
``` java
allprojects {
      repositories {
         maven { url 'https://jitpack.io' }
      }
}
```
Step 2. Add the dependency
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
Step 3. Init SDK:
* appId : get in email at registration
* token : generate [HERE](https://docs.uiza.io/#get-api-key).
* api : get in email at registration -
``` java
public class App extends MultiDexApplication {
  @Override
  public void onCreate() {
    super.onCreate();
    UZUtil.initWorkspace(this, api, token, appId);
  }
}
```
XML:
``` xml
<uizacoresdk.view.rl.video.UZVideo
  android:id="@id/uiza_video"
  android:layout_width="match_parent"
  android:layout_height="wrap_content" />
```
Manifest:
``` xml
<activity
  android:name=".MainActivity "
  android:configChanges="keyboard|keyboardHidden|orientation|screenSize|screenLayout|smallestScreenSize|uiMode" />
```
Create java file MainActivity:
``` java
public class MainActivity extends AppCompatActivity implements UZCallback{
   ...
}
```
``` java
uzVideo = (UZVideo) findViewById(R.id.uiza_video);
uzVideo.setUZCallback(this);
UZUtil.initEntity(activity, uzVideo, "put the entity id here");
```