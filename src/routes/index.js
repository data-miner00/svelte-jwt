import Root from "../views/Root.svelte";
import Secured from "../views/Secured.svelte";
import NotFound from "../views/NotFound.svelte";

export default {
  "/": Root,
  "/secured": Secured,
  "*": NotFound,
};
