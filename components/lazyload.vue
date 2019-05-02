<template lang="pug">
img.lazyload(:src="src" :alt="alt")
</template>

<script>
export default {
  props: [
    'src',
    'alt'
  ],
  mounted() {
    this.$el.removeAttribute('src')

    this.$el.addEventListener('load', () => {
      this.$el.classList.add('is-loaded')
    })

    this.$el.setAttribute('src', this.src)
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.lazyload
  opacity 0
  transition opacity 1s $cubic

  &.is-loaded
    opacity 1
</style>
