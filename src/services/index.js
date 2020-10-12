import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://run.mocky.io/v3/a6007ef2-df4e-47ba-a276-bd40219d3ac7',
});

export { apiService };
