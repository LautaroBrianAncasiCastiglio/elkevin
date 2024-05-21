const OPTION_WIDTH = 100;
const OPTION_HEIGHT = 50;

class OptionSystem {
    constructor(options) {
        this.options = options;

        const buttons = [];

        options.forEach((option, index) => {
            const newButton = new Button({
                x: width * (0.2 * (index + 1)),
                y: height * 0.8,
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

        this.buttons = buttons;
    }

    drawOptions() {
        this.buttons.forEach((button) => button.draw());
    }

    showOptionsInScreen() {}

    hideOptionsInScreeen() {}
}
