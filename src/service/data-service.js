import { Observable } from 'rxjs';

class DataService {
  data$ = new Observable((subscriber) => {
    this.subscriber = subscriber;
  });

  constructor() {
    this.data = [{ tijd: 5 }, { tijd: 10 }, { tijd: 15 }];
  }

  add(item) {
    this.data = [...this.data, item];
    this.subscriber.next(this.data);
  }

  getAll() {
    this.subscriber.next(this.data);
  }
}

const dataService = new DataService();

export { dataService };
