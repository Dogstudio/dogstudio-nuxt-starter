<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  rootMargin: {
    type: String,
    default: '0px',
  },
  threshold: {
    type: Number,
    default: 0,
  },
  once: {
    type: Boolean,
    default: false,
  },
  onEnter: {
    type: Function,
    default: () => {},
  },
  onLeave: {
    type: Function,
    default: () => {},
  },
})

const rootRef = ref(null)
const observer = ref(null)

onMounted(() => {
  const handleIntersection = (entries) => {
    const isIntersecting = entries[0]?.isIntersecting

    if (isIntersecting) {
      if (props.once) {
        observer.value?.disconnect()
      }

      props.onEnter(entries[0].target)
    } else {
      props.onLeave()
    }
  }

  observer.value = new IntersectionObserver(handleIntersection, {
    rootMargin: props.rootMargin,
    threshold: props.threshold,
  })
  observer.value.observe(rootRef.value)
})

onBeforeUnmount(() => {
  observer.value?.disconnect()
})
</script>

<template>
  <Component ref="rootRef" :is="props.tag" class="in-view">
    <slot />
  </Component>
</template>

<style lang="scss">
.in-view {
  display: flex;
}
</style>
