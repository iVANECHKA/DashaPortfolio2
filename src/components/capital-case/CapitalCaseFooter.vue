<script setup>
import { capitalCaseFooter } from '../../data/capitalCase'
import { siteContacts, siteYearLabel } from '../../data/siteContent'
</script>

<template>
  <footer id="contacts" class="frame-5">
    <div class="frame-5__content">
      <p class="text-wrapper-6" v-html="capitalCaseFooter.title"></p>

      <div class="frame-5__bottom">
        <div class="frame-6">
          <a
            v-for="contact in siteContacts"
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

        <div class="text-wrapper-9">{{ siteYearLabel }}</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.frame-5 {
  width: 1920px;
  height: 588px;
  background-color: #0b0b0b;
}

.frame-5__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 80px 52px 80px 804px;
}

.text-wrapper-6 {
  width: 934px;
  color: #ffffff;
  font-size: 54px;
  line-height: 64px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.frame-5__bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 1064px;
  margin-top: auto;
}

.frame-6 {
  display: inline-flex;
  align-items: center;
  gap: 80px;
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
  width: 100%;
  height: 100%;
  object-fit: contain;
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
