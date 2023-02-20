export const curry = fn => {
  let arity = fn.length;

  return (function resolver(...args) {
    return function(...more_args) {
      Array.prototype.push.apply( args, more_args );
      return ( args.length >= arity ? fn : resolver ).apply( null, args );
    };
  }());
};
