<script setup>
import { capitalCaseResults } from '../../data/capitalCase'
import CapitalCaseMetricsGrid from './shared/CapitalCaseMetricsGrid.vue'
</script>

<template>
  <section class="frame-25">
    <div class="text-wrapper-10">{{ capitalCaseResults.title }}</div>

    <div class="frame-26">
      <CapitalCaseMetricsGrid :metrics="capitalCaseResults.metrics" />

      <p class="text-wrapper-14">
        {{ capitalCaseResults.summary }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.frame-25 {
  display: flex;
  width: 1920px;
  min-height: 553px;
  align-items: flex-start;
  gap: 80px;
  padding: 40px 0 240px 52px;
}

.text-wrapper-10 {
  position: relative;
  width: 672px;
  margin-top: -1px;
  color: #1c1f23;
  font-size: 32px;
  line-height: normal;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.frame-26 {
  display: flex;
  flex-direction: column;
  width: 934px;
  align-items: flex-start;
  gap: 48px;
  position: relative;
}

.text-wrapper-14 {
  position: relative;
  align-self: stretch;
  color: #1c1f23;
  font-size: 32px;
  line-height: 44px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}
</style>
