import Root from "../views/Root.svelte";
import NotFound from "../views/NotFound.svelte";

export default {
  "/": Root,
  "*": NotFound,
};
