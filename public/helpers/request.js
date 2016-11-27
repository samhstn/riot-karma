(function(exp) {
  function request (method, url, payload, cb) {
    var xhr = new XMLHttpRequest();
    var payloadString = JSON.stringify(payload);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        cb(JSON.parse(xhr.responseText));
      }
    };
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(payloadString);
  };

  var get = function (url, cb) { request('GET', url, null, cb); }
  var post = function (url, payload, cb) { request('POST', url, payload, cb); }
  var put = function (url, payload, cb) { request('PUT', url, payload, cb); }
  var del = function (url, cb) { request('DELETE', url, null, cb); }

  exp.request = {
    get: get,
    post: post,
    put: put,
    del: del
  };

})(window);
