import axios from 'axios';
axios.defaults.baseURL = 'https://randomuser.me/api';

const api = {
  get: axios.get,
};
export default api;
