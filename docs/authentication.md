# Authentication
In order to use UIZA SDK functions within your client applications, a UIZA instance should be initiated in each client application via UIZA server authentication. The instance communicates and interacts with the server on the basis of an authenticated user account and thus enables the user to perform the functions. The following explains how your account can be authenticated with server.

------
### Getting your access token
By default, UIZA server can authenticate a user account by their unique generated token. The server queries the database to check for a match upon the request for connection. The ID should be unique within an UIZA application to be distinguished from each other. Developers can get their token key by following methods below:
<ol>
  <li> UIZA will send you an access token via your Email.</li>
  <li> If you already have an account, sign in to our dashboard and manually generate your own access token by going to <b>Dashboard > Application Settings > Publish API</b></li>
</ol>
```
//Your access token will look like this
uap-7442d4b9xxxxxxxxxxxxx4e64cf064-1405ee51
```

------
### Connect to UIZA server with API and an access token
By using UIZA Platform API, developers can access along with their own access token, or create an access token for an existing user. Once an access token is created, a user is required to provide the access token when authorize any API call to the UIZA application.
<ol>
  <li> By using the Dashboard above, you can create an UIZA account with your user's information. It can be used when the user signs in to your service.</li>
  <li> We recommend that you save the user ID along with the issued access token to your storage which is securely managed.</li>
  <li> For security reason, we recommend updating the user's access token periodically by issuing a new token to replace.</li>
</ol>

> <b>Note 1:</b> You are able to management token key for each individual in your dashboard
<b>Dashboard > Application Settings > Publish API</b>

``` bash
//Access token used for Authorization
curl -X GET \
  https://#{workspace_api_domain}/api/public/v3/media/entity?id=16ab25d3-fd0f-4568-8aa0-0339bbfd674f \
  -H 'Authorization: uap-7442d4b9adfj1231b3j4n1b1v31j131-1405ee51' \
```

> <b>Note 2:</b> You are able to provide access or prevent users from signing in to the application in your dashboard <b>Dashboard > Application Settings > User Management.</b>

<br>

> <b>Note 3:</b> You are able to restrict their access to read and write for each API in your dashboard. You can also create defined group for APIs stack.
<b>Dashboard > Application Setting > Permission Settings > Create group</b>
