<template>
  <article class="error">
    <p>Error {{ error.statusCode }}</p>
  </article>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
