<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="frame-10">
    <div class="text-wrapper-10">
      {{ label }}
    </div>

    <slot />
  </div>
</template>

<style scoped>
.frame-10 {
  display: flex;
  align-items: flex-start;
  gap: 80px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
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
</style>
