import AuthProvider from '../../provider/auth.provider';
import registerService from './register.service';
import ApiRequest from '../../api/apiRequest';

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const client = new ApiRequest(BASE_URL, AuthProvider);

const service = registerService(client);

const checkAuth = async ({ request }) => {
  if (AuthProvider.user) return AuthProvider.user;

  return { data: service.checkAuth(request, AuthProvider) };
};
export default {
  checkAuth,
};
