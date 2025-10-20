<template>
    <div class="min-h-screen flex flex-col px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-4">
        <AppHeader />
        <main class="flex-1">
            <NuxtPage />
        </main>
        <AppFooter />
    </div>
</template>

<style scoped>
div {
    font-family: Rubik, sans-serif;
}
</style>