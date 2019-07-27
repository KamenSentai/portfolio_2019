<template lang="pug">
.grid
  .grid_ribbon
    h1.grid_title(ref="title") {{ capitalizeString($route.name) }}
  .grid_card(v-for="(card, index) in cards" :key="index")
    .grid_frame
      a.grid_frame_button(
        :title="card.name"
        :href="card.demo !== '' ? card.demo : card.code"
        target="_blank"
        rel="noreferrer"
      )
        loader(:theme="$store.state.theme")
        lazyload.grid_image(
          :src="require(`~/assets/images/${card.slug}/0.png`)"
          :alt="card.name"
        )
    h2.grid_subtitle {{ card.name }}
    .grid_links
      push.grid_link(
        v-if="card.code !== ''"
        positionValue="relative"
        :isExternal="true"
        :isTexted="true"
        title="View code"
        :href="card.code"
      )
      push.grid_link(
        v-if="card.demo !== ''"
        positionValue="relative"
        :isExternal="true"
        :isTexted="true"
        title="View demo"
        :href="card.demo"
      )
</template>

<script>
import Lazyload from './lazyload'
import Loader from './loader'
import Push from './push'

export default {
  props: [
    'url',
    'cards',
  ],
  components: {
    'lazyload': Lazyload,
    'loader': Loader,
    'push': Push,
  },
  methods: {
    capitalizeString(string) {
      return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    },
    scrollPage() {
      if (this.$refs.title) this.$refs.title.style.transform = `translateY(${window.scrollY / 2.5}px)`
    },
  },
  mounted() {
    window.addEventListener('wheel', this.scrollPage)
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.grid
  z-index 1
  display flex
  justify-content space-evenly
  flex-wrap wrap
  width 100%
  margin 0 50px

  &_ribbon
    z-index 1
    display flex
    justify-content center
    width 100%
    perspective 750px

    *::selection
      color $white
      background-color $black

  &_title
    padding .25em 2.5em
    /* Exception due to font */
    padding-bottom .125em
    padding-right 2.375em
    color $black
    font-size 3.75rem
    font-weight 700
    background-color $white
    box-shadow 0 0 10px rgba($black, .5)

  &_card,
  &_image
    width grid(4)

    @media (max-width $gridmedia4)
      width grid(3)

  &_card
    display flex
    flex-direction column
    align-items center
    margin 50px 25px
    margin-top 75px

  &_frame
    display flex
    justify-content center
    align-items center
    width 100%
    border 2px solid $white
    transform-origin 50% 50%
    overflow hidden

    &_button
      position relative
      font-size 0

  &_image
    height auto
    transition transform 1s $cubic
    will-change transform

    &:hover
      transform scale(1.125)

  &_subtitle
    margin-top 50px
    margin-bottom 25px
    font-size 5rem
    font-weight 700
    text-align center

    @media (max-width $gridmedia10)
      font-size 3.75rem

  &_links
    display flex
    flex-direction column
    justify-content space-evenly
    align-items center
    width 100%

  &_link
    font-size 2.5rem
    line-height 1.25em
</style>
