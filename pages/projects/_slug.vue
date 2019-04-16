<template lang="pug">
div
  h1 Salut
</template>

<script>
export default {
  data() {
    return {
      project: {}
    }
  },
  created() {
    const project = this.projects.find(project => project.slug === this.$route.params.slug)

    if (project && project !== null) this.project = project
    else this.$nuxt.error({ statusCode: 404, message: 'Project not found' })
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  }
}
</script>
