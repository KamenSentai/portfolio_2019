<template lang="pug">
a.push(
  v-if="isExternal"
  :data-position="positionValue"
  :data-display="isTexted ? 'text' : 'image'"
  :data-title="title"
  :title="title"
  :href="href"
  target="_blank"
  rel="noreferrer"
)
  img.push_text.push_text-image(
    v-if="!isTexted"
    :src="require(`../assets/images/${title}`)"
    :alt="title"
  )
  img.push_text.push_text-sub(
    v-if="!isTexted"
    :src="require(`../assets/images/${title}`)"
    :alt="title"
  )
  span.push_text(v-else) {{ title }}
nuxt-link.push(
  v-else-if="href !== '#'"
  :data-position="positionValue"
  :data-display="isTexted ? 'text' : 'image'"
  :data-title="title"
  :title="title"
  :to="href"
)
  img.push_text.push_text-image(
    v-if="!isTexted"
    :src="require(`../assets/images/${title}`)"
    :alt="title"
  )
  img.push_text.push_text-sub(
    v-if="!isTexted"
    :src="require(`../assets/images/${title}`)"
    :alt="title"
  )
  span.push_text(v-else) {{ title }}
span.push(
  v-else
  :data-position="positionValue"
  :data-display="isTexted ? 'text' : 'image'"
  :data-title="title"
  @click="scrollClick"
)
  img.push_text.push_text-image(
    v-if="!isTexted"
    :src="require(`../assets/images/${title}`)"
    :alt="title"
  )
  img.push_text.push_text-sub(
    v-if="!isTexted"
    :src="require(`../assets/images/${title}`)"
    :alt="title"
  )
  span.push_text(v-else @click="scrollClick") {{ title }}
</template>

<script>
export default {
  props: [
    'positionValue',
    'isExternal',
    'isTexted',
    'title',
    'href',
    'position'
  ],
  methods: {
    scrollClick() {
      scrollTo({
        left: this.position.x,
        top: this.position.y,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

$imageSize = 50px

.push
  display inline-flex
  overflow hidden
  cursor pointer

  &[data-position="relative"]
    position relative

  &[data-position="absolute"]
    position absolute

  &[data-display="text"]::before
    content attr(data-title)

  &::before
    position absolute
    left 0
    top 0
    transform translate3d(0, 150%, 0)
    transition transform .5s $cubic

  &:hover
    &::before
      transform translate3d(0, 0, 0)

    & ^[-1]_text
      transform translate3d(0, -150%, 0)

      &-sub
        transform translate3d(0, 0, 0)

  &_text
    display block
    opacity 0
    transform translate3d(0, 0, 0)
    transition transform .5s $cubic
    animation opacity-toggle .5s $cubic .5s forwards

    &-image
      width auto
      height $imageSize

    &-sub
      position absolute
      left 0
      top 0
      transform translate3d(0, 150%, 0)
      transition transform .5s $cubic

  @keyframes opacity-toggle
    from
      opacity 0
    to
      opacity 1
</style>
