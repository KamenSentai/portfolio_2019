<template lang="pug">
.container
  navigation(
    :left="{ title: 'About', href: '/about' }"
    :right="{ title: 'Projects', href: '/projects' }"
  )
  .container_section
    nuxt-child
</template>

<script>
import Navigation from '@/components/navigation'

import { TimelineMax } from 'gsap'

export default {
  components: {
    'navigation': Navigation
  },
  transition: {
    mode: 'out-in',
    enter(el, done) {
      const tl = new TimelineMax({ onComplete: done })

      if (this.$store.state.prevRoute === '/') {
        tl.fromTo('.navigation_main', 1, { y: - window.innerHeight / 4 }, { y: 0 }, 0)
        tl.fromTo('.navigation_menu', 1, { scaleX: 0 }, { scaleX: 1 }, .5)
      }

      if (this.$store.state.nextRoute === '/works') {
        tl.fromTo('.grid_title', 1, { yPercent: -12.5, opacity: 0 }, { yPercent: 0, opacity: 1 }, 1)
        tl.fromTo('.grid_links', 1, { yPercent: -12.5, opacity: 0 }, { yPercent: 0, opacity: 1 }, 2)
        tl.fromTo('.grid_frame', 1, { opacity: 0 }, { opacity: 1 }, 2)
        tl.fromTo('.grid_mask-left', 1, { right: '50%' }, { right: '100%' }, 2)
        tl.fromTo('.grid_mask-right', 1, { left: '50%' }, { left: '100%' }, 2)
        tl.fromTo('.grid_mask-top', 1, { bottom: '50%' }, { bottom: '100%' }, 3)
        tl.fromTo('.grid_mask-bottom', 1, { top: '50%' }, { top: '100%' }, 3)
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
        tl.to('.grid_mask-top', 1, { bottom: '50%' }, 0)
        tl.to('.grid_mask-bottom', 1, { top: '50%' }, 0)
        tl.to('.grid_mask-left', 1, { right: '50%' }, 1)
        tl.to('.grid_mask-right', 1, { left: '50%' }, 1)
        tl.to('.grid_frame', 0, { opacity: 0 }, 2)
        tl.to('.grid_title', 1, { yPercent: -12.5, opacity: 0 }, 1)
        tl.to('.grid_links', 1, { yPercent: -12.5, opacity: 0 }, 1.5)
      }

      if (this.$store.state.nextRoute === '/') {
        tl.to('.navigation_menu', 1, { scaleX: 0 }, 0)
        tl.to('.navigation_main', 1, { y: - window.innerHeight / 4 }, .5)
      }
    }
  }
}
</script>
