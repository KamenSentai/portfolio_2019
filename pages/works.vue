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

      }
    },
    leave(el, done) {
      const tl = new TimelineMax({ onComplete: done })


      tl.to('.container', 0, { pointerEvents: 'none' }, 0)

      if (this.$store.state.prevRoute === '/works') {

      }

      if (this.$store.state.nextRoute === '/') {
        tl.to('.navigation_menu', 1, { scaleX: 0 }, 0)
        tl.to('.navigation_main', 1, { y: - window.innerHeight / 4 }, .5)
      }
    }
  }
}
</script>
