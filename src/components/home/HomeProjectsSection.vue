<script setup>
import { homeProjects } from '../../data/siteContent'
import HomeProjectCard from './HomeProjectCard.vue'
</script>

<template>
  <section id="projects" aria-label="Проекты" class="projects-section">
    <HomeProjectCard
      v-for="project in homeProjects"
      :key="project.title"
      :project="project"
    />
  </section>
</template>

<style scoped>
.projects-section {
  display: flex;
  flex-direction: column;
  gap: clamp(48px, 5.4vw, 74px);
  width: min(100%, var(--content-max-width));
  margin: 0 auto;
  padding: clamp(72px, 10vw, 160px) var(--page-padding) 0;
}

@media (max-width: 700px) {
  .projects-section {
    padding-top: 56px;
  }
}
</style>
