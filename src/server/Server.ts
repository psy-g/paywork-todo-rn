import Axios from 'axios';

const Server = Axios.create({
  baseURL: 'http://dummy-server.io',
  // baseURL: 'http://jsonplaceholder.typicode.com/users',
});

export default Server;
