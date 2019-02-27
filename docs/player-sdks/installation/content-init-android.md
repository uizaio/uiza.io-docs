1. appId : get in email at registration
2. token : generate [HERE](https://docs.uiza.io/#get-api-key).
3. api : get in email at registration
-

``` java
public class App extends MultiDexApplication {
  @Override
  public void onCreate() {
    super.onCreate();
    UZUtil.initWorkspace(this, api, token, appId);
  }
}
```
  Manifest

``` xml
<application
  android:name=".App "  <!-- important -->
>
```