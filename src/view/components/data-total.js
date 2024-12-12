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

    let tempTotal = 0;
    dataController.getAll().then((data) => { 
      data.forEach(element => {
        tempTotal += element.tijd;
      });
      this.totaltime = tempTotal;
    });
  }

  render() {
    return html`
      Totale tijd: <span>${this.totaltime}</span>
    `;
  }
}

customElements.define('data-total', DataTotal);