function loopAnimationFrames () {
  let start = Date.now()
  requestAnimationFrame(function () {
    let delta = Date.now() - start
    if (delta > 1000) {
      console.error('Time since last animation frame exceeds 1s:', delta);
    }
    loopAnimationFrames()
  })
}

loopAnimationFrames()
