<script setup>
import {
  capitalCaseFeatureIntroRows,
  capitalCaseFeatureShowcases,
} from '../../data/capitalCase'
import CapitalCaseContentRow from './shared/CapitalCaseContentRow.vue'
import CapitalCaseDeviceFrame from './shared/CapitalCaseDeviceFrame.vue'
</script>

<template>
  <section class="capital-case-feature-blocks">
    <div :class="capitalCaseFeatureShowcases[0].sectionClass">
      <div class="frame-15">
        <div class="text-wrapper-15">{{ capitalCaseFeatureShowcases[0].title }}</div>
        <p class="text-wrapper-14">
          {{ capitalCaseFeatureShowcases[0].description }}
        </p>
      </div>

      <CapitalCaseDeviceFrame
        :image-src="capitalCaseFeatureShowcases[0].imageSrc"
        :image-alt="capitalCaseFeatureShowcases[0].imageAlt"
      />
    </div>

    <div class="frame-20">
      <CapitalCaseContentRow
        v-for="row in capitalCaseFeatureIntroRows"
        :key="row.label"
        :label="row.label"
      >
        <p :class="row.textClass">
          {{ row.content }}
        </p>
      </CapitalCaseContentRow>
    </div>

    <div :class="capitalCaseFeatureShowcases[1].sectionClass">
      <div class="frame-15">
        <div class="text-wrapper-15">{{ capitalCaseFeatureShowcases[1].title }}</div>
        <p class="text-wrapper-14">
          {{ capitalCaseFeatureShowcases[1].description }}
        </p>
      </div>

      <CapitalCaseDeviceFrame
        :image-src="capitalCaseFeatureShowcases[1].imageSrc"
        :image-alt="capitalCaseFeatureShowcases[1].imageAlt"
      />
    </div>
  </section>
</template>

<style scoped>
.capital-case-feature-blocks {
  width: 1920px;
  min-height: 2868px;
}

.frame-14 {
  display: flex;
  width: 1920px;
  align-items: flex-start;
  gap: 90px;
  padding: 100px 0 100px 52px;
}

.frame-15 {
  display: flex;
  flex-direction: column;
  width: 662px;
  align-items: flex-start;
  gap: 48px;
  padding: 20px 0;
  position: relative;
}

.text-wrapper-15 {
  position: relative;
  width: 625px;
  margin-top: -1px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #1c1f23;
  font-size: 54px;
  letter-spacing: 0;
  line-height: 64px;
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

.frame-20 {
  display: flex;
  flex-direction: column;
  width: 1920px;
  align-items: flex-start;
  gap: 48px;
  padding: 100px 0 100px 52px;
  margin-top: 0;
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

.frame-21 {
  display: flex;
  width: 1920px;
  align-items: flex-start;
  gap: 90px;
  padding: 40px 0 100px 52px;
  margin-top: 452px;
}
</style>
