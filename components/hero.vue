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
    animation intro-up 1s $cubic forwards

  &_title
    font-size 10rem
    text-transform uppercase
    animation-delay .25s

    @media (max-width 650px), (max-height 550px)
      font-size 7.5rem

    @media (max-width 550px)
      font-size 5rem

    @media (max-width 450px)
      font-size 3.75rem

  &_subtitle
    font-size 7.5rem
    animation-delay .5s

    @media (max-width 650px), (max-height 550px)
      font-size 5rem

    @media (max-width 550px)
      font-size 3.75rem

    @media (max-width 450px)
      font-size 2.5rem

  &_text
    display block
</style>
