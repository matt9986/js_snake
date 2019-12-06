!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n.d(e,"CanvasDisplay",function(){return a});var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e.getContext("2d"),this.size=10,this.border_size=2}var e,n,a;return e=t,(n=[{key:"render",value:function(t){var e=this;this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.lineWidth=this.border_size,this.ctx.strokeStyle="gray",this.ctx.strokeRect(0,0,this.max_x()*this.size,this.max_y()*this.size),this.draw_square(t.apple,"red"),t.snake.map(function(t){return e.draw_square(t,"black")})}},{key:"lost",value:function(t){this.ctx.font="11px 'Arial Unicode MS'",this.ctx.fillText("💀",this.game_to_x_coord(t.snake[1][0]),this.game_to_y_coord(t.snake[1][1])+this.size-1)}},{key:"max_x",value:function(){return(this.ctx.canvas.width-this.size)/this.size}},{key:"max_y",value:function(){return(this.ctx.canvas.height-this.size)/this.size}},{key:"draw_square",value:function(t,e){this.ctx.fillStyle=e,this.ctx.fillRect(this.game_to_x_coord(t[0]),this.game_to_y_coord(t[1]),this.size,this.size)}},{key:"game_to_x_coord",value:function(t){return this.game_to_display_dimension(t)}},{key:"game_to_y_coord",value:function(t){return this.game_to_display_dimension(this.max_y()-t)-this.size}},{key:"game_to_display_dimension",value:function(t){return t*this.size}}])&&r(e.prototype,n),a&&r(e,a),t}()},function(t,e,n){"use strict";n.r(e);var r=function(t,e){var n=null;return t.map(function(t){var r=null==n?function(t){return function(e){return[e[0]+t[0],e[1]+t[1]]}}(e)(t):n;return n=t,r})},a=function(t){return r(t,[0,1])},i=function(t){return r(t,[0,-1])},o=function(t){return r(t,[1,0])},c=function(t){return r(t,[-1,0])},s=function(t){var e=t.length;return function n(){var r=Array.prototype.slice.call(arguments);return function(){var a=r.slice();return Array.prototype.push.apply(a,arguments),(a.length>=e?t:n).apply(null,a)}}()};function u(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"snake_game",function(){return p});var l=function(t,e){return[y(t),y(e)]},f=function(t,e){return t[0]==e[0]&&t[1]==e[1]},y=function(t){return Math.floor(Math.random()*t)},d=[a,c,i,o],h=100;function _(t){"37"==t.last_key&&(t.current_move_index=t.current_move_index==d.length-1?0:t.current_move_index+1),"39"==t.last_key&&(t.current_move_index=0==t.current_move_index?d.length-1:t.current_move_index-1),t.last_key=null,t.snake=d[t.current_move_index](t.snake);var e=t.snake[0];return f(e,t.apple)&&(t.snake.push(u(t.snake.slice(-1)[0])),t.apple=l(t.max_x,t.max_y)),e[0]<0||e[0]>=t.max_x||e[1]<0||e[1]>=t.max_y?v(t):t.snake.slice(1).some(s(f)(e))?v(t):(t.display.render(t),void setTimeout(_,h,t))}function v(t){t.display.lost(t),document.onkeydown=function(e){p(t.display)}}function p(t){var e={apple:l(t.max_x(),t.max_y()),current_move_index:0,display:t,max_x:t.max_x(),max_y:t.max_y(),last_key:null,snake:[]};document.onkeydown=function(t){document.onkeydown=function(t){return e.last_key=t.keyCode},_(e)};var n=Math.floor(e.max_y/2),r=Math.floor(e.max_x/2);e.snake=[[r,n],[r,n],[r,n],[r,n]],t.render(e)}},function(t,e,n){"use strict";n.r(e),n.d(e,"FaviconDisplay",function(){return i});var r=n(0);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.favicon=e.getElementById("favicon")||this.create_favicon();var n=e.createElement("canvas");n.width=16,n.height=16,this.canvas_display=new r.CanvasDisplay(n),this.canvas_display.size=1,this.canvas_display.border_size=1}var e,n,i;return e=t,(n=[{key:"render",value:function(t){this.canvas_display.render(t),this.favicon.href=this.canvas_display.ctx.canvas.toDataURL("image/png")}},{key:"lost",value:function(t){this.canvas_display.ctx.font="11px 'Arial Unicode MS'",this.canvas_display.ctx.fillText("💀",0,11),this.favicon.href=this.canvas_display.ctx.canvas.toDataURL("image/png")}},{key:"max_x",value:function(){return this.canvas_display.max_x()}},{key:"max_y",value:function(){return this.canvas_display.max_y()}},{key:"create_favicon",value:function(){var t=document.createElement("canvas");t.width=16,t.height=16;var e=t.getContext("2d");e.fillStyle="black",e.fillRect(0,0,16,16);var n=document.createElement("link");return n.type="image/x-icon",n.rel="shortcut icon",n.href=t.toDataURL("image/x-icon"),document.getElementsByTagName("head")[0].appendChild(n),n}}])&&a(e.prototype,n),i&&a(e,i),t}()},,,function(t,e,n){(function(e){var r={SnakeGame:n(1),CanvasDisplay:n(0),FaviconDisplay:n(2)};t.exports=r,e.JsSnake=r}).call(this,n(6))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]);