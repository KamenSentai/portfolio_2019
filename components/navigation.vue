<template lang="pug">
.navigation(:data-theme="$store.state.theme" :data-touchevents="isTouchEvents ? 'true' : 'false'")
  nuxt-link.navigation_main(to="/" title="Home")
    svg.navigation_logo(
      x="0px"
      y="0px"
      viewBox="0 0 125 162.5"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    )
      path.navigation_logo_top(d="M65,118.8V40h8.5l9,22.5h5L62.5,0l-25,62.5h5l9-22.5H60v78.8L42.5,75h-5l25,62.5l25-62.5h-5L65,118.8z M62.5,12.5l9,22.5 h-18L62.5,12.5z")
      path.navigation_logo_bottom(d="M98.1,48.6l-1.9,4.8C110.6,63.8,120,80.8,120,100c0,31.8-25.7,57.5-57.5,57.5S5,131.8,5,100c0-19.2,9.4-36.2,23.9-46.6 l-1.9-4.8C10.7,59.9,0,78.7,0,100c0,34.5,28,62.5,62.5,62.5s62.5-28,62.5-62.5C125,78.7,114.3,59.9,98.1,48.6z")
  .navigation_menu
    .navigation_stripe
    .navigation_stripe.navigation_stripe-middle
      push.navigation_link.navigation_link-left.button(
        positionValue="absolute"
        :isExternal="false"
        :isTexted="true"
        :title="left.title"
        :href="left.href"
      )
      push.navigation_link.navigation_link-right.button(
        positionValue="absolute"
        :isExternal="false"
        :isTexted="true"
        :title="right.title"
        :href="right.href"
      )
    .navigation_stripe
</template>

<script>
import Push from './push'

export default {
  data() {
    return {
      isTouchEvents: false,
    }
  },
  props: [
    'left',
    'right',
  ],
  components: {
    'push': Push,
  },
  mounted() {
    this.isTouchEvents = this.$store.state.isTouchevents
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

$logoSize = 50px
$stripeWidth = 50px
$stripeHeight = 2px
$linkGap = .5em

.navigation
  display flex
  flex-direction column
  justify-content center
  align-items center
  flex-shrink 0
  width 100%
  padding 25px 0

  &_main,
  &_menu
    z-index 0
    margin 25px

    @media (max-height 500px)
      margin 12.5px

  &_main
    display flex

    @media (max-height 450px)
      margin-top 0

  &_logo
    width auto
    height $logoSize
    transition fill 1s $cubic 1s

    ^[-1][data-theme="black"] &
      fill $white

    ^[-1][data-theme="white"] &
      fill $black

    &_top,
    &_bottom
      transition transform .5s $cubic

    &_top
      ^[-1]:hover &
        transform translateY(12.5%)

    &_bottom
      transform-origin 50% 50%
      ^[-1]:hover &
        transform scale(0)

  &_menu
    display flex
    flex-direction column
    align-items center
    width $stripeWidth * 2

    @media (max-height 450px)
      margin-bottom 0

  &_stripe
    width 50%
    height $stripeHeight
    transition background-color 1s $cubic 1s, transform .5s $cubic

    ^[-1]:hover &
    ^[-1][data-touchevents="true"] &
      transform scaleX(1)

    ^[-1][data-theme="black"] &
      background-color $white

    ^[-1][data-theme="white"] &
      background-color $black

    &-middle
      position relative
      width 100%
      margin 10px 0
      transform scaleX(.5)
      transform-origin 50% 50%

  &_link
    position absolute
    top 50%
    font-size 2.5rem
    font-weight 700
    opacity 0
    transition opacity .5s $cubic, transform .5s $cubic

    ^[-1]:hover &,
    ^[-1][data-touchevents="true"] &
      opacity 1
      /* Exception due to font */
      // transform translate(0, -50%)
      transform translate(0, -40%)

    &-left
      right calc(100% + .5em)
      transform-origin 100% 50%
      /* Exception due to font */
      // transform translate(- $linkGap, -50%) scaleX(2)
      transform translate($linkGap, -40%) scaleX(2)

    &-right
      /* Exception due to font */
      // left calc(100% + .5em)
      left calc(105% + .5em)
      transform-origin 0 50%
      /* Exception due to font */
      // transform translate($linkGap, -50%) scaleX(2)
      transform translate(- $linkGap, -40%) scaleX(2)
</style>
