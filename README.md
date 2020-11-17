# public-components

Public components to enhance your interaction with Teamwork

## Login with Teamwork button

### Usage

*From the CDN*

```html
<!-- You can also use https://cdn.teamwork.com/public/{tag}/login-button.js for a specific version -->
<script src="https://cdn.teamwork.com/public/latest/login-button.js"></script>
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

