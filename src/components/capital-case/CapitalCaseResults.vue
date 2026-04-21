<script setup>
import { capitalCaseMetrics } from '../../data/capitalCase'
</script>

<template>
  <div class="frame-25">
    <div class="text-wrapper-10">РЕЗУЛЬТАТЫ</div>

    <div class="frame-26">
      <div class="frame-27">
        <div
          v-for="metric in capitalCaseMetrics"
          :key="metric.label"
          :class="metric.frameClass"
        >
          <div :class="metric.valueClass">
            {{ metric.value }}
          </div>
          <div :class="metric.labelClass">
            {{ metric.label }}
          </div>
        </div>
      </div>

      <p class="text-wrapper-14">
        В результате получилось улучшить пользовательский опыт и восприятие
        продукта, не сломав доверия пользователя.
      </p>
    </div>
  </div>
</template>

<style scoped>
.frame-25 {
  display: flex;
  width: 1920px;
  align-items: flex-start;
  gap: 80px;
  padding: 40px 0 240px 52px;
  position: absolute;
  top: 7618px;
  left: 0;
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

.frame-27 {
  display: flex;
  align-items: flex-start;
  gap: 100px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
}

.frame-28 {
  display: flex;
  flex-direction: column;
  width: 208px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
}

.text-wrapper-17 {
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #1c1f23;
  font-size: 80px;
  text-align: center;
  letter-spacing: 0;
  line-height: 64px;
}

.text-wrapper-18 {
  position: relative;
  align-self: stretch;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #1c1f23;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0;
  line-height: 44px;
}

.frame-29 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  flex: 1;
  flex-grow: 1;
}

.frame-30 {
  display: flex;
  flex-direction: column;
  height: 136px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  flex: 1;
  flex-grow: 1;
}

.text-wrapper-19 {
  position: relative;
  align-self: stretch;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #1c1f23;
  font-size: 80px;
  text-align: center;
  letter-spacing: 0;
  line-height: 64px;
}

.text-wrapper-20 {
  position: relative;
  width: fit-content;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #1c1f23;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0;
  line-height: 44px;
  white-space: nowrap;
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
