<template lang="pug">
.shape(
  :data-theme="theme || $store.state.theme"
  :data-reversed="isReversed"
  :data-enlarged="isEnlarged"
)
  .shape_border.shape_border-top
  .shape_border.shape_border-center
  .shape_border.shape_border-bottom
  .shape_branch.shape_branch-topleft(v-if="isReversed")
    push.shape_text(
      v-if="left.isPushing"
      positionValue="absolute"
      :isExternal="left.isExternal"
      :isTexted="true"
      :title="left.title"
      :href="left.href"
    )
    .shape_text(v-else) {{ left.title }}
  .shape_branch.shape_branch-bottomleft(v-else)
    push.shape_text(
      v-if="left.isPushing"
      positionValue="absolute"
      :isExternal="left.isExternal"
      :isTexted="true"
      :title="left.title"
      :href="left.href"
    )
    .shape_text(v-else) {{ left.title }}
  .shape_branch.shape_branch-bottomcenter(v-if="isReversed")
    push.shape_text(
      v-if="center.isPushing"
      positionValue="absolute"
      :isExternal="center.isExternal"
      :isTexted="true"
      :title="center.title"
      :href="center.href"
    )
    .shape_text(v-else) {{ center.title }}
  .shape_branch.shape_branch-topcenter(v-else)
    push.shape_text(
      v-if="center.isPushing"
      positionValue="absolute"
      :isExternal="center.isExternal"
      :isTexted="true"
      :title="center.title"
      :href="center.href"
    )
    .shape_text(v-else) {{ center.title }}
  .shape_branch.shape_branch-topright(v-if="isReversed")
    push.shape_text(
      v-if="right.isPushing"
      positionValue="absolute"
      :isExternal="right.isExternal"
      :isTexted="true"
      :title="right.title"
      :href="right.href"
    )
    .shape_text(v-else) {{ right.title }}
  .shape_branch.shape_branch-bottomright(v-else)
    push.shape_text(
      v-if="right.isPushing"
      positionValue="absolute"
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
    'isEnlarged',
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

  &[data-enlarged="true"]
    transform scale(1.25)

    @media (max-width 700px), (max-height 700px)
      transform scale(1)

    @media (max-width 500px), (max-height 500px)
      transform scale(.75)

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
        background-color darken($white, 50%)

      ^[-2][data-theme="white"] &
        background-color lighten($black, 50%)

    &-top
      top 0

      &::before,
      &::after
        width $shapeSize + ($borderSize / 2)
        height $borderSize
        top - ($borderSize / 2)

      &::before
        left 0
        transform rotateZ(-30deg) scaleX(0)
        transform-origin 0 50%
        animation scale-negative-border .25s linear 1.25s forwards

      &::after
        right 0
        transform rotateZ(30deg) scaleX(0)
        transform-origin 100% 50%
        animation scale-positive-border .25s linear 1.25s forwards

    &-center
      top - ($borderSize / 2)
      height "calc(100% + %s)" % $borderSize

      &::before,
      &::after
        width $borderSize
        height 100%
        top 0
        transform scaleY(0)
        animation scale-center .25s linear 1s forwards

      &::before
        left - ($borderSize / 2)

      &::after
        right - ($borderSize / 2)

    &-bottom
      top 100%

      &::before,
      &::after
        width $shapeSize + ($borderSize / 2)
        height $borderSize
        top - ($borderSize / 2)

      &::before
        left 0
        transform rotateZ(30deg) scaleX(0)
        transform-origin 0 50%
        animation scale-positive-border .25s linear 1.25s forwards

      &::after
        right 0
        transform rotateZ(-30deg) scaleX(0)
        transform-origin 100% 50%
        animation scale-negative-border .25s linear 1.25s forwards

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
    will-change transform

    &::before
      content ''
      position absolute
      left 0
      top 0
      full-size()
      transition background-color 1s $cubic 1s
      animation-duration .25s
      animation-timing-function $cubic
      animation-delay 1.5s
      animation-fill-mode forwards

    ^[-1][data-theme="black"] &::before
      background-color darken($white, 50%)

    ^[-1][data-theme="white"] &::before
      background-color lighten($black, 50%)

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
        animation-name scale-center

    &-topcenter
      bottom "calc(100% + %s / 2)" % $shapeSize
      & ^[-2]_text
        bottom calc(100% + .25em)
        transform translate(-50%, - .5em)
        animation-name translate-top-text

    &-bottomcenter
      top "calc(100% + %s / 2)" % $shapeSize
      & ^[-2]_text
        top calc(100% + .25em)
        transform translate(-50%, .5em)
        animation-name translate-bottom-text

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
        animation-name translate-left-text

    &-topright,
    &-bottomright
      & ^[-2]_text
        left "calc(100% + %s + .25em)" % base-equilateral($shapeSize)
        animation-name translate-right-text

    &-topleft
      left - ($borderSize / 2)
      bottom 100%
      &::before
        transform rotateZ(-60deg) scaleY(0)
        animation-name scale-negative-branch

    &-topright
      right - ($borderSize / 2)
      bottom 100%
      &::before
        transform rotateZ(60deg) scaleY(0)
        animation-name scale-positive-branch

    &-bottomleft
      left - ($borderSize / 2)
      top 100%
      &::before
        transform rotateZ(60deg) scaleY(0)
        animation-name scale-positive-branch

    &-bottomright
      right - ($borderSize / 2)
      top 100%
      &::before
        transform rotateZ(-60deg) scaleY(0)
        animation-name scale-negative-branch

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
    font-weight 700
    text-transform uppercase
    text-align center
    opacity 0
    will-change opacity, transform
    animation-duration 1s
    animation-timing-function $cubic
    animation-delay 1.25s
    animation-fill-mode forwards

  @keyframes translate-top-text
    from
      opacity 0
      transform translate(-50%, - .5em)
    to
      opacity 1
      transform translate(-50%, 0)

  @keyframes translate-bottom-text
    from
      opacity 0
      transform translate(-50%, .5em)
    to
      opacity 1
      transform translate(-50%, 0)

  @keyframes translate-left-text
    from
      opacity 0
      transform translateX(- .5em)
    to
      opacity 1
      transform translateX(0)

  @keyframes translate-right-text
    from
      opacity 0
      transform translateX(.5em)
    to
      opacity 1
      transform translateX(0)
</style>
