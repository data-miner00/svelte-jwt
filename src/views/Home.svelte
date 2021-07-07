<div class="home">
  <h1>Home</h1>
  <button on:click={logout}>Logout</button>
</div>

<script>
  import Icon from "svelte-awesome"
  import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
  import { authState } from '../stores'

  function logout() {
    authState.update(state => state = false)
  }
</script>

<style>

</style>