<template>
  <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav w-75 d-flex align-items-center mx-auto">
          <li class="nav-item mx-auto">
              <nuxt-link class="d-inline-block" to='/'>
                <Logo/>
                <span class="h3 d-inline-block pt-2">Futurama-VueNuxt</span>
              </nuxt-link>
          </li>
         <li class="nav-item mx-auto">
              <nuxt-link class="text-decoration-none" to='/characters'><span class="h3">Characters</span></nuxt-link>
          </li>
           <li class="nav-item mx-auto">
              <nuxt-link class="text-decoration-none" to='/episodes'><span class="h3">Episodes</span></nuxt-link>
          </li>
          <li class="nav-item mx-auto">
              <nuxt-link class="text-decoration-none" to='/about'><span class="h3"></span>About</nuxt-link>
          </li>
      </ul>
      </nav>
  </header>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'AppHeader'
}
</script>

<style>
</style>
