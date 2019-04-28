<template lang="pug">
.grid
  .grid_card(v-for="(card, index) in cards" :key="index")
    .grid_frame
      a.grid_frame_button(
        data-mouse="is-reduced"
        :title="card.name"
        :href="card.demo !== '' ? card.demo : card.code"
        target="_blank"
        rel="noopener"
      )
        img.grid_image(
          data-mouse="is-reduced"
          :src="require(`../assets/images/${card.slug}/0.png`)"
          :alt="card.name"
        )
    h2.grid_title {{ card.name }}
    .grid_links
      push.grid_link(
        v-if="card.code !== ''"
        :isExternal="true"
        :isTexted="true"
        title="View code"
        :href="card.code"
      )
      push.grid_link(
        v-if="card.demo !== ''"
        :isExternal="true"
        :isTexted="true"
        title="View demo"
        :href="card.demo"
      )
</template>

<script>
import Push from './push'

export default {
  props: [
    'url',
    'cards'
  ],
  components: {
    'push': Push
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.grid
  display flex
  justify-content space-evenly
  flex-wrap wrap
  margin 0 50px
  width 100%

  &_card,
  &_image
    width grid(4)

    @media (max-width $gridmedia4)
      width grid(3)

  &_card
    display flex
    flex-direction column
    align-items center
    margin 0 25px
    margin-bottom 100px

  &_frame
    display flex
    justify-content center
    align-items center
    width 100%
    border 2px solid $white
    transform-origin 50% 50%
    overflow hidden

    &_button
      font-size 0

  &_image
    height auto
    transition all 1s $cubic
    will-change transform

    &:hover
      transform scale(1.125)
      filter blur(5px)

  &_title
    margin-top 50px
    margin-bottom 25px
    font-size 5rem
    font-weight 700
    text-align center
    text-transform uppercase

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
    text-transform uppercase
    line-height 1.25em
</style>
