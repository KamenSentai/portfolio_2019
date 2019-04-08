<template lang="pug">
.hero
  h1.is-inactive(ref="h1") Alain CAO VAN TRUONG
  h2.is-inactive(ref="h2") Full-stack developer

  svg.hero_logo(x="0px" y="0px" viewBox="0 0 125 250" xml:space="preserve" xmlns="http://www.w3.org/2000/svg")
    g(transform="translate(0 87.5)")
      path.hero_logo_circle(d="M98.1,48.6l-1.9,4.8C110.6,63.8,120,80.8,120,100c0,31.8-25.7,57.5-57.5,57.5S5,131.8,5,100c0-19.2,9.4-36.2,23.9-46.6 l-1.9-4.8C10.7,59.9,0,78.7,0,100c0,34.5,28,62.5,62.5,62.5s62.5-28,62.5-62.5C125,78.7,114.3,59.9,98.1,48.6z")
      path.hero_logo_arrow(d="M65,118.8V40h8.5l9,22.5h5L62.5,0l-25,62.5h5l9-22.5H60v78.8L42.5,75h-5l25,62.5l25-62.5h-5L65,118.8z M62.5,12.5l9,22.5 h-18L62.5,12.5z")
</template>

<script>
export default {
  head() {
    return {
      title: 'Alain Cao Van Truong | Full-stack developer',
      meta: [
        { hid: 'description', name: 'description', content: 'Full-stack developer and third year student at HETIC looking for a 5-month internship from July to November 2019.' }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/tools/app'

$logoWidth = 125px / 3.75
$logoHeight = 250px / 3.75

.hero
  position relative
  display flex
  flex-direction column
  justify-content center
  align-items center
  full-size()
  color $white

  h1,
  h2
    letter-spacing .125em
    transition opacity 1s $cubic, transform 1s $cubic

  h1
    font-size 9.6rem
    font-weight 700

  h2
    font-size 7.2rem
    font-weight 300

  &_logo
    position absolute
    left "calc(50% - %s / 2)" % $logoWidth
    top "calc(75% - %s / 2)" % $logoHeight
    width $logoWidth
    height $logoHeight
    fill $white
    cursor grab

    &_arrow
      ^[-1]:hover &
        transform translateY(0)

    &_circle
      ^[-1]:hover &
        transform scale(0)

  &_logo_arrow
    transform translateY(-25%)
    transition transform .5s $cubic

  &_logo_circle
    transform-origin 50% 50%
    transition transform .5s $cubic
    transform scale(1)
</style>
