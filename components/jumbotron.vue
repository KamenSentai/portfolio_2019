<template lang="pug">
.jumbotron
</template>

<script>
export default {
  props: [
    'isMain',
    'cards'
  ]
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/tools/app'

.jumbotron
  display flex
  justify-content center
  align-items center
  full-size()
</style>
