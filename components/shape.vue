<template lang="pug">
.shape(
  :data-theme="theme || $store.state.color"
  :data-reversed="isReversed"
)
  .shape_border.shape_border-top
  .shape_border.shape_border-center
  .shape_border.shape_border-bottom
  .shape_branch.shape_branch-topleft(v-if="isReversed")
    push.shape_text(
      v-if="left.isPushing"
      :isExternal="left.isExternal"
      :isTexted="true"
      :title="left.title"
      :href="left.href"
    )
    .shape_text(v-else) {{ left.title }}
  .shape_branch.shape_branch-bottomleft(v-else)
    push.shape_text(
      v-if="left.isPushing"
      :isExternal="left.isExternal"
      :isTexted="true"
      :title="left.title"
      :href="left.href"
    )
    .shape_text(v-else) {{ left.title }}
  .shape_branch.shape_branch-bottomcenter(v-if="isReversed")
    push.shape_text(
      v-if="center.isPushing"
      :isExternal="center.isExternal"
      :isTexted="true"
      :title="center.title"
      :href="center.href"
    )
    .shape_text(v-else) {{ center.title }}
  .shape_branch.shape_branch-topcenter(v-else)
    push.shape_text(
      v-if="center.isPushing"
      :isExternal="center.isExternal"
      :isTexted="true"
      :title="center.title"
      :href="center.href"
    )
    .shape_text(v-else) {{ center.title }}
  .shape_branch.shape_branch-topright(v-if="isReversed")
    push.shape_text(
      v-if="right.isPushing"
      :isExternal="right.isExternal"
      :isTexted="true"
      :title="right.title"
      :href="right.href"
    )
    .shape_text(v-else) {{ right.title }}
  .shape_branch.shape_branch-bottomright(v-else)
    push.shape_text(
      v-if="right.isPushing"
      :isExternal="right.isExternal"
      :isTexted="true"
      :title="right.title"
      :href="right.href"
    )
    .shape_text(v-else) {{ right.title }}
</template>

<script>
import Push from './push'

export default {
  props: [
    'theme',
    'isReversed',
    'left',
    'center',
    'right'
  ],
  components: {
    'push': Push
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

$shapeSize = 50px
$borderSize = 2px
$linkGap = .5em

.shape
  position relative
  width base-equilateral($shapeSize) * 2
  height $shapeSize
  margin $shapeSize * 2.5

  @media (max-width 500px), (max-height 500px)
    margin $shapeSize * 1.25
    transform scale(.75)

  &_border
    position absolute
    left 0
    width 100%

    &::before,
    &::after
      content ''
      position absolute
      transition background-color 1s $cubic 1s
      will-change transform

      ^[-2][data-theme="black"] &
        background-color $white

      ^[-2][data-theme="white"] &
        background-color $black

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
        animation scale-negative-border .25s linear 1.5s forwards

      &::after
        right 0
        transform rotateZ(30deg) scaleX(0)
        transform-origin 100% 50%
        animation scale-positive-border .25s linear 1.5s forwards

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
        animation scale-positive-border .25s linear 1.5s forwards

      &::after
        right 0
        transform rotateZ(-30deg) scaleX(0)
        transform-origin 100% 50%
        animation scale-negative-border .25s linear 1.5s forwards

  @keyframes scale-positive-border
    from
      transform rotateZ(30deg) scaleX(0)
    to
      transform rotateZ(30deg) scaleX(1)

  @keyframes scale-negative-border
    from
      transform rotateZ(-30deg) scaleX(0)
    to
      transform rotateZ(-30deg) scaleX(1)

  &_branch
    position absolute
    width $borderSize
    height $shapeSize
    transition background-color 1s $cubic 1s
    will-change transform

    &::before
      content ''
      position absolute
      left - ($borderSize / 2)
      top 0
      full-size()

    ^[-1][data-theme="black"] &::before
      background-color $white

    ^[-1][data-theme="white"] &::before
      background-color $black

    &-bottomleft,
    &-bottomcenter,
    &-bottomright
      &::before
        transform-origin 50% 0

    &-topleft,
    &-topcenter,
    &-topright
      &::before
        transform-origin 50% 100%

    &-topcenter,
    &-bottomcenter
      left "calc(50% - %s / 2)" % $borderSize
      &::before
        transform scaleY(0)
        animation scale-center .25s linear 1.75s forwards
      & ^[-2]_text
        transform translateX(-50%)

    &-topcenter
      bottom "calc(100% + %s / 2)" % $shapeSize
      & ^[-2]_text
        bottom calc(100% + .25em)

    &-bottomcenter
      top "calc(100% + %s / 2)" % $shapeSize
      & ^[-2]_text
        top calc(100% + .25em)

    &-topleft,
    &-topright
      & ^[-2]_text
        bottom calc(50% + .25em)

    &-bottomleft,
    &-bottomright
      & ^[-2]_text
        top calc(50% + .25em)

    &-topleft,
    &-bottomleft
      & ^[-2]_text
        right "calc(100% + %s + .25em)" % base-equilateral($shapeSize)

    &-topright,
    &-bottomright
      & ^[-2]_text
        left "calc(100% + %s + .25em)" % base-equilateral($shapeSize)

    &-topleft
      left - ($borderSize / 2)
      bottom 100%
      &::before
        transform rotateZ(-60deg) scaleY(0)
        animation scale-negative-branch .25s linear 1.75s forwards

    &-topright
      right - ($borderSize / 2)
      bottom 100%
      &::before
        transform rotateZ(60deg) scaleY(0)
        animation scale-positive-branch .25s linear 1.75s forwards

    &-bottomleft
      left - ($borderSize / 2)
      top 100%
      &::before
        transform rotateZ(60deg) scaleY(0)
        animation scale-positive-branch .25s linear 1.75s forwards

    &-bottomright
      right - ($borderSize / 2)
      top 100%
      &::before
        transform rotateZ(-60deg) scaleY(0)
        animation scale-negative-branch .25s linear 1.75s forwards

  @keyframes scale-center
    from
      transform scaleY(0)
    to
      transform scaleY(1)

  @keyframes scale-positive-branch
    from
      transform rotateZ(60deg) scaleY(0)
    to
      transform rotateZ(60deg) scaleY(1)

  @keyframes scale-negative-branch
    from
      transform rotateZ(-60deg) scaleY(0)
    to
      transform rotateZ(-60deg) scaleY(1)

  &_text
    position absolute
    font-size 2.5rem
    text-transform uppercase
    text-align center
</style>
