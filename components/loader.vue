<template lang="pug">
.loader(:data-theme="theme")
  .loader_shape
</template>

<script>
export default {
  props: [
    'theme'
  ]
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

$loaderSize = 100px

.loader
  position absolute
  left 0
  top 0
  z-index -5
  display flex
  justify-content center
  align-items center
  full-size()

  &[data-theme="black"]
    background-color $black
  &[data-theme="white"]
    background-color $white

  &_shape
    position relative
    width $loaderSize
    height $loaderSize

    &::before,
    &::after
      content ''
      position absolute
      full-size()
      border-radius 100%
      border-style solid
      border-width 5px
      opacity 0
      transform scale(0)
      transform-origin 50% 50%
      will-change opacity, transform
      animation animate-loader 2s $cubic infinite

      ^[-2][data-theme="black"] &
        border-color $white
      ^[-2][data-theme="white"] &
        border-color $black

    &::before
      animation-delay 1s

    &::after
      animation-delay 1.5s

    @keyframes animate-loader
      from
        transform scale(0)
        opacity 1
      to
        transform scale(1)
        opacity 0
</style>
