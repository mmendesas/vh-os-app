import axios from 'axios';

const api = axios.create({
  baseURL: 'https://react-job-api-test.azurewebsites.net',
});

export default api;
