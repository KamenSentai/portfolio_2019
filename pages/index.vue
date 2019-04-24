<template lang="pug">
.container
  hero(ref="hero")
  navigation(ref="navigation")
</template>

<script>
import Hero from '@/components/hero'
import Navigation from '@/components/navigation'

import { TimelineMax } from 'gsap'

export default {
  head() {
    return {
      title: 'Alain Cao Van Truong | Full-stack developer',
      meta: [
        { hid: 'description', name: 'description', content: 'Full-stack developer and third year student at HETIC looking for a 5-month internship from July to November 2019.' }
      ]
    }
  },
  components: {
    'hero': Hero,
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
      tl.to('.hero_subtitle span', 0.5, { opacity: 0, y: '12.5%' }, 0)
      tl.to('.hero_title span', 0.5, { opacity: 0, y: '12.5%' }, 0.25)
      tl.to('.navigation', 0.5, { opacity: 0, y: '12.5%' }, .5)
    }
  }
}
</script>
