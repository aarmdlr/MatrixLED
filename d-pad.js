document.onkeydown = function(e) {
  var hostIP_STR=document.getElementById("input_deviceIP_STR_H").value;
    switch (e.keyCode) {
        case 37:
              var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
              httpRequest.open('GET', 'http://'+hostIP_STR+'/left'); // service call
              httpRequest.send();
            break;
        case 38:
              var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
              httpRequest.open('GET', 'http://'+hostIP_STR+'/btna'); // service call
              httpRequest.send();
            break;
        case 39:
              var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
              httpRequest.open('GET', 'http://'+hostIP_STR+'/right'); // service call
              httpRequest.send();
            break;
        case 40:
              var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
              httpRequest.open('GET', 'http://'+hostIP_STR+'/down'); // service call
              httpRequest.send();
            break;
    }
};

(function () {
    var hostIP_STR=document.getElementById("input_deviceIP_STR_H").value;
    document.getElementById("btnUP").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostIP_STR+'/up'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostIP_STR=document.getElementById("input_deviceIP_STR_H").value;
    document.getElementById("btnDOWN").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostIP_STR+'/down'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostIP_STR=document.getElementById("input_deviceIP_STR_H").value;
    document.getElementById("btnLEFT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostIP_STR+'/left'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostIP_STR=document.getElementById("input_deviceIP_STR_H").value;
    document.getElementById("btnRIGHT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostIP_STR+'/right'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostIP_STR=document.getElementById("input_deviceIP_STR_H").value;
    document.getElementById("btnA").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostIP_STR+'/btna'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostIP_STR=document.getElementById("input_deviceIP_STR_H").value;
    document.getElementById("btnB").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostIP_STR+'/btnb'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostIP_STR=document.getElementById("input_deviceIP_STR_H").value;
    document.getElementById("btnX").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostIP_STR+'/btnx'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostIP_STR=document.getElementById("input_deviceIP_STR_H").value;
    document.getElementById("btnY").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostIP_STR+'/btny'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostIP_STR=document.getElementById("input_deviceIP_STR_H").value;
    document.getElementById("btnSTART").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostIP_STR+'/start'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostIP_STR=document.getElementById("input_deviceIP_STR_H").value;
    document.getElementById("btnSELECT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
        navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostIP_STR+'/select'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostIP_STR=document.getElementById("input_deviceIP_STR_H").value;
    document.getElementById("btnToHome").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
        navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostIP_STR+'/tetrisstop'); // service call
        httpRequest.send();

        window.setTimeout(function(){
        // Move to a new location or you can do something else
          window.location.href = "http://"+hostIP_STR+"/";
        }, 500);
    }
})();
