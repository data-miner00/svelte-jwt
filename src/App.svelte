<div id="app">
	{#if authenticated}
		<Header />
	{/if}
	<Router 
		{routes}
	/>
</div>

<script>
	import Router from 'svelte-spa-router';
	import routes from "./routes"
	import Header from './components/Header.svelte'
	import { authState } from './stores'
	import { onDestroy } from 'svelte'

	let authenticated = false;

	const unAuth = authState.subscribe(state => authenticated = state)

	onDestroy(unAuth)

</script>

<style>
	#app {
		min-height: 100vh;
	}
</style>