const move_point = (change, segment) => [segment[0] + change[0], segment[1] + change[1]];
const move_snake = (snake, change) => {
    let prev_point = null;
    return snake.map(segment => {
        let new_val = prev_point == null ? move_point(change, segment) : prev_point;
        prev_point = segment;
        return new_val;
    })
}
export const up = snake => move_snake(snake, [0, 1]);
export const down = snake => move_snake(snake, [0, -1]);
export const right = snake => move_snake(snake, [1, 0]);
export const left = snake => move_snake(snake, [-1, 0]);
