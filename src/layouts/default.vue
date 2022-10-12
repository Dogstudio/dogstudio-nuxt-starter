<script setup>
// Route datas
const route = useRoute()

// Variables
const env = process.env.NODE_ENV
const debug = route.query.debug || null

// Booleans
const dev = env === 'development'
const enable = debug === 'grid'

// Debugging
const showGrid = useState(() => dev && enable)
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
