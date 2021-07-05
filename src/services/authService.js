import axios from "axios";

const api = process.env.EXPRESS_APP_URL;

export async function _login({ username, password }) {
  try {
    const res = await axios.post(`${api}/login`, { username, password });
    const accessToken = res.data.accessToken;

    localStorage.setItem("accessToken", accessToken);
    return Promise.resolve({ accessToken });
  } catch (err) {
    return Promise.reject(err);
  }
}

export function isLoggedIn() {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken || false;
}
