<template lang="pug">
.page(:data-theme="$store.state.theme")
  filaments
  nuxt
</template>

<script>
import Filaments from '@/components/filaments'

export default {
  head() {
    return {
      htmlAttrs: {
        'data-theme': this.$store.state.theme,
      }
    }
  },
  components: {
    'filaments': Filaments,
  },
}
</script>
