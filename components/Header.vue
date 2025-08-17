<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <Icon name="heroicons:cpu-chip" class="h-8 w-8 text-primary" />
          <span class="text-xl font-bold text-foreground">Enterprise AI</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href" 
            class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center space-x-4">
          <NuxtLink to="/contact" class="btn btn-primary btn-lg">
            Schedule Demo
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
        >
          <Icon :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen" class="md:hidden border-t bg-background">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink 
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md"
            @click="toggleMobileMenu"
          >
            {{ item.name }}
          </NuxtLink>
          <div class="px-3 py-2">
            <NuxtLink to="/contact" class="btn btn-primary w-full">
              Schedule Demo
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Demos', href: '/demos' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>