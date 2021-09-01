import Axios from 'axios';

// 서버 주소를 관리합니다.
const Server = Axios.create({
  baseURL: 'http://dummy-server.io',
  // baseURL: 'http://jsonplaceholder.typicode.com/',
});

export default Server;
