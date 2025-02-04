<script setup>
const localePath = useLocalePath();

// Remove attrs from the component
// And set them to the button element
defineOptions({ inheritAttrs: false });

// Attributes
const attrs = useAttrs();

// Properties
const props = defineProps({
  tag: {
    type: String,
    default: "button",
  },
});

// Refs
const buttonRef = ref(null);
const isExternal = computed(() => {
  return attrs.href && attrs.href.startsWith("http");
});

// Computed Values
const localizeHref = computed(() => {
  return attrs.href ? localePath(attrs.href) : null;
});

const component = computed(() => {
  if (attrs.href) {
    return defineNuxtLink({
      externalRelAttribute: isExternal.value ? "noopener noreferrer" : "null",
    });
  }

  return props.tag;
});
</script>

<template>
  <component
    :is="component"
    ref="buttonRef"
    class="button-primary"
    v-bind="attrs"
    :href="localizeHref"
    :external="isExternal"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.button-primary {
  appearance: none;
  cursor: pointer;
}
</style>
