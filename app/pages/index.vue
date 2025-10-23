<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import { reactive, ref } from 'vue'
const { t } = useI18n()

const theme = useColorMode()

const socials = [
  { icon: 'mdi:github', url: 'https://github.com/fconiglione', label: 'GitHub' },
  { icon: 'mdi:linkedin', url: 'https://linkedin.com/in/francescoconiglione', label: 'LinkedIn' },
  { icon: 'mdi:email', url: 'mailto:fconiglione@protonmail.com', label: 'Email' }
]

const projects = [
  {
    slug: 'finley',
    title: 'Finley',
    description: 'Your friendly AI finance buddy that makes tracking your net worth simple, insightful and fun.',
    image: '/images/project-1.png',
    tech: ['Next.js', 'Node.js', 'Python'],
    github: 'https://github.com/fconiglione/Finley',
    demo: 'https://dev-finley.vercel.app'
  },
  {
    slug: 'ceasar',
    title: 'Ceasar CRM',
    description: 'A comprehensive CRM system designed to enhance and streamline customer interactions.',
    image: '/images/project-2.png',
    tech: ['Angular', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/fconiglione/ceasar',
    demo: 'https://frim.io'
  },
  {
    slug: 'finrisk',
    title: 'FinRisk AI',
    description: 'Machine learning model that predicts corporate bankruptcy risks with ~85% accuracy.',
    image: '/images/project-3.png',
    tech: ['Python', 'Pandas', 'scikit-learn'],
    github: 'https://github.com/fconiglione/COMP4112-FinalProject'
  },
  {
    slug: 'musomania',
    title: 'MusoMania',
    description: 'The social platform where musicians can connect, collaborate, and monetize their talents.',
    image: '/images/project-4.jpg',
    tech: ['Next.js', 'Prisma ORM'],
    github: 'https://github.com/MusoManiaInc/MusoMania-Frontend',
    demo: 'https://musomania-frontend.onrender.com/'
  },
  {
    slug: 'spotify',
    title: 'Spotify Music Finder',
    description: 'Enables users to explore and discover music from Spotify\'s database of music tracks, albums, and artists.',
    image: '/images/project-5.jpg',
    tech: ['Java', 'JavaFX', 'GSON/JSON'],
    github: 'https://github.com/fconiglione/SpotifyPlayer'
  },
  {
    slug: 'quickbite',
    title: 'QuickBite',
    description: 'The web-based local food delivery platform designed to connect customers with their favourite restaurants.',
    image: '/images/project-6.png',
    tech: ['ASP.NET (C#)', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/JaskarnDhillon/QuickBiteCOMP3415'
  }
]

/*
Python, Java / Kotlin, MySQL / PostgreSQL / SQL Server, React / Angular / Vue / Node.js / Express.js, ASP.NET (C#),
WordPress (PHP), Microsoft Azure, MongoDB / Firebase, Git / GitHub
*/
const skills = {
  languages: ['TypeScript / JavaScript', 'Java / Kotlin', 'Python', 'ASP.NET (C#)', 'PHP'],
  frontend: ['React', 'Angular', 'Vue.js', 'Next.js'],
  backend: ['Node.js', 'Express.js', 'ASP.NET', 'MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Firebase'],
  tools: ['Azure', 'Google Cloud', 'Git / GitHub', 'Docker', 'Jira']
}

const formData = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = reactive({
  show: false,
  isError: false,
  message: ''
})

const validateForm = () => {
  const errors = []
  if (!formData.name || formData.name.length < 2) {
    errors.push(t('form.validation.name'))
  }
  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push(t('form.validation.email'))
  }
  if (!formData.message || formData.message.length < 10) {
    errors.push(t('form.validation.message'))
  }
  return errors
}

const onSubmit = async () => {
  if (isSubmitting.value) return

  const errors = validateForm()
  if (errors.length > 0) {
    submitStatus.isError = true
    submitStatus.message = errors.join('; ')
    submitStatus.show = true
    return
  }

  isSubmitting.value = true
  submitStatus.show = false

  try {
    const { public: publicConfig } = useRuntimeConfig()
    const scriptUrl = publicConfig.googleAppsScriptUrl
    const url = new URL(scriptUrl)
    url.searchParams.append('cacheBuster', Date.now().toString())

    await fetch(url.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      }),
      mode: 'no-cors'
    })

    submitStatus.isError = false
  submitStatus.message = t('form.thankYou', "Thank you! I'll get back to you as soon as possible.")
    formData.name = formData.email = formData.message = ''
  } catch (error) {
    submitStatus.isError = true
  submitStatus.message = t('form.error', 'Something went wrong. Please try again later.')
  } finally {
    isSubmitting.value = false
    submitStatus.show = true
  }
}
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
              <span class="text-muted-foreground font-light">{{ $t('site.welcomePrefix') }}</span>
              <span class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary">Francesco Coniglione.</span>
            </div>
            <div class="text-lg sm:text-xl md:text-2xl font-normal text-muted-foreground">
              {{ $t('site.tagline') }}
            </div>
          </h1>
        </div>
        
        <p class="text-base sm:text-lg text-muted-foreground max-w-lg">
          {{ $t('site.intro') }}
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
            {{ $t('buttons.Download CV') }}
          </Button>

          <div class="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            <Button v-for="social in socials" 
              :key="social.url"
              as="a"
              variant="ghost" 
              size="icon"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="$t(`socials.${social.label}`)"
              class="cursor-pointer h-10 w-10"
            >
              <Icon :icon="social.icon" class="h-5 w-5" />
              <span class="sr-only">{{ $t(`socials.${social.label}`) }}</span>
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
    <div id="projects" class="flex flex-col gap-8 py-8">
      <NuxtLink to="https://github.com/fconiglione" target="_blank" class="inline-block group">
        <h2 class="inline-flex items-center gap-2 text-2xl sm:text-3xl font-semibold hover:text-primary/90 transition-colors" id="projets">
          <span class="text-primary/80">&gt;</span> 
          {{ $t('sections.openSource') }}
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
            <p class="text-sm text-muted-foreground">{{ $t(`projects.${project.slug}.description`, project.description) }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.tech" :key="tech"
                class="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-3 pt-4">
              <a :href="project.github" target="_blank" rel="noopener noreferrer">
                <Button class="cursor-pointer" variant="outline" size="sm">
                  <Icon icon="mdi:github" class="mr-2 h-4 w-4" />
                  {{ $t('buttons.Code') }}
                </Button>
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer">
                <Button class="cursor-pointer" variant="outline" size="sm">
                  <Icon icon="mdi:open-in-new" class="mr-2 h-4 w-4" />
                  {{ $t('buttons.Demo') }}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About Section -->
    <div class="flex flex-col gap-8 py-8" id="about">
      <NuxtLink to="https://www.linkedin.com/in/francescoconiglione/" target="_blank" class="inline-block group" id="a-propos">
        <h2 class="inline-flex items-center gap-2 text-2xl sm:text-3xl font-semibold hover:text-primary/90 transition-colors">
          <span class="text-primary/80">&gt;</span> 
          {{ $t('sections.about') }}
          <Icon 
            icon="mdi:arrow-right" 
            class="h-6 w-6 text-primary/80 transition-transform group-hover:translate-x-1" 
          />
        </h2>
      </NuxtLink>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Professional Summary -->
        <div class="space-y-4">
          <p class="text-lg text-muted-foreground">
            {{ $t('about.paragraph1') }}
          </p>
          <p class="text-lg text-muted-foreground">
            {{ $t('about.paragraph2') }}
          </p>
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div v-for="(techs, category) in skills" :key="category" class="space-y-2">
            <h3 class="text-sm font-medium text-primary capitalize">{{ $t(`skills.${category}`) }}</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in techs" :key="tech"
                class="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div id="contact" class="flex flex-col gap-8 pt-8 pb-14">
      <!-- French anchor -->
      <a id="contact" class="hidden" />
      <NuxtLink to="mailto:fconiglione@protonmail.com" class="inline-block group">
        <h2 class="inline-flex items-center gap-2 text-2xl sm:text-3xl font-semibold hover:text-primary/90 transition-colors">
          <span class="text-primary/80">&gt;</span> 
          {{ $t('sections.contact') }}
          <Icon 
            icon="mdi:arrow-right" 
            class="h-6 w-6 text-primary/80 transition-transform group-hover:translate-x-1" 
          />
        </h2>
      </NuxtLink>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div class="space-y-4">
            <p class="text-lg text-muted-foreground">
            {{ $t('contact.blurb') }}
          </p>
          
          <div class="flex flex-col gap-3 pt-4">
            <a href="https://github.com/fconiglione" 
              target="_blank"
              class="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon icon="mdi:github" class="h-5 w-5" />
              github/fconiglione
            </a>
            <a href="https://linkedin.com/in/francescoconiglione" 
              target="_blank"
              class="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon icon="mdi:linkedin" class="h-5 w-5" />
              linkedin/ln/francescoconiglione
            </a>
            <a href="mailto:fconiglione@protonmail.com" 
              class="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon icon="mdi:email" class="h-5 w-5" />
              fconiglione@protonmail.com
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-card rounded-lg">
          <form @submit.prevent="onSubmit" class="space-y-6 border-none">
            <div v-if="submitStatus.show" 
              :class="[
                'p-4 mb-4 rounded-md text-sm',
                submitStatus.isError ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'
              ]"
            >
              {{ submitStatus.message }}
            </div>

            <div class="space-y-4">
              <div class="space-y-2 flex flex-col gap-0.5">
                <label for="name" class="text-sm font-medium">{{ $t('form.name') }}</label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  required
                />
              </div>
              
              <div class="space-y-2 flex flex-col gap-0.5">
                <label for="email" class="text-sm font-medium">{{ $t('form.email') }}</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  required
                />
              </div>

              <div class="space-y-2 flex flex-col gap-0.5">
                <label for="message" class="text-sm font-medium">{{ $t('form.message') }}</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="4"
                  class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  required
                ></textarea>
              </div>
            </div>

            <Button 
              type="submit" 
              class="w-full cursor-pointer"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? $t('form.sending') : $t('buttons.Send Message') }}
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>