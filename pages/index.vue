<template lang="pug">
.container
  hero
  navigation
</template>

<script>
import Hero from '@/components/hero'
import Navigation from '@/components/navigation'

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
  }
}
</script>
