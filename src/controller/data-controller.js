import { BehaviorSubject } from 'rxjs';
import { dataService } from '../service/data-service.js';

const TOTAL_TIME_INIT = 0;

class DataController {

  controllerData$ = new BehaviorSubject([]);
  totalTime$ = new BehaviorSubject(TOTAL_TIME_INIT);

  constructor(dataServiceInstance) {
    this.dataService = dataServiceInstance;
    
    const observer = {
      next: this.updateData.bind(this),
      error: this.error,
      complete: this.complete,
    }
    this.dataService.data$.subscribe(observer);
    this.dataService.getAll();
  }

  addData(item) {
    return this.dataService.add(item);
  }

  updateData(data) {
    console.log('Update data', data);
    this.controllerData$.next(data);
    this.calcTotalTime(data);
  }

  calcTotalTime(data) {
    let tempTotal = 0;
    data.forEach((element) => {
      tempTotal += element.tijd;
    });
    this.totaltime = tempTotal;
    this.totalTime$.next(this.totaltime);
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