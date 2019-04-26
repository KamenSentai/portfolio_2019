<template lang="pug">
.page(:data-theme="$store.state.theme.color")
  mouse
  nuxt
</template>

<script>
import Mouse from '@/components/mouse'

export default {
  head() {
    return {
      htmlAttrs: {
        'data-theme': this.$store.state.theme.color
      }
    }
  },
  components: {
    'mouse': Mouse
  }
}
</script>
