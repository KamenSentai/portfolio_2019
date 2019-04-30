<template lang="pug">
.page(:data-theme="$store.state.theme")
  particles
  nuxt
</template>

<script>
import Particles from '@/components/particles'

export default {
  head() {
    return {
      htmlAttrs: {
        'data-theme': this.$store.state.theme
      }
    }
  },
  components: {
    'particles': Particles
  }
}
</script>
