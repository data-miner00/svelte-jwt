<header class="header">
  <div class="header__left">
    <div>Svelte Login</div>
  </div>
  <div class="header__right">
    <div class="header__right__user" class:active={panelActive} on:click={togglePanelState}>
      <div class="avatar">
        <img src="http://localhost:5000/default_profile_bigger.png" alt="">
      </div>
      <div class="username">
        <div>Gimmy</div>
        <div class="icon">
          <div>
            <Icon data={faChevronDown} />
          </div>
        </div>
      </div>
    </div>
    <ul class="header__right__dropdown" class:active={panelActive}>
      <li on:click={logout}>Logout</li>
      <li on:click={() => navigate()}>Something</li>
      <li on:click={() => navigate('secured')}>Secured</li>
      <li on:click={() => navigate('profile')}>Profile</li>
    </ul>
  </div>
</header>

<script>
  import Icon from "svelte-awesome"
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
  import { onMount } from "svelte"
  import { authState } from '../stores'
  import { replace } from 'svelte-spa-router'

  function logout() {
    authState.update(state => state = false)
  }

  let panelActive = true;
  function togglePanelState() {
    panelActive = !panelActive
  }

  function navigate(path = "non-existence-path") {
    replace(`#/${path}`)
  }
  
</script>

<style>
.header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0 20%;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.header__left {
  font-size: 2em;
  font-weight: 800;
  color: #FF3E00;
}

.header__right {
  position: relative;
}

.header__right__user {
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 250px;
  padding: 10px 15px;
  transition: background 0.2s;
}

.header__right__user.active,
.header__right__user:hover {
  background-color: #eee;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 250px;
  overflow: hidden;
}

.avatar img {
  width: 30px;
}

.username {
  display: flex;
  margin-left: 10px;
  align-items: center;
  line-height: 24px;
}

.icon {
  margin-left: 10px;
}

.icon div {
  transform: translateY(3px);
}

.header__right__dropdown {
  display: none;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 5px 2px #eee;
}

.header__right__dropdown.active {
  display: block;
}

.header__right__dropdown li {
  list-style-type: none;
  width: 100%;
  /* font-size: 18px; */
  padding: 20px;
  background-color: aliceblue;
  transition: background .2s;
  cursor: pointer;
}

.header__right__dropdown li:hover {
  background-color: azure;
}
</style>