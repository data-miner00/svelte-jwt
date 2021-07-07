import { writable } from "svelte/store";

// export const user = writable({})
export const authState = writable(false);
export const accessToken = writable("");
export const userInfo = writable({ username: "", id: 0 });
