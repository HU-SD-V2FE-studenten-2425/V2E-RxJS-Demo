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

    const observer = {
      next: this.updateData.bind(this)
    }
    this.subscription = dataController.controllerData$.subscribe(observer);
  }

  disconnectedCallback() {
    this.subscription.unsubscribe();
    super.disconnectedCallback();
  }

  updateData(data) {
    this.data = data;
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