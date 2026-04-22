<script setup>
import { capitalCaseConcept } from '../../data/capitalCase'
import CapitalCaseContentRow from './shared/CapitalCaseContentRow.vue'
</script>

<template>
  <section class="frame-22">
    <div class="frame-23">
      <CapitalCaseContentRow :label="capitalCaseConcept.intro.label">
        <p :class="capitalCaseConcept.intro.textClass">
          {{ capitalCaseConcept.intro.content }}
        </p>
      </CapitalCaseContentRow>
    </div>

    <div class="frame-24">
      <img
        v-for="image in capitalCaseConcept.images"
        :key="image.src"
        :class="image.className"
        :src="image.src"
        :alt="image.alt"
      />
    </div>

    <div class="frame-23">
      <CapitalCaseContentRow :label="capitalCaseConcept.outro.label">
        <p :class="capitalCaseConcept.outro.textClass">
          {{ capitalCaseConcept.outro.content }}
        </p>
      </CapitalCaseContentRow>
    </div>
  </section>
</template>

<style scoped>
.frame-22 {
  display: flex;
  flex-direction: column;
  width: 1920px;
  min-height: 1698px;
  align-items: flex-start;
  gap: 120px;
  padding: 100px 0;
}

.frame-23 {
  width: 1920px;
  padding: 0 0 0 52px;
}

.text-wrapper-16 {
  position: relative;
  width: 934px;
  margin-top: -1px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #1c1f23;
  font-size: 54px;
  letter-spacing: 0;
  line-height: 64px;
}

.frame-24 {
  display: flex;
  width: 1920px;
  align-items: center;
  gap: 39px;
  padding: 0 52px;
  position: relative;
  flex: 0 0 auto;
}

.img-2 {
  position: relative;
  width: 270px;
  height: 615.2px;
  margin-top: -10.6px;
  margin-bottom: -18.6px;
  aspect-ratio: 0.46;
  object-fit: cover;
}

.text-wrapper-12 {
  position: relative;
  width: 934px;
  margin-top: -1px;
  color: #1c1f23cc;
  font-size: 32px;
  line-height: 44px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}
</style>
