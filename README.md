# js_snake
Quick JS snake game

Did I need npm/webpack/babel? Probably not.

## How to add this to your site:

1. Add the `dist\js_snake.js` script to your site
1. Start a new game by calling either
```javascript
JsSnake.SnakeGame.snake_game(new JsSnake.FaviconDisplay.FaviconDisplay(document))
```
or 
```javascript
JsSnake.SnakeGame.snake_game(new JsSnake.CanvasDisplay.CanvasDisplay(document.getElementById('snake-game-target')))
```

## How to hack on it

1. Clone the repo
1. Run `npm install`
1. Hack some
1. Run `npm run build`
1. Open index.html in your browser and test your changes
