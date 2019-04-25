<template lang="pug">
nuxt-link.push(data-mouse="is-reduced" :data-text="title" :to="href")
  span.push_text(data-mouse="is-reduced") {{ title }}
</template>

<script>
export default {
  props: [
    'title',
    'href'
  ]
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.push
  position relative
  overflow hidden

  &::before
    content attr(data-text)
    position absolute
    left 0
    top 0
    transform translate3d(0, 150%, 0)
    transition transform .5s $cubic

  &:hover
    &::before
      transform translate3d(0, 0, 0)

    & ^[-1]_text
      transform translate3d(0, -150%, 0)

  &_text
    display block
    opacity 0
    transform translate3d(0, 0, 0)
    transition transform .5s $cubic
    animation opacity-toggle .5s $cubic .5s forwards

  @keyframes opacity-toggle
    from
      opacity 0
    to
      opacity 1
</style>
