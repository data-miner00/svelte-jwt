import axios from "axios";

const api = "http://localhost:3000";

export async function login({ username, password }) {
  try {
    const res = await axios.post(`${api}/login`, { username, password });
    return Promise.resolve({ accessToken: res.data.accessToken });
  } catch (err) {
    return Promise.reject(err);
  }
}

export function isLoggedIn() {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken || false;
}
