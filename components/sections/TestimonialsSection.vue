<template>
  <section class="py-24 bg-muted/50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Client Success Stories
        </h2>
        <p class="text-xl text-muted-foreground">
          Real results from enterprise deployments
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.author" 
             class="card p-6">
          <div class="flex items-center mb-4">
            <div class="text-yellow-500 flex space-x-1">
              <Icon v-for="n in 5" :key="n" name="heroicons:star" class="w-4 h-4 fill-current" />
            </div>
          </div>
          
          <blockquote class="text-lg text-muted-foreground mb-6 italic">
            "{{ testimonial.quote }}"
          </blockquote>
          
          <div class="flex items-center">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
              <Icon name="heroicons:user" class="w-6 h-6 text-primary" />
            </div>
            <div>
              <div class="font-semibold">{{ testimonial.author }}</div>
              <div class="text-sm text-muted-foreground">{{ testimonial.role }}</div>
              <div class="text-sm text-muted-foreground">{{ testimonial.company }}</div>
            </div>
          </div>
          
          <div class="mt-4 pt-4 border-t">
            <div class="text-sm text-primary font-medium">{{ testimonial.impact }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: "We went from 8 weeks of manual coordination to 3 weeks of automated workflow. The AI handles all the interdependencies we used to miss.",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "Regional Bank",
    impact: "60% reduction in project timeline"
  },
  {
    quote: "48 hours from demo to working prototype with our actual data. Our loan processing is now 80% faster with 95% fewer errors.",
    author: "Michael Chen",
    role: "Head of Digital Transformation",
    company: "Financial Services Corp",
    impact: "80% faster processing, 95% fewer errors"
  },
  {
    quote: "The multi-agent system eliminated our coordination meetings. Everything just flows automatically now.",
    author: "Emma Williams",
    role: "Project Manager",
    company: "Manufacturing Company",
    impact: "90% reduction in coordination overhead"
  }
]
</script>