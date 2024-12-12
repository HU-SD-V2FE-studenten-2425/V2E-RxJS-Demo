class DataService {

  constructor() {
    this.data = [];
  }

  add(item) {
    return new Promise((resolve) => {
      this.data = [...this.data, item];
      console.log('Data added:', item);
      resolve(this.data);
    });

    // stel dat het een fetch was naar een server
    // const url = 'https://somewhereAtdatabase.com';
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify(item),
    // }
    // return fetch(url, options)
    //   .then((response) => response.parse())
    //   .then((receivedData) => {
    //     this.data = [...receivedData];
    //     console.log('Data added:', item);
    //     return this.data;
    //   });
  }

  getAll() {
    return new Promise((resolve) => {
      resolve(this.data);
    });
  }
}

const dataService = new DataService();

export { dataService };