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
  <article class="error">
    <p>Error {{ error.statusCode }}</p>
  </article>
</template>
