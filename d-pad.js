document.onkeydown = function(e) {
  var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    switch (e.keyCode) {
        case 37:
              var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
              httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/left'); // service call
              httpRequest.send();
            break;
        case 38:
              var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
              httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/btna'); // service call
              httpRequest.send();
            break;
        case 39:
              var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
              httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/right'); // service call
              httpRequest.send();
            break;
        case 40:
              var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
              httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/down'); // service call
              httpRequest.send();
            break;
    }
};

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnUP").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/up'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnDOWN").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/down'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnLEFT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/left'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnRIGHT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/right'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnA").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/btna'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnB").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/btnb'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnX").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/btnx'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnY").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/btny'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnSTART").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/start'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnSELECT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
        navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/select'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnToHome").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
        navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/tetrisstop'); // service call
        httpRequest.send();

        window.setTimeout(function(){
        // Move to a new location or you can do something else
          window.location.href = "http://"+hostNameSTR+".lan/";
        }, 500);
    }
})();
