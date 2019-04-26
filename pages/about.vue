<template lang="pug">
.container
  navigation(
    :left="{ title: 'Projects', href: '/projects' }"
    :right="{ title: 'Works', href: '/works' }"
  )
  .container_page.about(:data-theme="$store.state.theme.color")
    h1.about_title About
    shape(
      :isPushing="false"
      :isReversed="true"
      left="Full"
      center="developer"
      right="stack"
    )
    .about_bloc
      p.about_paragraph(style="animation-delay: 1.5s") My name is Alain Cao Van Truong.
      p.about_paragraph(style="animation-delay: 2s") I am a third-year studend at <push class="text-bold" :isExternal="true" :isTexted="true" title="HÉTIC" href="https://www.hetic.net"/>
      p.about_paragraph(style="animation-delay: 2.5s") I experiment front-end, back-end and mobile development.
    .about_section
      .about_card
        h2.about_subtitle(style="animation-delay: 3s") <span>What I wish</span> <span>to perfect</span>
        .about_list(style="animation-delay: 3.5s")
          span.about_list_item Vue.js
          span.about_list_item Nuxt.js
          span.about_list_item PHP Slim
          span.about_list_item Swift
          span.about_list_item Three.js
          span.about_list_item Git
      .about_card
        h2.about_subtitle(style="animation-delay: 3s") <span>What I need</span> <span>to improve</span>
        .about_list(style="animation-delay: 3.5s")
          span.about_list_item React.js
          span.about_list_item AngularJS
          span.about_list_item Node.js
          span.about_list_item Laravel
          span.about_list_item Typescript
          span.about_list_item WordPress
      .about_card
        h2.about_subtitle(style="animation-delay: 3s") <span>What I want</span> <span>to learn</span>
        .about_list(style="animation-delay: 3.5s")
          span.about_list_item Symfony
          span.about_list_item React Native
          span.about_list_item ReasonML
          span.about_list_item Ruby on Rails
    .about_bloc
      p.about_text.about_text-framed(style="animation-delay: 4s")
        push.text-bold(:isExternal="true" :isTexted="true" title="Download my CV here" href="/pdf/CV-Alain_Cao_Van_Truong.pdf")
    .about_section
      .about_card
        h2.about_subtitle(style="animation-delay: 4.5s") Contact
        .about_array(style="animation-delay: 5s")
          push.about_link(:isExternal="true" :isTexted="false" title="linkedin.svg" href="https://www.hetic.net")
          push.about_link(:isExternal="true" :isTexted="false" title="twitter.svg" href="https://www.hetic.net")
          push.about_link(:isExternal="true" :isTexted="false" title="github.svg" href="https://www.hetic.net")
          push.about_link(:isExternal="true" :isTexted="false" title="mail.svg" href="https://www.hetic.net")
    .about_bloc
      p.about_text.about_text-credit(style="animation-delay: 5.5s")
        push.text-bold(:isExternal="true" :isTexted="true" title="Designed by Gaëtan Lefebvre" href="http://gaetanlefebvre.fr")
</template>

<script>
import Navigation from '@/components/navigation'
import Push from '@/components/push'
import Shape from '@/components/shape'

import { TimelineMax } from 'gsap'

export default {
  head() {
    return {
      title: 'Alain Cao Van Truong | About',
      meta: [
        { hid: 'description', name: 'description', content: 'Take a look of my portrait, my education, my experiences, my skills and my interests.' }
      ],
      bodyAttrs: {
        class: 'is-scrollable'
      }
    }
  },
  components: {
    'navigation': Navigation,
    'push': Push,
    'shape': Shape
  },
  transition: {
    mode: 'out-in',
    enter(el, done) {
      const tl = new TimelineMax({ onComplete: done })

      if (this.$store.state.prevRoute === '/') {
        tl.fromTo('.navigation_main', 1, { y: - window.innerHeight / 4 }, { y: 0 }, 0)
        tl.fromTo('.navigation_menu', 1, { scaleX: 0 }, { scaleX: 1 }, .5)
      }
    },
    leave(el, done) {
      const tl = new TimelineMax({ onComplete: done })

      scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      })

      tl.to('.container', 0, { pointerEvents: 'none' }, 0)
      tl.to('.about', 1, { opacity: 0, y: 100 }, 1)

      if (this.$store.state.nextRoute === '/') {
        tl.to('.navigation_menu', 1, { scaleX: 0 }, 0)
        tl.to('.navigation_main', 1, { y: - window.innerHeight / 4 }, .5)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.about
  &_title,
  &_subtitle,
  &_paragraph,
  &_list,
  &_array,
  &_text
    opacity 0
    transform translateY(12.5%)
    will-change opacity, transform
    animation intro-up 1s $cubic forwards

  &_title
    font-weight 700
    text-transform uppercase
    animation-delay .5s

  &_subtitle
    display flex
    flex-direction column
    margin-bottom 25px
    text-align center
    font-size 5rem
    font-weight 700
    text-transform uppercase

  &_bloc
    margin 50px 0
    max-width 600px
    font-size 5rem
    text-align center

  &_section
    display flex
    justify-content space-evenly
    margin 50px 0
    padding 0 100px
    width 100%

  &_card
    display flex
    flex-direction column
    align-items center
    margin 0 25px
    flex 1

  &_list
    display flex
    flex-direction column
    align-items flex-start

    &_item
      font-size 3.75rem

  &_text
    font-size 3.75rem

    &-framed
      padding 1em

      ^[-2][data-theme="black"] &
        border 2px solid $white

      ^[-2][data-theme="white"] &
        border 2px solid $black

    &-credit
      font-size 2.5rem
      font-weight 700
      text-transform uppercase

  &_array
    display flex

  &_link
    margin 0 25px
    font-size 3.75rem
</style>
