<script setup>
import HomeAboutSection from '../components/home/HomeAboutSection.vue'
import HomeHeroSection from '../components/home/HomeHeroSection.vue'
import HomeProjectsSection from '../components/home/HomeProjectsSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteHeader from '../components/SiteHeader.vue'
</script>

<template>
  <div class="page-shell">
    <SiteHeader />

    <main class="page-main">
      <HomeHeroSection />
      <HomeProjectsSection />
      <HomeAboutSection />
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
