export const curry = fn => {
  let arity = fn.length;

  return (function resolver(...args) {
    return function(...more_args) {
      const new_args = args.concat(more_args);
      return ( new_args.length >= arity ? fn : resolver ).apply( null, new_args );
    };
  }());
};
