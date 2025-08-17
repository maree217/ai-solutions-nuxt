<template>
  <section class="py-24 bg-background">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Our 4-Step Agent Deployment Process
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          From concept to production-grade agentic AI in weeks, not months
        </p>
      </div>

      <div class="relative">
        <!-- Timeline line (hidden on mobile) -->
        <div class="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-primary/20"></div>
        
        <div class="grid lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in steps" :key="step.title" class="relative">
            <!-- Step number -->
            <div class="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-xl font-bold mx-auto mb-6 relative z-10">
              {{ index + 1 }}
            </div>
            
            <!-- Content -->
            <div class="text-center">
              <h3 class="text-xl font-semibold mb-3">{{ step.title }}</h3>
              <p class="text-muted-foreground mb-4">{{ step.description }}</p>
              <div class="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Icon name="heroicons:clock" class="w-4 h-4 mr-1" />
                {{ step.timeline }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 inline-block">
          <h3 class="text-2xl font-bold text-gray-800 mb-2">
            Total Timeline: 2-4 weeks
          </h3>
          <p class="text-gray-600">
            Compare to 6-18 months for custom agentic AI development
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Discovery & Agent Demo',
    description: 'We show you working agentic AI solutions, understand your specific enterprise requirements, and identify the best agent deployment match for your business scenario.',
    timeline: '1-2 days'
  },
  {
    title: 'Rapid Agent Prototype',
    description: 'We customize our proven agent framework with your business logic and sample data, creating a working agentic AI prototype you can test immediately.',
    timeline: '2-5 days'
  },
  {
    title: 'Enterprise Integration',
    description: 'Connect agents to your existing systems, import your data, configure enterprise security, GDPR compliance, and robust monitoring for your organization.',
    timeline: '1-2 weeks'
  },
  {
    title: 'Agent Production Launch',
    description: 'Deploy your agentic AI system to Microsoft Azure with full monitoring, backup, testing validation, and enterprise support. Train your team and go live.',
    timeline: '3-7 days'
  }
]
</script>