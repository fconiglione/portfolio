<script setup lang="ts">
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink 
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
</script>

<template>
  <header>
    <div class="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div class="container flex h-14 max-w-screen-2xl items-center">
        <div class="mr-4 hidden md:flex">
          <NuxtLink to="/" class="relative group px-4 py-2">
            <span class="font-black relative z-10 text-2xl">&lt;/Francesco Coniglione &gt;</span>
            <span class="absolute inset-0 border border-primary/0 rounded-md group-hover:border-primary/100 transition-all duration-300"></span>
          </NuxtLink>
        </div>
        <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end font-medium">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" class="px-4 py-2 hover:text-primary transition-colors">
                  home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/projects" class="px-4 py-2 hover:text-primary transition-colors">
                  projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about" class="px-4 py-2 hover:text-primary transition-colors">
                  about
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" class="px-4 py-2 hover:text-primary transition-colors">
                  contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div class="flex items-center gap-4">
            <div class="flex items-center gap-1 border rounded-md p-1">
              <Button variant="ghost" size="sm" class="px-2 h-8 cursor-pointer">FR</Button>
              <Button variant="ghost" size="sm" class="px-2 h-8 cursor-pointer">EN</Button>
            </div>
            <Button variant="ghost" size="icon" class="h-9 w-9 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            </Button>
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