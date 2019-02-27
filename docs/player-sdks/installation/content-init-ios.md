Always initialize the framework by the following line before calling any API functions:

``` swift
import UizaSDK

UizaSDK.initWith(appId: YOUR_APP_ID, token: TOKEN, api: YOUR_DOMAIN)
```

YOUR_APP_ID and YOUR_DOMAIN : get from registration email

TOKEN: generate from https://docs.uiza.io/#get-api-key