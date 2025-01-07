// prettier-ignore
export default defineNuxtPlugin(() => {
  const onResize = () => {
    document.documentElement.setAttribute('style', `--real-height: ${window.innerHeight}px`)
  }

  // Resize Event
  window.addEventListener('resize', onResize)

  // Initial Resize
  onResize()
})
