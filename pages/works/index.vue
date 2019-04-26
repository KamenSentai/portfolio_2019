<template lang="pug">
jumbotron(
  :isMain="false"
  :cards="works"
)
</template>

<script>
import Jumbotron from '@/components/jumbotron'

export default {
  head() {
    return {
      title: 'Alain Cao Van Truong | Works',
      meta: [
        { hid: 'description', name: 'description', content: 'Check out my little works and tests.' }
      ],
      bodyAttrs: {
        class: 'is-unscrollable'
      }
    }
  },
  components: {
    'jumbotron': Jumbotron
  },
  computed: {
    works() {
      return this.$store.state.works
    }
  }
}
</script>
