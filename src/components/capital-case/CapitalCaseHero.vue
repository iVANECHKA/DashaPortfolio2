<script setup>
import { capitalCaseHero } from '../../data/capitalCase'
</script>

<template>
  <section class="capital-case-hero">
    <div class="text-wrapper-3">{{ capitalCaseHero.title }}</div>

    <div class="frame-2">
      <p class="p">
        {{ capitalCaseHero.description }}
      </p>

      <div class="frame-3">
        <div
          v-for="item in capitalCaseHero.meta"
          :key="item.label"
          class="frame-4"
        >
          <div class="text-wrapper-4">{{ item.label }}</div>
          <p class="text-wrapper-5">{{ item.value }}</p>
        </div>
      </div>
    </div>

    <img
      class="img"
      :src="capitalCaseHero.imageSrc"
      :alt="capitalCaseHero.imageAlt"
    />
  </section>
</template>

<style scoped>
.capital-case-hero {
  display: grid;
  grid-template-columns: 337px 934px;
  width: 1920px;
  min-height: 1160px;
  padding: 76px 52px 0;
  column-gap: 415px;
}

.text-wrapper-3 {
  width: 337px;
  margin-top: 128px;
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
  margin-top: 128px;
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
  grid-column: 1 / -1;
  width: 1816px;
  height: 652px;
  margin: 188px auto 0;
  object-fit: cover;
  object-position: center;
}
</style>
