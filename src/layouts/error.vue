<template>
  <div>
    <p>Error {{ error.statusCode }}</p>
  </div>
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
}
</script>
