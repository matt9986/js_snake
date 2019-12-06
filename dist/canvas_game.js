!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"CanvasDisplay",function(){return i});var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ctx=t.getContext("2d"),this.size=10,this.border_size=2}var t,n,i;return t=e,(n=[{key:"render",value:function(e){var t=this;this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.lineWidth=this.border_size,this.ctx.strokeStyle="gray",this.ctx.strokeRect(0,0,this.max_x()*this.size,this.max_y()*this.size),this.draw_square(e.apple,"red"),e.snake.map(function(e){return t.draw_square(e,"black")})}},{key:"lost",value:function(e){this.ctx.font="11px 'Arial Unicode MS'",this.ctx.fillText("💀",this.game_to_x_coord(e.snake[1][0]),this.game_to_y_coord(e.snake[1][1])+this.size-1)}},{key:"max_x",value:function(){return(this.ctx.canvas.width-this.size)/this.size}},{key:"max_y",value:function(){return(this.ctx.canvas.height-this.size)/this.size}},{key:"draw_square",value:function(e,t){this.ctx.fillStyle=t,this.ctx.fillRect(this.game_to_x_coord(e[0]),this.game_to_y_coord(e[1]),this.size,this.size)}},{key:"game_to_x_coord",value:function(e){return this.game_to_display_dimension(e)}},{key:"game_to_y_coord",value:function(e){return this.game_to_display_dimension(this.max_y()-e)-this.size}},{key:"game_to_display_dimension",value:function(e){return e*this.size}}])&&r(t.prototype,n),i&&r(t,i),e}()},function(e,t,n){"use strict";n.r(t);var r=function(e,t){var n=null;return e.map(function(e){var r=null==n?function(e){return function(t){return[t[0]+e[0],t[1]+e[1]]}}(t)(e):n;return n=e,r})},i=function(e){return r(e,[0,1])},o=function(e){return r(e,[0,-1])},a=function(e){return r(e,[1,0])},u=function(e){return r(e,[-1,0])},s=function(e){var t=e.length;return function n(){var r=Array.prototype.slice.call(arguments);return function(){var i=r.slice();return Array.prototype.push.apply(i,arguments),(i.length>=t?e:n).apply(null,i)}}()};function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"snake_game",function(){return x});var l=function(e,t){return[_(e),_(t)]},f=function(e,t){return e[0]==t[0]&&e[1]==t[1]},_=function(e){return Math.floor(Math.random()*e)},y=[i,u,o,a],d=100;function h(e){"37"==e.last_key&&(e.current_move_index=e.current_move_index==y.length-1?0:e.current_move_index+1),"39"==e.last_key&&(e.current_move_index=0==e.current_move_index?y.length-1:e.current_move_index-1),e.last_key=null,e.snake=y[e.current_move_index](e.snake);var t=e.snake[0];return f(t,e.apple)&&(e.snake.push(c(e.snake.slice(-1)[0])),e.apple=l(e.max_x,e.max_y)),t[0]<0||t[0]>=e.max_x||t[1]<0||t[1]>=e.max_y?m(e):e.snake.slice(1).some(s(f)(t))?m(e):(e.display.render(e),void setTimeout(h,d,e))}function m(e){e.display.lost(e),document.onkeydown=function(t){x(e.display)}}function x(e){var t={apple:l(e.max_x(),e.max_y()),current_move_index:0,display:e,max_x:e.max_x(),max_y:e.max_y(),last_key:null,snake:[]};document.onkeydown=function(e){document.onkeydown=function(e){return t.last_key=e.keyCode},h(t)};var n=Math.floor(t.max_y/2),r=Math.floor(t.max_x/2);t.snake=[[r,n],[r,n],[r,n],[r,n]],e.render(t)}},,function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0);Object(r.snake_game)(new i.CanvasDisplay(document.getElementById("snake-game-target")))}]);