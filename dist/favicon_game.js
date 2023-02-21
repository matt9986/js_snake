(()=>{"use strict";var e=function(e,t){var n=null;return e.map((function(e){var a=null==n?function(e,t){return[t[0]+e[0],t[1]+e[1]]}(t,e):n;return n=e,a}))},t=function(e){var t=e.length;return function n(){for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return Array.prototype.push.apply(i,r),(i.length>=t?e:n).apply(null,i)}}()};var n=function(e,t){return[i(e),i(t)]},a=function(e,t){return e[0]==t[0]&&e[1]==t[1]},i=function(e){return Math.floor(Math.random()*e)},r=[function(t){return e(t,[0,1])},function(t){return e(t,[-1,0])},function(t){return e(t,[0,-1])},function(t){return e(t,[1,0])}],o=100;function s(e){"ArrowLeft"==e.last_key&&(e.current_move_index=e.current_move_index==r.length-1?0:e.current_move_index+1),"ArrowRight"==e.last_key&&(e.current_move_index=0==e.current_move_index?r.length-1:e.current_move_index-1),e.last_key=null,e.snake=r[e.current_move_index](e.snake);var i,l=e.snake[0];return a(l,e.apple)&&(e.snake.push(function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(i=e.snake.slice(-1)[0])||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),e.apple=n(e.max_x,e.max_y)),l[0]<0||l[0]>=e.max_x||l[1]<0||l[1]>=e.max_y||e.snake.slice(1).some(t(a)(l))?function(e){e.display.lost(e),document.onkeydown=function(t){c(e.display)}}(e):(e.display.render(e),void setTimeout(s,o,e))}function c(e){var t={apple:n(e.max_x(),e.max_y()),current_move_index:0,display:e,max_x:e.max_x(),max_y:e.max_y(),last_key:null,snake:[]};document.onkeydown=function(e){document.onkeydown=function(e){return t.last_key=e.key},s(t)};var a=Math.floor(t.max_y/2),i=Math.floor(t.max_x/2);t.snake=[[i,a],[i,a],[i,a],[i,a]],e.render(t)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ctx=t.getContext("2d"),this.size=10,this.border_size=2,this.snake_color="black"}var t,n;return t=e,(n=[{key:"render",value:function(e){var t=this;this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.lineWidth=this.border_size,this.ctx.strokeStyle="gray",this.ctx.strokeRect(0,0,this.max_x()*this.size,this.max_y()*this.size),this.draw_square(e.apple,"red"),e.snake.map((function(e){return t.draw_square(e,t.snake_color)}))}},{key:"lost",value:function(e){this.ctx.font="11px 'Arial Unicode MS'",this.ctx.fillText("💀",this.game_to_x_coord(e.snake[1][0]),this.game_to_y_coord(e.snake[1][1])+this.size-1)}},{key:"max_x",value:function(){return(this.ctx.canvas.width-this.size)/this.size}},{key:"max_y",value:function(){return(this.ctx.canvas.height-this.size)/this.size}},{key:"draw_square",value:function(e,t){this.ctx.fillStyle=t,this.ctx.fillRect(this.game_to_x_coord(e[0]),this.game_to_y_coord(e[1]),this.size,this.size)}},{key:"game_to_x_coord",value:function(e){return this.game_to_display_dimension(e)}},{key:"game_to_y_coord",value:function(e){return this.game_to_display_dimension(this.max_y()-e)-this.size}},{key:"game_to_display_dimension",value:function(e){return e*this.size}}])&&l(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}c(new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.favicon=t.getElementById("favicon")||this.create_favicon();var n=t.createElement("canvas");n.width=16,n.height=16,this.canvas_display=new u(n),this.canvas_display.size=1,this.canvas_display.border_size=1}var t,n;return t=e,(n=[{key:"render",value:function(e){this.canvas_display.snake_color=this.snake_color(),this.canvas_display.render(e),this.favicon.href=this.canvas_display.ctx.canvas.toDataURL("image/png")}},{key:"lost",value:function(e){this.canvas_display.ctx.font="11px 'Arial Unicode MS'",this.canvas_display.ctx.fillText("💀",0,11),this.favicon.href=this.canvas_display.ctx.canvas.toDataURL("image/png")}},{key:"max_x",value:function(){return this.canvas_display.max_x()}},{key:"max_y",value:function(){return this.canvas_display.max_y()}},{key:"create_favicon",value:function(){var e=document.createElement("canvas");e.width=16,e.height=16;var t=e.getContext("2d");t.fillStyle="black",t.fillRect(0,0,16,16);var n=document.createElement("link");return n.type="image/x-icon",n.rel="shortcut icon",n.href=e.toDataURL("image/x-icon"),document.getElementsByTagName("head")[0].appendChild(n),n}},{key:"snake_color",value:function(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"white":"black"}}])&&h(t.prototype,n),e}())(document))})();