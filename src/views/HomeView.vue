<script setup>
import AboutSection from '../components/AboutSection.vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteHeader from '../components/SiteHeader.vue'
</script>

<template>
  <div class="page-shell">
    <SiteHeader />

    <main class="page-main">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.page-shell {
  width: 100%;
  background: #ffffff;
}

.page-main {
  display: flex;
  flex-direction: column;
}
</style>
