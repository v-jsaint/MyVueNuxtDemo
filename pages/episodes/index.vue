<template>
  <div>
    <Episode v-for="episode in episodes" :key="episode.id" :id="episode.id" :title="episode.title" :originalAirDate="episode.originalAirDate"/>
  </div>
</template>

<script>
import axios from 'axios'
import Episode from '../../components/Episode.vue'
export default {
  components: {
    Episode
  },
  data () {
    return {
      episodes: []
    }
  },
  async created () {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    try {
      const res = await axios.get('https://sampleapis.com/futurama/api/episodes', config)
      this.episodes = res.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>

</style>
