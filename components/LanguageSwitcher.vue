<template>
  <div class="language-switcher">
    <button
      v-for="loc in availableLocales"
      :key="loc.code"
      :class="{ 'active': loc.code === currentLocale }"
      @click="switchLanguage(loc.code)"
    >
      {{ loc.code.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
const { locale, locales, setLocale } = useI18n()
const router = useRouter()

const currentLocale = computed(() => locale.value)
// locales may be an array of objects (from nuxt.config) or strings
const availableLocales = computed(() => {
  const l = locales.value || []
  if (l.length && typeof l[0] === 'string') {
    return l.map(code => ({ code }))
  }
  return l
})

const switchLanguage = async (newLocale) => {
  // prefer using nuxt-i18n's setLocale if available
  if (typeof setLocale === 'function') {
    await setLocale(newLocale)
    return
  }

  // fallback: set locale value and navigate to same route with locale prefix
  locale.value = newLocale
  // try to preserve path and query
  const path = route.fullPath
  router.push({ path })
}
</script>
