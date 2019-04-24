<template lang="pug">
.navigation
  .navigation_shape
    .navigation_border.navigation_border-top
    .navigation_border.navigation_border-center
    .navigation_border.navigation_border-bottom
    .navigation_branch.navigation_branch-left
      nuxt-link.navigation_link.button(data-mouse="is-reduced" :data-text="projects.title" :to="projects.href")
        span.button_text(data-mouse="is-reduced") {{ projects.title }}
    .navigation_branch.navigation_branch-center
      nuxt-link.navigation_link.button(data-mouse="is-reduced" :data-text="about.title" :to="about.href")
        span.button_text(data-mouse="is-reduced") {{ about.title }}
    .navigation_branch.navigation_branch-right
      nuxt-link.navigation_link.button(data-mouse="is-reduced" :data-text="works.title" :to="works.href")
        span.button_text(data-mouse="is-reduced") {{ works.title }}
</template>

<script>
export default {
  data() {
    return {
      about: { title: 'About', href: '/about' },
      projects: { title: 'Projects', href: '/projects' },
      works: { title: 'Works', href: '/works' }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

$shapeSize = 50px
$borderSize = 2px
$linkGap = .5em

.navigation
  display flex
  justify-content center
  align-items center
  flex 1

  &_shape
    position relative
    width base-equilateral($shapeSize) * 2
    height $shapeSize

  &_border
    position absolute
    left 0
    width 100%

    &::before,
    &::after
      content ''
      position absolute
      background-color $white
      will-change transform

    &-top
      top 0

      &::before,
      &::after
        width $shapeSize
        height $borderSize
        top - ($borderSize / 2)

      &::before
        left 0
        transform rotateZ(-30deg) scaleX(0)
        transform-origin 0 50%
        animation scale-negative .25s linear 1.5s forwards

      &::after
        right 0
        transform rotateZ(30deg) scaleX(0)
        transform-origin 100% 50%
        animation scale-positive .25s linear 1.5s forwards

    &-center
      top 0
      height 100%

      &::before,
      &::after
        width $borderSize
        height 100%
        top 0
        transform scaleY(0)
        animation scale-center .25s linear 1.25s forwards

      &::before
        left - ($borderSize / 2)

      &::after
        right - ($borderSize / 2)

    &-bottom
      top 100%

      &::before,
      &::after
        width $shapeSize
        height $borderSize
        top - ($borderSize / 2)

      &::before
        left 0
        transform rotateZ(30deg) scaleX(0)
        transform-origin 0 50%
        animation scale-positive .25s linear 1.5s forwards

      &::after
        right 0
        transform rotateZ(-30deg) scaleX(0)
        transform-origin 100% 50%
        animation scale-negative .25s linear 1.5s forwards

  &_branch
    position absolute
    background-color $white
    width $borderSize
    height $shapeSize
    will-change transform

    &-left
      left - ($borderSize / 2)
      bottom 0
      transform-origin 50% 100%
      transform rotateZ(-120deg) scaleY(0)
      animation scale-left .25s linear 1.75s forwards

      & ^[-2]_link
        /* Exception due to font */
        // transform rotateZ(120deg) translate(-100%, 100%) translateX(- $linkGap)
        transform rotateZ(120deg) translate(-95%, 100%) translateX(- $linkGap)
        transform-origin 0 100%
        animation apperance-left .5s $cubic 2.25s forwards

    &-center
      left "calc(50% - %s / 2)" % $borderSize
      bottom "calc(100% + %s / 2)" % $shapeSize
      transform scaleY(0)
      transform-origin 50% 100%
      animation scale-center .25s linear 1.75s forwards

      & ^[-2]_link
        /* Exception due to font */
        // transform translate(-50%, - $linkGap)
        transform translate(-45%, - $linkGap)
        animation apperance-center .5s $cubic 2s forwards

    &-right
      right - ($borderSize / 2)
      bottom 0
      transform-origin 50% 100%
      transform rotateZ(120deg) scaleY(0)
      animation scale-right .25s linear 1.75s forwards

      & ^[-2]_link
        /* Exception due to font */
        // transform rotateZ(-120deg) translate($linkGap, 100%)
        transform rotateZ(-120deg) translate($linkGap, 105%)
        transform-origin 0 100%
        animation apperance-right .5s $cubic 2.25s forwards

  @keyframes scale-center
    from
      transform scaleY(0)
    to
      transform scaleY(1)

  @keyframes scale-positive
    from
      transform rotateZ(30deg) scaleX(0)
    to
      transform rotateZ(30deg) scaleX(1)

  @keyframes scale-negative
    from
      transform rotateZ(-30deg) scaleX(0)
    to
      transform rotateZ(-30deg) scaleX(1)

  @keyframes scale-left
    from
      transform rotateZ(-120deg) scaleY(0)
    to
      transform rotateZ(-120deg) scaleY(1)

  @keyframes scale-right
    from
      transform rotateZ(120deg) scaleY(0)
    to
      transform rotateZ(120deg) scaleY(1)

  &_link
    position absolute
    bottom calc(100% + .25em)
    font-size 2.5rem
    text-transform uppercase
    opacity 0
    will-change opacity, transform

  @keyframes apperance-left
    from
      opacity 0
      /* Exception due to font */
      // transform rotateZ(120deg) translate(-100%, 100%) translateX(- $linkGap)
      transform rotateZ(120deg) translate(-95%, 100%) translateX(- $linkGap)
    to
      opacity 1
      /* Exception due to font */
      // transform rotateZ(120deg) translate(-100%, 100%)
      transform rotateZ(120deg) translate(-95%, 100%)

  @keyframes apperance-center
    from
      opacity 0
      /* Exception due to font */
      // transform translate(-50%, - $linkGap)
      transform translate(-45%, - $linkGap)
    to
      opacity 1
      /* Exception due to font */
      // transform translate(-50%, 0)
      transform translate(-45%, 0)

  @keyframes apperance-right
    from
      opacity 0
      /* Exception due to font */
      // transform rotateZ(-120deg) translate($linkGap, 100%)
      transform rotateZ(-120deg) translate($linkGap, 105%)
    to
      opacity 1
      /* Exception due to font */
      // transform rotateZ(-120deg) translate(0, 100%)
      transform rotateZ(-120deg) translate(0, 105%)
</style>
