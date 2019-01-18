import axios from 'axios'

class ApiService {

  service: any;

  constructor() {
    let service = axios.create({
      baseURL: 'http://192.168.1.131:3000/api/',
    });
    this.service = service;
  }

   getAll(){
    return this.service.get('beers/');    
  }
  

}

export default ApiService;