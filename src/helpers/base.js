import axios from "axios";
import { BASE_URL } from "../config/api.config";
import { getToken } from "../helpers/utils/auth.util";
// import { authHeader } from "../helpers/authHelper";
export const API_PREFIX = "";
const axiosApi = axios.create({
  baseURL: `${BASE_URL.endpoint}`,
});

export const defaultHeaders = {
  contentType: "application/json",
  token: "Bearer " + getToken(),
};

export const axiosInstance = axiosApi;
export async function get(url, config = {}) {
  return new Promise((resolve, reject) => {
    axiosApi
      .get(url, { params: config, headers: authHeader() })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export async function patch(url, data, config = {}) {
  return await axiosApi
    .patch(url, { ...data }, { ...config })
    .then((response) => response)
    .catch((error) => error.response);
}
export async function post(url, data, config = {}) {
  return new Promise((resolve, reject) => {
    axiosApi
      .post(url, { ...data }, { ...config, headers: authHeader() })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export async function postFormData(url, data, config = {}) {
  return new Promise((resolve, reject) => {
    axiosApi
      .post(url, data, {
        ...config,
        headers: authHeader({
          ...defaultHeaders,
          contentType: "multipart/form-data",
        }),
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export async function put(url, data, config = {}) {
  return new Promise((resolve, reject) => {
    axiosApi
      .put(url, { ...data }, { ...config, headers: authHeader() })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export async function del(url, config = {}) {
  return new Promise((resolve, reject) => {
    axiosApi
      .delete(url, { ...config, headers: authHeader() })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export const thunkHandler = async (asyncFn, thunkAPI) => {
  try {
    const response = await asyncFn;
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
};

export const authHeader = (header = defaultHeaders) => {
  let token = getToken();
  let headers = {
    "Content-Security-Policy": "default-src 'self',frame-src 'self'",
  };
  if (token) {
    headers["x-auth-token"] = token;
  }
  if (header.contentType) {
    headers["Content-Type"] = header.contentType;
  }
  return headers;
};

