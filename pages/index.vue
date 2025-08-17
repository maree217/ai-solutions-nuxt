<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <SolutionsPreview />
    <ProcessSection />
    <TestimonialsSection />
    <CtaSection />
  </div>
</template>

<script setup>
// Manual imports to fix auto-import issues
import HeroSection from '~/components/HeroSection.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'
import SolutionsPreview from '~/components/SolutionsPreview.vue'
import ProcessSection from '~/components/ProcessSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import CtaSection from '~/components/CtaSection.vue'

// SEO
useSeoMeta({
  title: 'Enterprise AI Solutions - Production-Ready Automation',
  description: 'Deploy production-grade AI automation in days, not months. Built on Microsoft\'s enterprise framework.',
  ogTitle: 'Enterprise AI Solutions',
  ogDescription: 'Production-ready multi-agent automation templates built on Microsoft\'s proven enterprise framework',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})
</script>