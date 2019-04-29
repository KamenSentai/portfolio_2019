<template lang="pug">
.page(:data-theme="$store.state.color")
  particle
  nuxt
</template>

<script>
import Particle from '@/components/particle'

export default {
  head() {
    return {
      htmlAttrs: {
        'data-theme': this.$store.state.color
      }
    }
  },
  components: {
    'particle': Particle
  }
}
</script>
