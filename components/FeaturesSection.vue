<template>
  <section class="py-24 bg-background">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Why Choose Our AI Solutions?
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deploy enterprise-grade agentic AI solutions with enterprise-level compliance, monitoring, and robust testing
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
                      <!-- Custom SVG for Copilot -->
                      <svg v-if="layer.name === 'Microsoft Copilot'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <linearGradient id="copilot-grad1" x1="18.179" x2="37.232" y1="6.205" y2="21.237" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stop-color="#0837c4"></stop>
                          <stop offset=".242" stop-color="#0b4bce"></stop>
                          <stop offset=".738" stop-color="#1071df"></stop>
                          <stop offset="1" stop-color="#127fe6"></stop>
                        </linearGradient>
                        <path fill="url(#copilot-grad1)" d="M21.676,19.303c0,0,0.814-3.255,4.691-3.399h11.777c0,0-3.399-0.287-4.069-4.404c-0.67-4.117-2.441-5.745-4.931-5.793c-2.489-0.048-3.638,2.585-3.926,3.495C24.931,10.112,21.676,19.303,21.676,19.303z"></path>
                        <linearGradient id="copilot-grad2" x1="8.61" x2="20.866" y1="36.864" y2="1.503" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stop-color="#f8c704"></stop>
                          <stop offset=".065" stop-color="#f1c609"></stop>
                          <stop offset=".163" stop-color="#dcc319"></stop>
                          <stop offset=".281" stop-color="#babe31"></stop>
                          <stop offset=".415" stop-color="#8cb754"></stop>
                          <stop offset=".561" stop-color="#50ae7f"></stop>
                          <stop offset=".592" stop-color="#43ac89"></stop>
                          <stop offset=".617" stop-color="#41ad93"></stop>
                          <stop offset=".737" stop-color="#37b0be"></stop>
                          <stop offset=".845" stop-color="#30b2dd"></stop>
                          <stop offset=".936" stop-color="#2cb4f0"></stop>
                          <stop offset="1" stop-color="#2ab4f7"></stop>
                        </linearGradient>
                        <path fill="url(#copilot-grad2)" d="M19.234,29.261l6.032-20.25c0,0,1.149-3.399,3.878-3.303H14.016c0,0-2.585,0-4.452,2.968c0,0-2.872,3.734-4.548,11.394s-1.005,8.09-1.005,8.09s-0.431,4.213,6.032,3.878h4.979C15.021,32.037,18.037,32.085,19.234,29.261z"></path>
                        <linearGradient id="copilot-grad3" x1="9.38" x2="27.188" y1="35.55" y2="35.358" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stop-color="#ffb155"></stop>
                          <stop offset=".008" stop-color="#ffb055"></stop>
                          <stop offset=".475" stop-color="#eb7447"></stop>
                          <stop offset=".819" stop-color="#df4e3f"></stop>
                          <stop offset="1" stop-color="#da403c"></stop>
                        </linearGradient>
                        <path fill="url(#copilot-grad3)" d="M26.474,28.607c0,0-0.814,3.255-4.691,3.399H10.006c0,0,3.399,0.287,4.069,4.404s2.441,5.745,4.931,5.793s3.638-2.585,3.926-3.495C23.219,37.799,26.474,28.607,26.474,28.607z"></path>
                        <linearGradient id="copilot-grad4" x1="28.874" x2="37.108" y1="43.472" y2="12.068" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stop-color="#ffb152"></stop>
                          <stop offset=".531" stop-color="#f36284"></stop>
                          <stop offset=".994" stop-color="#a355e9"></stop>
                        </linearGradient>
                        <path fill="url(#copilot-grad4)" d="M28.915,18.65l-6.07,20.263c0,0-1.111,3.386-3.839,3.29h15.128c0,0,2.585,0,4.452-2.968c0,0,2.872-3.734,4.548-11.394c1.676-7.66,1.005-8.09,1.005-8.09s0.431-4.213-6.032-3.878h-4.979C33.128,15.873,30.112,15.826,28.915,18.65z"></path>
                      </svg>
                      <!-- Regular icon for other items -->
                      <Icon v-else :name="layer.icon" class="w-5 h-5" :class="layer.iconColor" />
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
    title: 'Enterprise Security & Compliance',
    description: 'Built on Azure AI Agent Framework with enterprise-grade security, GDPR compliance, continuous monitoring, and Microsoft ecosystem integration from day one.',
    icon: 'heroicons:shield-check',
    metric: {
      icon: 'heroicons:check-circle',
      value: 'GDPR + ISO27001'
    }
  },
  {
    title: 'Agent-Driven Business Value',
    description: 'Each agentic AI deployment delivers measurable business value - 60% faster processes, 90% reduction in manual overhead, intelligent agent coordination.',
    icon: 'heroicons:chart-bar',
    metric: {
      icon: 'heroicons:arrow-trending-up',
      value: '300-500% ROI'
    }
  },
  {
    title: 'Microsoft Accelerator Partner',
    description: 'Our solutions are built on mature, proven approaches vetted by the Microsoft Accelerator program. This gives you exclusive access to pre-built, robust AI templates that radically accelerate your time-to-value and ensure success.',
    icon: 'simple-icons:microsoft',
    metric: {
      icon: 'heroicons:rocket-launch',
      value: 'Accelerator Vetted'
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
    name: 'Microsoft Copilot',
    icon: '', // Using custom SVG
    iconColor: '',
    color: 'border-purple-500',
    status: '✓ AI Assistant'
  },
  {
    name: 'Semantic Kernel',
    icon: 'heroicons:cpu-chip',
    iconColor: 'text-green-600',
    color: 'border-green-500',
    status: '✓ Agent Orchestration'
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