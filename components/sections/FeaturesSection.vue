<template>
  <section class="py-24 bg-background">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Why Choose Our AI Solutions?
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deploy enterprise-grade AI automation without the enterprise-grade development timeline
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Features List -->
        <div class="space-y-8">
          <div v-for="feature in features" :key="feature.title" class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon :name="feature.icon" class="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
              <p class="text-muted-foreground">{{ feature.description }}</p>
              <div class="mt-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                  <Icon :name="feature.metric.icon" class="w-4 h-4 mr-1" />
                  {{ feature.metric.value }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual Element -->
        <div class="relative">
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <!-- Animated diagram -->
            <div class="space-y-6">
              <div class="text-center">
                <h4 class="text-lg font-semibold text-gray-800 mb-4">Microsoft Enterprise Framework</h4>
              </div>
              
              <!-- Framework layers -->
              <div class="space-y-4">
                <div v-for="(layer, index) in frameworkLayers" :key="layer.name" 
                     class="bg-white rounded-lg p-4 shadow-sm border-l-4"
                     :class="layer.color"
                     :style="{ animationDelay: `${index * 0.2}s` }"
                     style="animation: slideUp 0.6s ease-out both;">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                      <Icon :name="layer.icon" class="w-5 h-5" :class="layer.iconColor" />
                      <span class="font-medium text-gray-800">{{ layer.name }}</span>
                    </div>
                    <span class="text-sm text-gray-500">{{ layer.status }}</span>
                  </div>
                </div>
              </div>

              <!-- Arrow pointing to results -->
              <div class="text-center py-4">
                <Icon name="heroicons:arrow-down" class="w-6 h-6 text-primary mx-auto animate-bounce" />
              </div>

              <!-- Results -->
              <div class="bg-primary text-white rounded-lg p-4 text-center">
                <div class="font-semibold mb-2">Your Production AI System</div>
                <div class="text-sm opacity-90">Deployed in 2-4 weeks, not 6-18 months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Rapid Deployment',
    description: 'Deploy production-grade AI solutions in days, not months. Our templates are based on Microsoft\'s Multi-Agent Custom Automation Engine - proven, tested, ready to customize.',
    icon: 'heroicons:rocket-launch',
    metric: {
      icon: 'heroicons:clock',
      value: '85% faster delivery'
    }
  },
  {
    title: 'Enterprise Security',
    description: 'Built on Azure AI Foundry with enterprise-grade security, compliance frameworks, and Microsoft ecosystem integration from day one.',
    icon: 'heroicons:shield-check',
    metric: {
      icon: 'heroicons:check-circle',
      value: 'SOC2 + ISO27001'
    }
  },
  {
    title: 'Business-Focused',
    description: 'Each solution delivers measurable business value - 60% faster processes, 90% reduction in manual overhead, zero missed dependencies.',
    icon: 'heroicons:chart-bar',
    metric: {
      icon: 'heroicons:arrow-trending-up',
      value: '300-500% ROI'
    }
  },
  {
    title: 'Proven Templates',
    description: '10 production-ready templates covering the most common enterprise automation needs - from task orchestration to document processing.',
    icon: 'heroicons:puzzle-piece',
    metric: {
      icon: 'heroicons:check-badge',
      value: '10 Ready Templates'
    }
  }
]

const frameworkLayers = [
  {
    name: 'Azure AI Foundry',
    icon: 'simple-icons:microsoftazure',
    iconColor: 'text-blue-600',
    color: 'border-blue-500',
    status: '✓ Enterprise Ready'
  },
  {
    name: 'Semantic Kernel',
    icon: 'heroicons:cpu-chip',
    iconColor: 'text-purple-600',
    color: 'border-purple-500',
    status: '✓ Multi-Agent'
  },
  {
    name: 'MACAE Platform',
    icon: 'heroicons:cog-6-tooth',
    iconColor: 'text-green-600',
    color: 'border-green-500',
    status: '✓ Production Tested'
  },
  {
    name: 'Container Apps',
    icon: 'heroicons:server',
    iconColor: 'text-orange-600',
    color: 'border-orange-500',
    status: '✓ Auto-Scaling'
  }
]
</script>