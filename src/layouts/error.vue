<template>
  <p>{{ error.statusCode }} - Error</p>
</template>

<script>
  export default {
    head() {
      return {
        title: `${this.error.statusCode} | Dogstudio`,
      }
    },
    props: ['error'],
  }
</script>
