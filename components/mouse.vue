<template lang="pug">
.mouse
  .mouse_pointer(ref="pointer")
  .mouse_frame(ref="frame")
</template>

<script>
export default {
  mounted() {
    const _body = document.body
    const _pointerMouse = this.$refs.pointer
    const _frameMouse = this.$refs.frame

    const ratePointer = .25
    const rateFrame = .1875

    const windowSize = { w: window.innerWidth, h: window.innerHeight }
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const positionPointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const positionFrame = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    window.addEventListener('mousemove', event => {
      mouse.x = event.clientX - _body.getBoundingClientRect().left
      mouse.y = event.clientY - _body.getBoundingClientRect().top
    })

    window.addEventListener('resize', () => {
      windowSize.w = window.innerWidth
      windowSize.h = window.innerHeight
    })

    const animateMouse = () => {
      positionPointer.x += (mouse.x - positionPointer.x) * ratePointer
      positionPointer.y += (mouse.y - positionPointer.y) * ratePointer
      positionFrame.x += (mouse.x - positionFrame.x) * rateFrame
      positionFrame.y += (mouse.y - positionFrame.y) * rateFrame

      _pointerMouse.style.transform = `translate(${(positionPointer.x - windowSize.w / 2) * 4 / 3}px, ${positionPointer.y - windowSize.h / 2}px)`
      _frameMouse.style.transform = `translate(${(positionFrame.x - windowSize.w / 2) * 4 / 3}px, ${positionFrame.y - windowSize.h / 2}px)`

      window.requestAnimationFrame(animateMouse)
    }
    animateMouse()
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

$cursorSize =  20px
$pointerSize =  5px

.mouse
  position absolute
  left "calc(50vw - %s / 2)" % $cursorSize
  top "calc(50vh - %s / 2)" % $cursorSize
  z-index 10000
  display flex
  justify-content center
  align-items center
  width $cursorSize
  height $cursorSize
  pointer-events none
  transform scaleX(.75)

  &_frame,
  &_pointer
    position absolute
    will-change transform

    &::before
      content ''
      position absolute
      left 0
      top 0
      full-size()
      transform rotateZ(45deg)

  &_frame
    full-size()

    &::before
      border 1px solid $main

  &_pointer
    width $pointerSize
    height $pointerSize

    &::before
      background-color $main
</style>
