<template>
  <div>
    <nuxt-link class="ml-5 pl-5" to="/characters">Back to List</nuxt-link>
    <div class="jumbotron w-75 mx-auto">
      <span v-if="character.name" class="display-4"> {{character.name.first}}</span>
      <span v-if="character.name" class="display-4 ml-3">{{character.name.last}}</span>
    </div>
    <span class="lead pl-5 ml-5 w-75 font-weight-bold">Occupation:</span>
    <span>{{character.occupation}}</span>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      character: {}
    }
  },
  async created () {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    try {
      const res = await axios.get(`https://sampleapis.com/futurama/api/characters/${this.$route.params.id}`, config)
      this.character = res.data
    } catch (error) {
      console.log(error)
    }
  }

}
</script>

<style>

</style>
