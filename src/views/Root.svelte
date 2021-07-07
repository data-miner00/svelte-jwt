{#if !authenticated}
  <div class="root">
    <div class="root__illustration"></div>
    <div class="root__container">
      <div>
        <div class="root__container__logo">
          <img src="/svelte.png" alt="svelte logo" width="80">
        </div>
        <div class="root__container__login-label">
          <h1>Sign In</h1>
        </div>
        <form class="root__container__form" on:submit|preventDefault={login}>
          <div class="root__container__input">
            <label for="username">Username</label>
            <input type="text" id="username" bind:value={username}>
          </div>
          <div class="root__container__input">
            <label for="password">Password</label>
            <input type="password" id="password" bind:value={password}>
          </div>

          {#if errorMessage}
            <div class="root__container__error">
              <span>{errorMessage}</span>
            </div>
          {/if}

          <div class="root__container__login-btn">
            <button>Login</button>
          </div>
        </form>
        <div class="root__container__register-link">
          <span>Sign up for a new account</span>
        </div>
      </div>
      
    </div>
  </div>
{:else}
  <Home />
{/if}

<script>
  import { authState, accessToken, userInfo } from "../stores/index";
  import { _login } from '../services/authService';
  import Home from "./Home.svelte";
  import { onDestroy } from "svelte";

  let username = '';
  let password = '';

  let authenticated = false;
  let errorMessage = null;

  const unAuth = authState.subscribe(state => authenticated = state);

  onDestroy(unAuth);

  async function login() {

    if (!validateInput()) return;
    
    try {
      const res = await _login({ username, password });
      accessToken.set(res.accessToken);
      userInfo.set({
        username: res.username,
        id: res.id,
      });

      authState.update(value => value = true);
    } catch (error) {
      switch(error) {
        case 403: 
          errorMessage = "Wrong password, please try it again.";
          break;
        case 404:
          errorMessage = "The user does not exist.";
          break;
        default:
          errorMessage = error;
      }
    }
  }

  function validateInput() {
    if (username.length == 0 && password.length == 0) {
      errorMessage = "Please insert your username and password!";
      return false;
    }
   
    if (username.length == 0) {
      errorMessage = "Username can't be left blank!";
      return false;
    }

    if (password.length == 0) {
      errorMessage = "Please enter the password.";
      return false;
    } 

    return true;
  }
</script>


<style>
  .root {
    flex-grow: 1;
    
    height: 100vh;
    display: flex;
  }
  .root__illustration {
    flex: 3 1 0px;
    background-image: url("/landing2.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .root__container {
    flex: 2 1 0px;
    background: white;
    /* box-shadow: 2px 2px 5px 2px gray; */
    display: flex;
    padding: 50px 80px;
    justify-content: center;
    align-items: center;
  }
  .root__container div {
    max-width: 500px;
  }
  .root__container__logo {
    margin-bottom: 100px;
  }
  .root__container__logo img {
    width: 80px;
  }
  .root__container__form {
    margin-top: 50px;
    
  }
  .root__container__login-label {
    font-size: 24px;
  }
  .root__container__input {
    padding: 10px 0;
    position: relative;
    margin-top: 10px;
  }
  .root__container__input::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: #ff451c;
  }
  .root__container__input label {
    font-size: 20px;
    font-weight: 700;
  }
  .root__container__input input {
    border: none;
    font-size: 1.3em;
    width: 100%;
    padding: 8px 0 0;
    outline: none;
    color: rgb(92, 87, 87);
  }
  .root__container__login-btn {
    margin-top: 50px;
  }
  .root__container__login-btn button {
    font-size: 1em;
    padding: 8px 12px;
    width: 100%;
    border: none;
    background: #ff451c;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    transition: background .2s;
  }
  .root__container__login-btn button:hover {
    background: #ff7a5c;
  }
  .root__container__error {
    font-weight: 700;
    color: crimson;
  }
  .root__container__register-link {
    color: deepskyblue;
    margin-top: 10px;
    text-align: center;
  }
</style>