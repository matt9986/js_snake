import {snake_game} from './snake_game';
import {CanvasDisplay} from './canvas_display';

snake_game(new CanvasDisplay(document.getElementById("snake-game-target")));
