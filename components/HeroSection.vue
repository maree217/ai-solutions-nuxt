<template>
  <section class="relative overflow-hidden gradient-bg text-white">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-black/20"></div>
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      <div class="absolute top-0 right-1/4 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style="animation-delay: 2s;"></div>
      <div class="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style="animation-delay: 4s;"></div>
    </div>

    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 rounded-full glass-effect text-sm font-medium mb-8 animate-fade-in">
          <Icon name="heroicons:sparkles" class="w-4 h-4 mr-2" />
          Enterprise-Grade Agentic AI
        </div>

        <!-- Main Heading -->
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
          <span class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Enterprise-Grade AI
          </span>
          in Weeks, Not Months.
        </h1>
        <div class="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
          Powered by Microsoft Azure and Copilot.
        </div>

        <!-- Subtitle -->
        <p class="text-base md:text-lg text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s;">
          As a <strong>Microsoft-supported business</strong>, we use proven frameworks from the <strong>Microsoft Accelerator program</strong> to deploy secure, enterprise-ready AI solutions on your Azure infrastructure. Eliminate development risk and see a working prototype with your data in <strong>48 hours</strong>.
        </p>

        <!-- Promise Cards -->
        <div class="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-slide-up" style="animation-delay: 0.4s;">
          <div class="glass-effect rounded-lg p-6 text-center">
            <Icon name="heroicons:clock" class="w-8 h-8 mx-auto mb-3 text-yellow-400" />
            <div class="font-semibold">48-Hour Prototype</div>
            <div class="text-sm text-blue-200">With your actual data</div>
          </div>
          <div class="glass-effect rounded-lg p-6 text-center">
            <Icon name="heroicons:rocket-launch" class="w-8 h-8 mx-auto mb-3 text-green-400" />
            <div class="font-semibold">2-4 Week Deployment</div>
            <div class="text-sm text-blue-200">Production-ready systems</div>
          </div>
          <div class="glass-effect rounded-lg p-6 text-center">
            <Icon name="heroicons:shield-check" class="w-8 h-8 mx-auto mb-3 text-blue-400" />
            <div class="font-semibold">Enterprise Security</div>
            <div class="text-sm text-blue-200">Microsoft infrastructure</div>
          </div>
        </div>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style="animation-delay: 0.6s;">
          <NuxtLink to="/contact" class="btn btn-lg bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <Icon name="heroicons:calendar-days" class="w-5 h-5 mr-2" />
            Schedule Demo
          </NuxtLink>
          <NuxtLink to="/solutions" class="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
            <Icon name="heroicons:play-circle" class="w-5 h-5 mr-2" />
            View Solutions
          </NuxtLink>
        </div>

      </div>
    </div>

    <!-- Bottom wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" class="w-full h-20 fill-background">
        <path d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
// Any component-specific logic can go here
</script>