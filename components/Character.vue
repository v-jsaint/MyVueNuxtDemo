<template>
  <div class="list-group-item w-50 mx-auto text-center h6">
      <nuxt-link class="text-dark" :to="'characters/' + id">{{ first }} {{last}}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Character',
  props: ['id', 'first', 'last']
}
</script>

<style>
</style>
