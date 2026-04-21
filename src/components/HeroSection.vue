<script setup>
const specialization = {
  title: 'СПЕЦИАЛИЗАЦИЯ',
  value: 'B2B, B2C, B2B2C',
}

const yearLabel = '©2026'

const heroParts = [
  { text: 'Привет! ', colorClass: 'base' },
  { text: 'Я', colorClass: 'accent' },
  {
    text: ' Senior Product designer.Специализируюсь на мобильных интерфейсах.',
    colorClass: 'base',
  },
]
</script>

<template>
  <section aria-labelledby="hero-title" class="hero-section">
    <h1 id="hero-title" class="hero-title">
      <span
        v-for="(part, index) in heroParts"
        :key="index"
        :class="[
          'hero-title__part',
          part.colorClass === 'accent'
            ? 'hero-title__part--accent'
            : 'hero-title__part--base',
        ]"
      >
        {{ part.text }}
      </span>
    </h1>
    <div class="hero-meta">
      <div class="hero-meta__specialization">
        <h2 class="hero-meta__title">
          {{ specialization.title }}
        </h2>
        <div class="hero-meta__value-wrap">
          <p class="hero-meta__value">
            {{ specialization.value }}
          </p>
        </div>
      </div>

      <p class="hero-meta__year">
        {{ yearLabel }}
      </p>
    </div>

  </section>
</template>

<style scoped>
.hero-section {
  width: min(100%, var(--content-max-width));
  margin: 0 auto;
  padding: clamp(80px, 12vw, 260px) var(--page-padding) 0;
}

.hero-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: clamp(48px, 12vw, 280px);
}

.hero-meta__specialization {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 218px;
}

.hero-meta__title {
  align-self: stretch;
  margin: -1px 0 0;
  color: rgba(28, 31, 35, 0.6);
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
}

.hero-meta__value-wrap {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 184px;
}

.hero-meta__value {
  align-self: stretch;
  margin: -1px 0 0;
  color: rgba(28, 31, 35, 0.6);
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
}

.hero-meta__year {
  width: fit-content;
  color: rgba(28, 31, 35, 0.6);
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  text-align: right;
  white-space: nowrap;
}

.hero-title {
  width: min(100%, 1042px);
  margin: 0 0 0 588px;
  font-size: clamp(40px, 4.3vw, 60px);
  font-weight: 400;
  line-height: clamp(52px, 5.6vw, 80px);
}

.hero-title__part--base {
  color: #1c1f23;
}

.hero-title__part--accent {
  color: #f43538;
}

@media (max-width: 900px) {
  .hero-section {
    padding-top: 48px;
  }

  .hero-title {
    width: 100%;
    margin-left: 0;
  }

  .hero-meta {
    margin-top: 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .hero-meta__title,
  .hero-meta__year {
    font-size: 18px;
  }

  .hero-meta__value {
    font-size: 16px;
  }
}
</style>
