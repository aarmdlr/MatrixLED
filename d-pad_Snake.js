(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnUP").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/snakeup'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnDOWN").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/snakedown'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnLEFT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/snakeleft'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnRIGHT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/snakeright'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnA").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/snakebtna'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnB").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/snakebtnb'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnX").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/snakebtnx'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnY").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/snakebtny'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnSTART").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/snakestart'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnSELECT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
        navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/snakeselect'); // service call
        httpRequest.send();
    }
})();

(function () {
    var hostNameSTR=document.getElementById("input_deviceNameSTR_H").value;
    document.getElementById("btnToHome").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
        navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostNameSTR+'.lan/snakestop'); // service call
        httpRequest.send();

        window.setTimeout(function(){
        // Move to a new location or you can do something else
          window.location.href = "http://"+hostNameSTR+".lan/";
        }, 500);
    }
})();
