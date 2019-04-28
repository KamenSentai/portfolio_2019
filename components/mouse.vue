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

    const RATE_POINTER = .25
    const RATE_FRAME = .1875

    const windowSize = { w: window.innerWidth, h: window.innerHeight }
    const screen = { x: window.innerWidth / 2, y: window.innerHeight * 3 / 4 }
    const mouse = { x: windowSize.w / 2, y: windowSize.h * 3 / 4 }
    const positionPointer = { x: mouse.x, y: mouse.y }
    const positionFrame = { x: mouse.x, y: mouse.y }
    const mouseClasses = []

    let mouseState = ''

    window.addEventListener('mousemove', event => {
      screen.x = event.clientX
      screen.y = event.clientY
      mouse.x = screen.x - _body.getBoundingClientRect().left
      mouse.y = screen.y - _body.getBoundingClientRect().top

      mouseState = event.target.dataset.mouse
    })

    window.addEventListener('scroll', () => {
      mouse.x = screen.x - _body.getBoundingClientRect().left
      mouse.y = screen.y - _body.getBoundingClientRect().top
    })

    window.addEventListener('resize', () => {
      windowSize.w = window.innerWidth
      windowSize.h = window.innerHeight

      mouse.x = screen.x - _body.getBoundingClientRect().left
      mouse.y = screen.y - _body.getBoundingClientRect().top
    })

    const animateMouse = () => {
      positionPointer.x += (mouse.x - positionPointer.x) * RATE_POINTER
      positionPointer.y += (mouse.y - positionPointer.y) * RATE_POINTER
      positionFrame.x += (mouse.x - positionFrame.x) * RATE_FRAME
      positionFrame.y += (mouse.y - positionFrame.y) * RATE_FRAME

      _pointerMouse.style.transform = `translate(${positionPointer.x - windowSize.w / 2}px, ${positionPointer.y - windowSize.h / 2}px)`
      _frameMouse.style.transform = `translate(${positionFrame.x - windowSize.w / 2}px, ${positionFrame.y - windowSize.h / 2}px)`

      if (mouseState && mouseState !== null) {
        this.$el.classList.add(mouseState)
        if (mouseClasses.indexOf(mouseState) === -1) mouseClasses.push(mouseState)
      } else for (const mouseClass of mouseClasses) this.$el.classList.remove(mouseClass)

      window.requestAnimationFrame(animateMouse)
    }
    if (this.$route.path === '/') setTimeout(animateMouse, 2000)
    else animateMouse()
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/tools/app'

$frameSize = 20px
$pointerSize = 5px

.mouse
  position absolute
  left 50vw
  top 50vh
  z-index 10000
  display flex
  justify-content center
  align-items center
  pointer-events none

  &_frame,
  &_pointer
    position absolute
    will-change transform
    transform translateY(25vh)

    &_shape
      full-size()
      transform scaleX(.75)
      transition transform .5s $cubic
      will-change transform

      &::before
        content ''
        position absolute
        left 0
        top 0
        full-size()
        transform rotateZ(45deg) scale(0)
        will-change transform
        animation scale-cursor .25s $cubic forwards

      @keyframes scale-cursor
        from
          transform rotateZ(45deg) scale(0)
        to
          transform rotateZ(45deg) scale(1)

  &_frame
    width $frameSize
    height $frameSize

    ^[0].is-reduced &
      &_shape
        transform scale(0)

    &_shape
      &::before
        border 1px solid $red
        animation-delay 1.25s

  &_pointer
    width $pointerSize
    height $pointerSize

    ^[0].is-reduced &
      &_shape
        transform scale(0)

    &_shape
      transition-delay .25s
      &::before
        background-color $red
        animation-delay 1s
</style>
