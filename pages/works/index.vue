<template lang="pug">
grid(
  :url="$route.path"
  :cards="works"
)
</template>

<script>
import Grid from '@/components/grid'

export default {
  head() {
    return {
      title: 'Alain Cao Van Truong | Works',
      meta: [
        { hid: 'description', name: 'description', content: 'Check out my little works and tests.' }
      ],
      bodyAttrs: {
        class: 'is-scrollable'
      }
    }
  },
  components: {
    'grid': Grid
  },
  computed: {
    works() {
      return this.$store.state.works
    }
  }
}
</script>
