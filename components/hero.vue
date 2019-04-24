<template lang="pug">
.hero
  h1 Alain Cao Van Truong
  h2 Full-stack developer
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.hero
  display flex
  flex-direction column
  justify-content center
  align-items center
  flex 1

  h1,
  h2
    letter-spacing (1/16 * 1em)
    opacity 0
    transform translateY(12.5%)
    will-change opacity, transform
    animation intro-title 1s $cubic forwards

  @keyframes intro-title
    from
      opacity 0
      transform translateY(12.5%)
    to
      opacity 1
      transform translateY(0)

  h1
    font-size 10rem
    text-transform uppercase
    animation-delay .25s

  h2
    font-size 7.5rem
    animation-delay .5s
</style>
