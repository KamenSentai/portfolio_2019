<template lang="pug">
.page
  mouse
  loader
  nuxt
</template>

<script>
import Mouse from '@/components/mouse'
import Loader from '@/components/loader'

export default {
  components: {
    'mouse': Mouse,
    'loader': Loader
  }
}
</script>
