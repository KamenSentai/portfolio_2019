<template lang="pug">
.container
  navigation(
    :left="{ title: 'Projects', href: '/projects' }"
    :right="{ title: 'Works', href: '/works' }"
  )
  .container_page.about(:data-theme="$store.state.color")
    h1.about_title About
    shape(
      :isReversed="true"
      :left="{ isPushing: false, title: 'Full' }"
      :center="{ isPushing: false, title: 'developer' }"
      :right="{ isPushing: false, title: 'stack' }"
    )
    .about_section
      p.about_paragraph(style="animation-delay: 1.5s") My name is Alain Cao Van Truong. I am a third-year studend at webschool <push class="text-bold" :isExternal="true" :isTexted="true" title="HÉTIC" href="https://www.hetic.net"/>. I mainly experiment front-end, back-end and mobile development. Moreover, I also have some knowledge about UX/UI design, motion design, SEO/SEA, etc. I am currently looking for a 5-month internship from late June to late November.
    .about_section
      .about_card
        h2.about_subtitle(style="animation-delay: 2s") <span>What I wish</span> <span>to perfect</span>
        .about_list(style="animation-delay: 2.5s")
          span.about_list_item Vue.js
          span.about_list_item Nuxt.js
          span.about_list_item PHP Slim
          span.about_list_item Swift
          span.about_list_item Three.js
          span.about_list_item Git
      .about_card
        h2.about_subtitle(style="animation-delay: 2s") <span>What I need</span> <span>to improve</span>
        .about_list(style="animation-delay: 2.5s")
          span.about_list_item React.js
          span.about_list_item AngularJS
          span.about_list_item Node.js
          span.about_list_item Laravel
          span.about_list_item Typescript
          span.about_list_item WordPress
      .about_card
        h2.about_subtitle(style="animation-delay: 2s") <span>What I want</span> <span>to learn</span>
        .about_list(style="animation-delay: 2.5s")
          span.about_list_item Symfony
          span.about_list_item React Native
          span.about_list_item ReasonML
          span.about_list_item Ruby on Rails
    .about_section
      p.about_text.about_text-framed(style="animation-delay: 3s")
        push.text-bold(
          :isExternal="true"
          :isTexted="true"
          title="Download my CV here"
          href="/pdf/CV-Alain_Cao_Van_Truong.pdf"
        )
    .about_section
      .about_card
        h2.about_subtitle(style="animation-delay: 3.5s") Contact
        .about_array(style="animation-delay: 4s")
          push.about_link(
            :isExternal="true"
            :isTexted="false"
            title="linkedin.svg"
            href="https://linkedin.com/in/alain-cao-van-truong/"
            rel="noopener"
          )
          push.about_link(
            :isExternal="true"
            :isTexted="false"
            title="twitter.svg"
            href="https://twitter.com/AlainCVT"
            rel="noopener"
          )
          push.about_link(
            :isExternal="true"
            :isTexted="false"
            title="github.svg"
            href="https://github.com/KamenSentai"
            rel="noopener"
          )
          push.about_link(
            :isExternal="true"
            :isTexted="false"
            title="mail.svg"
            href="mailto:contact@alain-caovantruong.fr")
    .about_section
      p.about_text.about_text-credit(style="animation-delay: 4.5s")
        push.text-bold(
          :isExternal="true"
          :isTexted="true"
          title="Designed by Gaëtan Lefebvre"
          href="http://gaetanlefebvre.fr"
          rel="noopener"
        )
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

    @media (max-width $gridmedia8)
      font-size 3.75rem

  &_section
    display flex
    justify-content space-evenly
    margin 50px 0
    width grid(8)

    @media (max-width $gridmedia8)
      width grid(6)

    @media (max-width $gridmedia6)
      flex-direction column
      align-items center
      width grid(4)

    @media (max-width $gridmedia4)
      width grid(3)

  &_paragraph
    font-size 2.5rem
    font-family $euclidtriangle
    letter-spacing 0
    line-height 1.5em
    text-align justify

    @media (max-width $gridmedia8)
      font-size 2rem

  &_card
    display flex
    flex-direction column
    align-items center
    margin 0 25px
    flex 1

    @media (max-width $gridmedia6)
      margin 25px 0

      &:first-child
        margin-top 0

      &:last-child
        margin-bottom 0

    &:first-child
      margin-left 0

    &:last-child
      margin-right 0

  &_list
    display flex
    flex-direction column
    align-items flex-start

    &_item
      font-family $euclidtriangle
      font-size 2rem
      letter-spacing 0
      line-height 1.25em

  &_text
    font-family $euclidtriangle
    font-size 2rem
    letter-spacing 0
    line-height 1.25em

    &-framed
      position relative
      padding 1em

      &::before,
      &::after
        content ''
        position absolute
        left 0
        top 0
        width 100%
        height 100%
        pointer-events none
        transform-origin 50% 50%

      &::before
        transform scaleY(0)
        animation scale-vertical 1s $cubic 4.5s forwards

      &::after
        transform scaleX(0)
        animation scale-horizontal 1s $cubic 4s forwards

      ^[-2][data-theme="black"] &
        &::before
          border-left 2px solid $white
          border-right 2px solid $white
        &::after
          border-top 2px solid $white
          border-bottom 2px solid $white

      ^[-2][data-theme="white"] &
        &::before
          border-left 2px solid $black
          border-right 2px solid $black
        &::after
          border-top 2px solid $black
          border-bottom 2px solid $black

    &-credit
      font-weight 700
      text-align center
      text-transform uppercase

  &_array
    display flex

    @media (max-width $gridmedia4)
      flex-direction column

  &_link
    margin 0 25px

    @media (max-width $gridmedia4)
      margin 25px 0

      &:first-child
        margin-top 0

      &:last-child
        margin-bottom 0

    &:first-child
      margin-left 0

    &:last-child
      margin-right 0
</style>
