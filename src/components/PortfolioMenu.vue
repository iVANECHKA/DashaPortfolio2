<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  variant: {
    type: String,
    default: 'home',
  },
})

const navLinks = [
  { to: { path: '/', hash: '#projects' }, label: 'ПРОЕКТЫ' },
  { to: { path: '/', hash: '#about' }, label: 'ОБО МНЕ' },
]
</script>

<template>
  <template v-if="variant === 'case'">
    <RouterLink class="case-brand" to="/">
      ДАРЬЯ КОРМИЛИЦЫНА
    </RouterLink>

    <div class="case-nav">
      <RouterLink
        v-for="link in navLinks"
        :key="link.label"
        class="case-link"
        :to="link.to"
      >
        {{ link.label }}
      </RouterLink>
    </div>

    <a class="case-contacts" href="#contacts">КОНТАКТЫ</a>
  </template>

  <header v-else class="site-header">
    <div class="site-header__content">
      <RouterLink class="site-header__brand" to="/">
        ДАРЬЯ КОРМИЛИЦЫНА
      </RouterLink>

      <nav aria-label="Основная навигация" class="site-header__nav">
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="site-header__link"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>

    <a href="#contacts" class="site-header__contacts">
      КОНТАКТЫ
    </a>
  </header>
</template>

<style scoped>
.case-brand,
.case-link,
.case-contacts,
.site-header__brand,
.site-header__link,
.site-header__contacts {
  color: #1c1f23;
  text-decoration: none;
}

.case-brand {
  position: absolute;
  top: 52px;
  left: 52px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0;
  white-space: nowrap;
}

.case-nav {
  display: inline-flex;
  align-items: center;
  gap: 48px;
  position: absolute;
  top: 52px;
  left: 804px;
}

.case-link {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0;
  white-space: nowrap;
}

.case-contacts {
  position: absolute;
  top: 52px;
  left: 1738px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0;
  text-align: right;
  white-space: nowrap;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, var(--content-max-width));
  margin: 0 auto;
  padding: clamp(24px, 2.7vw, 52px) var(--page-padding) 0;
}

.site-header__content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(45vw, 864px);
  gap: 32px;
}

.site-header__brand,
.site-header__link,
.site-header__contacts {
  margin-top: -1px;
  width: fit-content;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
}

.site-header__nav {
  position: relative;
  display: inline-flex;
  flex: 0 1 auto;
  align-items: center;
  gap: clamp(20px, 2.5vw, 48px);
}

.site-header__contacts {
  text-align: right;
}

.case-brand:focus-visible,
.case-link:focus-visible,
.case-contacts:focus-visible,
.site-header__brand:focus-visible,
.site-header__link:focus-visible,
.site-header__contacts:focus-visible {
  outline: 2px solid #1c1f23;
  outline-offset: 2px;
}

@media (max-width: 900px) {
  .site-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .site-header__content {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .site-header__nav {
    flex-wrap: wrap;
    gap: 16px 24px;
  }

  .site-header__brand,
  .site-header__link,
  .site-header__contacts {
    font-size: 18px;
  }

  .site-header__contacts {
    text-align: left;
  }
}
</style>
