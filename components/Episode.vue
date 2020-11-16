<template>
  <div class="list-group-item w-50 mx-auto h6 row">
      <div class="border px-5 mx-5 d-inline-block w-50">{{ title }}</div> <div class="border px-5  d-inline-block">{{ originalAirDate }}</div>
  </div>
</template>

<script>
export default {
  name: 'Character',
  props: ['id', 'title', 'originalAirDate']
}
</script>

<style>

</style>
