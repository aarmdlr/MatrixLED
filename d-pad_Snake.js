(function () {
    document.getElementById("btnUP").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/snakeup'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnDOWN").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/snakedown'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnLEFT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/snakeleft'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnRIGHT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/snakeright'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnA").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/snakebtna'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnB").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/snakebtnb'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnX").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/snakebtnx'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnY").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/snakebtny'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnSTART").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
      navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/snakestart'); // service call
        httpRequest.send();
    }
})();

(function () {
    document.getElementById("btnSELECT").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
        navigator.vibrate(100);
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://192.168.1.207/snakeselect'); // service call
        httpRequest.send();
    }
})();
