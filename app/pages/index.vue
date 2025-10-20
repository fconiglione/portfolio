<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
const theme = useColorMode()

const socials = [
  { icon: 'mdi:github', url: 'https://github.com/fconiglione', label: 'GitHub' },
  { icon: 'mdi:linkedin', url: 'https://linkedin.com/in/francescoconiglione', label: 'LinkedIn' },
  { icon: 'mdi:email', url: 'mailto:fconiglione@protonmail.com', label: 'Email' }
]
</script>

<template>
  <div class="flex flex-col gap-8 md:gap-12">
    <!-- Hero Section -->
    <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-6">
      <!-- Content -->
      <div class="flex flex-col gap-6 w-full md:w-1/2">
        <div class="space-y-3">
          <h1 class="text-3xl sm:text-4xl md:text-5xl">
            <div class="mb-2">
              <span class="text-muted-foreground font-light">Hi, I'm </span>
              <span class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary">Francesco Coniglione.</span>
            </div>
            <div class="text-lg sm:text-xl md:text-2xl font-normal text-muted-foreground">
              A software engineer based in Ontario.
            </div>
          </h1>
        </div>
        
        <p class="text-base sm:text-lg text-muted-foreground max-w-lg">
          I build scalable fintech solutions focusing on innovative technologies and secure, efficient architectures.
        </p>

        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button 
            class="gap-2 cursor-pointer w-full sm:w-auto" 
            as="a"
            href="/files/FrancescoConiglioneResume2025.pdf" 
            target="_blank"
            download
          >
            <Icon icon="mdi:download" class="w-4 h-4" />
            Download CV
          </Button>

          <div class="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <Button v-for="social in socials" 
              :key="social.url"
              variant="ghost" 
              size="icon"
              :href="social.url"
              target="_blank"
              class="cursor-pointer h-10 w-10"
            >
              <Icon :icon="social.icon" class="h-5 w-5" />
              <span class="sr-only">{{ social.label }}</span>
            </Button>
          </div>
        </div>
      </div>

      <!-- Image -->
      <div class="w-8/12 md:w-5/12 ml-0 mr-auto md:ml-auto md:mr-0">
        <NuxtImg
          v-if="theme.value === 'light'"
          src="/images/portrait-light.svg"
          alt="Portrait Light"
          class="w-full"
        />
        <NuxtImg
          v-else
          src="/images/portrait-dark.svg"
          alt="Portrait Dark"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>