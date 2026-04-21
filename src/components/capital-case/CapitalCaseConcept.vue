<script setup>
import { capitalCaseConceptImages } from '../../data/capitalCase'
</script>

<template>
  <div class="frame-22">
    <div class="frame-23">
      <div class="text-wrapper-10">ВИЗУАЛЬНАЯ КОНЦЕПЦИЯ</div>
      <p class="text-wrapper-16">
        Разработка UI началась с опросов пользователей, которые увидели 3
        направления. Собрав весь фидбэк мы с коллегой придумали следующее
      </p>
    </div>

    <div class="frame-24">
      <img
        v-for="image in capitalCaseConceptImages"
        :key="image.src"
        :class="image.className"
        :src="image.src"
        :alt="image.alt"
      />
    </div>

    <div class="frame-23">
      <div class="text-wrapper-10">О СОЗДАНИИ КОНЦЕПЦИИ</div>
      <p class="text-wrapper-12">
        Нам было важно сделать продукт с особенным запоминающимся визуалом, но
        хорошо читаемым и удобным, поэтому главными принципами стали: визуальная
        плотность в интерфейсах, но с добавлением воздуха в ключевых точках,
        четкая иерархия и структура, нейтральные цвета, и скругления, которые
        позволяют видеть интерфейс более дружелюбным и мягким, при этом не
        снижает уровень серьезности.
      </p>
    </div>
  </div>
</template>

<style scoped>
.frame-22 {
  display: flex;
  flex-direction: column;
  width: 1920px;
  align-items: flex-start;
  gap: 120px;
  padding: 100px 0;
  position: absolute;
  top: 5920px;
  left: 0;
}

.frame-23 {
  display: flex;
  width: 1920px;
  align-items: flex-start;
  gap: 80px;
  padding: 0 0 0 52px;
  position: relative;
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

.text-wrapper-16 {
  position: relative;
  width: 934px;
  margin-top: -1px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #1c1f23;
  font-size: 54px;
  letter-spacing: 0;
  line-height: 64px;
}

.frame-24 {
  display: flex;
  width: 1920px;
  align-items: center;
  gap: 39px;
  padding: 0 52px;
  position: relative;
  flex: 0 0 auto;
}

.img-2 {
  position: relative;
  width: 270px;
  height: 615.2px;
  margin-top: -10.6px;
  margin-bottom: -18.6px;
  aspect-ratio: 0.46;
  object-fit: cover;
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
</style>
