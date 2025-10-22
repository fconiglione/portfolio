<script setup lang="ts">
import { ref } from 'vue'
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink 
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'

const colorMode = useColorMode()

const { locale, setLocale } = useI18n()
const isMenuOpen = ref(false)

const currentLang = computed(() => locale.value)

const switchLang = async (lang: 'en' | 'fr') => {
  // prefer the i18n composable to change locale and let nuxt-i18n handle route prefixes
  if (typeof setLocale === 'function') {
    await setLocale(lang)
  } else {
    // fallback
    locale.value = lang as 'en' | 'fr'
  }
}

const anchors: { en: Record<string,string>; fr: Record<string,string> } = {
  en: {
    home: '/',
    projects: 'projects',
    about: 'about',
    contact: 'contact'
  },
  fr: {
    home: '/',
    projects: 'projets',
    about: 'a-propos',
    contact: 'contact'
  }
}

const getHref = (item: 'home' | 'projects' | 'about' | 'contact') => {
  const lang = currentLang.value || 'en'
  const anchor = (anchors[lang] && anchors[lang][item]) || anchors['en'][item]
  return item === 'home' ? '/' : `#${anchor}`
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Prevent scroll when menu is open
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}
</script>

<template>
  <header>
    <div class="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div class="container flex h-14 max-w-screen-2xl items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="relative group">
            <span class="relative z-10 text-lg sm:text-2xl font-[900]">&lt;Francesco <span class="whitespace-nowrap">Coniglione /&gt;</span></span>
            <span></span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center justify-end font-medium gap-4">
          <NavigationMenu>
            <NavigationMenuList class="gap-4 pr-2">
              <NavigationMenuItem>
                <NavigationMenuLink :href="getHref('home')" class="py-2 hover:text-primary transition-colors text-normal">
                  {{ $t('nav.home') }}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink :href="getHref('projects')" class="py-2 hover:text-primary transition-colors text-normal">
                  {{ $t('nav.projects') }}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink :href="getHref('about')" class="py-2 hover:text-primary transition-colors text-normal">
                  {{ $t('nav.about') }}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink :href="getHref('contact')" class="py-2 hover:text-primary transition-colors text-normal">
                  {{ $t('nav.contact') }}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <!-- Desktop Controls -->
          <div class="flex items-center gap-2 lg:gap-4">
            <div class="hidden sm:flex items-center border rounded-md">
              <Button 
                variant="ghost" 
                class="px-3 h-9 transition-colors rounded-none first:rounded-l-md last:rounded-r-md cursor-pointer"
                :class="{ 'bg-primary/10 text-primary': currentLang === 'fr' }"
                @click="switchLang('fr')"
              >FR</Button>
              <Button 
                variant="ghost" 
                class="px-3 h-9 transition-colors rounded-none first:rounded-l-md last:rounded-r-md cursor-pointer"
                :class="{ 'bg-primary/10 text-primary': currentLang === 'en' }"
                @click="switchLang('en')"
              >EN</Button>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger as-child>
                  <Button variant="outline" class="cursor-pointer">
                    <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span class="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem @click="colorMode.preference = 'light'" class="cursor-pointer">
                    {{ $t('colorMode.light') }}
                  </DropdownMenuItem>
                  <DropdownMenuItem @click="colorMode.preference = 'dark'" class="cursor-pointer">
                    {{ $t('colorMode.dark') }}
                  </DropdownMenuItem>
                  <DropdownMenuItem @click="colorMode.preference = 'system'" class="cursor-pointer">
                    {{ $t('colorMode.system') }}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <!-- Mobile Controls -->
        <div class="flex lg:hidden items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" class="cursor-pointer">
                <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem @click="colorMode.preference = 'light'" class="cursor-pointer">
                Light
              </DropdownMenuItem>
              <DropdownMenuItem @click="colorMode.preference = 'dark'" class="cursor-pointer">
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem @click="colorMode.preference = 'system'" class="cursor-pointer">
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" @click="toggleMenu" class="cursor-pointer relative">
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span class="w-5 h-0.5 bg-current transition-all duration-300 ease-out"
                :class="{ 'rotate-45 translate-y-1': isMenuOpen, '-translate-y-1': !isMenuOpen }">
              </span>
              <span class="w-5 h-0.5 bg-current my-0.5 transition-opacity duration-300"
                :class="{ 'opacity-0': isMenuOpen }">
              </span>
              <span class="w-5 h-0.5 bg-current transition-all duration-300 ease-out"
                :class="{ '-rotate-45 -translate-y-1': isMenuOpen, 'translate-y-1': !isMenuOpen }">
              </span>
            </div>
          </Button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-show="isMenuOpen" class="lg:hidden border-t border-border/40">
          <nav class="flex flex-col space-y-4 p-4">
            <NuxtLink v-for="item in ['home', 'projects', 'about', 'contact']" 
              :key="item"
              :to="getHref(item as any)"
              class="px-2 py-1 hover:text-primary transition-colors"
              @click="isMenuOpen = false"
            >
              {{ $t(`nav.${item}`) }}
            </NuxtLink>
            
            <!-- Language Selector in Mobile Menu -->
            <div class="flex items-center gap-2 pt-4 mt-4 border-t border-border/40">
              <span class="px-2 text-sm text-muted-foreground">Language:</span>
              <div class="flex items-center border rounded-md">
                <Button 
                  variant="ghost" 
                  class="px-3 h-9 transition-colors rounded-none first:rounded-l-md last:rounded-r-md cursor-pointer"
                  :class="{ 'bg-primary/10 text-primary': currentLang === 'fr' }"
                  @click="switchLang('fr')"
                >FR</Button>
                <Button 
                  variant="ghost" 
                  class="px-3 h-9 transition-colors rounded-none first:rounded-l-md last:rounded-r-md cursor-pointer"
                  :class="{ 'bg-primary/10 text-primary': currentLang === 'en' }"
                  @click="switchLang('en')"
                >EN</Button>
              </div>
            </div>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
div {
  font-family: Rubik, sans-serif;
}
</style>