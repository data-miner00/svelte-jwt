<script>
	import Router from 'svelte-spa-router';
	import Home from './views/Home.svelte'
	export let name;
</script>

<div id="app">
	<Router 
		routes={{
			'/': Home,
		}}
	/>
</div>

<style>
	#app {
		min-height: 100vh;
		background: palegoldenrod;
	}
</style>