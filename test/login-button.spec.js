import {LoginButton} from '../login-button.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('teamwork-login-button', () => {
  test('is defined', () => {
    const el = document.createElement('teamwork-login-button');
    assert.instanceOf(el, LoginButton);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<teamwork-login-button redirectURI="http://foo.com" clientID="client1"></teamwork-login-button>`);
    assert.shadowDom.equal(
      el,
      `
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap"
          rel="stylesheet"
        >
        <a
          class="tw-btn tw-btn--border-default tw-btn--color-white tw-btn--logo-default tw-btn--size-medium"
          href="https://www.teamwork.com/launchpad/login?redirect_uri=http://foo.com&client_id=client1"
        >
          <span>Sign in with Teamwork</span>
        </a>
      `
    );
  });
});
