
/**
 * Decorate Stream `src` and return a functional Stream.
 *
 * @param {Stream} src
 * @return {Function}
 * @api public
 */

module.exports = function fun(src){
  // pipe `target` to `src` and re-wrap resulting Stream
  var fn = function(target){
    return fun(target.pipe(src));
  };

  // retain Stream signature for compatibility with regular interfaces
  for(var k in src){
    switch(typeof src[k]){
      case 'function':
        fn[k] = src[k].bind(src);
      break

      default:
        fn[k] = src[k];
    }
  }

  // in case we need the underlying stream itself
  fn.stream = src;

  return fn;
};
