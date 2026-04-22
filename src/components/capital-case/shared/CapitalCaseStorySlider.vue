<script setup>
import { useStorySlider } from '../../../composables/useStorySlider'

const props = defineProps({
  ariaLabel: {
    type: String,
    required: true,
  },
  slides: {
    type: Array,
    required: true,
  },
})

const { storyRef, activeSlideIndex, getSlideState, goToSlide } = useStorySlider(
  props.slides.length,
)
</script>

<template>
  <section ref="storyRef" class="frame-11" :aria-label="ariaLabel">
    <div class="frame-11__text-window">
      <div class="frame-11__stack">
        <article
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="frame-12"
          :class="getSlideState(index)"
        >
          <h2 class="text-wrapper-13">{{ slide.title }}</h2>
          <p class="text-wrapper-14">
            {{ slide.description }}
          </p>

          <div v-if="slide.bullets?.length">
            <div
              v-for="(bullet, bulletIndex) in slide.bullets"
              :key="`${slide.id}-${bulletIndex}`"
              class="text-wrapper16"
            >
              <img src="/img/meloch.svg" alt="" aria-hidden="true" />
              <p class="text-wrapper15">{{ bullet }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="frame-16">
      <div class="frame-13-wrapper">
        <div class="frame-11__stack frame-11__stack--media">
          <div
            v-for="(slide, index) in slides"
            :key="`${slide.id}-media`"
            class="frame-11__media-slide"
            :class="getSlideState(index)"
          >
            <img class="frame-13" :src="slide.imageSrc" :alt="slide.imageAlt" />
          </div>
        </div>
      </div>

      <div class="frame-17" aria-label="Пагинация блока">
        <button
          v-for="(slide, index) in slides"
          :key="`${slide.id}-dot`"
          type="button"
          class="frame-17__dot"
          :class="{ 'frame-17__dot--active': index === activeSlideIndex }"
          :aria-label="`Переключить на слайд ${slide.title}`"
          :aria-pressed="index === activeSlideIndex"
          @click="goToSlide(index)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-wrapper15 {
  font-weight: 500;
  font-size: 24px;
  color: #1c1f23;
  opacity: 0.6;
  max-width: 620px;
  margin-bottom: 24px;
  margin-left: 8px;
}

.text-wrapper16 {
  display: flex;
  align-items: baseline;
}

.frame-11 {
  display: flex;
  width: 1920px;
  height: 1060px;
  align-items: flex-start;
  gap: 90px;
  padding: 100px 0 100px 52px;
  box-sizing: border-box;
}

.frame-11__text-window {
  width: 662px;
  height: 860px;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
}

.frame-11__stack {
  position: relative;
  width: 100%;
  height: 100%;
}

.frame-12 {
  display: flex;
  flex-direction: column;
  width: 662px;
  height: 860px;
  align-items: flex-start;
  gap: 48px;
  padding: 20px 0;
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(64px);
  pointer-events: none;
  transition:
    opacity 420ms ease,
    transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
}

.text-wrapper-13 {
  position: relative;
  align-self: stretch;
  margin: 0;
  color: #1c1f23;
  font-size: 54px;
  line-height: 64px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.text-wrapper-14 {
  position: relative;
  align-self: stretch;
  margin: 0;
  color: #1c1f23;
  font-size: 32px;
  line-height: 44px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.frame-16 {
  display: inline-flex;
  align-items: center;
  gap: 118px;
  padding: 0 52px 0 0;
  position: relative;
  flex: 0 0 auto;
}

.frame-13-wrapper {
  position: relative;
  width: 934px;
  height: 860px;
  background-color: #f1f3f7;
  border-radius: 43px;
  overflow: hidden;
}

.frame-11__stack--media {
  overflow: hidden;
}

.frame-11__media-slide {
  position: absolute;
  inset: 0;
  width: 934px;
  height: 860px;
  flex-shrink: 0;
  opacity: 0;
  transform: translateY(72px) scale(0.985);
  pointer-events: none;
  transition:
    opacity 420ms ease,
    transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
}

.frame-13 {
  display: block;
  width: 934px;
  height: 860px;
  object-fit: cover;
  object-position: center;
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
  box-sizing: border-box;
}

.frame-17__dot {
  display: block;
  flex: 0 0 auto;
  width: 12px;
  height: 12px;
  padding: 0;
  appearance: none;
  border: 0;
  border-radius: 50%;
  background-color: #e2e4e8;
  box-shadow: inset 0 0 0 1px rgba(28, 31, 35, 0.08);
  cursor: pointer;
  transition:
    background-color 160ms ease,
    transform 160ms ease;
}

.frame-17__dot:hover {
  transform: scale(1.12);
}

.frame-17__dot--active {
  background-color: #3f4042;
  box-shadow: none;
}

.frame-17__dot:focus-visible {
  outline: 2px solid #1c1f23;
  outline-offset: 4px;
}

.frame-12.is-active,
.frame-11__media-slide.is-active {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.frame-12.is-before,
.frame-11__media-slide.is-before {
  transform: translateY(-64px) scale(0.99);
}

.frame-12.is-after,
.frame-11__media-slide.is-after {
  transform: translateY(64px) scale(0.99);
}
</style>
