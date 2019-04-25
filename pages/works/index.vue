<template lang="pug">

</template>

<script>
export default {
  head() {
    return {
      title: 'Alain Cao Van Truong | Works',
      meta: [
        { hid: 'description', name: 'description', content: 'Check out my little works and tests.' }
      ],
      bodyAttrs: {
        class: 'is-unscrollable'
      }
    }
  },
  computed: {
    works() {
      return this.$store.state.works
    }
  }
}
</script>
