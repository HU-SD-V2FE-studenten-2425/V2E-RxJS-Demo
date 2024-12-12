import { Observable } from 'rxjs';
import { dataService } from '../service/data-service.js';

class DataController {

  controllerData$ = new Observable((subscriber) => { this.subscriber = subscriber }) 

  constructor(dataServiceInstance) {
    this.dataService = dataServiceInstance;
    
    const observer = {
      next: this.updateData.bind(this),
      error: this.error,
      complete: this.complete,
    }
    this.dataService.data$.subscribe(observer);
  }

  addData(item) {
    return this.dataService.add(item);
  }

  getAll() {
    return this.dataService.getAll();
  }

  updateData(data) {
    console.log('Update data', data);
    this.subscriber.next(data);
  }

  error(event) {
    console.error(event);
  }

  complete(event) {
    console.log('completed', event);
  }
}

const dataController = new DataController(dataService);

// // Dummy data aanmaken
// await dataController.addData({ tijd: 5 });
// await dataController.addData( {tijd: 3} );
// await dataController.addData({tijd: 15});

export { dataController };