import OptionSystem from "./OptionSystem.js";

class GameOverOptionSystem extends OptionSystem {
    constructor({ onRetry }) {
        super([
            { content: "Reintentar", onClick: onRetry },
            {
                content: "Empezar de nuevo",
                onClick: () => location.reload(),
            },
        ]);
    }
}

export default GameOverOptionSystem;
