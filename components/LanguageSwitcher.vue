<script setup>
const { locale, locales, setLocale } = useI18n()

// Refs
const openDrawer = ref(false)

// Computed
const cleanLocales = computed(() =>
  locales.value.filter((loc) => loc !== locale.value).sort()
)

// Methods
const getLanguageName = (code) => {
  const lang = new Intl.DisplayNames([code], {
    type: 'language',
  })

  return lang.of(code)
}

const closeDrawer = () => {
  openDrawer.value = false
}

// Handlers
const handleClick = (loc) => {
  setLocale(loc)
  openDrawer.value = false
}

// Expose closeDrawer method to parent component
defineExpose({ closeDrawer })
</script>

<template>
  <template v-if="locales.length > 1">
    <div class="language-switcher">
      <button
        class="language-switcher__button language-switcher__button--active"
        @click="openDrawer = !openDrawer"
      >
        {{ getLanguageName(locale) }}

        <span
          class="language-switcher__icon"
          :class="{
            'language-switcher__icon--active': openDrawer,
          }"
        >
          <Icon name="caret" />
        </span>
      </button>

      <ul v-if="openDrawer">
        <li v-for="loc in cleanLocales" :key="loc">
          <button class="language-switcher__button" @click="handleClick(loc)">
            {{ getLanguageName(loc) }}
          </button>
        </li>
      </ul>
    </div>
  </template>
</template>
