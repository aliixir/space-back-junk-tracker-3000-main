import { LitElement, html, css } from 'lit';
// import vehicleRegistrationService from '../../lib/vehicleRegistrationService';
// import { getVehicles } from '../api-endpoint/vehicles';

class MyElement extends LitElement {
  static get properties() {
    return {
      vehicles: { type: Object }
    };
  }

  constructor() {
    super();
    this.vehicles = { type: 'type', name: 'name', milage: 'miles', registrationID: 'id' };
    this.headers = ['Type', 'Nickname', 'Milage Rating', 'Registration ID'];
  }

  updated() {
    this.__getVehicleInfo();
    console.log('vehicles', this.vehicles);
    this.__register();
  }

  static get styles() {
    return [
      css`
        :host { 
          display: flex;
          flex-direction: column;
        }

        .table-container {
          display: grid;
          grid-template-columns: repeat(4, auto);
          color: #444;
          max-width:  800px;
        }
        
        .col {
          flex: 1 1 auto;
        }

        .header {
          display: flex;
        }

        .row {
          display: flex;
        }
      `
    ]
  }

  __getVehicleInfo() {
    //   const allVehicles = getVehicles();
    //   allVehicles.map(v => {

    //     this.vehicles.push({})
    //   });
  }

  __register() {
    //   this.vehicles.map(vehicle => {
    //     vehicleRegistrationService.registerVehicle(vehicle);
    //   });
  }

  /* 
  low: mileage < 10,000
        - medium: 10,000 <= mileage < 100,000
        - high: 100,000 <= mileage
        */
  __getMilageRating(milage) {
    return milage >= 10000 ? (milage < 100000 ? 'medium' : 'high') : 'low';
  }

  render() {
    return html`
      <div class="title">Inventory Management</div>
      <div class="table-container">
      ${this.headers.map(header => {
      return html`<div class="col">${header}</div>`;
    })
      }

 
    `;
  }
}
customElements.define('my-element', MyElement);

// ${this.vehicles.map(vehicle => {
//   return html`
//   <div class="col">${vehicle.type}</div>
//   <div class="col">${vehicle.name}</div>
//   <div class="col">${vehicle.milage}</div>
//   <div class="col">${vehicle.registrationID}</div>
//   `;
// })}

     // <div class="col">${this.vehicles.type}</div>
      // <div class="col">${this.vehicles.name}</div>
      // <div class="col">${this.vehicles.milage}</div>
      // <div class="col">${this.vehicles.registrationID}</div>