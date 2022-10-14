<template>
  <main :dir="dir" class="site-wrapper">
    <Nuxt />

    <template v-if="debug">
      <Grid />
    </template>
  </main>
</template>

<script>
// Utils
import { getLocaleDirection } from 'utils/helpers/language'

// Constants
import { DEV } from 'utils/constants'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      dir: getLocaleDirection(this.$i18n.locale),
      debug: false,
    }
  },
  watch: {
    /* eslint-disable */
    '$i18n.locale': function () {
      this.dir = getLocaleDirection(this.$i18n.locale)
    },
  },
  mounted() {
    const dev = DEV
    const debug = this.$route.query.debug === 'grid'

    this.debug = dev && debug
  }
}
</script>

<style lang="scss">
.site-wrapper {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
