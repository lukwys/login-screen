import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://guarded-shore-29819.herokuapp.com/',
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
});

export { apiService };
