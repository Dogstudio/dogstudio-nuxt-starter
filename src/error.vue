<script setup>
// Properties
defineProps({
  error: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <NuxtLayout>
    <article class="error">
      <p>Error {{ error.statusCode }}</p>
    </article>
  </NuxtLayout>
</template>
