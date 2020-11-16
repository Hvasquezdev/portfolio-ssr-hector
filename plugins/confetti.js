import confetti from 'canvas-confetti';

export const launchConfetti = () => {
  // const duration = 55 * 1000;
  // const animationEnd = Date.now() + duration;
  let skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  (function frame() {
    // const timeLeft = animationEnd - Date.now();
    // const ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: 200,
      gravity: 0.4,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2
      },
      colors: ['#d0e7ff'],
      shapes: ['circle'],
      scalar: randomInRange(0.5, 0.5)
    });

    requestAnimationFrame(frame);
  })();
};
