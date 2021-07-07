import axios from "axios";

const api = __app.env.EXPRESS_APP_URL;

export async function _login({ username, password }) {
  try {
    const res = await axios.post(`${api}/login`, { username, password });
    const accessToken = res.data.accessToken;

    localStorage.setItem("accessToken", accessToken);

    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${accessToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return Promise.resolve({ ...res.data });
  } catch (err) {
    return Promise.reject(err.response.status);
  }
}

export function isLoggedIn() {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken || false;
}
