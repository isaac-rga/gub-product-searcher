// import { store } from 'app';
// import getConfig from 'next/config';
// import { authService } from 'services';
// import { openGlobalAlert } from 'services/store/slices/uiSlice';

import { httpError } from './httpErrors.ts';

const baseURL = 'https://d9adc0af-6bb3-46ea-a799-d4853fc943af.mock.pstmn.io/'
const defaultRequestOptions = {
  headers: { 'Content-Type': 'application/json' },
  credentials: 'omit'
};

function safeUrlSegment(url) {
  if (url.startsWith('/')) {
    return url;
  }
  return `/${url}`;
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      // store.dispatch(
      //   openGlobalAlert({ text: httpError(response.status || 500), variant: 'error' }),
      // );
      // if ([401, 403].includes(response.status) && authService.userValue) {
      //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      //   authService.logout();
      // }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

export function authHeader() {
  // return auth header with jwt if user is logged in
  // const user = authService.userValue;
  // const isLoggedIn = !!(user && user.user.token);
  // if (isLoggedIn) {
  //   return { Authorization: `Bearer ${user.user.token}` };
  // }
  return {};
}

function get(url) {
  const newUrl = safeUrlSegment(url);
  const requestOptions = {
    ...defaultRequestOptions,
    method: 'GET',
    headers: { ...authHeader(), ...defaultRequestOptions.headers },
  };

  return fetch(`${baseURL}${newUrl}`, requestOptions).then(handleResponse);
}

function post(url, body) {
  const newUrl = safeUrlSegment(url);
  const requestOptions = {
    ...defaultRequestOptions,
    method: 'POST',
    headers: { ...authHeader(), ...defaultRequestOptions.headers },
    body: JSON.stringify(body),
  };

  return fetch(`${baseURL}${newUrl}`, requestOptions).then(handleResponse);
}

function put(url, body) {
  const newUrl = safeUrlSegment(url);
  const requestOptions = {
    ...defaultRequestOptions,
    method: 'PUT',
    headers: { ...authHeader(), ...defaultRequestOptions.headers },
    body: JSON.stringify(body),
  };
  return fetch(`${baseURL}${newUrl}`, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function deleteFunction(url) {
  const newUrl = safeUrlSegment(url);
  const requestOptions = {
    method: 'DELETE',
    headers: { ...defaultRequestOptions.headers, ...authHeader() },
  };
  return fetch(`${baseURL}/${newUrl}`, requestOptions).then(handleResponse);
}

// export function basicHeaderAuth() {
//   return { ...defaultRequestOptions.headers, ...authHeader() };
// }

export const httpWrapper = {
  get,
  post,
  put,
  delete: deleteFunction,
  // authHeader,
  // basicHeaderAuth,
};
