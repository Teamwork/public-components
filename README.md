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

| Name          	| Default   	| Description                                             	| Allowed Values                                                               	| Obs      	|
|---------------	|-----------	|---------------------------------------------------------	|------------------------------------------------------------------------------	|----------	|
| `clientID`    	|           	| The client ID from the Developer Portal                 	|                                                                              	| Required 	|
| `redirectURI` 	|           	| An URI to which the user will be redirected after login 	|                                                                              	| Required 	|
| `state`       	|           	| This parameter will be attached to the final URL        	|                                                                              	| Optional 	|
| `size`        	| `medium`  	| The size of the button                                  	| `large` `medium` `small`                                                     	|          	|
| `borders`     	| `default` 	| The border radius                                       	| `default` `rounded` `square`                                                 	|          	|
| `color`       	| `white`   	| The color schema                                        	| `slate` `white` `indigo` `pink`                                              	|          	|
| `iconOnly`    	| `false`   	| Indicated whether only the icon should be rendered      	| Attribute presence indicates means `true` 	|          	|