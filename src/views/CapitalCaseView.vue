<script setup>
import CapitalCaseConcept from '../components/capital-case/CapitalCaseConcept.vue'
import CapitalCaseFeatureBlocks from '../components/capital-case/CapitalCaseFeatureBlocks.vue'
import CapitalCaseFooter from '../components/capital-case/CapitalCaseFooter.vue'
import CapitalCaseHeader from '../components/capital-case/CapitalCaseHeader.vue'
import CapitalCaseHero from '../components/capital-case/CapitalCaseHero.vue'
import CapitalCaseNarrative from '../components/capital-case/CapitalCaseNarrative.vue'
import CapitalCaseResults from '../components/capital-case/CapitalCaseResults.vue'
import { useViewportScale } from '../composables/useViewportScale'

const { viewportRef, scale: caseScale } = useViewportScale()
</script>

<template>
  <div class="capital-case-page">
    <div
      ref="viewportRef"
      class="capital-case-page__viewport"
      :style="{ '--case-scale': caseScale }"
    >
      <div class="capital-case-page__canvas">
        <div class="capital">
          <CapitalCaseHeader />
          <CapitalCaseHero />
          <CapitalCaseNarrative />
          <CapitalCaseFeatureBlocks />
          <CapitalCaseConcept />
          <CapitalCaseResults />
          <CapitalCaseFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.capital-case-page {
  width: 100%;
  background: #ffffff;
}

.capital-case-page__viewport {
  --case-scale: 1;
  width: 100%;
  height: calc(8759px * var(--case-scale));
  overflow: hidden;
}

.capital-case-page__canvas {
  position: relative;
  width: calc(1920px * var(--case-scale));
  height: calc(8759px * var(--case-scale));
  margin: 0 auto;
}

.capital {
  background-color: #ffffff;
  overflow: hidden;
  width: 1920px;
  min-height: 8759px;
  position: relative;
  transform: scale(var(--case-scale));
  transform-origin: top left;
}

@media (max-width: 640px) {
  .capital-case-page__viewport {
    overflow-x: auto;
  }
}
</style>
