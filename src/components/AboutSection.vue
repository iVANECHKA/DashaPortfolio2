<script setup>
const about = {
  title: 'ОБО МНЕ',
  imageSrc: 'img/profile-pic.png',
  imageAlt: 'Портрет Дарьи Кормилицыной',
  paragraphs: [
    'Но семантический разбор внешних противодействий требует анализа поставленных обществом задач. Повседневная практика показывает,',
    'Но семантический разбор внешних противодействий требует анализа поставленных обществом задач. Повседневная практика показывает,',
  ],
}
</script>

<template>
  <section
    id="about"
    class="about-section"
    aria-labelledby="about-title"
  >
    <div class="about-section__image-frame">
      <img
        class="about-section__image"
        :src="about.imageSrc"
        :alt="about.imageAlt"
      />
    </div>

    <div class="about-section__content">
      <h2 id="about-title" class="about-section__title">
        {{ about.title }}
      </h2>

      <div class="about-section__paragraphs">
        <p
          v-for="(paragraph, index) in about.paragraphs"
          :key="index"
          class="about-section__paragraph"
          :class="{ 'about-section__paragraph--first': index === 0 }"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  display: flex;
  align-items: flex-end;
  gap: clamp(32px, 3.3vw, 64px);
  width: min(100%, var(--content-max-width));
  margin: 0 auto;
  padding: clamp(72px, 10vw, 200px) var(--page-padding) clamp(80px, 12vw, 240px);
}

.about-section__image-frame {
  position: relative;
  flex: 0 0 min(32%, 513px);
  width: min(100%, 513px);
  overflow: hidden;
  aspect-ratio: 513 / 767;
  border-radius: clamp(56px, 10vw, 207px);
  background: #edf0f2;
}

.about-section__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-section__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  flex: 1 1 0;
  min-width: 0;
}

.about-section__title {
  align-self: stretch;
  margin: -1px 0 0;
  color: rgba(28, 31, 35, 0.5);
  font-size: clamp(24px, 2.2vw, 40px);
  font-weight: 500;
  line-height: normal;
}

.about-section__paragraphs {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 58px;
  width: 100%;
}

.about-section__paragraph {
  align-self: stretch;
  margin: 0;
  color: #1c1f23;
  font-size: clamp(32px, 4vw, 60px);
  font-weight: 400;
  line-height: clamp(44px, 5.3vw, 80px);
}

.about-section__paragraph--first {
  margin-top: -1px;
}

@media (max-width: 1100px) {
  .about-section {
    align-items: flex-start;
    flex-direction: column;
  }

  .about-section__image-frame {
    flex-basis: auto;
  }
}
</style>
