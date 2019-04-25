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
      done()
    },
    leave(el, done) {
      const tl = new TimelineMax({ onComplete: done })

      tl.to('.container', 0, { pointerEvents: 'none' }, 0)
    }
  }
}
</script>
