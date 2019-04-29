<template lang="pug">
.page(:data-theme="$store.state.theme")
  particle
  nuxt
</template>

<script>
import Particle from '@/components/particle'

export default {
  head() {
    return {
      htmlAttrs: {
        'data-theme': this.$store.state.theme
      }
    }
  },
  components: {
    'particle': Particle
  }
}
</script>
