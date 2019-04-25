<template lang="pug">
.page(:data-theme="$store.state.theme.color")
  mouse
  nuxt
</template>

<script>
import Mouse from '@/components/mouse'

export default {
  components: {
    'mouse': Mouse
  }
}
</script>
