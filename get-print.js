var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var str = '';

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      str += data;
    });

    response.on('end', function() {
      console.log(str);
    });
  });

}

getAndPrintHTML();