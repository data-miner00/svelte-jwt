<div class="profile">
  <div class="profile__container">
    <div class="profile__instance">
      <div class="profile__instance__label">ID</div>
      <div class="profile__instance__value">{profile.id}</div>
    </div>
    <div class="profile__instance">
      <div class="profile__instance__label">Username</div>
      <div class="profile__instance__value">{profile.username}</div>
    </div>
    <div class="profile__instance">
      <div class="profile__instance__label">Phone Number</div>
      <div class="profile__instance__value">{profile.phoneNumber}</div>
    </div>
    <div class="profile__instance">
      <div class="profile__instance__label">Email</div>
      <div class="profile__instance__value">{profile.email}</div>
    </div>
    <div class="profile__instance">
      <div class="profile__instance__label">Age</div>
      <div class="profile__instance__value">{profile.age}</div>
    </div>
  </div>
</div>

<script>
  import { onMount, onDestroy } from 'svelte';
  import { getProfile } from "../services/apiService"
  import { userInfo } from "../stores"

  let profile = {
    id: -1,
    username: "",
    phoneNumber: "",
    email: "",
    age: -1,
  };
  let userId;

  const unUser = userInfo.subscribe(i => userId = i.id)

  onMount(async () => {
    try {
      profile = await getProfile(userId)
      console.log(profile);
    } catch (err) {
      console.error(err);
    }
  })

  onDestroy(unUser)
</script>

<style>
  .profile {
    padding: 0 20%;
  }
  .profile__instance {
    padding: 20px 0;
  }
  .profile__instance__label {
    font-size: 1.5em;
    font-weight: 700;
    color: gray;
  }
  .profile__instance__value {
    font-size: 1.5em;
    color: #ff3E00;
    font-weight: 700;
  }
</style>