<template>
  <div id="app">
    <nav id="nav" class="site_nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
	  <router-link to="/contact">Contact</router-link> |
	  <router-link to="/theme">Theme</router-link> 
    </nav>
	
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '/scss/main.scss';

</style>
