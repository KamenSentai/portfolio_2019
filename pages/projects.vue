<template lang="pug">
.container
  navigation(
    :left="{ title: 'Works', href: '/works' }"
    :right="{ title: 'About', href: '/about' }"
  )
  .container_section
    nuxt-child
</template>

<script>
import Navigation from '@/components/navigation'

import { TimelineMax } from 'gsap'

export default {
  head() {
    return {
      title: 'Alain Cao Van Truong | Projects',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover my main projects since I have started web and mobile development.' }
      ]
    }
  },
  components: {
    'navigation': Navigation
  },
  transition: {
    mode: 'out-in',
    enter(el, done) {
      done()
    },
    leave(el, done) {
      const tl = new TimelineMax({ onComplete: done })

      tl.to('.container', 0, { pointerEvents: 'none' }, 0)
    }
  }
}
</script>
