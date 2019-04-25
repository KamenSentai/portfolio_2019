<template lang="pug">

</template>

<script>
export default {
  head() {
    return {
      title: 'Alain Cao Van Truong | Projects',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover my main projects since I have started web and mobile development.' }
      ],
      bodyAttrs: {
        class: 'is-scrollable'
      }
    }
  },
  created() {
    if (Object.keys(this.project).length === 0) this.$nuxt.error({ statusCode: 404, message: 'Project not found' })
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
    project() {
      return this.projects.find(project => project.slug === this.$route.params.slug) || {}
    }
  }
}
</script>
