# public-components

Public components to enhance your interaction with Teamwork

## Login with Teamwork button

### Usage

*From the CDN*

```html
<!-- You can also use https://cdn.teamwork.com/public/{tag}/login-button.js for a specific version -->
<script type="module" src="https://cdn.teamwork.com/public/latest/login-button.js"></script>
<teamwork-login-button
  redirectURI="https://www.myapp.com/"
  clientID="myClientID"
  iconOnly
  state="appstate"
  color="slate"
  size="large"
  borders="rounded"
/>
```

*Using NPM*

First install it

```
npm -i @teamwork/login-button --save
```

Then, in your `main.js` file: 
```js
import '@teamwork/login-button';
```

And somewhere in you template: 

```html
<teamwork-login-button
  redirectURI="https://www.myapp.com/"
  clientID="myClientID"
  icon="false"
  state="appstate"
  color="slate"
  size="large"
  borders="default"
/>
```

### Parameters

| Name          	| Default   	| Description                                             	| Allowed Values                                                       |
|---------------	|-----------	|---------------------------------------------------------	|------------------------------------------------------------------------------	|
| `clientID`    	|           	| **Required**. Client ID from the [Developer Portal](https://developer.teamwork.com/guides/how-to-authenticate-via-app-login-flow/)                 	|                                                                              	|
| `redirectURI` 	|           	| **Required**. Redirect URI for your Developer Portal app 	|                                                                              	|
| `state`       	|           	| Optional. Value will be passed to your redirect URI as a query parameter        	|                                                                              	|
| `size`        	| `medium`  	| Size of the button                                      	| `large` `medium` `small`                                                     	|          	|
| `borders`     	| `default` 	| Button border style                                      	| `default` `rounded` `square`                                                 	|          	|
| `color`       	| `white`   	| Button color theme                                        | `slate` `white` `indigo` `pink`                                              	|          	|
| `iconOnly`    	| `false`   	| Show a compact, icon-only version of the button       	| Attribute presence indicates `true` 	|          	|
