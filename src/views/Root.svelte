<div class="root">
  <div class="root__container">
    <div class="root__container__welcome">
      <h1>Welcome to Svelte Login</h1>
    </div>
    <div class="root__container__input">
      <input type="text" placeholder="username" bind:value={username}>
    </div>
    <div class="root__container__input">
      <input type="password" placeholder="password" bind:value={password}>
    </div>
    <div class="root__container__input">
      <button on:click={login}>Login</button>
    </div>
    
    <div class="root__container__register-link">
      { accessToken }
    </div>
  </div>
</div>

<script>
  import { authenticated } from "../stores/index"
  import { _login } from '../services/authService'

  let username = '';
  let password = '';
  let accessToken = '';
  

  async function login() {
    try {
      const res = await _login({ username, password })
      accessToken = res.accessToken
      console.log(accessToken)
    } catch (error) {
      accessToken = "WTF are you trying to do"
    }
  }
</script>


<style>
  .root {
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  .root__container {
    max-width: 500px;
    height: 600px;
    background: #eee;
    flex-direction: column;
    padding: 10px;
  }
  .root__container__welcome {
    text-decoration: underline;
  }
  .root__container__input {
    padding: 10px 0;
  }
  .root__container__input input,
  .root__container__input button {
    font-size: 1em;
    padding: 5px 8px;
    width: 100%;
  }
</style>