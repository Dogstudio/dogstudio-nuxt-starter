<script setup>
// Properties
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
})

// Component
const iconComponent = (await import(`./Icons/icon-${props.name}.vue`)).default
</script>

<template>
  <span
    :class="['svg', `svg--${name}`]"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <component :is="iconComponent" :width="width" :height="height" />
  </span>
</template>

<script>
export default {
  name: 'IconElement',
}
</script>
