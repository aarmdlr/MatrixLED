(function () {
    document.getElementById("btnUP").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(200);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/up'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnDOWN").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(200);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/down'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnLEFT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(200);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/left'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnRIGHT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(200);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/right'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnA").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(200);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/btna'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnB").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(200);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/btnb'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnX").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(200);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/btnx'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnY").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(200);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/btny'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnSTART").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(200);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/start'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnSELECT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
        navigator.vibrate(200);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/select'); // service call
        httpRequest.send();
    }
})();
