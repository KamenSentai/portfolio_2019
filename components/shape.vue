<template lang="pug">
.shape(:data-theme="$store.state.theme.color" :data-reversed="isReversed")
  .shape_border.shape_border-top
  .shape_border.shape_border-center
  .shape_border.shape_border-bottom
  .shape_branch.shape_branch-topleft(v-if="isReversed")
    push.shape_text(v-if="isPushing" :isExternal="false" :isTexted="true" :title="left.title" :href="left.href")
    .shape_text(v-else) {{ left }}
  .shape_branch.shape_branch-bottomleft(v-else)
    push.shape_text(v-if="isPushing" :isExternal="false" :isTexted="true" :title="left.title" :href="left.href")
    .shape_text(v-else) {{ left }}
  .shape_branch.shape_branch-bottomcenter(v-if="isReversed")
    push.shape_text(v-if="isPushing" :isExternal="false" :isTexted="true" :title="center.title" :href="center.href")
    .shape_text(v-else) {{ center }}
  .shape_branch.shape_branch-topcenter(v-else)
    push.shape_text(v-if="isPushing" :isExternal="false" :isTexted="true" :title="center.title" :href="center.href")
    .shape_text(v-else) {{ center }}
  .shape_branch.shape_branch-topright(v-if="isReversed")
    push.shape_text(v-if="isPushing" :isExternal="false" :isTexted="true" :title="right.title" :href="right.href")
    .shape_text(v-else) {{ right }}
  .shape_branch.shape_branch-bottomright(v-else)
    push.shape_text(v-if="isPushing" :isExternal="false" :isTexted="true" :title="right.title" :href="right.href")
    .shape_text(v-else) {{ right }}
</template>

<script>
import Push from './push'

export default {
  props: [
    'isPushing',
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
        animation scale-negative .25s linear 1.5s forwards

      &::after
        right 0
        transform rotateZ(30deg) scaleX(0)
        transform-origin 100% 50%
        animation scale-positive .25s linear 1.5s forwards

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
        animation scale-positive .25s linear 1.5s forwards

      &::after
        right 0
        transform rotateZ(-30deg) scaleX(0)
        transform-origin 100% 50%
        animation scale-negative .25s linear 1.5s forwards

  @keyframes scale-positive
    from
      transform rotateZ(30deg) scaleX(0)
    to
      transform rotateZ(30deg) scaleX(1)

  @keyframes scale-negative
    from
      transform rotateZ(-30deg) scaleX(0)
    to
      transform rotateZ(-30deg) scaleX(1)

  &_branch
    position absolute
    background-color $white
    width $borderSize
    height $shapeSize
    transition background-color 1s $cubic 1s
    will-change transform

    ^[-1][data-theme="black"] &
      background-color $white

    ^[-1][data-theme="white"] &
      background-color $black

    &-bottomleft,
    &-topcenter,
    &-bottomright
      transform-origin 50% 100%

      & ^[-2]_text
        bottom calc(100% + .25em)
        transform-origin 0 100%

    &-bottomleft
      left - ($borderSize / 2)
      bottom 0
      transform rotateZ(-120deg) scaleY(0)
      animation scale-bottomleft .25s linear 1.75s forwards

      & ^[-2]_text
        /* Exception due to font */
        // transform rotateZ(120deg) translate(-100%, 100%) translateX(- $linkGap)
        transform rotateZ(120deg) translate(-95%, 100%) translateX(- $linkGap)
        animation apperance-bottomleft .5s $cubic 2.25s forwards

    &-topcenter
      left "calc(50% - %s / 2)" % $borderSize
      bottom "calc(100% + %s / 2)" % $shapeSize
      transform scaleY(0)
      animation scale-center .25s linear 1.75s forwards

      & ^[-2]_text
        /* Exception due to font */
        // transform translate(-50%, - $linkGap)
        transform translate(-45%, - $linkGap)
        animation apperance-topcenter .5s $cubic 2s forwards

    &-bottomright
      right - ($borderSize / 2)
      bottom 0
      transform rotateZ(120deg) scaleY(0)
      animation scale-bottomright .25s linear 1.75s forwards

      & ^[-2]_text
        /* Exception due to font */
        // transform rotateZ(-120deg) translate($linkGap, 100%)
        transform rotateZ(-120deg) translate($linkGap, 105%)
        animation apperance-bottomright .5s $cubic 2.25s forwards

    &-topleft,
    &-bottomcenter,
    &-topright
      transform-origin 50% 0

      & ^[-2]_text
        top calc(100% + .25em)
        transform-origin 0 0

    &-topleft
      left - ($borderSize / 2)
      top 0
      transform rotateZ(-240deg) scaleY(0)
      animation scale-topleft .25s linear 1.75s forwards

      & ^[-2]_text
        /* Exception due to font */
        // transform rotateZ(240deg) translate(-100%, -100%) translateX(- $linkGap)
        transform rotateZ(240deg) translate(-95%, -90%) translateX(- $linkGap)
        animation apperance-topleft .5s $cubic 2s forwards

    &-bottomcenter
      left "calc(50% - %s / 2)" % $borderSize
      top "calc(100% + %s / 2)" % $shapeSize
      transform scaleY(0)
      animation scale-center .25s linear 1.75s forwards

      & ^[-2]_text
        /* Exception due to font */
        // transform translate(-50%, $linkGap)
        transform translate(-45%, $linkGap)
        animation apperance-bottomcenter .5s $cubic 2.25s forwards

    &-topright
      right - ($borderSize / 2)
      top 0
      transform rotateZ(240deg) scaleY(0)
      animation scale-topright .25s linear 1.75s forwards

      & ^[-2]_text
        /* Exception due to font */
        // transform rotateZ(-240deg) translate($linkGap, -100%)
        transform rotateZ(-240deg) translate($linkGap, -90%)
        animation apperance-topright .5s $cubic 2s forwards

  @keyframes scale-center
    from
      transform scaleY(0)
    to
      transform scaleY(1)

  @keyframes scale-bottomleft
    from
      transform rotateZ(-120deg) scaleY(0)
    to
      transform rotateZ(-120deg) scaleY(1)

  @keyframes scale-bottomright
    from
      transform rotateZ(120deg) scaleY(0)
    to
      transform rotateZ(120deg) scaleY(1)

  @keyframes scale-topleft
    from
      transform rotateZ(-240deg) scaleY(0)
    to
      transform rotateZ(-240deg) scaleY(1)

  @keyframes scale-topright
    from
      transform rotateZ(240deg) scaleY(0)
    to
      transform rotateZ(240deg) scaleY(1)

  @keyframes apperance-bottomleft
    from
      opacity 0
      /* Exception due to font */
      // transform rotateZ(120deg) translate(-100%, 100%) translateX(- $linkGap)
      transform rotateZ(120deg) translate(-95%, 100%) translateX(- $linkGap)
    to
      opacity 1
      /* Exception due to font */
      // transform rotateZ(120deg) translate(-100%, 100%)
      transform rotateZ(120deg) translate(-95%, 100%)

  @keyframes apperance-topcenter
    from
      opacity 0
      /* Exception due to font */
      // transform translate(-50%, - $linkGap)
      transform translate(-45%, - $linkGap)
    to
      opacity 1
      /* Exception due to font */
      // transform translate(-50%, 0)
      transform translate(-45%, 0)

  @keyframes apperance-bottomright
    from
      opacity 0
      /* Exception due to font */
      // transform rotateZ(-120deg) translate($linkGap, 100%)
      transform rotateZ(-120deg) translate($linkGap, 105%)
    to
      opacity 1
      /* Exception due to font */
      // transform rotateZ(-120deg) translate(0, 100%)
      transform rotateZ(-120deg) translate(0, 105%)

  @keyframes apperance-topleft
    from
      opacity 0
      /* Exception due to font */
      // transform rotateZ(240deg) translate(-100%, -100%) translateX(- $linkGap)
      transform rotateZ(240deg) translate(-95%, -90%) translateX(- $linkGap)
    to
      opacity 1
      /* Exception due to font */
      // transform rotateZ(240deg) translate(-100%, -100%)
      transform rotateZ(240deg) translate(-95%, -90%)

  @keyframes apperance-bottomcenter
    from
      opacity 0
      /* Exception due to font */
      // transform translate(-50%,$linkGap)
      transform translate(-45%, $linkGap)
    to
      opacity 1
      /* Exception due to font */
      // transform translate(-50%, 0)
      transform translate(-45%, 0)

  @keyframes apperance-topright
    from
      opacity 0
      /* Exception due to font */
      // transform rotateZ(-240deg) translate($linkGap, -100%)
      transform rotateZ(-240deg) translate($linkGap, -90%)
    to
      opacity 1
      /* Exception due to font */
      // transform rotateZ(-240deg) translate(0, -100%)
      transform rotateZ(-240deg) translate(0, -90%)

  &_text
    position absolute
    font-size 2.5rem
    text-transform uppercase
    opacity 0
    will-change opacity, transform
</style>
