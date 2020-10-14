window.customElements.define('tw-login-button', class extends HTMLElement {
  baseColors = {
    white: '#FFF',
    slate: '#0B0E1F',
    indigo: '#4461D7',
    pink: '#FF22B1',
  }

  hoverColors = {
    slate: '#303240',
    indigo: '#4E6EF2',
    pink: '#FF40BC',
  }

  activeColor = {
    white: '#FAFBFC',
    slate: '#00020D',
    indigo: '#3351CC',
    pink: '#E50797',
  }

  bordersRadius = {
    default: '4px',
    rounded: '24px',
    square: '0px',
  }

  logoIcon = `
    <svg viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g>
          <path d="M6.281,6.81 C7.274,6.81 7.843,6.27 7.843,5.32 C7.843,4.43 7.231,3.84 6.32,3.84 L4.068,3.84 L4.068,2.17 C4.068,0.97 3.205,0.34 2.352,0.34 C1.499,0.34 0.635,0.97 0.635,2.17 L0.635,13.67 C0.635,16.44 1.737,17.67 4.207,17.67 C5.546,17.67 6.311,17.32 6.88,16.99 C7.315,16.75 7.469,16.24 7.469,15.84 C7.469,15.1 6.975,14.27 6.265,14.27 C6.167,14.27 6.068,14.29 5.961,14.32 C5.923,14.34 5.881,14.36 5.835,14.38 C5.648,14.47 5.393,14.58 5.019,14.58 C4.576,14.58 4.068,14.43 4.068,13.21 L4.068,6.81 L6.281,6.81 Z" id="Path"></path>
          <path class="dot" d="M9.456,14.66 C9.456,16.32 10.807,17.67 12.467,17.67 C14.127,17.67 15.478,16.32 15.478,14.66 C15.478,13 14.127,11.65 12.467,11.65 C10.807,11.65 9.456,13 9.456,14.66 Z" id="Path"></path>
      </g>
    </svg>
  `;

  constructor() {
    super();
    this.confBorders = null;
    this.confSize = null;
    this.confColor = null;
    this.confIconOnly = null;
    this.confRedirectUri = null;
    this.confClientId = null;
    this.confState = null;
    this.confShadowRoot = this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() { return ['borders', 'size', 'color', 'icon', 'redirect', 'client', 'state']; }

  attributeChangedCallback(name, _, newValue) {
    if (name === 'borders') this.confBorders = newValue;
    if (name === 'size') this.confSize = newValue;
    if (name === 'color') this.confColor = newValue;
    if (name === 'icon') this.confIconOnly = newValue;
    if (name === 'redirect') this.confRedirectUri = newValue;
    if (name === 'client') this.confClientId = newValue;
    if (name === 'state') this.confState = newValue;
    this.render();
  }

  connectedCallback() {
    if (!this.borders) this.borders = 'default';
    if (!this.size) this.size = 'medium';
    if (!this.color) this.color = 'white';
    if (!this.icon) this.icon = false;
    this.render();
  }

  get borders() {
    return this.confBorders;
  }

  set borders(v) {
    this.setAttribute('borders', v);
  }

  get size() {
    return this.confSize;
  }

  set size(v) {
    this.setAttribute('size', v);
  }

  get color() {
    return this.confColor;
  }

  set color(v) {
    this.setAttribute('color', v);
  }

  get icon() {
    return this.confIconOnly === true || this.confIconOnly === 'true';
  }

  set icon(v) {
    this.setAttribute('icon', v);
  }

  set redirect(v) {
    this.setAttribute('redirect', v);
  }

  get redirect() {
    return this.confRedirectUri;
  }

  set client(v) {
    this.setAttribute('client', v);
  }

  get client() {
    return this.confClientId;
  }

  set state(v) {
    this.setAttribute('state', v);
  }

  get state() {
    return this.confState;
  }

  get iconClass() {
    return this.icon ? 'tw-btn--icon' : null;
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
    let url = `https://www.teamwork.com/launchpad/login?redirect_uri=${this.redirect}&client_id=${this.client}`;
    if (this.state) url = `${url}&state=${this.state}`;
    return url;
  }

  render() {
    if (!this.borders || !this.color || !this.size) return;
    const classes = [this.sizeClass, this.borderClass, this.colorClass, this.logoClass, this.iconClass].join(' ');
    const textHtml = this.icon ? '' : '<span>Sign in with Teamwork</span>';
    const innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700&display=swap&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese');
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
        padding: 14px 16px;
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
        padding: 10px 12px;
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
        border-radius: ${this.bordersRadius.default};
      }
      .tw-btn--border-rounded {
        border-radius: ${this.bordersRadius.rounded};
      }
      .tw-btn--border-square {
        border-radius: ${this.bordersRadius.square};
      }

      .tw-btn--color-white {
        background-color: ${this.baseColors.white};
        color: ${this.baseColors.slate};
        border: 1px solid #DADDEB;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
      }
      .tw-btn--color-white:hover {
        border: 1px solid #C5CADA;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      }
      .tw-btn--color-white:active {
        background-color: ${this.activeColor.white};
        border: 1px solid #9A9FB3;
        box-shadow: none;
      }
      .tw-btn--color-white span {
        font-weight: 400;
      }
      .tw-btn--color-white svg {
        color: ${this.baseColors.slate};
      }

      .tw-btn--color-slate {
        background-color: ${this.baseColors.slate};
        color: ${this.baseColors.white};
      }
      .tw-btn--color-slate:hover {
        background-color: ${this.hoverColors.slate};
      }
      .tw-btn--color-slate:active {
        background-color: ${this.activeColor.slate};
      }

      .tw-btn--color-indigo {
        background-color: ${this.baseColors.indigo};
        color: ${this.baseColors.white};
      }
      .tw-btn--color-indigo:hover {
        background-color: ${this.hoverColors.indigo};
      }
      .tw-btn--color-indigo:active {
        background-color: ${this.activeColor.indigo};
      }

      .tw-btn--color-pink {
        background-color: ${this.baseColors.pink};
        color: ${this.baseColors.white};
      }
      .tw-btn--color-pink:hover {
        background-color: ${this.hoverColors.pink};
      }
      .tw-btn--color-pink:active {
        background-color: ${this.activeColor.pink};
      }

      .tw-btn--logo-default svg {
        fill: ${this.baseColors.slate};
      }

      .tw-btn--logo-default svg .dot{
        fill: ${this.baseColors.pink};
      }

      .tw-btn--logo-dark svg {
        fill: ${this.baseColors.white};
      }

      .tw-btn--logo-dark svg .dot{
        fill: ${this.baseColors.pink};
      }

      .tw-btn--logo-white svg {
        fill: ${this.baseColors.white};
      }
      </style>
      <a class="tw-btn ${classes}" href="${this.linkUrl}">
        ${this.logoIcon} ${textHtml}
      </a>
    `;
    this.confShadowRoot.innerHTML = innerHTML;
  }
});
