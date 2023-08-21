
import axios from 'axios';
import { tagloyApi } from 'services/apis';
import createAxios from 'services/axios';
import { BASE_URL } from 'services/urls';

const { instance: tagloyInstance, ...tagloy } = createAxios(BASE_URL.TAGLOY);

const setToken = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const api = {
  tagloy: tagloyApi(tagloy),
};

export default api;
export { setToken }