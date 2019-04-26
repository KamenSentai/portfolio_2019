<template lang="pug">

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
        class: 'is-scrollable'
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
