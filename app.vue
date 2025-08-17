<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 210 100% 56%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 210 100% 56%;
  --radius: 0.5rem;
}

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground font-sans;
  }
}

@layer components {
  .btn {
    @apply inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50;
  }
  
  .btn-primary {
    @apply bg-primary text-primary-foreground hover:bg-primary/90;
  }
  
  .btn-secondary {
    @apply bg-secondary text-secondary-foreground hover:bg-secondary/80;
  }
  
  .btn-outline {
    @apply border border-primary text-primary hover:bg-primary hover:text-primary-foreground;
  }
  
  .btn-lg {
    @apply h-11 rounded-md px-8;
  }
  
  .btn-xl {
    @apply h-14 rounded-lg px-10 text-lg;
  }
  
  .card {
    @apply rounded-xl border bg-card text-card-foreground shadow;
  }
  
  .card-hover {
    @apply transition-all duration-300 hover:shadow-lg hover:-translate-y-1;
  }
  
  .gradient-bg {
    @apply bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800;
  }
  
  .glass-effect {
    @apply backdrop-blur-lg bg-white/10 border border-white/20;
  }
}

html {
  scroll-behavior: smooth;
}
</style>