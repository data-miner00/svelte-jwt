{#if authenticated}
  <div class="secured">
    <h1>Secured</h1>
    <p>This is a secured page</p>
  </div>
{:else}
  <Forbidden />
{/if}

<script>
  import { authState } from "../stores"
  import { onDestroy } from "svelte"
  import Forbidden from "./Forbidden.svelte"

  let authenticated = false;

  const unAuth = authState.subscribe(state => authenticated = state)

  onDestroy(unAuth)
</script>

<style>
  .secured {
    padding: 20px 20%;
  }
</style>