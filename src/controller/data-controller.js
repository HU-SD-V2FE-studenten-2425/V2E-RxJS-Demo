import { dataService } from '../service/data-service.js';

class DataController {

  constructor(dataServiceInstance) {
    this.dataService = dataServiceInstance;
  }

  addData(item) {
    return this.dataService.add(item);
  }

  getAll() {
    return this.dataService.getAll();
  }
}

const dataController = new DataController(dataService);

// Dummy data aanmaken
await dataController.addData({ tijd: 5 });
await dataController.addData( {tijd: 3} );
await dataController.addData({tijd: 15});

export { dataController };