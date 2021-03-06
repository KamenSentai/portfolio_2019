<template lang="pug">
.jumbotron(@touchstart="touchStart" @touchmove="touchMove")
  .jumbotron_frame(
    ref="frame"
  )
    nuxt-link.jumbotron_link(
      v-for="(card, index) in cards"
      :key="index"
      :to="{ path: `/${$route.name}/${card.slug}` }"
      :data-display="index === page ? 'flex' : 'none'"
    )
      loader(:theme="$store.state.theme")
      lazyload.jumbotron_image(
        :src="require(`~/assets/images/${card.cover}`)"
        :alt="card.name"
      )
  .jumbotron_buttons
    .jumbotron_button.jumbotron_button-up(
      @click="slideUp"
    )
    .jumbotron_button.jumbotron_button-down(
      @click="slideDown"
    )
  .jumbotron_titles
    h2.jumbotron_title(
      ref="subtitle"
      v-for="(card, index) in cards"
      :key="index"
      :data-display="index === page ? 'block' : 'none'"
    ) {{ card.name }}
  .jumbotron_indicators
    indicator.jumbotron_indicator.jumbotron_indicator-left(:total="cards.length" :page="page")
    indicator.jumbotron_indicator.jumbotron_indicator-right(:total="cards.length" :page="page")
</template>

<script>
import Indicator from './indicator'
import Lazyload from './lazyload'
import Loader from './loader'

import { TimelineMax } from 'gsap'

export default {
  data() {
    return {
      page: 0,
      isSliding: false,
      initialX: null,
      initialY: null,
    }
  },
  props: [
    'url',
    'cards',
  ],
  computed: {
    subtitle() {
      return this.$refs.subtitle[this.page]
    },
  },
  components: {
    'indicator': Indicator,
    'lazyload': Lazyload,
    'loader': Loader,
  },
  methods: {
    mod(n, m) {
      return ((n % m) + m) % m
    },
    slideUp() {
      if (!this.isSliding && this.subtitle && this.$refs.frame) {
        this.isSliding = true

        const tl = new TimelineMax({ onReverseComplete: () => {
          this.isSliding = false
        }})

        this.subtitle.dataset.display = 'none'

        tl.to(this.$refs.frame, 1, {
          width: 0,
          onComplete: () => {
            this.page = this.mod(this.page - 1, this.cards.length)
            tl.reverse()
          }
        })
      }
    },
    slideDown() {
      if (!this.isSliding && this.subtitle && this.$refs.frame) {
        this.isSliding = true

        const tl = new TimelineMax({ onReverseComplete: () => {
          this.isSliding = false
        }})

        this.subtitle.dataset.display = 'none'

        tl.to(this.$refs.frame, 1, {
          width: 0,
          onComplete: () => {
            this.page = this.mod(this.page + 1, this.cards.length)
            tl.reverse()
          }
        })
      }
    },
    keyPress(event) {
      switch (event.keyCode) {
        case 38:
          this.slideUp()
          break

        case 40:
          this.slideDown()
          break

        default:
          break
      }
    },
    wheel(event) {
      if (event.deltaY < 0) this.slideUp()
      else if (event.deltaY > 0) this.slideDown()
    },
    touchStart(event) {
      this.initialX = event.touches[0].clientX
      this.initialY = event.touches[0].clientY
    },
    touchMove(event) {
      if (this.initialX === null || this.initialY === null) return

      let currentX = event.touches[0].clientX
      let currentY = event.touches[0].clientY

      let diffX = this.initialX - currentX
      let diffY = this.initialY - currentY

      if (Math.abs(diffX) < Math.abs(diffY)) {
        if (diffY < 0) this.slideUp()
        else this.slideDown()
      }

      this.initialX = null
      this.initialY = null
    },
  },
  mounted() {
    window.addEventListener('keydown', this.keyPress)
    window.addEventListener('wheel', this.wheel)
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

$framSize = 75%
$buttonSize = 50px
$indicatorSize = 50px

.jumbotron
  position relative
  display flex
  justify-content center
  align-items center
  full-size()
  padding-bottom $buttonSize

  @media (max-height 450px)
    padding-bottom ($buttonSize * 2 / 3)

  &_frame
    position relative
    display flex
    justify-content center
    align-items center
    width $framSize
    height 100%
    margin 0 50px
    border 2px solid white
    overflow hidden

    &:hover ^[-1]_image
      transform scale(.8125)

  &_link
    position relative
    display flex
    justify-content center
    align-items center
    full-size()

    &[data-display="flex"]
      display flex
    &[data-display="none"]
      display none

    &::before
      content ''
      position absolute
      left 0
      top 0
      full-size()
      background-color $black
      opacity .5

  &_image
    position absolute
    z-index -1
    min-width (4 / 3) * 100%
    min-height (4 / 3) * 100%
    transform scale(.75)
    transition transform 1s $cubic
    will-change transform

  &_buttons
    position absolute
    left "calc(50% - %s / 2)" % $buttonSize
    bottom 0
    display flex
    flex-direction column
    box-shadow 0 0 25px rgba($black, .25)
    perspective 750px

    @media (max-height 450px)
      left "calc(50% - %s / 2)" % ($buttonSize * 2 / 3)

  &_button
    position relative
    display block
    width $buttonSize
    height $buttonSize
    background-color $white
    cursor pointer
    transition box-shadow .5s $cubic

    @media (max-height 450px)
      width ($buttonSize * 2 / 3)
      height ($buttonSize * 2 / 3)

    &::before,
    &::after
      content: ''
      position absolute
      left calc(50% - 1px)
      width 2px
      height 25%
      background-color $black

    &::before
      transform skewX(-30deg)

    &::after
      transform skewX(30deg)

    &-up,
    &-down
      &:hover
        box-shadow 0 0 ($buttonSize / 4) rgba($black, .25) inset

        @media (max-height 450px)
          box-shadow 0 0 (($buttonSize * 2 / 3) / 4) rgba($black, .25) inset

    &-up
      border-bottom 1px solid rgba($black, .25)
      transform-origin 50% 100%

      &::before,
      &::after
        top 37.5%
        transform-origin 50% 0

    &-down
      border-top 1px solid rgba($black, .25)
      transform-origin 50% 0

      &::before,
      &::after
        bottom 37.5%
        transform-origin 50% 100%

  &_titles
    pointer-events none

  &_title
    position absolute
    left 0
    top 0
    display block
    width 100%
    margin 50px 0
    padding 0 100px
    font-size 10rem
    font-weight 700
    text-align center
    text-shadow 0 0 10px rgba($black, .25)
    transition opacity .5s $cubic, transform .5s $cubic

    @media (max-width 650px)
      font-size 7.5rem
      padding 0 50px

    @media (max-width 550px)
      font-size 5rem

    @media (max-width 450px)
      font-size 3.75rem

    &[data-display="block"]
      opacity 1
    &[data-display="none"]
      opacity 0
      transform translateY(-12.5%)

  &_indicators
    position absolute
    left 12.5%
    width $framSize
    bottom $buttonSize * 1.5
    pointer-events none

  &_indicator
    position absolute
    bottom 0
    width $indicatorSize * 2
    height $indicatorSize

    &-left
      left - $indicatorSize
      transform scaleX(1)

    &-right
      right - $indicatorSize
      transform scaleX(-1)
</style>
