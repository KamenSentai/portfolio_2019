<template lang="pug">

</template>

<script>
export default {
  head() {
    return {
      title: `Alain Cao Van Truong | ${this.project.name}`,
      meta: [
        { hid: 'description', name: 'description', content: `This is one of my projects named "${this.project.name}".` }
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
