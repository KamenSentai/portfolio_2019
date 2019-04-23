<template lang="pug">
div
  h1 {{ project.name }}
</template>

<script>
export default {
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
