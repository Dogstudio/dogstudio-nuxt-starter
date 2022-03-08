<template>
  <span
    class="svg"
    :class="`svg--${name}`"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <component :is="iconComponent" :width="width" :height="height" />
  </span>
</template>

<script>
export default {
  name: 'IconElement',
  props: {
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
  },
  computed: {
    iconComponent() {
      return () => import(`./Icons/icon-${this.name}`)
    },
  },
}
</script>
