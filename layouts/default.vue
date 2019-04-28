<template lang="pug">
.page(:data-theme="$store.state.color")
  nuxt
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        'data-theme': this.$store.state.color
      }
    }
  }
}
</script>
