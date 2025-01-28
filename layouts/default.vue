<script setup>
// Constants
import { DEV } from "@/utils/constants";

// Variables
const route = useRoute();
const enable = route.query.debug === "grid";

// i18n / SEO
const i18nHead = useLocaleHead();
useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
    dir: i18nHead.value.htmlAttrs?.dir,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
}));

// State
const showGrid = useState(() => DEV && enable);
</script>

<template>
  <main class="site-wrapper">
    <slot />

    <template v-if="showGrid">
      <Grid />
    </template>
  </main>
</template>

<style lang="scss"></style>
