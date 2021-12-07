document.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 65:
      window.cancelAnimationFrame(startReq);
      startReq = undefined;
      updatedVal = 0.000;
      console.log('canceled animation frame');
      break;
    case 83:
      requestAnimationFrame(render);
      updatedVal = 0.0005;
      console.log('animation resumed');
  }

  console.log(event.keyCode);
})
