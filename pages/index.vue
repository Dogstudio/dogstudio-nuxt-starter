<script setup>
// Metas
const title = ref('Dogstudio | Nuxt Starter')
const description = ref('Opinionated Nuxt starter by Dogstudio')
</script>

<template>
  <article class="home">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="title" :content="title" />
      <Meta name="description" :content="description" />
    </Head>

    <h1>Hello World!</h1>
  </article>
</template>
