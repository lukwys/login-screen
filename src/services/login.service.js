import { apiService } from './index';

const authorizeUser = async (data) => {
  const response = await apiService.post('/', data);
  const results = response.data;
  return results;
}

export { authorizeUser }
