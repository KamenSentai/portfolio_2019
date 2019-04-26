<template lang="pug">
jumbotron(
  :url="$route.path"
  :cards="projects"
)
</template>

<script>
import Jumbotron from '@/components/jumbotron'

export default {
  head() {
    return {
      title: 'Alain Cao Van Truong | Projects',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover my main projects since I have started web and mobile development.' }
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
    projects() {
      return this.$store.state.projects
    }
  }
}
</script>
