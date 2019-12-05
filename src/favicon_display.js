import {CanvasDisplay} from "./canvas_display"

export class FaviconDisplay {
    constructor(document) {
      this.favicon = document.getElementById('favicon') || this.create_favicon();
      let canvas_element = document.createElement('canvas');
      canvas_element.width = 16;
      canvas_element.height = 16;
      this.canvas_display = new CanvasDisplay(canvas_element);
      this.canvas_display.size = 1;
      this.canvas_display.border_size = 1;
    }
  
    render(game) {
      this.canvas_display.render(game);
      this.favicon.href = this.canvas_display.ctx.canvas.toDataURL('image/png');
    }
  
    lost(game) {
      this.canvas_display.ctx.font = "11px 'Arial Unicode MS'";
      this.canvas_display.ctx.fillText("💀",
                      0,
                      11)
      this.favicon.href = this.canvas_display.ctx.canvas.toDataURL('image/png');
    }
  
    max_x() {
      return this.canvas_display.max_x();
    }
    max_y() {
      return this.canvas_display.max_y();
    }

    create_favicon() {
      let canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 16, 16);

      let link = document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = canvas.toDataURL("image/x-icon");
      document.getElementsByTagName('head')[0].appendChild(link);
      return link;
    }
}