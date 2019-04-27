<template lang="pug">
.page(:data-theme="$store.state.color")
  mouse
  nuxt
</template>

<script>
import Mouse from '@/components/mouse'

export default {
  head() {
    return {
      htmlAttrs: {
        'data-theme': this.$store.state.color
      }
    }
  },
  components: {
    'mouse': Mouse
  }
}
</script>
