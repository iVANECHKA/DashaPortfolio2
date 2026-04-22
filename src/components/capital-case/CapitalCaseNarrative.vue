<script setup>
import {
  capitalCaseNarrativeRows,
  capitalCaseNarrativeSlides,
} from '../../data/capitalCase'
import CapitalCaseContentRow from './shared/CapitalCaseContentRow.vue'
import CapitalCaseStorySlider from './shared/CapitalCaseStorySlider.vue'
</script>

<template>
  <section class="capital-case-narrative">
    <div class="frame-9">
      <CapitalCaseContentRow
        v-for="row in capitalCaseNarrativeRows"
        :key="row.label"
        :label="row.label"
      >
        <p :class="row.textClass">
          {{ row.content }}
        </p>
      </CapitalCaseContentRow>
    </div>

    <CapitalCaseStorySlider
      aria-label="Погружение в домен"
      :slides="capitalCaseNarrativeSlides"
    />
  </section>
</template>

<style scoped>
.capital-case-narrative {
  width: 1920px;
  min-height: 1892px;
}

.frame-9 {
  display: flex;
  flex-direction: column;
  width: 1920px;
  align-items: flex-start;
  gap: 48px;
  padding: 100px 0 100px 52px;
}

:deep(.frame-11) {
  margin-top: 476px;
}

.text-wrapper-11 {
  position: relative;
  width: 882px;
  margin-top: -1px;
  color: #1c1f23;
  font-size: 54px;
  line-height: 64px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
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
