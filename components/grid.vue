<template lang="pug">
.grid
  .grid_card(v-for="(card, index) in cards" :key="index")
    .grid_frame
      img.grid_image(:src="require(`../assets/images/${card.slug}/0.png`)" :alt="card.name")
      .grid_mask.grid_mask-top
      .grid_mask.grid_mask-bottom
      .grid_mask.grid_mask-left
      .grid_mask.grid_mask-right
    h2.grid_title {{ card.name }}
</template>

<script>
export default {
  props: [
    'url',
    'cards'
  ]
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.grid
  display flex
  justify-content space-between
  flex-wrap wrap
  margin 0 50px
  width 100%

  &_card
    display flex
    flex-direction column
    align-items center
    width calc(50% - 50px * 2)
    margin 50px
    overflow hidden

    @media (max-width 750px)
      width 100%

  &_frame
    position relative
    display flex
    justify-content center
    align-items center
    width 100%
    height auto
    background-color $black
    overflow hidden

  &_mask
    position absolute
    width 100%
    height 100%
    background-color $black
    pointer-events none

    &-top
      bottom 100%
      border-bottom 2px solid $white

    &-bottom
      top 100%
      border-top 2px solid $white

    &-left
      right 100%

    &-right
      left 100%

  &_image
    width 100%
    height auto
    border 2px solid $white

  &_title
    margin 50px 0
    font-size 7.5rem
</style>
