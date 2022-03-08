<template>
  <main :dir="dir" class="site-wrapper">
    <Nuxt />
  </main>
</template>

<script>
// Utilities
import { getLocaleDirection } from 'utils/helpers/language'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      dir: getLocaleDirection(this.$i18n.locale),
    }
  },
  watch: {
    /* eslint-disable */
    '$i18n.locale': function () {
      this.dir = getLocaleDirection(this.$i18n.locale)
    },
  },
}
</script>

<style lang="scss" scoped>
.site-wrapper {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
