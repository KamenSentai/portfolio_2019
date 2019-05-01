<template lang="pug">
.container
  .container_section
    hero
  .container_section
    shape(
      :isReversed="false"
      :left="{ isPushing: true, isExternal: false, title: 'Projects', href: '/projects' }"
      :center="{ isPushing: true, isExternal: false, title: 'About', href: '/about' }"
      :right="{ isPushing: true, isExternal: false, title: 'Lab', href: '/lab' }"
    )
</template>

<script>
import Hero from '@/components/hero'
import Shape from '@/components/shape'

import { TimelineMax } from 'gsap'

export default {
  head() {
    return {
      title: 'Alain CAO VAN TRUONG | Full-stack developer',
      meta: [
        { hid: 'description', name: 'description', content: 'Full-stack developer and third year student at HETIC looking for a 5-month internship from July to November 2019.' }
      ],
      bodyAttrs: {
        class: 'is-unscrollable'
      }
    }
  },
  components: {
    'hero': Hero,
    'shape': Shape
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
      tl.to('.shape_branch', 0.5, { opacity: 0 }, .5)
      tl.to('.shape', 0.5, { opacity: 0, y: '12.5%' }, .75)
    }
  }
}
</script>
