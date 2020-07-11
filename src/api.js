import axios from 'axios';
const api = axios.create({
  baseURL: 'http://kevin.com:5000',
  // If it takes too long to get a response from the server, time out after how many milliseconds
  timeout: 10000,
});


export default api;
