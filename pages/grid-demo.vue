<script setup>
const breakpoint = ref("xxxs");
const viewport = useViewport();
watch(
  viewport.breakpoint,
  (value) => {
    breakpoint.value = value;
  },
  { immediate: true }
);
</script>

<template>
  <article class="grid-demo">
    <header class="grid-demo__header">
      Current breakpoint: {{ breakpoint }}
    </header>

    <div class="grid-demo__container">
      <div class="grid-demo__item"></div>
      <div class="grid-demo__item"></div>
      <div class="grid-demo__item"></div>
      <div class="grid-demo__item"></div>
      <div class="grid-demo__item"></div>
      <div class="grid-demo__item"></div>
    </div>
  </article>
</template>

<style lang="scss">
.grid-demo {
  // use ?debug=grid and use the dropdown in the top right for grid debugging

  &__container {
    width: var(--grid-size);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;

    @include mq-gs-from("xxxs") using ($from) {
      gap: gs(0, 1, $from);
    }

    /*
     *  The above is for purposes of demonstration, a cleaner way would be:
     *    gap: var(--grid-gutter);
    */
  }

  &__item {
    aspect-ratio: 1;
    background-color: #ccc;
    display: flex;

    width: gs(3, 2, "xxxs");
    @include mq-gs-from("l") using ($from) {
      width: gs(2, 1, $from);
    }
  }
}
</style>
