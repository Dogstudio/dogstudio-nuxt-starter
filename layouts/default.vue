<script setup>
import debounce from '~/utils/debounce'

// Constants
import { DEV } from '~/utils/constants'

// Variables
const route = useRoute()
const enable = route.query.debug === 'grid'

// i18n / SEO
const i18nHead = useLocaleHead()
useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
    dir: i18nHead.value.htmlAttrs?.dir,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
}))

// State
const showGrid = useState(() => DEV && enable)

// Methods
const handleResize = () => {
  const _root = document.querySelector(':root')
  const svh = document.querySelector('#svh')
  const lvh = document.querySelector('#lvh')

  _root.style.setProperty('--svh', `${svh.clientHeight}px`)
  _root.style.setProperty('--lvh', `${lvh.clientHeight}px`)
}

// Lifecycle
onMounted(() => {
  // Forget the scroll position on refresh
  history.scrollRestoration = 'manual'

  handleResize()
  window.addEventListener('resize', debounce(handleResize, 100))
})
</script>

<template>
  <div id="svh" />
  <div id="lvh" />

  <main class="site-wrapper">
    <slot />

    <template v-if="showGrid">
      <Grid />
    </template>
  </main>
</template>

<style lang="scss"></style>
