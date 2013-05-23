
/**
 * Decorate Stream `src` and return a functional Stream.
 *
 * @param {Stream} src
 * @return {Function}
 * @api public
 */

module.exports = function(src){
  var fn = function(target){
    return target.pipe(src);
  };
  fn.pipe = src.pipe.bind(src);
  return fn;
};
