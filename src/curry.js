export const curry = fn => {
  var arity = fn.length;

  return (function resolver() {
    var mem = Array.prototype.slice.call( arguments );
    return function() {
      var args = mem.slice();
      Array.prototype.push.apply( args, arguments );
      return ( args.length >= arity ? fn : resolver ).apply( null, args );
    };
  }());
}
