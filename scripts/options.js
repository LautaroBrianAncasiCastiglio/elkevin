const OPTION_WIDTH = 100;
const OPTION_HEIGHT = 50;
const OPTION_GAP = 50;

class OptionSystem {
    visible = false;

    constructor(options) {
        this.options = options;
        this.buttons = this.generateButtons();
    }

    generateButtons() {
        const buttons = [];

        const allOptionsWidth =
            OPTION_WIDTH * this.options.length +
            OPTION_GAP * (this.options.length - 1);

        const startingXPosition = width / 2 - allOptionsWidth / 2;

        this.options.forEach((option, index) => {
            const yPosition = height * 0.9;
            const xPosition =
                startingXPosition + (OPTION_WIDTH + OPTION_GAP) * index;

            const newButton = new Button({
                x: xPosition,
                y: yPosition,
                align_x: 1,
                width: OPTION_WIDTH,
                height: OPTION_HEIGHT,
                content: option.content,
                on_press: option.onClick,
            });

            newButton.style("default", {
                text_size: 16,
                background: "#0e04a1",
                color: "#ffffff",
            });

            newButton.style("hover", {
                text_size: 16,
                background: "#ff0000",
                color: "#ffffff",
            });

            buttons.push(newButton);
        });

        return buttons;
    }

    drawOptions() {
        if (this.visible) this.buttons.forEach((button) => button.draw());
    }

    showOptionsInScreen() {
        this.visible = true;
    }

    hideOptionsInScreen() {
        this.visible = false;
    }
}
