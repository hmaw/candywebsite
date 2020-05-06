<template>
  <div id="app">
	<site-header/>
	<main>
		<router-view/>
	</main>
	<footer class="site_footer">Footer</footer>
  </div>
</template>

<script>
	import SiteHeader from '@/components/SiteHeader.vue'
	export default {
		name: "App",
		components: {
			SiteHeader
		}
	}
</script>

<style lang="scss">
	@import '/scss/main.scss';

</style>
