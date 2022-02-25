let paused = false;
document.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 32:
      animFrame = paused
        ? window.requestAnimationFrame(render)
        : window.cancelAnimationFrame(animFrame);

      paused = !paused;
      console.log('Paused: ' + paused.toString());
      break;
  }
});
