import { onBeforeUnmount, onMounted, ref } from 'vue'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export const useStorySlider = (
  slideCount,
  { animationDuration = 520, wheelSwitchThreshold = 260 } = {},
) => {
  const storyRef = ref(null)
  const activeSlideIndex = ref(0)
  const isAnimating = ref(false)
  const wheelProgress = ref(0)
  const lastSlideIndex = Math.max(slideCount - 1, 0)
  let animationTimerId = null

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

  const resetWheelProgress = () => {
    wheelProgress.value = 0
  }

  const setActiveSlide = (index) => {
    const nextIndex = clamp(index, 0, lastSlideIndex)

    if (nextIndex === activeSlideIndex.value) {
      return
    }

    activeSlideIndex.value = nextIndex
    isAnimating.value = true
    clearAnimationTimer()
    animationTimerId = window.setTimeout(finishAnimation, animationDuration)
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

  const goToSlide = (index) => {
    resetWheelProgress()
    setActiveSlide(index)
  }

  const handleWheel = (event) => {
    if (!storyRef.value || slideCount < 2) {
      return
    }

    const direction = Math.sign(event.deltaY)

    if (!direction) {
      return
    }

    const canMoveForward =
      direction > 0 && activeSlideIndex.value < lastSlideIndex
    const canMoveBackward = direction < 0 && activeSlideIndex.value > 0

    if (!canMoveForward && !canMoveBackward) {
      resetWheelProgress()
      return
    }

    const rect = storyRef.value.getBoundingClientRect()
    const viewportCenter = window.innerHeight / 2
    const sectionCrossesCenter =
      rect.top <= viewportCenter && rect.bottom >= viewportCenter

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

    if (Math.abs(wheelProgress.value) < wheelSwitchThreshold) {
      return
    }

    if (wheelProgress.value > 0) {
      setActiveSlide(activeSlideIndex.value + 1)
    } else {
      setActiveSlide(activeSlideIndex.value - 1)
    }

    resetWheelProgress()
  }

  onMounted(() => {
    window.addEventListener('wheel', handleWheel, { passive: false })
  })

  onBeforeUnmount(() => {
    finishAnimation()
    resetWheelProgress()
    window.removeEventListener('wheel', handleWheel)
  })

  return {
    storyRef,
    activeSlideIndex,
    getSlideState,
    goToSlide,
  }
}
