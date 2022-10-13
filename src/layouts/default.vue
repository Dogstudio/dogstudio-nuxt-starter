<script setup>
// Constants
import { DEV } from '@/utils/constants'

// Variables
const route = useRoute()
const enable = route.query.debug === 'grid'

// State
const showGrid = useState(() => DEV && enable)
</script>

<template>
  <main class="site-wrapper">
    <slot />

    <template v-if="showGrid">
      <Grid />
    </template>
  </main>
</template>

<style lang="scss">
.site-wrapper {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
