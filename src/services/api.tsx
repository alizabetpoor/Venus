import axios from 'axios';
axios.defaults.baseURL = 'https://randomuser.me/api/?results=20';

const api = {
  get: axios.get,
};
export default api;
