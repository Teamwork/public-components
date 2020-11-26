import {
  LitElement, html, css, svg, unsafeCSS,
} from 'lit-element';

const logoIcon = svg`
<svg viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g>
      <path d="M6.281,6.81 C7.274,6.81 7.843,6.27 7.843,5.32 C7.843,4.43 7.231,3.84 6.32,3.84 L4.068,3.84 L4.068,2.17 C4.068,0.97 3.205,0.34 2.352,0.34 C1.499,0.34 0.635,0.97 0.635,2.17 L0.635,13.67 C0.635,16.44 1.737,17.67 4.207,17.67 C5.546,17.67 6.311,17.32 6.88,16.99 C7.315,16.75 7.469,16.24 7.469,15.84 C7.469,15.1 6.975,14.27 6.265,14.27 C6.167,14.27 6.068,14.29 5.961,14.32 C5.923,14.34 5.881,14.36 5.835,14.38 C5.648,14.47 5.393,14.58 5.019,14.58 C4.576,14.58 4.068,14.43 4.068,13.21 L4.068,6.81 L6.281,6.81 Z" id="Path"></path>
      <path class="dot" d="M9.456,14.66 C9.456,16.32 10.807,17.67 12.467,17.67 C14.127,17.67 15.478,16.32 15.478,14.66 C15.478,13 14.127,11.65 12.467,11.65 C10.807,11.65 9.456,13 9.456,14.66 Z" id="Path"></path>
  </g>
</svg>
`;

/**
 * Teamwork Login Button
 *
 */
// eslint-disable-next-line import/prefer-default-export
export class LoginButton extends LitElement {
  static get styles() {
    const baseColors = {
      white: unsafeCSS('#FFF'),
      slate: unsafeCSS('#0B0E1F'),
      indigo: unsafeCSS('#4461D7'),
      pink: unsafeCSS('#FF22B1'),
    };

    const hoverColors = {
      slate: unsafeCSS('#303240'),
      indigo: unsafeCSS('#4E6EF2'),
      pink: unsafeCSS('#FF40BC'),
    };

    const activeColor = {
      white: unsafeCSS('#FAFBFC'),
      slate: unsafeCSS('#00020D'),
      indigo: unsafeCSS('#3351CC'),
      pink: unsafeCSS('#E50797'),
    };

    const bordersRadius = {
      default: unsafeCSS('4px'),
      rounded: unsafeCSS('24px'),
      square: unsafeCSS('0px'),
    };

    return css`
      a {
        text-decoration: none;
      }
      .tw-btn {
        font-family: 'Open Sans', sans-serif;
        cursor: pointer;
        width: fit-content;
        display: flex;
        align-items: center;
      }
      .tw-btn span {
        white-space: nowrap;
      }

      .tw-btn--size-large.tw-btn--icon{
        padding: 14px;
      }

      .tw-btn--size-large {
        padding: 12px 16px;
        font-size: 16px;
        font-weight: 600;
      }
      .tw-btn--size-large svg{
        width: 20px;
        height: 20px;
      }
      .tw-btn--size-large span{
        padding: 0 16px;
      }

      .tw-btn--size-medium.tw-btn--icon{
        padding: 10px;
      }

      .tw-btn--size-medium {
        padding: 9px 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .tw-btn--size-medium svg{
        width: 20px;
        height: 20px;
      }
      .tw-btn--size-medium span{
        padding: 0 12px;
        line-height: 20px;
      }

      .tw-btn--size-small.tw-btn--icon{
        padding: 10px;
      }

      .tw-btn--size-small {
        padding: 6px 10px;
        font-size: 14px;
        font-weight: 600;
      }
      .tw-btn--size-small svg{
        width: 12px;
        height: 12px;
      }
      .tw-btn--size-small span{
        padding: 0 8px;
        line-height: 20px;
      }

      .tw-btn--border-default {
        border-radius: ${bordersRadius.default};
      }
      .tw-btn--border-rounded {
        border-radius: ${bordersRadius.rounded};
      }
      .tw-btn--border-square {
        border-radius: ${bordersRadius.square};
      }

      .tw-btn--color-white {
        background-color: ${baseColors.white};
        color: ${baseColors.slate};
        border: 1px solid #DADDEB;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
      }
      .tw-btn--color-white:hover {
        border: 1px solid #C5CADA;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      }
      .tw-btn--color-white:active {
        border: 1px solid #9A9FB3;
        box-shadow: none;
      }
      .tw-btn--color-white span {
        font-weight: 400;
      }
      .tw-btn--color-white svg {
        color: ${baseColors.slate};
      }

      .tw-btn--color-slate {
        background-color: ${baseColors.slate};
        color: ${baseColors.white};
      }
      .tw-btn--color-slate:hover {
        background-color: ${hoverColors.slate};
      }
      .tw-btn--color-slate:active {
        background-color: ${activeColor.slate};
      }

      .tw-btn--color-indigo {
        background-color: ${baseColors.indigo};
        color: ${baseColors.white};
      }
      .tw-btn--color-indigo:hover {
        background-color: ${hoverColors.indigo};
      }
      .tw-btn--color-indigo:active {
        background-color: ${activeColor.indigo};
      }

      .tw-btn--color-pink {
        background-color: ${baseColors.pink};
        color: ${baseColors.white};
      }
      .tw-btn--color-pink:hover {
        background-color: ${hoverColors.pink};
      }
      .tw-btn--color-pink:active {
        background-color: ${activeColor.pink};
      }

      .tw-btn--logo-default svg {
        fill: ${baseColors.slate};
      }

      .tw-btn--logo-default svg .dot {
        fill: ${baseColors.pink};
      }

      .tw-btn--logo-dark svg {
        fill: ${baseColors.white};
      }

      .tw-btn--logo-dark svg .dot{
        fill: ${baseColors.pink};
      }

      .tw-btn--logo-white svg {
        fill: ${baseColors.white};
      }

      .disabled {
        opacity: 0.2;
        pointer-events: none;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The client ID from the Developer Portal
       */
      clientID: {
        type: String,
      },

      /**
       * An URI to which the user will be redirected after login
       */
      redirectURI: {
        type: String,
      },

      /**
       * Optional
       * This parameter will be attached to the final URL
       */
      state: { type: String },

      /**
       * The size of the button (large | medium | small)
       */
      size: { type: String },

      /**
       * The border radius (default | rounded | square)
       */
      borders: { type: String },

      /**
       * The color schema (slate | white | indigo | pink)
       */
      color: { type: String },

      /**
       * Indicated whether only the icon should be rendered
       */
      iconOnly: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.borders = 'default';
    this.size = 'medium';
    this.color = 'white';
    this.iconOnly = false;
  }

  get iconClass() {
    return this.iconOnly ? 'tw-btn--icon' : null;
  }

  get borderClass() {
    return `tw-btn--border-${this.borders}`;
  }

  get colorClass() {
    return `tw-btn--color-${this.color}`;
  }

  get logoClass() {
    let logoColor = '';
    if (this.color === 'white') logoColor = 'default';
    else if (this.color === 'slate') logoColor = 'dark';
    else logoColor = 'white';
    return `tw-btn--logo-${logoColor}`;
  }

  get sizeClass() {
    return `tw-btn--size-${this.size}`;
  }

  get linkUrl() {
    const urlParam = (uri) => encodeURIComponent(uri);
    let url = `https://www.teamwork.com/launchpad/login?redirect_uri=${urlParam(this.redirectURI)}&client_id=${urlParam(this.clientID)}`;
    if (this.state) url = `${url}&state=${urlParam(this.state)}`;
    return url;
  }

  render() {
    let disabled = false;
    if (!this.redirectURI || !this.clientID) {
      disabled = true;
      // eslint-disable-next-line no-console
      console.error('Teamwork Login: redirect and client must be set');
    }

    let classes = [this.sizeClass, this.borderClass, this.colorClass, this.logoClass, this.iconClass].join(' ');
    const textHtml = this.iconOnly ? '' : html`<span>Sign in with Teamwork</span>`;
    if (disabled) classes = `${classes} disabled`;
    return html`
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap">
      <a class="tw-btn ${classes}" href="${this.linkUrl}">
        ${logoIcon} ${textHtml}
      </a>
    `;
  }
}

/* This is kind of a hack that eases testing so the parent
 * don't need to mock `window.customElements`
 */
if (window.customElements) window.customElements.define('teamwork-login-button', LoginButton);
