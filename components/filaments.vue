<template lang="pug">
canvas.filaments(:data-page="$route.name")
</template>

<script>
export default {
  data() {
    return {
      context: undefined,
      total: 0,
      maxSpeed: 1,
      maxDistance: 250,
      vertexes: [],
      brightness: 0,
      mousePosition: { x: 0, y: 0 }
    }
  },
  created() {
    this.brightness = this.getBrightness
  },
  watch: {
    $route() {
      if (this.brightness !== this.getBrightness) {
        this.$el.dataset.state = ''

        setTimeout(() => {
          this.brightness = this.getBrightness
          this.$el.dataset.state = 'active'
        }, 2000)
      }
    }
  },
  computed: {
    getBrightness() {
      return this.$store.state.theme === 'black' ? 93 : 7
    },
    checkTouchevents() {
      if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) return true

      const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
      const mq = query => window.matchMedia(query).matches
      const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')

      return mq(query)
    },
  },
  methods: {
    mod(n, m) {
      return ((n % m) + m) % m
    },
    updateElement() {
      this.$el.width = window.innerWidth
      this.$el.height = window.innerHeight
      this.context.fillStyle = `hsl(0, 0%, ${this.brightness}%)`
      this.context.lineWidth = 1
    },
    loopAnimation() {
      this.context.clearRect(0, 0, this.$el.width, this.$el.height)

      for (let i = 0 ; i < this.vertexes.length ; i++) {
        const vertex = this.vertexes[i]

        for (let j = i + 1 ; j < this.vertexes.length ; j++) {
          const neighbour = this.vertexes[j]
          const distance = Math.sqrt((vertex.x - neighbour.x) ** 2 + (vertex.y - neighbour.y) ** 2)
          const opacity = 1 - distance / this.maxDistance

          if (opacity > 0) {
            this.context.beginPath()
            this.context.strokeStyle = `hsla(0, 0%, ${this.brightness}%, ${opacity})`
            this.context.moveTo(vertex.x, vertex.y)
            this.context.lineTo(neighbour.x, neighbour.y)
            this.context.stroke()
            this.context.closePath()
          }
        }

        if (i > 0) {
          vertex.x = this.mod(vertex.x + vertex.dx, this.$el.width)
          vertex.y = this.mod(vertex.y + vertex.dy, this.$el.height)
        } else {
          vertex.x = this.mousePosition.x
          vertex.y = this.mousePosition.y
        }
      }

      window.requestAnimationFrame(this.loopAnimation)
    }
  },
  beforeMount() {
    this.$el.dataset.state = 'active'
    this.$store.commit('CHECK_TOUCHEVENTS', this.checkTouchevents)
    this.context = this.$el.getContext('2d')
    this.total = Math.floor(Math.sqrt(window.innerWidth * window.innerHeight) / 25)
    this.mousePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    this.updateElement()
    window.addEventListener('resize', this.updateElement)

    if (!this.checkTouchevents) {
      this.vertexes.push({ x: this.mousePosition.x, y: this.mousePosition.y })

      window.addEventListener('mousemove', event => {
        this.mousePosition.x = event.clientX
        this.mousePosition.y = event.clientY
      })
    }

    for (let i = 0 ; i < this.total ; i++) this.vertexes.push({
      x: Math.random() * this.$el.width,
      y: Math.random() * this.$el.height,
      dx: this.maxSpeed - Math.random() * this.maxSpeed * 2,
      dy: this.maxSpeed - Math.random() * this.maxSpeed * 2
    })
  },
  mounted() {
    this.loopAnimation()
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.filaments
  position fixed
  left 0
  top 0
  pointer-events none
  opacity 0
  transform scale(.5)
  transition all 2s $cubic
  will-change opacity, transform

  &[data-state="active"][data-page="index"],
  &[data-state="active"][data-page="lab"],
  &[data-state="active"][data-page="projects"],
  &[data-state="active"][data-page="about"]
    opacity .5
    transform scale(1)
</style>
