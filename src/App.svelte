<script>
	import Router from 'svelte-spa-router';
	import Home from './views/Home.svelte'
	import Root from './views/Root.svelte'
	import NotFound from './views/NotFound.svelte'
	export let name;
	let authenticated = false;
</script>

<div id="app">
	<Router 
		routes={{
			'/': authenticated ? Home : Root,
			'*': NotFound
		}}
	/>
</div>

<style>
	#app {
		min-height: 100vh;
	}
</style>