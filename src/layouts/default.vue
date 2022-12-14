<script setup>
// Constants
import { DEV } from '@/utils/constants'

// Variables
const route = useRoute()
const enable = route.query.debug === 'grid'

// i18n / SEO
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
  identifierAttribute: 'id',
})

// State
const showGrid = useState(() => DEV && enable)
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>

    <Body>
      <main class="site-wrapper">
        <slot />

        <template v-if="showGrid">
          <Grid />
        </template>
      </main>
    </Body>
  </Html>
</template>

<style lang="scss">
.site-wrapper {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
