<template lang="pug">
.page(:data-theme="$store.state.color")
  mouse(v-if="!isTouchevents")
  nuxt
</template>

<script>
import Mouse from '@/components/mouse'

export default {
  head() {
    return {
      htmlAttrs: {
        'data-theme': this.$store.state.color
      }
    }
  },
  data() {
    return {
      isTouchevents: false
    }
  },
  components: {
    'mouse': Mouse
  },
  computed: {
    checkTouchevents() {
      const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
      const mq = query => window.matchMedia(query).matches

      if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) return true

      const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')

      return mq(query)
    },
  },
  beforeMount() {
    this.isTouchevents = this.checkTouchevents
    this.$store.commit('TOGGLE_TOUCHEVENTS', this.isTouchevents)
  }
}
</script>
