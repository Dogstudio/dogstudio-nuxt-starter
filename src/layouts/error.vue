<template>
  <div>
    <p>{{ error.statusCode }} - Error</p>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: `${this.error.statusCode} | Dogstudio`,
        meta: [
          {
            hid: 'title',
            content: `${this.error.statusCode} | Dogstudio`,
          },
        ],
      }
    },
    props: ['error'],
  }
</script>
