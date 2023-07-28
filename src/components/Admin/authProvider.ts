import {AuthProvider, fetchUtils} from "ra-core";
import {SharkServersClient as shark_api} from "sharkservers-sdk";
import {getServerSession} from "next-auth";

// @ts-ignore
const authProvider: AuthProvider = {
    login: async ({username, password}) => {
        const tokenData = await shark_api.auth.loginUser({
            username: username,
            password: password
        });
        localStorage.setItem('access', tokenData.access_token.token);
        localStorage.setItem('refresh', tokenData.refresh_token.token);
    },
    logout: () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('access') ? Promise.resolve() : Promise.reject(),
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: 'John Doe',
        }),
    getPermissions: () => Promise.resolve(''),
};

export function createOptionsFromJWTToken() {
  const token = localStorage.getItem('access');
  if (!token) {
    return {};
  }
  return {
    user: {
      authenticated: true,
      token: 'Bearer ' + token,
    },
  };
}

export function fetchJsonWithAuthJWTToken(url: string, options: object) {
  return fetchUtils.fetchJson(
    url,
    Object.assign(createOptionsFromJWTToken(), options)
  );
}

export default authProvider;