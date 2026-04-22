<script setup>
defineProps({
  metrics: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="frame-27">
    <div
      v-for="metric in metrics"
      :key="metric.id"
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
</template>

<style scoped>
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
</style>
