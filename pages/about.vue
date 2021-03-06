<template lang="pug">
.container
  navigation(
    :left="{ title: 'Projects', href: '/projects' }"
    :right="{ title: 'Lab', href: '/lab' }"
  )
  .about
    .about_head
      h1.about_title Student learning about web
    shape(
      :isReversed="true"
      :left="{ isPushing: false, title: 'Full' }"
      :center="{ isPushing: false, title: 'developer' }"
      :right="{ isPushing: false, title: 'stack' }"
    )
    .about_section
      p.about_paragraph(style="animation-delay: 1.5s") My name is Alain CAO VAN TRUONG. I am a third-year studend at webschool #[push.text-bold(positionValue="relative" :isExternal="true" :isTexted="true" title="HÉTIC" href="https://www.hetic.net")]. I mainly experiment front-end, back-end and a little bit mobile development. I am currently looking for a 5-month internship from late June to late November.
    .about_section
      .about_card
        h2.about_subtitle(style="animation-delay: 1.75s") #[span What I wish] #[span to perfect]
        .about_list(style="animation-delay: 2s")
          span.about_list_item Vue.js
          span.about_list_item Nuxt.js
          span.about_list_item PHP Slim
          span.about_list_item Swift
          span.about_list_item Three.js
          span.about_list_item WordPress
      .about_card
        h2.about_subtitle(style="animation-delay: 1.75s") #[span What I need] #[span to improve]
        .about_list(style="animation-delay: 2s")
          span.about_list_item Typescript
          span.about_list_item Node.js
          span.about_list_item Angular
          span.about_list_item React.js
          span.about_list_item Django
          span.about_list_item Bootstrap
      .about_card
        h2.about_subtitle(style="animation-delay: 1.75s") #[span What I intend] #[span to discover]
        .about_list(style="animation-delay: 2s")
          span.about_list_item Laravel
          span.about_list_item Ruby on Rails
          span.about_list_item Symfony
          span.about_list_item ReasonML
          span.about_list_item React Native
          span.about_list_item Docker
    .about_section
      p.about_text.about_text-framed(style="animation-delay: 2.25s")
        push.text-bold(
          positionValue="relative"
          :isExternal="true"
          :isTexted="true"
          :isEnlarged="true"
          title="Download my resume"
          href="/pdf/CV-Alain_Cao_Van_Truong.pdf"
        )
    .about_section
      .about_card
        h2.about_subtitle(style="animation-delay: 2.5s") Contact
        .about_array(style="animation-delay: 2.75s")
          push.about_link(
            positionValue="relative"
            :isExternal="true"
            :isTexted="false"
            :isReduced="false"
            title="LinkedIn"
            image="linkedin.svg"
            href="https://linkedin.com/in/alain-cao-van-truong/"
          )
          push.about_link(
            positionValue="relative"
            :isExternal="true"
            :isTexted="false"
            :isReduced="false"
            title="Twitter"
            image="twitter.svg"
            href="https://twitter.com/AlainCVT"
          )
          push.about_link(
            positionValue="relative"
            :isExternal="true"
            :isTexted="false"
            :isReduced="false"
            title="GitHub"
            image="github.svg"
            href="https://github.com/KamenSentai"
          )
          push.about_link(
            positionValue="relative"
            :isExternal="true"
            :isTexted="false"
            :isReduced="false"
            title="Mail"
            image="mail.svg"
            href="mailto:contact@alain-caovantruong.fr")
    .about_section
      p.about_text.about_text-credit(style="animation-delay: 3s")
        push.text-bold(
          positionValue="relative"
          :isExternal="true"
          :isTexted="true"
          title="Designed by Gaëtan Lefebvre"
          href="http://gaetanlefebvre.fr"
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
      title: 'Alain CAO VAN TRUONG - About',
      meta: [
        { hid: 'description', name: 'description', content: 'Take a look of my portrait, my education, my experiences, my skills and my interests.' },
      ],
      bodyAttrs: {
        class: 'is-scrollable',
      }
    }
  },
  components: {
    'navigation': Navigation,
    'push': Push,
    'shape': Shape,
  },
  transition: {
    mode: 'out-in',
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: () => {
          TweenMax.set('.container', { clearProps: 'all' })
          TweenMax.set('.navigation_stripe-middle', { clearProps: 'all' })
          done()
        }
      })

      tl.to('.container', 0, { pointerEvents: 'none' }, 0)

      if (this.$store.state.prevRoute === 'index') {
        tl.fromTo('.navigation_main', 1, { y: - window.innerHeight / 4 }, { y: 0 }, 0)
        tl.fromTo('.navigation_menu', 1, { scaleX: 0 }, { scaleX: 1 }, .5)
      } else {
        if (this.$store.state.isTouchevents) {
          tl.fromTo('.navigation_stripe-middle', 1, { width: 0, opacity: 0 }, { width: '100%', opacity: 1 }, 0)
        }
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
      tl.to('.about_head', 1, { opacity: 0, yPercent: 25 }, 0)
      tl.to('.shape_branch', 0.5, { opacity: 0 }, .5)
      tl.to('.about', 1, { opacity: 0, y: 100 }, .75)

      if (this.$store.state.nextRoute === 'index') {
        tl.to('.navigation_menu', 1, { scaleX: 0 }, 0)
        tl.to('.navigation_main', 1, { y: - window.innerHeight / 4 }, .5)
      } else {
        if (this.$store.state.isTouchevents) {
          tl.to('.navigation_stripe-middle', 1, { width: 0, opacity: 0 }, 0)
        }
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.about
  display flex
  flex-direction column
  align-items center
  flex-shrink 0
  padding 50px 0
  width grid(8)
  margin auto

  @media (max-width $gridmedia8)
    width grid(6)

  @media (max-width $gridmedia6)
    flex-direction column
    align-items center
    width grid(4)

  @media (max-width $gridmedia4)
    width grid(3)

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
    text-align center
    animation-delay .5s

  &_subtitle
    display flex
    flex-direction column
    margin-bottom 25px
    text-align center
    font-size 5rem
    font-weight 700

    @media (max-width $gridmedia8)
      font-size 3.75rem

  &_section
    display flex
    justify-content space-evenly
    width 100%
    margin 50px 0

    @media (max-width $gridmedia6)
      flex-direction column
      align-items center

  &_paragraph
    color lighten($black, 25%)
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
      color lighten($black, 25%)
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
      background-color $white

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
        border-left 4px solid $black
        border-right 4px solid $black
        transform scaleY(0)
        animation scale-vertical 1s $cubic 2.5s forwards

      &::after
        border-top 4px solid $black
        border-bottom 4px solid $black
        transform scaleX(0)
        animation scale-horizontal 1s $cubic 2.75s forwards

    &-credit
      font-weight 700
      text-align center

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
