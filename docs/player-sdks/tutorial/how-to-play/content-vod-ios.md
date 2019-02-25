Step 1. Installation
``` swift
pod 'UizaSDK' // for iOS 10+
pod 'UizaSDK_8' // for iOS 8,9
pod install
```

Step 2. Init SDK:
``` swift
import UizaSDK

UizaSDK.initWith(appId: YOUR_APP_ID, token: TOKEN, api: YOUR_DOMAIN)
```
``` swift
let playerViewController = UZPlayerViewController()
playerViewController.player.loadVideo(entityId: ENTITY_ID)
present(playerViewController, animated: true, completion: nil)
```
Info.plist:
``` xml
<key>NSAppTransportSecurity</key>  
<dict>  
  <key>NSAllowsArbitraryLoads</key><true/>  
</dict>
```