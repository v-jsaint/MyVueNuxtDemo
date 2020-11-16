<template>
<div>
    <Character v-for="character in characters" :key="character.id" :id="character.id" :first="character.name.first" :last="character.name.last"/>
</div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
import Character from '../../components/Character.vue'
export default {
  components: {
    Character
  },
  data (){
    return {
      characters: []
    }
  },
  async created () {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    try {
      const res = await axios.get('https://sampleapis.com/futurama/api/characters', config)
      this.characters = res.data.filter( x=> x.name);
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>
</style>
