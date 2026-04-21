<script setup>
import { capitalCaseMeta } from '../../data/capitalCase'
</script>

<template>
  <div>
    <div class="text-wrapper-3">Capital.com</div>

    <div class="frame-2">
      <p class="p">
        Capital.com — международная CFD-платформа, 5000+ инструментов: акции,
        индексы, криптовалюта, форекс, сырьё.
      </p>

      <div class="frame-3">
        <div v-for="item in capitalCaseMeta" :key="item.label" class="frame-4">
          <div class="text-wrapper-4">{{ item.label }}</div>
          <p class="text-wrapper-5">{{ item.value }}</p>
        </div>
      </div>
    </div>

    <img class="img" src="/img/capital-header.png" alt="Capital.com hero" />
  </div>
</template>

<style scoped>
.text-wrapper-3 {
  position: absolute;
  top: 204px;
  left: 52px;
  width: 337px;
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 60px;
  line-height: 80px;
  color: #1c1f23;
  letter-spacing: 0;
}

.frame-2 {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  position: absolute;
  top: 204px;
  left: 804px;
}

.p {
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #1c1f23;
  letter-spacing: 0;
}

.frame-3 {
  display: inline-flex;
  align-items: center;
  gap: 48px;
  position: relative;
  flex: 0 0 auto;
}

.frame-4 {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  flex: 0 0 auto;
}

.text-wrapper-4 {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  color: #1c1f2399;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.text-wrapper-5 {
  position: relative;
  width: fit-content;
  color: #1c1f23;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.img {
  position: absolute;
  top: 508px;
  left: 50%;
  width: 1816px;
  height: 652px;
  transform: translateX(-50%);
  object-fit: cover;
  object-position: center;
}
</style>
