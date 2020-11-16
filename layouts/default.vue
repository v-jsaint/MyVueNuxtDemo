<template>
  <div>
    <AppHeader/>
    <Nuxt/>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
export default {
  components: {
    AppHeader
  }
}
</script>

<style>
body{
  background-color: rgb(145, 165, 165);
}
</style>
