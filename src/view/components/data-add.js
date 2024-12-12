import { LitElement, html, css } from 'lit';
import { dataController } from '../../controller/data-controller';

export class DataAdd extends LitElement {

  addData() {
    dataController.addData({tijd: 5});
  }

  render() {
    return html`
      <button @click=${this.addData}> toevoegen </button>
    `
  }
}

customElements.define('data-add', DataAdd);