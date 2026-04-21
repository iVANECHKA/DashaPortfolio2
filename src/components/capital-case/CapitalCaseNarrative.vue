<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const slides = [
  {
    title: 'Погружение в домен',
    description:
      'Прежде чем приступить к работе, мне пришлось очень глубоко изучить вопрос данной темы, так как в самом начале появлялись определенные трудности из-за влияния регуляторных норм ЕС.',
    meloch: 'no-exist',
    imageSrc: '/img/capital-domain.png',
    imageAlt: 'Погружение в домен',
  },
  {
    title: 'Онбординг',
    description:
      'Большой процент пользователей отваливался на онбординге, из-за его сложности на этапе тестов и длины прохождения, от которых нельзя отказаться из-за определенных законов государств.',
    meloch: 'no-exist',
    imageSrc: '/img/capital-onboarding.png',
    imageAlt: 'Онбординг',
  },
  {
    title: 'Онбординг',
    description:
      'Чтобы положительно повлиятьна метрику, я решила переработать его следующим образом:',
    description2: 'Тестирование на знания пользователя сократилось с 10 вопросов до 3, что сделало порог входа проще для новичков и быстрее для опытных трейдеров ',
    description3: 'Были удалены экраны с объяснением некоторых тем в формате лекций, при этом появился новый раздел Edu Hub, который закрывает боли новичков и не мешает опытным трейдерам',  
    meloch: '',
    imageSrc: '/img/capital-onboarding2.png',
    imageAlt: 'Поддержка',
  },
]

const LAST_SLIDE_INDEX = slides.length - 1
const ANIMATION_DURATION = 520
const WHEEL_SWITCH_THRESHOLD = 260

const storyRef = ref(null)
const activeSlideIndex = ref(0)
const isAnimating = ref(false)
const wheelProgress = ref(0)
let animationTimerId = null

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const clearAnimationTimer = () => {
  if (animationTimerId !== null) {
    window.clearTimeout(animationTimerId)
    animationTimerId = null
  }
}

const finishAnimation = () => {
  clearAnimationTimer()
  isAnimating.value = false
}

const setActiveSlide = (index) => {
  const nextIndex = clamp(index, 0, LAST_SLIDE_INDEX)

  if (nextIndex === activeSlideIndex.value) {
    return
  }

  activeSlideIndex.value = nextIndex
  isAnimating.value = true
  clearAnimationTimer()
  animationTimerId = window.setTimeout(finishAnimation, ANIMATION_DURATION)
}

const resetWheelProgress = () => {
  wheelProgress.value = 0
}

const centerStoryBlock = (rect) => {
  const viewportCenter = window.innerHeight / 2
  const sectionCenter = rect.top + rect.height / 2
  const centerOffset = sectionCenter - viewportCenter

  if (Math.abs(centerOffset) <= 1) {
    return
  }

  window.scrollTo({
    top: window.scrollY + centerOffset,
    behavior: 'auto',
  })
}

const getSlideState = (index) => {
  if (index === activeSlideIndex.value) {
    return 'is-active'
  }

  return index < activeSlideIndex.value ? 'is-before' : 'is-after'
}

const handleWheel = (event) => {
  if (!storyRef.value || slides.length < 2) {
    return
  }

  const direction = Math.sign(event.deltaY)

  if (!direction) {
    return
  }

  const canMoveForward = direction > 0 && activeSlideIndex.value < LAST_SLIDE_INDEX
  const canMoveBackward = direction < 0 && activeSlideIndex.value > 0

  if (!canMoveForward && !canMoveBackward) {
    resetWheelProgress()
    return
  }

  const rect = storyRef.value.getBoundingClientRect()
  const viewportCenter = window.innerHeight / 2
  const sectionCrossesCenter = rect.top <= viewportCenter && rect.bottom >= viewportCenter

  if (!sectionCrossesCenter) {
    resetWheelProgress()
    return
  }

  event.preventDefault()
  centerStoryBlock(rect)

  if (isAnimating.value) {
    return
  }

  wheelProgress.value += event.deltaY

  if (Math.abs(wheelProgress.value) < WHEEL_SWITCH_THRESHOLD) {
    return
  }

  if (wheelProgress.value > 0) {
    setActiveSlide(activeSlideIndex.value + 1)
  } else {
    setActiveSlide(activeSlideIndex.value - 1)
  }

  resetWheelProgress()
}

const goToSlide = (index) => {
  resetWheelProgress()
  setActiveSlide(index)
}

onMounted(() => {
  window.addEventListener('wheel', handleWheel, { passive: false })
})

onBeforeUnmount(() => {
  finishAnimation()
  resetWheelProgress()
  window.removeEventListener('wheel', handleWheel)
})
</script>

<template>
  <div>
    <div class="frame-9">
      <div class="frame-10">
        <div class="text-wrapper-10">ПРОБЛЕМА</div>
        <p class="text-wrapper-11">
          Приложение существовало несколько лет и за это время собрало лояльную
          базу — но по визуалу и UX заметно отставало от конкурентов
        </p>
      </div>

      <div class="frame-10">
        <div class="text-wrapper-10">ЗАДАЧИ</div>
        <p class="text-wrapper-12">
          Трансформировать актив лояльности в актив опыта, чтобы повысить LTV
          существующих клиентов и бизнес мог конкурентоспособно привлекать новую
          аудиторию. Дополнительно нужно создать адаптивный дизайн под юридические
          реалии и снизить порог входа для новичков.
        </p>
      </div>
    </div>

    <section ref="storyRef" class="frame-11" aria-label="Погружение в домен">
      <div class="frame-11__text-window">
        <div class="frame-11__stack">
          <article
            v-for="(slide, index) in slides"
            :key="slide.title"
            class="frame-12"
            :class="getSlideState(index)"
          >
            <h2 class="text-wrapper-13">{{ slide.title }}</h2>
            <p class="text-wrapper-14">
              {{ slide.description }}
            </p>
            <div>
              <div class="text-wrapper16">
                <img src="/img/meloch.svg" :class="slide.meloch" alt="">
                <p class="text-wrapper15">{{ slide.description2 }}</p>
              </div>
              
              <div class="text-wrapper16">
                <img src="/img/meloch.svg" :class="slide.meloch" alt="">
                <p class="text-wrapper15">{{ slide.description3 }}</p>
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
              :key="slide.imageAlt"
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
            :key="slide.title"
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
  </div>
</template>

<style scoped>
.text-wrapper15 {
  font-weight: 500;
  font-size: 24px;
  color: #1C1F23;
  opacity: .6;
  max-width: 620px;
  margin-bottom: 24px;
  margin-left: 8px;
}

.text-wrapper16 {
  display: flex;
  align-items: baseline;
}

.no-exist {
  display: none;
}

.frame-9 {
  display: flex;
  flex-direction: column;
  width: 1920px;
  align-items: flex-start;
  gap: 48px;
  padding: 100px 0 100px 52px;
  position: absolute;
  top: 1160px;
  left: 0;
}

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

.text-wrapper-11 {
  position: relative;
  width: 882px;
  margin-top: -1px;
  color: #1c1f23;
  font-size: 54px;
  line-height: 64px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.text-wrapper-12 {
  position: relative;
  width: 934px;
  margin-top: -1px;
  color: #1c1f23cc;
  font-size: 32px;
  line-height: 44px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.frame-11 {
  display: flex;
  width: 1920px;
  height: 1060px;
  align-items: flex-start;
  gap: 90px;
  padding: 100px 0 100px 52px;
  position: absolute;
  top: 1992px;
  left: 0;
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
