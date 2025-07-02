export default (f, time) => {
  let timer
  let lastReceived = 0

  return (...args) => {
    clearTimeout(timer)
    const now = performance.now()

    if (now - lastReceived > time) {
      f(...args)
    } else {
      timer = setTimeout(() => f(...args), time)
    }

    lastReceived = now
  }
}
