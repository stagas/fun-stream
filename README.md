
# fun-stream

functional streams decorator

## Example

```js
var fun = require('fun-stream');
var Stream = require('stream');

function createStream(){
  var s = new Stream;
  s.readable = true;

  var times = 0;
  var iv = setInterval(function(){
    s.emit('data', times + '\n');
    if (5 == ++times) {
      s.emit('end');
      clearInterval(iv);
    }
  }, 1000);

  return s;
}

var stdout = fun(process.stdout);
var stream = fun(createStream());

stdout(stream);
```

## License

MIT
