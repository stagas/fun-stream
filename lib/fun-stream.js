
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
  fn.pipe = src.pipe.bind(src);
  return fn;
};
