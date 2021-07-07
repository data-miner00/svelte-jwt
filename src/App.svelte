<div id="app">
	<Router 
		{routes}
	/>
</div>

<script>
	import Router from 'svelte-spa-router';
	import routes from "./routes"
</script>

<style>
	#app {
		min-height: 100vh;
	}
</style>