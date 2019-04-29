<template lang="pug">
.container
  navigation(
    :left="{ title: 'Lab', href: '/lab' }"
    :right="{ title: 'About', href: '/about' }"
  )
  .container_section
    jumbotron(
      :cards="projects"
    )
</template>

<script>
import Jumbotron from '@/components/jumbotron'
import Navigation from '@/components/navigation'

import { TimelineMax } from 'gsap'

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
    'jumbotron': Jumbotron,
    'navigation': Navigation
  },
  computed: {
    projects() {
      return this.$store.state.projects
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

      if (this.$store.state.prevRoute === '/') {
        tl.fromTo('.navigation_main', 1, { y: - window.innerHeight / 4 }, { y: 0 }, 0)
        tl.fromTo('.navigation_menu', 1, { scaleX: 0 }, { scaleX: 1 }, .5)
      }

      tl.fromTo('.jumbotron_button', 1, { rotationX: '90deg' }, { rotationX: 0 }, 0)
      tl.fromTo('.jumbotron_frame', 1, { scaleX: 0 }, { scaleX: 1 }, 1)
      tl.fromTo('.jumbotron_frame', 1, { height: 0 }, { height: '100%' }, 2)
      tl.fromTo('.jumbotron_titles', 1, { opacity: 0 }, { opacity: 1 }, 2.5)
    },
    leave(el, done) {
      const tl = new TimelineMax({ onComplete: done })

      tl.to('.jumbotron_buttons', 0, { opacity: 0 }, 1)
      tl.to('.jumbotron_indicator', .5, { scaleX: 0 }, 0)
      tl.to('.jumbotron_button', 1, { rotationX: '-90deg' }, 0)
      tl.to('.jumbotron_frame', 1, { height: 0 }, 0)
      tl.to('.jumbotron_frame', 1, { scaleX: 0 }, 1)

      if (!this.$store.state.nextRoute.includes('/projects/')) {
        tl.to('.container', 0, { pointerEvents: 'none' }, 0)
        tl.to('.jumbotron_titles', 1, { opacity: 0 }, 1)
      }

      if (this.$store.state.nextRoute === '/') {
        tl.to('.navigation_menu', 1, { scaleX: 0 }, 0)
        tl.to('.navigation_main', 1, { y: - window.innerHeight / 4 }, .5)
      }
    }
  }
}
</script>
