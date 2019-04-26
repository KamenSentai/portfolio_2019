<template lang="pug">
.jumbotron
  .jumbotron_frame(ref="frame" v-if="isMain" data-mouse="is-reduced")
    nuxt-link.jumbotron_link(v-for="(card, index) in cards" :key="index" :to="`${url}/${card.slug}`" :data-display="index === page ? 'flex' : 'none'")
      img.jumbotron_image(data-mouse="is-reduced" :src="require(`../assets/images/${card.cover}`)")
  .jumbotron_buttons
    button.jumbotron_button.jumbotron_button-up(data-mouse="is-reduced" @click="slideUp")
    button.jumbotron_button.jumbotron_button-down(data-mouse="is-reduced" @click="slideDown")
  .jumbotron_titles
    h2.jumbotron_title(ref="subtitle" v-if="isMain" v-for="(card, index) in cards" :key="index" :data-display="index === page ? 'block' : 'none'") {{ card.name }}
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  data() {
    return {
      page: 0,
      isSliding: false
    }
  },
  props: [
    'isMain',
    'url',
    'cards'
  ],
  computed: {
    subtitle() {
      return this.$refs.subtitle[this.page]
    }
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
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyPress)
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

$buttonSize = 50px

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
    display flex
    justify-content center
    align-items center
    width 75%
    height 100%
    margin 0 50px
    background-color $black
    border 2px solid white
    overflow hidden

    &:hover ^[-1]_image
      transform scale(.75)
      opacity 1
      filter blur(10px)

  &_link
    display flex
    justify-content center
    align-items center
    full-size()

    &[data-display="flex"]
      display flex
    &[data-display="none"]
      display none

  &_image
    opacity .5
    transform scale(1)
    transition all 1s $cubic
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
    text-transform uppercase
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
</style>