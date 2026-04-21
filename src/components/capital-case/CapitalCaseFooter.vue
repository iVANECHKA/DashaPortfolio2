<script setup>
import { capitalCaseContacts } from '../../data/capitalCase'
</script>

<template>
  <div id="contacts" class="frame-5">
    <p class="text-wrapper-6">
      Спасибо, что ознакомились
      <br />
      с проектом, буду рада обсудить детали в рамках интервью
    </p>

    <div class="frame-6">
      <a
        v-for="contact in capitalCaseContacts"
        :key="contact.label"
        :href="contact.href"
        class="frame-7 footer-link"
      >
        <div class="frame-8">
          <div class="text-wrapper-7">{{ contact.label }}</div>
          <div class="arrow-outward">
            <img class="vector" :src="contact.iconSrc" alt="" aria-hidden="true" />
          </div>
        </div>

        <div class="text-wrapper-8">{{ contact.value }}</div>
      </a>
    </div>

    <div class="text-wrapper-9">©2026</div>
  </div>
</template>

<style scoped>
.frame-5 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 1920px;
  height: 588px;
  background-color: #0b0b0b;
}

.text-wrapper-6 {
  position: absolute;
  top: 80px;
  left: 804px;
  width: 934px;
  color: #ffffff;
  font-size: 54px;
  line-height: 64px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.frame-6 {
  display: inline-flex;
  align-items: center;
  gap: 80px;
  position: absolute;
  top: 432px;
  left: 804px;
}

.frame-7 {
  display: flex;
  flex-direction: column;
  width: 281px;
  align-items: flex-start;
  gap: 12px;
  position: relative;
}

.frame-8 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 0 0 auto;
}

.text-wrapper-7 {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  color: #ffffff;
  line-height: 32px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0;
  white-space: nowrap;
}

.arrow-outward {
  position: relative;
  width: 24px;
  height: 24px;
}

.vector {
  position: absolute;
  width: 83.33%;
  height: 83.33%;
  top: 16.67%;
  left: 16.67%;
}

.text-wrapper-8 {
  position: relative;
  align-self: stretch;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #ffffff99;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
}

.text-wrapper-9 {
  position: absolute;
  top: 476px;
  left: 1788px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #ffffff99;
  font-size: 24px;
  text-align: right;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
}

.footer-link {
  text-decoration: none;
}

.frame-7:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}
</style>
