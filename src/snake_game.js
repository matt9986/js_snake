import {up, down, right, left} from "./movement";
import {curry} from "./curry"

const apple_generator = (max_x, max_y) => [random_int(max_x), random_int(max_y)];
const point_collision = (point_a, point_b) => point_a[0] == point_b[0] && point_a[1] == point_b[1];
const random_int = max => Math.floor(Math.random() * (max));
const moves = [up, left, down, right];
const interval = 100;

function play(game) {
  // check for input
  if (game.last_key == '37') {
    // left
    game.current_move_index = game.current_move_index == moves.length - 1 ? 0 : game.current_move_index + 1;
  }
  if (game.last_key == '39') {
    // right
    game.current_move_index = game.current_move_index == 0 ? moves.length - 1 : game.current_move_index - 1;
  }
  game.last_key = null;
  // move the snake
  game.snake = moves[game.current_move_index](game.snake);
  // check for noms
  let head = game.snake[0];
  if (point_collision(head, game.apple)) {
    game.snake.push([...game.snake.slice(-1)[0]]);
    game.apple = apple_generator(game.max_x, game.max_y);
  }
  // check for snake/wall collision
  if (head[0] < 0 || head[0] >= game.max_x || head[1] < 0 || head[1] >= game.max_y) {
    return lost(game);
  }
  // check for snake/snake collision
  if (game.snake.slice(1).some(curry(point_collision)(head))) {
    return lost(game);
  }
  // Render the move
  game.display.render(game);
  setTimeout(play, interval, game);
}

function lost(game) {
  game.display.lost(game);
  document.onkeydown = e => {
    snake_game(game.display);
  }
}

export function snake_game(display) {
  let game = {
    apple: apple_generator(display.max_x(), display.max_y()),
    current_move_index: 0,
    display: display,
    max_x: display.max_x(),
    max_y: display.max_y(),
    last_key: null,
    snake: []
  }
  document.onkeydown = event => {
    game.last_key = event.keyCode;
  };

  let mid_y = Math.floor(game.max_y / 2);
  let mid_x = Math.floor(game.max_x / 2);
  // Start with a 4 long snake
  game.snake = [[mid_x, mid_y], [mid_x, mid_y], [mid_x, mid_y], [mid_x, mid_y]];

  display.render(game);

  play(game);
}
  