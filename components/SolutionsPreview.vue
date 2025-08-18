<template>
  <section class="py-24 bg-muted/50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Featured Enterprise Agent Solutions
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          Mature agentic AI solutions deployed across large to medium enterprises
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8 mb-12">
        <div v-for="solution in featuredSolutions" :key="solution.title" 
             class="card p-6 card-hover group cursor-pointer flex flex-col h-full"
             @click="navigateTo(solution.href)">
          <div class="flex items-start mb-4">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <Icon :name="solution.icon" class="w-6 h-6 text-primary" />
            </div>
            <div class="flex-grow">
              <h3 class="text-lg font-semibold group-hover:text-primary transition-colors leading-tight">
                {{ solution.title }}
              </h3>
              <span class="text-sm text-muted-foreground">{{ solution.category }}</span>
            </div>
          </div>
          
          <p class="text-muted-foreground mb-4 flex-grow">{{ solution.description }}</p>
          
          <div class="space-y-3 mb-6">
            <div class="bg-green-50 border border-green-200 rounded-lg p-3">
              <div class="text-sm font-medium text-green-800 mb-1">Business Value</div>
              <div class="text-sm text-green-700">{{ solution.businessValue }}</div>
            </div>
            
            <div class="flex justify-between items-center text-sm">
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                Deploy: {{ solution.deployTime }}
              </span>
              <span class="text-muted-foreground">{{ solution.useCase }}</span>
            </div>
          </div>
          
          <div class="flex space-x-2 mt-auto">
            <button class="btn btn-primary btn-sm flex-1">
              <Icon name="heroicons:play" class="w-4 h-4 mr-1" />
              Live Demo
            </button>
            <button class="btn btn-outline btn-sm">
              <Icon name="heroicons:information-circle" class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-3xl font-bold text-primary mb-2">{{ stat.value }}</div>
          <div class="text-sm text-muted-foreground">{{ stat.label }}</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <NuxtLink to="/solutions" class="btn btn-primary btn-lg">
          <Icon name="heroicons:squares-2x2" class="w-5 h-5 mr-2" />
          View All Agent Solutions
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const featuredSolutions = [
  {
    title: 'Automated Project & Workflow Coordination',
    category: 'Multi-Agent Workflow',
    description: 'Intelligent agents coordinate planning, execution, and validation across interdependent teams via shared state management and agentic workflows.',
    businessValue: '60% faster project completion, zero missed dependencies',
    deployTime: '3-5 days',
    useCase: 'Project Management',
    icon: 'heroicons:users',
    href: '/demos/task-orchestrator'
  },
  {
    title: 'Instant Knowledge Expert',
    category: 'Intelligent Knowledge Agents',
    description: 'Coordinates specialized retrieval, summarization, and reasoning agents to answer complex queries using your enterprise knowledge base.',
    businessValue: '90% reduction in research time, instant expert knowledge',
    deployTime: '1-2 days',
    useCase: 'Customer Support',
    icon: 'heroicons:magnifying-glass',
    href: '/solutions#rag-orchestrator'
  },
  {
    title: 'Intelligent Reporting & Dashboards',
    category: 'Agentic Data Processing',
    description: 'Orchestrates textual reasoning agents and visual generation agents to produce charts, diagrams, and reports in one seamless agentic workflow.',
    businessValue: 'Automated report generation, self-updating dashboards',
    deployTime: '3-5 days',
    useCase: 'Executive Reporting',
    icon: 'heroicons:chart-pie',
    href: '/solutions#multi-model'
  }
]

const stats = [
  { value: '10', label: 'Proven Agent Deployments' },
  { value: '2-4', label: 'Weeks to Deploy' },
  { value: '60%', label: 'Faster Delivery' },
  { value: '500%', label: 'Average ROI' }
]
</script>