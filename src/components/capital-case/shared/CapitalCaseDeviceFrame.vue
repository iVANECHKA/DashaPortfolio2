<script setup>
import { computed } from 'vue'

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
})

const deviceStyle = computed(() => ({
  backgroundImage: `url('${props.imageSrc}')`,
}))
</script>

<template>
  <div class="frame-16">
    <div class="iphone-space-silver-wrapper">
      <div
        class="iphone-space-silver"
        :style="deviceStyle"
        role="img"
        :aria-label="imageAlt"
      ></div>
    </div>

    <div class="frame-17" aria-hidden="true">
      <div class="frame-18"></div>
      <div class="frame-19"></div>
    </div>
  </div>
</template>

<style scoped>
.frame-16 {
  display: inline-flex;
  align-items: center;
  gap: 118px;
  padding: 0 52px 0 0;
  position: relative;
  flex: 0 0 auto;
}

.iphone-space-silver-wrapper {
  position: relative;
  width: 934px;
  height: 860px;
  background-color: #f1f3f7;
  border-radius: 43px;
  overflow: hidden;
}

.iphone-space-silver {
  position: relative;
  top: calc(50% - 413px);
  left: calc(50% - 250px);
  width: 500px;
  height: 826px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: 50% 50%;
  background-size: cover;
}

.frame-17 {
  display: flex;
  flex-direction: column;
  width: 12px;
  height: 832px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 241px 0;
  position: relative;
}

.frame-18 {
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 12px;
  background-color: #3f4042;
  border-radius: 12px;
}

.frame-19 {
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 12px;
  background-color: #e2e4e8;
  border-radius: 12px;
}
</style>
