<template lang="pug">
.hero
  h1.hero_title
    span.hero_text Alain Cao Van Truong
  h2.hero_subtitle
    span.hero_text Full-stack developer
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.hero
  text-align center

  &_title,
  &_subtitle
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

  &_title
    font-size 10rem
    text-transform uppercase
    animation-delay .25s

  &_subtitle
    font-size 7.5rem
    animation-delay .5s

  &_text
    display block
</style>
