<template lang="pug">
.project
  h1.project_title {{ project.name }}
  shape(
    :isReversed="false"
    :left="{ isPushing: project.code !== '', isExternal: true, title: project.code !== '' ? 'View code' : 'Code unavailable', href: project.code }"
    :center="{ isPushing: false, title: projectDate }"
    :right="{ isPushing: project.demo !== '', isExternal: true, title: project.demo !== '' ? 'View demo' : 'Demo unavailable', href: project.demo }"
  )
  .project_description {{ project.description }}
</template>

<script>
import Shape from '@/components/shape'

import moment from 'moment'

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
  components: {
    'shape': Shape
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
    project() {
      return this.projects.find(project => project.slug === this.$route.params.slug) || {}
    },
    projectDate() {
      return moment(this.project.date).format('MMMM YYYY')
    }
  },
  methods: {
    mod(n, m) {
      return ((n % m) + m) % m
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.project
  display flex
  flex-direction column
  align-items center
  width 100%

  &_title
    display block
    width 100%
    margin 50px 0
    padding 0 100px
    font-size 10rem
    font-weight 700
    text-transform uppercase
    text-align center

    @media (max-width 650px)
      font-size 7.5rem
      padding 0 50px

    @media (max-width 550px)
      font-size 5rem

    @media (max-width 450px)
      font-size 3.75rem

  &_description
    margin 50px
    max-width 750px
    font-size 3.75rem
    text-align justify
    text-align-last center

    @media (max-width 625px)
      font-size 3.75rem
</style>
