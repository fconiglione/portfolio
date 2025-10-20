<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
const theme = useColorMode()

const socials = [
  { icon: 'mdi:github', url: 'https://github.com/fconiglione', label: 'GitHub' },
  { icon: 'mdi:linkedin', url: 'https://linkedin.com/in/francescoconiglione', label: 'LinkedIn' },
  { icon: 'mdi:email', url: 'mailto:fconiglione@protonmail.com', label: 'Email' }
]

const projects = [
  {
    title: 'Finley',
    description: 'Your friendly AI finance buddy that makes tracking your net worth simple and insightful.',
    image: '/images/project-1.png',
    tech: ['Next.js', 'Node.js', 'Python'],
    github: 'https://github.com/fconiglione/Finley',
    demo: 'https://dev-finley.vercel.app'
  },
  {
    title: 'Ceasar CRM',
    description: 'A comprehensive CRM system designed to enhance and streamline customer interactions.',
    image: '/images/project-2.png',
    tech: ['Angular', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/fconiglione/ceasar',
    demo: 'https://frim.io'
  },
  {
    title: 'FinRisk AI',
    description: 'Machine learning model that predicts corporate bankruptcy risks with ~85% accuracy.',
    image: '/images/project-3.png',
    tech: ['Python', 'Pandas', 'scikit-learn'],
    github: 'https://github.com/fconiglione/COMP4112-FinalProject'
  }
]
</script>

<template>
  <div class="flex flex-col gap-8 md:gap-12">
    <!-- Hero Section -->
    <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-10">
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
    <!-- Open Source Projects Section -->
    <div class="flex flex-col gap-8 py-8">
      <NuxtLink to="/projects" class="inline-block group">
        <h2 class="inline-flex items-center gap-2 text-2xl sm:text-3xl font-semibold hover:text-primary/90 transition-colors">
          <span class="text-primary/80">&gt;</span> 
          Open Source Projects
          <Icon 
            icon="mdi:arrow-right" 
            class="h-6 w-6 text-primary/80 transition-transform group-hover:translate-x-1" 
          />
        </h2>
      </NuxtLink>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.title" 
          class="group rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
        >
          <div class="relative aspect-video overflow-hidden rounded-t-lg">
            <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
          </div>
          <div class="p-6 space-y-4">
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <p class="text-sm text-muted-foreground">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.tech" :key="tech"
                class="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-3 pt-4">
              <Button class="cursor-pointer" variant="outline" size="sm" :href="project.github" target="_blank">
                <Icon icon="mdi:github" class="mr-2 h-4 w-4" />
                Code
              </Button>
              <Button class="cursor-pointer" v-if="project.demo" variant="outline" size="sm" :href="project.demo" target="_blank">
                <Icon icon="mdi:open-in-new" class="mr-2 h-4 w-4" />
                Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>