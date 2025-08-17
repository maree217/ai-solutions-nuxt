<template>
  <section class="py-24 bg-primary text-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-black/10"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business with Agentic AI?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Book a 30-minute demo and see exactly how our proven agentic AI solutions can automate your enterprise processes.
        </p>
        
        <!-- Benefits grid -->
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="text-center">
            <Icon name="heroicons:eye" class="w-8 h-8 mx-auto mb-3 text-yellow-400" />
            <div class="font-semibold">See Live Agent Demos</div>
            <div class="text-sm text-blue-200">Working agentic AI with real data</div>
          </div>
          <div class="text-center">
            <Icon name="heroicons:calculator" class="w-8 h-8 mx-auto mb-3 text-green-400" />
            <div class="font-semibold">Calculate ROI</div>
            <div class="text-sm text-blue-200">Understand your business value</div>
          </div>
          <div class="text-center">
            <Icon name="heroicons:clock" class="w-8 h-8 mx-auto mb-3 text-purple-400" />
            <div class="font-semibold">Get Agent Timeline</div>
            <div class="text-sm text-blue-200">Realistic agent deployment schedule</div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <NuxtLink to="/contact" class="btn btn-lg bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <Icon name="heroicons:calendar-days" class="w-5 h-5 mr-2" />
            Schedule Your Demo
          </NuxtLink>
          <NuxtLink to="/demos" class="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
            <Icon name="heroicons:play-circle" class="w-5 h-5 mr-2" />
            Try Interactive Demo
          </NuxtLink>
        </div>

        <!-- No pressure message -->
        <p class="text-blue-200 text-sm">
          No technical knowledge required. We'll show you working agentic AI solutions, then customize and deliver for your specific business scenario.
        </p>
      </div>
    </div>
  </section>
</template>