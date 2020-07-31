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

function setSelectedOptCountry() {
  setTimeout(
    function() {
      var optCountryVal = document.getElementById("input_COUNTRY_CODE").value;
      document.getElementById("select_COUNTRY_CODE").value = optCountryVal;
    }, 500);
}

function setSelectedOptUTC() {
  setTimeout(
    function() {
      var optUTCVal = document.getElementById("input_UTC_CODE").value;
      document.getElementById("select_UTC_CODE").value = optUTCVal;
    }, 500);
}

function setSelectedOptStartupMode() {
  setTimeout(
    function() {
      var optModeVal = document.getElementById("input_STARTUP_MODE").value;
      document.getElementById("select_STARTUP_MODE").value = optModeVal;
    }, 500);
}


window.onload = function() {
  loadCountryCodes();
  loadUTCCodes();
  setSelectedOptCountry();
  setSelectedOptUTC();
  setSelectedOptStartupMode();
};

function setImageAsync(addr){
  var address="http://matrixled.lan/"+addr;
  var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
  httpRequest.open('GET', address); // service call
  httpRequest.send();
}


(function () {
    document.getElementById("btnImageMenu").addEventListener('click', getListFiles);//attaching click event for button

    function getListFiles() {
      var arrayFiles;
      var strHTML="";

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //document.getElementById("select_COUNTRY_CODE").innerHTML = this.responseText;
          var strFiles = this.responseText;
          arrayFiles = strFiles.split(",");


          for (var i = 0; i < arrayFiles.length; i++) {
            if(arrayFiles[i].includes(".jpg")==true){
              tempArrayFile=arrayFiles[i];
              tempArrayFile=tempArrayFile.replace("[", "");
              tempArrayFile=tempArrayFile.replace("]", "");
              //alert(tempArrayFile);

              strHTML=strHTML+"<tr><td>"+tempArrayFile+"</td><td><button onclick='setImageAsync('"+tempArrayFile+"')' class='btn btn-primary btnSetImage' >Set Image</button></td></tr>";
            }
          }
          document.getElementById("tableImages").innerHTML = strHTML;
        }
      };
      xhttp.open("GET", "http://matrixled.lan/list", true);
      xhttp.send();



    }
})();
