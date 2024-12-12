import { LitElement, html, css } from 'lit';

export class DataList extends LitElement {
  static properties = {
    data: { type: Array },
  };

  constructor() {
    super();
    this.data = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.data = ['Item 1', 'Item 2', 'Item 3'];
  }

  render() {
    return html`
      <ul>
        ${this.data.map((item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}

customElements.define('data-list', DataList);