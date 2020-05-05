<template>
	<header class='site_header'>
		<nav id="nav" class="site_nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/contact">Contact</router-link> |
			<router-link to="/theme">Theme</router-link> 
		</nav>
		<div class='logo_container'>
			<img alt="Vue logo image" src="../assets/logo.png">
			<h2>Puff Daddy</h2>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'SiteHeader'
	}
</script>

<style lang="scss">
</style>
