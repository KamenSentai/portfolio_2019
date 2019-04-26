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
    .container_text
      p.container_paragraph My name is Alain Cao Van Truong.
      p.container_paragraph I am a third-year studend at <push class="text-bold" :isExternal="true" title="HÉTIC" href="https://www.hetic.net"/>
      p.container_paragraph I experiment front-end, back-end and mobile development.
</template>

<script>
import Navigation from '@/components/navigation'
import Push from '@/components/push'
import Shape from '@/components/shape'

import { TimelineMax } from 'gsap'

export default {
  head() {
    return {
      title: 'Alain Cao Van Truong | About',
      meta: [
        { hid: 'description', name: 'description', content: 'Take a look of my portrait, my education, my experiences, my skills and my interests.' }
      ],
      bodyAttrs: {
        class: 'is-scrollable'
      }
    }
  },
  components: {
    'navigation': Navigation,
    'push': Push,
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
