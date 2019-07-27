<template lang="pug">
.indicator
  .indicator_bar(v-for="(n, index) in total" :data-position="getPosition(index)")
  .indicator_progress
    span.indicator_page(
      v-for="number in total"
      :data-state="number === page + 1 ? 'current' : mod(number - 1, total) === mod(page + 1, total) ? 'next' : mod(number + 1, total) === mod(page + 1, total) ? 'previous' : 'hidden'"
      :data-prepared="mod(number - 2, total) === mod(page + 1, total) ? 'next' : mod(number + 2, total) === mod(page + 1, total) ? 'previous' : 'false'"
    ) {{ number }}
</template>

<script>
export default {
  data() {
    return {
      positions: [
        '+1',
        '+0.5',
        '+0',
        '-0.5',
        '-1',
        '-0',
      ]
    }
  },
  props: [
    'total',
    'page',
  ],
  methods: {
    mod(n, m) {
      return ((n % m) + m) % m
    },
    getPosition(index) {
      return this.page >= this.positions.lenght ? '-0' : this.positions[this.mod(index + this.page, this.positions.length)]
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.indicator
  position absolute

  &_bar
    position absolute
    left 0
    top calc(50% - 1px)
    height 2px
    background-color rgba($white, .5)
    transform scaleX(0)
    transform-origin 50% 50%
    transition all 1s $cubic
    animation scale-bar .5s $cubic forwards

    &::before
      content ''
      position absolute
      top 0
      right 0
      width 50%
      height 100%
      background-color $white
      opacity 0
      transition opacity 1s $cubic

    &[data-position="+1"]
      left 37.5%
      top calc(0% - 1px)
      width 25%
      animation-delay 1.25s

    &[data-position="+0.5"]
      left 25%
      top calc(25% - 1px)
      width 50%
      animation-delay 1.125s

    &[data-position="+0"],
    &[data-position="-0"]
      left 0
      top calc(50% - 1px)
      width 100%
      animation-delay 1s
      &::before
        opacity 1

    &[data-position="-0"]
      opacity 0

    &[data-position="-0.5"]
      left 25%
      top calc(75% - 1px)
      width 50%
      animation-delay 1.125s

    &[data-position="-1"]
      left 37.5%
      top calc(100% - 1px)
      width 25%
      animation-delay 1.25s

  @keyframes scale-bar
    from
      transform scaleX(0)
    to
      transform scaleX(1)

  &_progress
    position absolute
    right 100%
    display flex
    flex-direction column
    justify-content center
    /* Exception due to font */
    // height 1em
    height calc(1em - 7.5px)
    top 50%
    width 25px
    font-size 3.75rem
    font-weight 700
    transform translateY(-50%)
    overflow hidden

  &_page
    position absolute
    top 0
    left 50%
    transform translateX(-50%)
    transition all 1s $cubic
    will-change opacity

    &[data-state="hidden"]
      opacity 0

    &[data-prepared="previous"]
    &[data-state="previous"]
      top 100%

    &[data-prepared="next"]
    &[data-state="next"]
      top -1em
</style>
