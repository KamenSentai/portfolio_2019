<template lang="pug">
a.push(v-if="isExternal" data-mouse="is-reduced" :data-display="isTexted ? 'text' : 'image'" :data-title="title" :href="href" target="_blank" rel="noopener")
  img.push_text.push_text-image(v-if="!isTexted" data-mouse="is-reduced" :src="require(`../assets/images/${title}`)")
  img.push_text.push_text-sub(v-if="!isTexted" data-mouse="is-reduced" :src="require(`../assets/images/${title}`)")
  span.push_text(v-else data-mouse="is-reduced") {{ title }}
nuxt-link.push(v-else data-mouse="is-reduced" :data-display="isTexted ? 'text' : 'image'" :data-title="title" :to="href")
  img.push_text.push_text-image(v-if="!isTexted" data-mouse="is-reduced" :src="require(`../assets/images/${title}`)")
  img.push_text.push_text-sub(v-if="!isTexted" data-mouse="is-reduced" :src="require(`../assets/images/${title}`)")
  span.push_text(v-else data-mouse="is-reduced") {{ title }}
</template>

<script>
export default {
  props: [
    'isExternal',
    'isTexted',
    'title',
    'href'
  ]
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

$imageSize = 50px

.push
  position relative
  display inline-flex
  overflow hidden

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
