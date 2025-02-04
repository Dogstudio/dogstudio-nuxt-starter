<script setup>
defineOptions({
  name: "IconElement",
});

// Properties
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

// Computed Values
const component = computed(() => {
  return defineAsyncComponent(() => import(`./Icons/icon-${props.name}.vue`));
});
</script>

<template>
  <span class="svg" :class="`svg--${name}`">
    <component :is="component" />
  </span>
</template>

<style lang="scss">
.svg {
  display: inline-block;
  width: 100%; // Do not change, use a wrapper around to control the size so the icon is responsive
  height: 100%; // Do not change, use a wrapper around to control the size so the icon is responsive

  svg {
    fill: currentColor;
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
