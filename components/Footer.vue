<template>
  <footer class="bg-muted border-t">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <Icon name="heroicons:cpu-chip" class="h-6 w-6 text-primary" />
            <span class="text-lg font-bold">Enterprise AI</span>
          </div>
          <p class="text-sm text-muted-foreground">
            Production-ready AI automation templates built on Microsoft's proven enterprise framework.
          </p>
          <div class="flex space-x-4">
            <NuxtLink to="#" class="text-muted-foreground hover:text-foreground">
              <Icon name="lucide:linkedin" class="h-5 w-5" />
            </NuxtLink>
            <NuxtLink to="#" class="text-muted-foreground hover:text-foreground">
              <Icon name="lucide:github" class="h-5 w-5" />
            </NuxtLink>
            <NuxtLink to="#" class="text-muted-foreground hover:text-foreground">
              <Icon name="lucide:twitter" class="h-5 w-5" />
            </NuxtLink>
          </div>
        </div>

        <!-- Solutions -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold">Solutions</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/solutions#task-orchestrator" class="text-muted-foreground hover:text-foreground">Task Orchestrator</NuxtLink></li>
            <li><NuxtLink to="/solutions#rag-orchestrator" class="text-muted-foreground hover:text-foreground">RAG Agent</NuxtLink></li>
            <li><NuxtLink to="/solutions#multi-model" class="text-muted-foreground hover:text-foreground">Multi-Model Agent</NuxtLink></li>
            <li><NuxtLink to="/solutions#healthcare" class="text-muted-foreground hover:text-foreground">Healthcare Avatar</NuxtLink></li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold">Resources</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/demos" class="text-muted-foreground hover:text-foreground">Live Demos</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-muted-foreground hover:text-foreground">About Us</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-muted-foreground hover:text-foreground">Contact</NuxtLink></li>
            <li><NuxtLink to="#" class="text-muted-foreground hover:text-foreground">Documentation</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold">Contact</h3>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex items-center space-x-2">
              <Icon name="lucide:mail" class="h-4 w-4" />
              <span>info@enterpriseai.com</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="lucide:phone" class="h-4 w-4" />
              <span>+44 (0) 20 7xxx xxxx</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="lucide:map-pin" class="h-4 w-4" />
              <span>London, UK</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
        <p class="text-sm text-muted-foreground">
          © 2025 Enterprise AI Solutions. All rights reserved.
        </p>
        <div class="mt-4 sm:mt-0 flex space-x-6">
          <NuxtLink to="#" class="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</NuxtLink>
          <NuxtLink to="#" class="text-sm text-muted-foreground hover:text-foreground">Terms of Service</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>