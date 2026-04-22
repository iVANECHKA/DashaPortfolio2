import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

export const useViewportScale = (baseWidth = 1920) => {
  const viewportRef = ref(null)
  const viewportWidth = ref(baseWidth)

  const updateScale = () => {
    viewportWidth.value = viewportRef.value?.clientWidth ?? window.innerWidth
  }

  onMounted(() => {
    updateScale()
    window.addEventListener('resize', updateScale)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScale)
  })

  const scale = computed(() => Math.min(1, viewportWidth.value / baseWidth))

  return {
    viewportRef,
    scale,
  }
}
