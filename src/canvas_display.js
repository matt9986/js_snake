export class CanvasDisplay {
  constructor(canvas_element) {
    this.ctx = canvas_element.getContext("2d");
    this.size = 10;
    this.border_size = 2;
    this.snake_color = "black";
  }

  render(game) {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.lineWidth = this.border_size;
    this.ctx.strokeStyle = "gray";
    this.ctx.strokeRect(0, 0, this.max_x() * this.size, this.max_y() * this.size);
    this.draw_square(game.apple, "red");
    game.snake.map(point => this.draw_square(point, this.snake_color))
  }

  lost(game) {
    this.ctx.font = "11px 'Arial Unicode MS'";
    this.ctx.fillText("💀",
                      this.game_to_x_coord(game.snake[1][0]),
                      this.game_to_y_coord(game.snake[1][1]) + this.size - 1)
  }

  max_x() {
    return (this.ctx.canvas.width - this.size) / this.size;
  }
  max_y() {
    return (this.ctx.canvas.height - this.size) / this.size;
  }

  // helpers
  draw_square(point, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.game_to_x_coord(point[0]),
                      this.game_to_y_coord(point[1]),
                      this.size,
                      this.size);
  }

  game_to_x_coord(x) {
    return this.game_to_display_dimension(x);
  }

  game_to_y_coord(y) {
    return this.game_to_display_dimension(this.max_y() - y) - this.size;
  }

  game_to_display_dimension(point) {
    return point * this.size;
  }

}