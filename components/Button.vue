<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'button',
  },
  href: {
    type: String,
    default: null,
  },
})

const buttonRef = useTemplateRef('buttonRef')
const localePath = useLocalePath()

// Computed Values
const isExternal = computed(() => {
  return props.href && props.href.startsWith('http')
})
const localizeHref = computed(() => {
  return props.href ? localePath(props.href) : null
})
const component = computed(() => {
  if (props.href) {
    return defineNuxtLink({
      externalRelAttribute: isExternal.value ? 'noopener noreferrer' : 'null',
    })
  }

  return props.tag
})
</script>

<template>
  <component
    :is="component"
    ref="buttonRef"
    class="button"
    :href="localizeHref"
    :external="isExternal"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.button {
  appearance: none;
  cursor: pointer;

  border: 2px solid black;
}
</style>
