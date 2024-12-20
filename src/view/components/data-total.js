import { LitElement, html, css } from 'lit';
import { dataController } from '../../controller/data-controller';

export class DataTotal extends LitElement {

  static properties = {
    totaltime: { type: Number }
  }

  constructor() {
    super();
    this.totaltime = 0;
  }

  connectedCallback() {
    super.connectedCallback();

    const observer = {
      next: this.updateData.bind(this)
    }
    this.subscription = dataController.totalTime$.subscribe(observer);
  }

  disconnectedCallback() {
    this.subscription.unsubscribe();
    super.disconnectedCallback();
  }

  updateData(data) {
    this.totaltime = data;
  }

  render() {
    return html`
      Totale tijd: <span>${this.totaltime}</span>
    `;
  }
}

customElements.define('data-total', DataTotal);