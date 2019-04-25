<template lang="pug">
.container
  navigation(
    :left="{ title: 'Projects', href: '/projects' }"
    :right="{ title: 'Works', href: '/works' }"
  )
  .container_page
    h1.container_title About
    shape(
      :isPushing="false"
      :isReversed="true"
      left="Full"
      center="developer"
      right="stack"
    )
</template>

<script>
import Navigation from '@/components/navigation'
import Shape from '@/components/shape'

import { TimelineMax } from 'gsap'

export default {
  head() {
    return {
      title: 'Alain Cao Van Truong | About',
      meta: [
        { hid: 'description', name: 'description', content: 'Take a look of my portrait, my education, my experiences, my skills and my interests.' }
      ]
    }
  },
  components: {
    'navigation': Navigation,
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
    }
  }
}
</script>
