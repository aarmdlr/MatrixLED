(function () {
    document.getElementById("btnWeather").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://matrixled.lan/weather'); // service call
        httpRequest.send();
    }
})();

function makeRequestWeather() {
    var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
    httpRequest.open('GET', 'http://matrixled.lan/weather'); // service call
    httpRequest.send();
}

(function () {
    document.getElementById("btnTime").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://matrixled.lan/time'); // service call
        httpRequest.send();
    }
})();

function makeRequestTime() {
    var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
    httpRequest.open('GET', 'http://matrixled.lan/time'); // service call
    httpRequest.send();
}



function loadCountryCodes() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("select_COUNTRY_CODE").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://aarmdlr.github.io/MatrixLED/country_codes.html", true);
  xhttp.send();
}

function loadUTCCodes() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("select_UTC_CODE").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://aarmdlr.github.io/MatrixLED/utc_codes.html", true);
  xhttp.send();
}

window.onload = function() {
  loadCountryCodes();
  loadUTCCodes();
};
