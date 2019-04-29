<template lang="pug">
.project
  .project_header
    img.project_cover(:alt="project.name" :src="require(`../../assets/images/${project.cover}`)")
    navigation(
      :left="{ title: 'Works', href: '/works' }"
      :right="{ title: 'About', href: '/about' }"
    )
    h1.project_title {{ project.name }}
    .project_scroll
      .project_push
        push.project_button(
          positionValue="relative"
          :isExternal="false"
          :isTexted="true"
          title="Scroll"
          href="#"
          :position="{ x: 0, y: windowSize.h }"
        )
  .project_body
    shape(
      theme="white"
      :isReversed="false"
      :left="{ isPushing: project.code !== '', isExternal: true, title: project.code !== '' ? 'View code' : 'Code unavailable', href: project.code }"
      :center="{ isPushing: false, title: project.date }"
      :right="{ isPushing: project.demo !== '', isExternal: true, title: project.demo !== '' ? 'View demo' : 'Demo unavailable', href: project.demo }"
    )
    .project_section
      h2.project_subtitle(style="animation-delay: 1.5s") My role
      span.project_text(style="animation-delay: 1.625s") {{ project.role }}
    .project_section
      h2.project_subtitle(v-if="project.team.length !== 0" style="animation-delay: 1.75s") The team
      .project_group
        p.project_paragraph.project_paragraph-center(v-for="(person, index) in project.team" :style="`animation-delay: ${index / 4 + 1.875}s`") <span class="project_label">{{ person.name }}</span> <span class="project_tag">{{ person.role }}</span>
    .project_section
      h2.project_subtitle(style="animation-delay: 2s") The project
      .project_group
        p.project_paragraph(v-for="(paragraph, index) of project.description" :style="`animation-delay: ${index / 4 + 2.125}s`") {{ paragraph }}
      .project_bloc(v-if="project.mentions.length !== 0")
        push.project_text(
          v-for="(mention, index) of project.mentions"
          :key="index"
          positionValue="relative"
          :isExternal="true"
          :isTexted="true"
          :title="mention.label"
          :href="mention.url"
          :style="`animation-delay: ${index / 4 + 2.5 + project.description.length / 4}s`"
        )
    .project_section
      h2.project_subtitle(style="animation-delay: 2.625s") The tools
      .project_group
        p.project_paragraph.project_paragraph-center(v-for="(tool, index) in project.tools" :style="`animation-delay: ${index / 4 + 2.75}s`") {{ tool }}
    .project_section
      h2.project_subtitle(style="animation-delay: 2.875s") Screenshots
      .project_gallery
        .project_frame(v-for="image in project.images")
          img.project_image(:alt="image.alt" :src="require(`../../assets/images/${project.slug}/${image.src}`)")
  .project_footer
    p.project_subtext(style="animation-delay: 3.5s") See more projects
    .project_suggestions
      .project_item
        nuxt-link.project_purchase(:to="{ path: `/projects/${prevProject.slug}` }")
          img.project_picture(
            :alt="prevProject.name"
            :src="require(`../../assets/images/${prevProject.cover}`)"
          )
      .project_item
        nuxt-link.project_purchase(:to="{ path: `/projects/${nextProject.slug}` }")
          img.project_picture(
            :alt="nextProject.name"
            :src="require(`../../assets/images/${nextProject.cover}`)"
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
      title: `Alain Cao Van Truong | ${this.project.name}`,
      meta: [
        { hid: 'description', name: 'description', content: `This is one of my projects named "${this.project.name}".` }
      ],
      bodyAttrs: {
        class: 'is-scrollable'
      }
    }
  },
  data() {
    return {
      windowSize: { w: 0, h: 0 }
    }
  },
  created() {
    if (Object.keys(this.project).length === 0) this.$nuxt.error({ statusCode: 404, message: 'Project not found' })
  },
  components: {
    'navigation': Navigation,
    'push': Push,
    'shape': Shape
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
    project() {
      return this.projects.find(project => project.slug === this.$route.params.slug) || {}
    },
    index() {
      return this.projects.indexOf(this.project)
    },
    prevProject() {
      return this.projects[this.mod(this.index - 1, this.projects.length)]
    },
    nextProject() {
      return this.projects[this.mod(this.index + 1, this.projects.length)]
    }
  },
  methods: {
    mod(n, m) {
      return ((n % m) + m) % m
    }
  },
  mounted() {
    this.windowSize.w = window.innerWidth
    this.windowSize.h = window.innerHeight
  },
  transition: {
    mode: 'out-in',
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: () => {
          TweenMax.set('.project_body', { clearProps: 'all' })
          done()
        }
      })

      tl.to('.project', 0, { pointerEvents: 'none' }, 0)
      tl.to('.project_body', 0, { pointerEvents: 'none' }, 0)

      if (this.$store.state.prevRoute.includes('/projects/')) {
        tl.fromTo('.navigation_main', 1, { y: - window.innerHeight / 4 }, { y: 0 }, 0)
        tl.fromTo('.navigation_menu', 1, { scaleX: 0 }, { scaleX: 1 }, .5)
      }

      if (this.$store.state.prevRoute !== '/projects') {
        tl.fromTo('.project_title', 1, { yPercent: -25, opacity: 0 }, { yPercent: 0, opacity: 1 }, 1)
      }

      tl.fromTo('.project_body', 1, { opacity: 0 }, { opacity: 1 }, 0)
      tl.fromTo('.project_push', 1, { yPercent: -25, opacity: 0 }, { yPercent: 0, opacity: 1 }, .5)
      tl.fromTo('.project_cover', 1, { opacity: 0 }, {
        opacity: .5,
        onComplete: () => {
          TweenMax.set('.project', { clearProps: 'all' })
        }
      }, 1)

      tl.fromTo('.project_frame', 1, { scaleY: 0 }, { scaleY: 1 }, 3)
      tl.fromTo('.project_frame', 1, { width: 0 }, { width: '100%' }, 4)
      tl.fromTo('.project_purchase', 1, { scaleY: 0 }, { scaleY: 1 }, 3.5)
      tl.fromTo('.project_purchase', 1, { width: 0 }, { width: '100%' }, 4.5)
    },
    leave(el, done) {
      const tl = new TimelineMax({ onComplete: done })

      tl.to('.project', 0, { pointerEvents: 'none' }, 0)

      tl.to('.project_cover', 1, { opacity: 0 }, 0)
      tl.to('.project_push', 1, { yPercent: 25, opacity: 0 }, .5)
      tl.to('.project_title', 1, { yPercent: 25, opacity: 0 }, 1)

      if (this.$store.state.nextRoute.includes('/projects/')) {
        tl.to('.project_frame', 1, { width: 0 }, 0)
        tl.to('.project_frame', 1, { scaleY: 0 }, 1)
        tl.to('.project_body', 1, { scaleX: 0 }, 1)
        tl.to('.project_purchase', 1, { width: 0 }, .5)
        tl.to('.project_purchase', 1, { scaleY: 0 }, 1.5)
        tl.to('.project_footer', 1, { opacity: 0 }, 1)
      } else {
        scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth'
        })
      }

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

.project
  display flex
  flex-direction column
  align-items center
  width 100%

  &_header,
  &_body,
  &_footer
    display flex
    flex-direction column
    align-items center
    width 100%

  &_header
    position relative
    height 100vh

  &_cover
    position absolute
    left 0
    top 0
    z-index -1
    full-size()
    object-fit cover
    opacity .5
    filter blur(10px)

  &_scroll
    position absolute
    left 0
    bottom 50px
    display flex
    justify-content center
    width 100%

  &_push
    font-size 0

    &::before,
    &::after
      content ''
      position absolute
      left calc(50% - 2px)
      top calc(100% + 10px)
      width 4px
      height 10px
      background-color $white
      transform-origin 50% 100%
      transition top .5s $cubic

    &::before
      transform skewX(-45deg)

    &::after
      transform skewX(45deg)

    &:hover
      &::before,
      &::after
        top calc(100% + 20px)

  &_button
    text-transform uppercase
    font-size 2.5rem
    font-weight 700

  &_title
    display block
    width 100%
    margin 50px 0
    padding 0 100px
    font-size 10rem
    font-weight 700
    text-transform uppercase
    text-align center

    @media (max-width 650px), (max-height 400px)
      margin 25px 0
      font-size 7.5rem
      padding 0 50px

    @media (max-width 550px)
      font-size 5rem

    @media (max-width 450px)
      font-size 3.75rem

  &_body
    position relative
    padding 50px 0
    padding-top 100px
    color $black
    background-color $white

    &::before
      content ''
      position absolute
      left calc(50% - 1px)
      z-index 0
      top 0
      width 2px
      height 100%
      background-color rgba($black, .125)

    > *
      z-index 1

    *::selection
      color $white
      background-color $black

  &_section
    display flex
    flex-direction column
    align-items center
    width 100%

  &_subtitle,
  &_text,
  &_paragraph,
  &_subtext
    opacity 0
    transform translateY(12.5%)
    will-change opacity, transform
    animation intro-up 1s $cubic forwards

  &_subtitle
    margin-top 100px
    margin-bottom 25px
    font-size 5rem
    font-weight 700
    text-transform uppercase

  &_text
    font-family $euclidtriangle
    font-size 2rem
    letter-spacing 0

  &_group
    display flex
    flex-direction column
    align-items center
    width 100%

  &_paragraph
    margin-bottom 1em
    width grid(8)
    font-family $euclidtriangle
    font-size 2rem
    letter-spacing 0
    line-height 1.25em
    hyphens auto
    text-align justify

    &:last-child
      margin-bottom 0

    &-center
      display flex
      justify-content center

      > *
        flex 1

    @media (max-width $gridmedia8)
      width grid(6)

    @media (max-width $gridmedia6)
      width grid(4)
      font-size 1.7rem

    @media (max-width $gridmedia4)
      width grid(3)

  &_label
    padding-right 1em
    text-align right

  &_tag
    font-size 1.6rem
    font-weight 700
    text-align left

  &_bloc
    display flex
    flex-direction column
    align-items center
    margin-top 50px
    font-weight 700
    text-transform uppercase

    > *
      line-height 1.5em

  &_gallery,
  &_image
    width grid(10)

    @media (max-width $gridmedia10)
      width grid(8)

    @media (max-width $gridmedia8)
      width grid(6)

    @media (max-width $gridmedia6)
      width grid(4)

    @media (max-width $gridmedia4)
      width grid(3)

  &_gallery
    display flex
    flex-direction column
    align-items center

  &_frame
    display flex
    justify-content center
    align-items center
    width 100%
    font-size 0
    margin-bottom 50px
    border 2px solid $black
    transform-origin 50% 50%
    overflow hidden

    &:last-child
      margin-bottom 0

  &_image
    height auto

  &_footer
    display flex
    flex-direction column
    align-items center
    padding 50px 0

  &_subtext
    margin-bottom 50px
    width 100%
    font-family $euclidtriangle
    font-size 2.5rem
    letter-spacing 0
    text-transform uppercase
    text-align center

  &_suggestions
    display flex
    justify-content space-between
    align-items center
    width grid(10)

    @media (max-width $gridmedia10)
      width grid(8)

    @media (max-width $gridmedia8)
      width grid(6)
      flex-direction column

    @media (max-width $gridmedia6)
      width grid(4)

    @media (max-width $gridmedia4)
      width grid(3)

  &_item,
  &_picture
    width grid(4)

    @media (max-width $gridmedia10)
      width grid(3)

    @media (max-width $gridmedia8)
      width grid(4)

    @media (max-width $gridmedia6)
      width grid(3)

  &_item
    margin 25px 0

  &_item,
  &_purchase
    display flex
    justify-content center
    align-items center
    font-size 0

  &_purchase
    width 100%
    border 2px solid $white
    overflow hidden
    transform-origin 50% 50%

  &_picture
    height auto
    transition all 1s $cubic
    will-change transform

    &:hover
      transform scale(1.125)
      filter blur(5px)
</style>
