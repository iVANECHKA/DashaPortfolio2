<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const projectImageClasses = computed(() => [
  'project-card__image',
  props.project.imageHeightClass,
])

const getDetailValueClass = (detail) => [
  'project-card__detail-value',
  detail.fit ? 'project-card__detail-value--fit' : detail.widthClass,
]
</script>

<template>
  <article class="project-card">
    <div class="project-card__content">
      <div class="project-card__text">
        <div class="project-card__heading">
          <RouterLink
            v-if="project.route"
            :to="project.route"
            class="project-card__title-link"
          >
            <h2 class="project-card__title">
              {{ project.title }}
            </h2>
          </RouterLink>

          <h2 v-else class="project-card__title">
            {{ project.title }}
          </h2>

          <p class="project-card__subtitle" v-html="project.subtitle"></p>
        </div>

        <p class="project-card__description" v-html="project.description"></p>

        <RouterLink
          v-if="project.route"
          :to="project.route"
          class="project-card__cta"
        >
          Смотреть кейс
        </RouterLink>
      </div>

      <dl class="project-card__details">
        <div
          v-for="(detail, detailIndex) in project.details"
          :key="detail.label"
          class="project-card__detail"
          :class="{
            'project-card__detail--bordered':
              detailIndex < project.details.length - 1,
          }"
        >
          <dt class="project-card__detail-label">
            {{ detail.label }}
          </dt>

          <dd :class="getDetailValueClass(detail)">
            {{ detail.value }}
          </dd>
        </div>
      </dl>
    </div>

    <RouterLink
      v-if="project.route"
      :to="project.route"
      class="project-card__image-link"
    >
      <img
        :class="projectImageClasses"
        :src="project.imageSrc"
        :alt="project.imageAlt"
      />
    </RouterLink>

    <img
      v-else
      :class="projectImageClasses"
      :src="project.imageSrc"
      :alt="project.imageAlt"
    />
  </article>
</template>

<style scoped>
.project-card {
  display: flex;
  align-items: flex-start;
  gap: clamp(40px, 5vw, 96px);
}

.project-card__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 263px;
  flex: 0 0 min(34%, 472px);
  min-width: 320px;
  padding: 40px 0;
}

.project-card__text {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
}

.project-card__heading {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
}

.project-card__title-link {
  width: fit-content;
}

.project-card__title {
  align-self: stretch;
  margin: -1px 0 0;
  color: #1c1f23;
  font-size: 54px;
  font-weight: 500;
  line-height: 64px;
}

.project-card__subtitle {
  align-self: stretch;
  margin: 0;
  color: #1c1f23;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
}

.project-card__description {
  align-self: stretch;
  margin: 0;
  color: rgba(28, 31, 35, 0.8);
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
}

.project-card__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 24px;
  border: 1px solid rgba(28, 31, 35, 0.14);
  border-radius: 999px;
  color: #1c1f23;
  font-size: 18px;
  font-weight: 500;
}

.project-card__details {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: min(100%, 461px);
}

.project-card__detail {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 44px;
  width: 100%;
  padding: 24px 0;
}

.project-card__detail--bordered {
  border-bottom: 1px solid rgba(28, 31, 35, 0.2);
}

.project-card__detail-label {
  width: 143px;
  margin: -1px 0 0;
  color: rgba(28, 31, 35, 0.5);
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
}

.project-card__detail-value {
  margin: -1px 0 0;
  color: #1c1f23;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
}

.project-card__detail-value--fit {
  width: fit-content;
  white-space: nowrap;
}

.project-card__detail-value--role {
  width: 261px;
}

.project-card__detail-value--orientation {
  width: 274px;
}

.project-card__image {
  position: relative;
  flex: 1 1 0;
  width: min(100%, 1248px);
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: clamp(28px, 2vw, 40px);
}

.project-card__image-link {
  display: block;
  flex: 1 1 0;
}

.project-card__title-link:focus-visible,
.project-card__cta:focus-visible,
.project-card__image-link:focus-visible {
  outline: 2px solid #1c1f23;
  outline-offset: 4px;
}

.project-card__image--default {
  height: 890px;
}

.project-card__image--short {
  height: 889px;
}

@media (max-width: 1400px) {
  .project-card {
    gap: 40px;
  }

  .project-card__content {
    flex-basis: min(38%, 524px);
    gap: 120px;
  }

  .project-card__title {
    font-size: clamp(40px, 3.6vw, 54px);
    line-height: clamp(48px, 4.2vw, 64px);
  }

  .project-card__subtitle,
  .project-card__detail-label,
  .project-card__detail-value {
    font-size: clamp(20px, 1.7vw, 24px);
  }

  .project-card__description {
    font-size: clamp(18px, 1.4vw, 20px);
    line-height: clamp(26px, 2vw, 28px);
  }

  .project-card__image--default,
  .project-card__image--short {
    height: auto;
    aspect-ratio: 1248 / 890;
  }
}

@media (max-width: 1100px) {
  .project-card {
    flex-direction: column;
  }

  .project-card__content {
    min-width: 0;
    width: 100%;
    padding: 0;
    gap: 48px;
  }

  .project-card__details {
    width: 100%;
  }

  .project-card__detail {
    gap: 24px;
  }

  .project-card__image {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .project-card__detail {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .project-card__detail-label,
  .project-card__detail-value,
  .project-card__detail-value--role,
  .project-card__detail-value--orientation {
    width: 100%;
  }
}
</style>
