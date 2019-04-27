<template lang="pug">
.container
  navigation(
    :left="{ title: 'About', href: '/about' }"
    :right="{ title: 'Projects', href: '/projects' }"
  )
  .container_section
    grid(
      :url="$route.path"
      :cards="works"
    )
</template>

<script>
import Grid from '@/components/grid'
import Navigation from '@/components/navigation'

import { TimelineMax } from 'gsap'

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
    'grid': Grid,
    'navigation': Navigation
  },
  computed: {
    works() {
      return this.$store.state.works
    }
  },
  transition: {
    mode: 'out-in',
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: () => {
          TweenMax.set('.container', { clearProps: 'all' })
          TweenMax.set('.grid_frame', { clearProps: 'all' })
          done()
        }
      })

      tl.to('.container', 0, { pointerEvents: 'none' }, 0)

      if (this.$store.state.prevRoute === '/') {
        tl.fromTo('.navigation_main', 1, { y: - window.innerHeight / 4 }, { y: 0 }, 0)
        tl.fromTo('.navigation_menu', 1, { scaleX: 0 }, { scaleX: 1 }, .5)
      }

      if (this.$store.state.nextRoute === '/works') {
        tl.fromTo('.grid_title', 1, { yPercent: -12.5, opacity: 0 }, { yPercent: 0, opacity: 1 }, 1.5)
        tl.fromTo('.grid_links', 1, { yPercent: -12.5, opacity: 0 }, { yPercent: 0, opacity: 1 }, 2)
        tl.fromTo('.grid_frame', 1, { scaleY: 0 }, { scaleY: 1 }, 1)
        tl.fromTo('.grid_frame', 1, { width: 0 }, { width: '100%' }, 2)
      }
    },
    leave(el, done) {
      const tl = new TimelineMax({ onComplete: done })

      scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      })

      tl.to('.container', 0, { pointerEvents: 'none' }, 0)

      if (this.$store.state.prevRoute === '/works') {
        tl.to('.grid_frame', 1, { width: 0 }, 0)
        tl.to('.grid_frame', 1, { scaleY: 0 }, 1)
        tl.to('.grid_title', 1, { yPercent: -12.5, opacity: 0 }, .5)
        tl.to('.grid_links', 1, { yPercent: -12.5, opacity: 0 }, 1)
      }

      if (this.$store.state.nextRoute === '/') {
        tl.to('.navigation_menu', 1, { scaleX: 0 }, 0)
        tl.to('.navigation_main', 1, { y: - window.innerHeight / 4 }, .5)
      }
    }
  }
}
</script>
