import { apiService } from './index';

const authorizeUser = async () => {
  const response = await apiService.get('/');
  const results = response.data;
  return results;
}

export { authorizeUser }
