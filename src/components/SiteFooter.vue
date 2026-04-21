<script setup>
const footer = {
  title:
    'Спасибо, что ознакомились<br />с портфолио, буду рада обсудить детали в рамках интервью',
}

const contacts = [
  {
    label: 'Эл. почта',
    value: 'kormil.dashu@gmail.com',
    href: 'mailto:kormil.dashu@gmail.com',
    iconSrc: 'img/vector.svg',
  },
  {
    label: 'Телеграм',
    value: '@daria_kormilitsyna',
    href: 'https://t.me/daria_kormilitsyna',
    iconSrc: 'img/image.svg',
  },
]

const yearLabel = '©2026'
</script>

<template>
  <footer id="contacts" class="site-footer">
    <div class="site-footer__content">
      <p class="site-footer__title" v-html="footer.title"></p>

      <div class="site-footer__bottom">
        <address class="site-footer__contacts">
          <div
            v-for="contact in contacts"
            :key="contact.label"
            class="site-footer__contact"
          >
            <div class="site-footer__contact-heading">
              <div class="site-footer__contact-label">
                {{ contact.label }}
              </div>
              <div class="site-footer__icon-box">
                <img
                  class="site-footer__icon"
                  :src="contact.iconSrc"
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>

            <a
              :href="contact.href"
              class="site-footer__contact-link"
            >
              {{ contact.value }}
            </a>
          </div>
        </address>

        <p class="site-footer__year">
          {{ yearLabel }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  display: flex;
  justify-content: center;
  width: 100%;
  background: #0b0b0b;
}

.site-footer__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(48px, 8vw, 160px);
  width: min(100%, var(--content-max-width));
  padding: clamp(56px, 5vw, 80px) var(--page-padding);
  padding-left: 640px;
}

.site-footer__title {
  width: min(100%, 934px);
  margin: -1px 0 0;
  color: #ffffff;
  font-size: clamp(32px, 3.8vw, 54px);
  font-weight: 500;
  line-height: clamp(42px, 4.5vw, 64px);
}

.site-footer__bottom {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
}

.site-footer__contacts {
  position: relative;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px 80px;
  font-style: normal;
}

.site-footer__contact {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 281px;
}

.site-footer__contact-heading {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 8px;
}

.site-footer__contact-label,
.site-footer__contact-link,
.site-footer__year {
  font-size: clamp(18px, 1.7vw, 24px);
  font-weight: 500;
  line-height: 32px;
}

.site-footer__contact-label {
  width: fit-content;
  margin-top: -1px;
  color: #ffffff;
  white-space: nowrap;
}

.site-footer__icon-box {
  position: relative;
  width: 24px;
  height: 24px;
}

.site-footer__icon {
  position: absolute;
  top: 16.67%;
  left: 16.67%;
  width: 83.33%;
  height: 83.33%;
}

.site-footer__contact-link {
  align-self: stretch;
  color: rgba(255, 255, 255, 0.6);
}

.site-footer__contact-link:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

.site-footer__year {
  width: fit-content;
  color: rgba(255, 255, 255, 0.6);
  text-align: right;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .site-footer__bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }

  .site-footer__contacts {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
}
</style>
