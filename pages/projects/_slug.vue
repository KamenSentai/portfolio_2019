<template lang="pug">
.container
  navigation(
    :left="{ title: 'Works', href: '/works' }"
    :right="{ title: 'About', href: '/about' }"
  )
  .container_section
    .project
      h1.project_title {{ project.name }}
      shape(
        :isReversed="false"
        :left="{ isPushing: project.code !== '', isExternal: true, title: project.code !== '' ? 'View code' : 'Code unavailable', href: project.code }"
        :center="{ isPushing: false, title: projectDate }"
        :right="{ isPushing: project.demo !== '', isExternal: true, title: project.demo !== '' ? 'View demo' : 'Demo unavailable', href: project.demo }"
      )
      .project_description
        p.project_paragraph(v-for="paragraph of project.description") {{ paragraph }}
</template>

<script>
import Navigation from '@/components/navigation'
import Shape from '@/components/shape'

import { TimelineMax } from 'gsap'
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
    'navigation': Navigation,
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
  },
  transition: {
    mode: 'out-in',
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: () => {
          TweenMax.set('.container', { clearProps: 'all' })
          done()
        }
      })

      tl.to('.container', 0, { pointerEvents: 'none' }, 0)

      if (this.$store.state.nextRoute.includes('/projects/')) {

      }
    },
    leave(el, done) {
      const tl = new TimelineMax({ onComplete: done })

      if (this.$store.state.prevRoute.includes('/projects/')) {

      }

      if (this.$store.state.nextRoute === '/') {
        tl.to('.navigation_menu', 1, { scaleX: 0 }, 0)
        tl.to('.navigation_main', 1, { y: - window.innerHeight / 4 }, .5)
      }
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
    display flex
    flex-direction column
    align-items center
    width 100%
    padding 50px 0
    color rgba($black, .75)
    font-family $euclidtriangle
    font-size 2rem
    letter-spacing 0
    line-height 1.25em
    text-align justify
    background-color $white

  &_paragraph
    margin-bottom 1em
    width grid(8)
</style>
