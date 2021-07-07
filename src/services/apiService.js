import axios from "axios";

const api = __app.env.EXPRESS_APP_URL;

export async function getProfile(id) {
  try {
    const res = await axios.get(api + "/profile/" + id);
    const profileData = res.data;

    return Promise.resolve(profileData);
  } catch (error) {
    return Promise.reject(error);
  }
}
