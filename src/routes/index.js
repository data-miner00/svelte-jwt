import Root from "../views/Root.svelte";
import Secured from "../views/Secured.svelte";
import NotFound from "../views/NotFound.svelte";
import Profile from "../views/Profile.svelte";

export default {
  "/": Root,
  "/secured": Secured,
  "/profile": Profile,
  "*": NotFound,
};
