import { AxiosHttpClient } from '@/application/drivers';
import { IRegisterRequest } from '@/domain/auth';

export function authController() {
  const http = new AxiosHttpClient(import.meta.env.FE_BACKEND);

  async function signin(value: { email: string; password: string }) {
    return await http.request({
      method: 'post',
      url: '/api/v1/auth/login',
      data: JSON.stringify(value),
    });
  }

  async function register(value: IRegisterRequest) {
    return await http.request({
      method: 'post',
      url: '/api/v1/auth/register',
      data: JSON.stringify(value),
    });
  }

  async function logout() {
    return await http.request({
      method: 'post',
      url: '/api/v1/auth/logout',
    });
  }

  async function refresh() {
    return await http.request({
      method: 'post',
      url: `api/v1/auth/refresh`,
    });
  }

  return {
    signin,
    register,
    logout,
    refresh,
  };
}
