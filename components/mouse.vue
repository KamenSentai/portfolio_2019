<template lang="pug">
.mouse
  .mouse_pointer(ref="pointer")
    .mouse_pointer_shape
  .mouse_frame(ref="frame")
    .mouse_frame_shape
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
    const mouse = { x: windowSize.w / 2, y: windowSize.h / 4 }
    const positionPointer = { x: mouse.x, y: mouse.y }
    const positionFrame = { x: mouse.x, y: mouse.y }

    _pointerMouse.style.transform = `translate(${positionPointer.x - windowSize.w / 2}px, ${positionPointer.y - windowSize.h / 2}px)`
    _frameMouse.style.transform = `translate(${positionFrame.x - windowSize.w / 2}px, ${positionFrame.y - windowSize.h / 2}px)`

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

      _pointerMouse.style.transform = `translate(${positionPointer.x - windowSize.w / 2}px, ${positionPointer.y - windowSize.h / 2}px)`
      _frameMouse.style.transform = `translate(${positionFrame.x - windowSize.w / 2}px, ${positionFrame.y - windowSize.h / 2}px)`

      window.requestAnimationFrame(animateMouse)
    }
    animateMouse()
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/tools/app'

$frameSize =  20px
$pointerSize =  5px

.mouse
  position absolute
  left 50%
  top 50%
  z-index 10000
  display flex
  justify-content center
  align-items center
  pointer-events none

  &_frame,
  &_pointer
    position absolute
    will-change transform
    transform translateY(-25vh)

    &_shape
      full-size()
      transform scaleX(.75)

      &::before
        content ''
        position absolute
        left 0
        top 0
        full-size()
        transform rotateZ(45deg)

  &_frame
    width $frameSize
    height $frameSize

    &_shape
      &::before
        border 1px solid $red

  &_pointer
    width $pointerSize
    height $pointerSize

    &_shape
      &::before
        background-color $red
</style>
