const game = {
   start() {
      this.ctx = document.getElementById('arcada-canvas').getContext('2d');
      const background = new Image();
      background.src = './images/any/background.png';

      // выполнить перерисовку на следующем кадре всех запланированые до него изображений
      window.requestAnimationFrame(() => {
         this.ctx.drawImage(background, 0, 0); // запланированое изображение
      });

      console.log(background);
   },
};

window.addEventListener('load', () => {
   game.start();
});