<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'

const expertise = ['investigations', 'risk', 'regulation', 'humanBehaviour'] as const
const topics = ['tradeBased', 'crypto', 'suspiciousActivity'] as const

const socials = [
  { icon: 'mdi:linkedin', url: 'https://linkedin.com/in/francescoconiglione', labelKey: 'linkedin' },
  { icon: 'mdi:email', url: 'mailto:inquiries@francescoconiglione.com', labelKey: 'email' }
]
</script>

<template>
  <div>
    <section class="grid items-start gap-10 py-10 lg:grid-cols-[1.25fr_0.75fr] md:py-14">
      <div class="space-y-6">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">{{ $t('landing.kicker') }}</p>
        <h1 class="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {{ $t('landing.heroTitle') }}
        </h1>
        <p class="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {{ $t('landing.heroBody') }}
        </p>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button as="a" href="#contact" class="h-11 px-6 text-base font-semibold cursor-pointer">
            {{ $t('landing.ctaPrimary') }}
          </Button>
          <Button as="a" href="#writing" variant="outline" class="h-11 px-6 text-base font-semibold cursor-pointer">
            {{ $t('landing.ctaSecondary') }}
          </Button>
        </div>
      </div>

      <aside class="rounded-2xl border border-border bg-card p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{{ $t('landing.sidebarTitle') }}</p>
        <ul class="mt-5 space-y-4">
          <li v-for="item in expertise" :key="item" class="rounded-xl border border-border bg-background p-4">
            <p class="text-sm font-semibold uppercase tracking-wide">{{ $t(`landing.expertise.${item}.label`) }}</p>
            <p class="mt-1 text-sm text-muted-foreground">{{ $t(`landing.expertise.${item}.desc`) }}</p>
          </li>
        </ul>
      </aside>
    </section>

    <section id="writing" class="py-8 md:py-10">
      <div class="rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10">
        <div class="mb-3 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Icon icon="mdi:clock-outline" class="mr-1.5 h-3.5 w-3.5" />
          {{ $t('landing.comingSoonLabel') }}
        </div>
        <h2 class="text-3xl font-bold leading-tight">{{ $t('landing.writingTitle') }}</h2>
        <p class="mt-3 max-w-3xl text-base text-muted-foreground sm:text-lg">{{ $t('landing.writingBody') }}</p>
        <p class="mt-2 max-w-3xl text-sm text-muted-foreground">{{ $t('landing.comingSoonBody') }}</p>

        <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="topic in topics" :key="topic" class="flex h-full flex-col rounded-2xl border border-border bg-background p-5 transition-colors hover:bg-muted/40">
            <p class="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{{ $t(`landing.topics.${topic}.tag`) }}</p>
            <h3 class="mt-3 text-base font-semibold leading-snug">{{ $t(`landing.topics.${topic}.title`) }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-muted-foreground">{{ $t(`landing.topics.${topic}.desc`) }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="about" class="py-8 md:py-10">
      <div class="rounded-3xl border border-border bg-card p-8 md:p-10">
        <h2 class="text-3xl font-bold leading-tight">{{ $t('landing.aboutTitle') }}</h2>
        <p class="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">{{ $t('landing.aboutBody1') }}</p>
        <p class="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">{{ $t('landing.aboutBody2') }}</p>
      </div>
    </section>

    <section id="contact" class="py-8 pb-16 md:py-10 md:pb-20">
      <div class="rounded-3xl border border-border bg-card p-8 md:p-10">
        <h2 class="text-3xl font-bold leading-tight">{{ $t('landing.contactTitle') }}</h2>
        <p class="mt-3 max-w-3xl text-base text-muted-foreground sm:text-lg">{{ $t('landing.contactBody') }}</p>

        <div class="mt-7 flex flex-wrap gap-3">
          <a v-for="social in socials" :key="social.url" :href="social.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-lg border border-border/80 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <Icon :icon="social.icon" class="h-4 w-4" />
            <span>{{ $t(`landing.socialLabels.${social.labelKey}`) }}</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>