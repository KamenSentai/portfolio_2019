<template lang="pug">
.indicator
  .indicator_bar(v-for="(n, index) in positions.length" :data-position="getPosition(index + page)")
</template>

<script>
export default {
  data() {
    return {
      positions: [
        '+0',
        '+1',
        '+0.5',
        '0',
        '-0.5',
        '-1',
        '-0'
      ]
    }
  },
  props: [
    'page'
  ],
  methods: {
    mod(n, m) {
      return ((n % m) + m) % m
    },
    getPosition(index) {
      return this.positions[this.mod(index, this.positions.length)]
    }
  }
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

    &[data-position="+0"],
    &[data-position="-0"]
      opacity 0

    &[data-position="+1"]
      left 37.5%
      top calc(0% - 1px)
      width 25%
      animation-delay 1.25s

    &[data-position="+0"],
    &[data-position="+0.5"]
      left 25%
      top calc(25% - 1px)
      width 50%
      animation-delay 1.125s

    &[data-position="0"]
      left 0
      top calc(50% - 1px)
      width 100%
      animation-delay 1s
      &::before
        opacity 1

    &[data-position="-0.5"],
    &[data-position="-0"]
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
</style>
