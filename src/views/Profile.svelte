<div class="profile">

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

</style>