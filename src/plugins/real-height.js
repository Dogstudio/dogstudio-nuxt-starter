// prettier-ignore
export default () => {
  const onResize = () => {
    document.documentElement.setAttribute('style', `--real-height: ${window.innerHeight}px`)
  }

  // Resize Event
  window.addEventListener('resize', onResize)

  // Initial Resize
  onResize()
}
