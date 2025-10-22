<script setup lang="ts">
import { Icon } from '@iconify/vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6">
    <div class="container flex flex-col items-center space-y-4 px-4 md:space-y-0 md:flex-row md:justify-between max-w-screen-2xl">
      <p class="text-sm text-muted-foreground text-center md:text-left">
        {{ $t('footer.copy', { year: currentYear }) }}
      </p>
      <div class="flex items-center gap-6">
        <a href="https://github.com/fconiglione" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-primary transition-colors">
          <Icon icon="mdi:github" class="h-5 w-5" />
        </a>
        <a href="https://linkedin.com/in/francescoconiglione" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-primary transition-colors">
          <Icon icon="mdi:linkedin" class="h-5 w-5" />
        </a>
        <a href="mailto:fconiglione@protonmail.com" class="text-muted-foreground hover:text-primary transition-colors">
          <Icon icon="mdi:email" class="h-5 w-5" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
div {
  font-family: Helvetica, sans-serif;
}
</style>