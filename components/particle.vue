<template lang="pug">
canvas.particle
</template>

<script>
export default {
  mounted() {
    const context = this.$el.getContext('2d')

    this.$el.width = window.innerWidth
    this.$el.height = window.innerHeight
    context.fillStyle = 'hsl(0, 0%, 93%)'
    context.lineWidth = .5

    const size = { w: this.$el.width, h: this.$el.height }

    window.addEventListener('resize', () => {
      this.$el.width = window.innerWidth
      this.$el.height = window.innerHeight
      context.fillStyle = 'hsl(0, 0%, 93%)'
      context.lineWidth = 1
    })

    const total = Math.sqrt(window.innerWidth * window.innerHeight) / 10
    const maxSpeed = 1
    const maxDistance = 100
    const particleSize = 1
    const particles = []
    const links = []

    const mod = (n, m) => ((n % m) + m) % m

    for (let i = 0 ; i < total ; i++) particles.push({
      x: Math.random() * this.$el.width,
      y: Math.random() * this.$el.height,
      dx: maxSpeed - Math.random() * maxSpeed * 2,
      dy: maxSpeed - Math.random() * maxSpeed * 2
    })

    const loop = () => {
      context.clearRect(0, 0, this.$el.width, this.$el.height)

      for (let i = 0 ; i < particles.length ; i++) {
        const particle = particles[i]

        context.beginPath()

        context.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2, false)

        particle.x = mod(particle.x + particle.dx, this.$el.width)
        particle.y = mod(particle.y + particle.dy, this.$el.height)

        for (let j = i + 1 ; j < particles.length ; j++) {
          const neighbour = particles[j]
          const distance = Math.sqrt((particle.x - neighbour.x) ** 2 + (particle.y - neighbour.y) ** 2)

          if (distance < maxDistance) {
            context.strokeStyle = `hsla(0, 0%, 93%, ${1 - distance / maxDistance})`
            context.moveTo(particle.x, particle.y)
            context.lineTo(neighbour.x, neighbour.y)
          }
        }

        context.closePath()
        context.stroke()
        context.fill()
      }

      window.requestAnimationFrame(loop)
    }
    loop()

    this.$el.classList.add('is-active')
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.particle
  position absolute
  pointer-events none
  opacity 0
  transform scale(.5)
  transition all 2s $cubic 1s
  will-change opacity, transform

  &.is-active
    opacity .5
    transform scale(1)
</style>
