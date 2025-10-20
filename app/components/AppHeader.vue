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

const switchLang = (lang: string) => {
  currentLang.value = lang
}
</script>

<template>
  <header>
    <div class="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div class="container flex h-14 max-w-screen-2xl items-center">
        <div class="mr-4 hidden md:flex">
          <NuxtLink to="/" class="relative group px-4 py-2">
            <span class="relative z-10 text-2xl font-[900]">&lt;/Francesco Coniglione &gt;</span>
            <span class="absolute inset-0 border border-primary/0 rounded-md group-hover:border-primary/100 transition-all duration-300"></span>
          </NuxtLink>
        </div>
        <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end font-medium ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" class="px-4 py-2 hover:text-primary transition-colors text-md">
                  home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/projects" class="px-4 py-2 hover:text-primary transition-colors text-md">
                  projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about" class="px-4 py-2 hover:text-primary transition-colors text-md">
                  about
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" class="px-4 py-2 hover:text-primary transition-colors text-md">
                  contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div class="flex items-center gap-4">
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
      </div>
    </div>
  </header>
</template>

<style scoped>
div {
  font-family: Rubik, sans-serif;
}
</style>