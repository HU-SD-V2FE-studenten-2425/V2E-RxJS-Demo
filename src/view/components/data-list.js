import { LitElement, html, css } from 'lit';
import { dataController } from '../../controller/data-controller';

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
    dataController.getAll().then((data) => { this.data = data });
  }

  render() {
    return html`
      <ul>
        ${this.data.map((item) => html`<li>${item.tijd}</li>`)}
      </ul>
    `;
  }
}

customElements.define('data-list', DataList);