const JsSnake = {
    SnakeGame: require('./snake_game'),
    CanvasDisplay: require('./canvas_display'),
    FaviconDisplay: require('./favicon_display')
};

module.exports = JsSnake;

global.JsSnake = JsSnake;
