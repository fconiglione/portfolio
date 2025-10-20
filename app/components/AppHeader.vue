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

const currentLang = ref('en')
const isMenuOpen = ref(false)

const switchLang = (lang: string) => {
  currentLang.value = lang
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <div class="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div class="container flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="relative group px-4 py-2">
            <span class="relative z-10 text-lg md:text-2xl font-[900]">&lt;/Francesco <span class="whitespace-nowrap">Coniglione &gt;</span></span>
            <span class="absolute inset-0 border border-primary/0 rounded-md group-hover:border-primary/100 transition-all duration-300"></span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center justify-end font-medium gap-4">
          <NavigationMenu>
            <NavigationMenuList class="gap-4 pr-2">
              <NavigationMenuItem>
                <NavigationMenuLink href="/" class="py-2 hover:text-primary transition-colors text-normal">
                  home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/projects" class="py-2 hover:text-primary transition-colors text-normal">
                  projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about" class="py-2 hover:text-primary transition-colors text-normal">
                  about
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" class="py-2 hover:text-primary transition-colors text-normal">
                  contact
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
            </div>
          </div>
        </div>

        <!-- Mobile Controls -->
        <div class="flex lg:hidden items-center gap-3">
          <div class="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              class="px-2 h-9 transition-colors rounded-none first:rounded-l-md last:rounded-r-md cursor-pointer text-sm"
              :class="{ 'bg-primary/10 text-primary': currentLang === 'fr' }"
              @click="switchLang('fr')"
            >FR</Button>
            <Button 
              variant="ghost" 
              class="px-2 h-9 transition-colors rounded-none first:rounded-l-md last:rounded-r-md cursor-pointer text-sm"
              :class="{ 'bg-primary/10 text-primary': currentLang === 'en' }"
              @click="switchLang('en')"
            >EN</Button>
          </div>
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
          <Button variant="ghost" size="icon" @click="toggleMenu" class="cursor-pointer">
            <Icon v-if="!isMenuOpen" icon="radix-icons:hamburger-menu" class="h-6 w-6" />
            <Icon v-else icon="radix-icons:cross-1" class="h-6 w-6" />
          </Button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="isMenuOpen" class="lg:hidden border-t border-border/40">
        <nav class="flex flex-col space-y-4 p-4">
          <NuxtLink v-for="item in ['home', 'projects', 'about', 'contact']" 
            :key="item"
            :to="`/${item === 'home' ? '' : item}`"
            class="px-2 py-1 hover:text-primary transition-colors"
            @click="isMenuOpen = false"
          >
            {{ item }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
div {
  font-family: Rubik, sans-serif;
}
</style>