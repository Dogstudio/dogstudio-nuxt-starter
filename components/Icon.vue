<script setup async>
defineOptions({
  name: 'IconElement',
})

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: null,
  },
  height: {
    type: Number,
    default: null,
  },
})

const el = useTemplateRef('el')
defineExpose({ el })

// Component
const icon = ref(null)
async function getIcon() {
  try {
    const iconsImport = import.meta.glob('assets/icons/**/**.svg', {
      eager: false,
      query: '?raw',
      import: 'default',
    })
    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]()
    icon.value = rawIcon
  } catch {
    console.error(`Icon '${props.name}' doesn't exist in 'assets/icons'`)
  }
}

const iconSizes = {
  x: [10, 12],
  linkedin: [16, 16],
  facebook: [16, 16],
  youtube: [14, 10],
  instagram: [14, 14],
  link: [12, 10],

  default: [20, 20],
}

const iconSize = iconSizes[props.name] || iconSizes.default

const width = computed(() => props.width || iconSize[0])
const height = computed(() => props.height || iconSize[1])

await getIcon()
</script>

<template>
  <span
    ref="el"
    class="svg icon"
    :class="`svg--${name}`"
    :style="{ width: `${width}px`, height: `${height}px` }"
    v-html="icon"
  >
  </span>
</template>

<style>
.icon {
  svg {
    * {
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0;
    }
  }
}
</style>
