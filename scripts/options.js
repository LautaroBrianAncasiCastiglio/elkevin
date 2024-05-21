const OPTION_WIDTH = 150;
const OPTION_HEIGHT = 80;

class OptionSystem {
  constructor(options) {
    this.options = options;
  }

  drawOptions() {
    textSize(20);

    const drawOption = (option, index) => {
      const posX = width * (0.2 * (index + 1));
      const posY = height * 0.8;

      
    };

    this.options.forEach(drawOption);
  }

  showOptionsInScreen() {}

  hideOptionsInScreeen() {}
}
