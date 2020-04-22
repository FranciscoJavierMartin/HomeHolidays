import axios from 'axios';

const API_HOME = 'home';
const API_HOME_OWNER = 'homeowner';

axios.defaults.baseURL = 'http://localhost:5000/api/';

axios.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(undefined, (error) => {
  const { status, data, config, headers } = error.response;

  if (status === 404) {
    // TODO: Go to page not found
  } else if (status === 500) {
    //TODO: Show error message (toast)
  }
});

const responseBody = (respose) => respose.data;

const request = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

export const HomeOwner = {
  list: () => axios.get(`/${API_HOME_OWNER}`).then(responseBody),
};
