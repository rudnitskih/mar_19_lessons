

for (var i = 0; i < 10; i++) {
  (function(index) {
    setTimeout(() => {
      console.log(index);
    }, 1000 * i);
  })(i)
}

const getJSON = function(url, successHandler, errorHandler) {
  var xhr = typeof XMLHttpRequest != 'undefined'
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('get', url, true);
  xhr.onreadystatechange = function() {
    var status;
    var data;
    // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
    if (xhr.readyState == 4) { // `DONE`
      status = xhr.status;
      if (status == 200) {
        data = JSON.parse(xhr.responseText);
        successHandler && successHandler(data);
      } else {
        errorHandler && errorHandler(status);
      }
    }
  };
  xhr.send();
};





/*


console.log('before');



new Array(10)
  .fill('')
  .forEach(() => {

  })

const callback = () => {
  console.log('run');
}

const timerId = setTimeout(callback, 0);

let i = 0;
while(i < 1000000000) {
  i++
}

clearTimeout(timerId);

console.log('after');

*/
