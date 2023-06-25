import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (
      error.response &&
      error.response.data &&
      error.response.data.success === false
    ) {
      // api error response

      return Promise.reject({
        // request did not succeed
        success: false,

        // give api error parameters
        status_code: error.response.data.status_code,
        code: error.response.data.error_code,
        message: error.response.data.error_message,
        description: error.response.data.description,
      });
    }

    if (error.response) {
      // malformed api response

      return Promise.reject({
        success: false,

        // simulate api error
        status_code: 500,
        code: '041',
        message: error.message,
        description: '',
      });
    }

    // exception
    return Promise.reject({
      success: false,

      // simulate api error
      status_code: 0,
      code: '042',
      message: error.message,
      description: '',
    });
  }
);

export default api;
