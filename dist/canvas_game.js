!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",function(){return i});var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e.getContext("2d"),this.size=10,this.border_size=2}var e,n,i;return e=t,(n=[{key:"render",value:function(t){var e=this;this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.lineWidth=this.border_size,this.ctx.strokeStyle="black",this.ctx.strokeRect(0,0,this.max_x()*this.size,this.max_y()*this.size),this.draw_square(t.apple,"red"),t.snake.map(function(t){return e.draw_square(t,"black")})}},{key:"lost",value:function(t){this.ctx.font="11px 'Arial Unicode MS'",this.ctx.fillText("💀",this.game_to_x_coord(t.snake[1][0]),this.game_to_y_coord(t.snake[1][1])+this.size-1)}},{key:"max_x",value:function(){return(this.ctx.canvas.width-this.size)/this.size}},{key:"max_y",value:function(){return(this.ctx.canvas.height-this.size)/this.size}},{key:"draw_square",value:function(t,e){this.ctx.fillStyle=e,this.ctx.fillRect(this.game_to_x_coord(t[0]),this.game_to_y_coord(t[1]),this.size,this.size)}},{key:"game_to_x_coord",value:function(t){return this.game_to_display_dimension(t)}},{key:"game_to_y_coord",value:function(t){return this.game_to_display_dimension(this.max_y()-t)-this.size}},{key:"game_to_display_dimension",value:function(t){return t*this.size}}])&&r(e.prototype,n),i&&r(e,i),t}()},function(t,e,n){"use strict";var r=function(t,e){var n=null;return t.map(function(t){var r=null==n?function(t){return function(e){return[e[0]+t[0],e[1]+t[1]]}}(e)(t):n;return n=t,r})},i=function(t){return r(t,[0,1])},o=function(t){return r(t,[0,-1])},a=function(t){return r(t,[1,0])},u=function(t){return r(t,[-1,0])},c=function(t){var e=t.length;return function n(){var r=Array.prototype.slice.call(arguments);return function(){var i=r.slice();return Array.prototype.push.apply(i,arguments),(i.length>=e?t:n).apply(null,i)}}()};function s(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return x});var l=function(t,e){return[_(t),_(e)]},f=function(t,e){return t[0]==e[0]&&t[1]==e[1]},_=function(t){return Math.floor(Math.random()*t)},d=[i,u,o,a],y=100;function h(t){"37"==t.last_key&&(t.current_move_index=t.current_move_index==d.length-1?0:t.current_move_index+1),"39"==t.last_key&&(t.current_move_index=0==t.current_move_index?d.length-1:t.current_move_index-1),t.last_key=null,t.snake=d[t.current_move_index](t.snake);var e=t.snake[0];return f(e,t.apple)&&(t.snake.push(s(t.snake.slice(-1)[0])),t.apple=l(t.max_x,t.max_y)),e[0]<0||e[0]>=t.max_x||e[1]<0||e[1]>=t.max_y?m(t):t.snake.slice(1).some(c(f)(e))?m(t):(t.display.render(t),void setTimeout(h,y,t))}function m(t){t.display.lost(t),document.onkeydown=function(e){x(t.display)}}function x(t){var e={apple:l(t.max_x(),t.max_y()),current_move_index:0,display:t,max_x:t.max_x(),max_y:t.max_y(),last_key:null,snake:[]};document.onkeydown=function(t){document.onkeydown=function(t){return e.last_key=t.keyCode},h(e)};var n=Math.floor(e.max_y/2),r=Math.floor(e.max_x/2);e.snake=[[r,n],[r,n],[r,n],[r,n]],t.render(e)}},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(0);Object(r.a)(new i.a(document.getElementById("snake-game-target")))}]);