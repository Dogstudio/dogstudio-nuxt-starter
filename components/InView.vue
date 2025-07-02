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
    type: [Array, Number],
    default: [0, 1],
  },
  once: {
    type: Boolean,
    default: false,
  },
  mode: {
    type: String,
    default: 'intersecting',
    validator: (value) => ['intersecting', 'intersectionRatio'].includes(value),
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
    const { isIntersecting, intersectionRatio, target } = entries[0]

    if (props.mode === 'intersectionRatio') {
      if (intersectionRatio === 1) {
        if (props.once) observer.value?.disconnect()

        props.onEnter(target)
      } else if (intersectionRatio === 0) {
        props.onLeave(target)
      }

      return
    }

    if (props.mode === 'intersecting') {
      if (isIntersecting) {
        if (props.once) observer.value?.disconnect()

        props.onEnter(target)
      } else {
        props.onLeave(target)
      }
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
