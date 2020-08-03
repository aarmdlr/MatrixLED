
function getPageSettingsHTML(){

var ZIPCodeSTR=document.getElementById("input_ZIPCodeSTR_H").value
var countryCodeSTR=document.getElementById("input_countryCodeSTR_H").value
var deviceNameSTR=document.getElementById("input_deviceNameSTR_H").value




    var webpage="";
      webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
        webpage += "<h1 class='h3 mb-0 text-gray-800'>Settings</h1>";
      webpage += "</div>";

      webpage += "<div class='row'>";

        webpage += "<div class='col-xl-12 col-sm-12 col-xl-12 col-md-12 mb-4'>";
          webpage += "<div class='card shadow h-100 py-2'>";
            webpage += "<div class='card-body'>";
              webpage += "<div class='row no-gutters align-items-center'>";
                webpage += "<div class='col '>";
                  webpage += "<div class='col-12' style='padding: 0px;'>";
                    webpage += "<form action='/' method='POST'>";

                      webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4' id='containerStartupMode'>";
                        webpage += "<h1 class='h5 mb-0 text-gray-800'>Startup Mode</h1>";
                      webpage += "</div>";

                    webpage += "<table class='table'>";

                      webpage += "<tr><td>Startup mode<div class='form-text text-muted small'>Modo por defecto al iniciar";
                      webpage += "la matriz LED. Selecciona uno de la lista desplegable.</div></td><td>";
                      //webpage += "<input id='input_STARTUP_MODE' type='hidden' value='"+((String)STARTUP_MODE)+"'>";
                      webpage += "<select class='form-control' name='STARTUP_MODE' id='select_STARTUP_MODE'>";
                        webpage += "<option value='0'>Weather</option>";
                        webpage += "<option value='1'>Time</option>";
                      webpage += "</select>";
                      webpage += "</td></tr>";
                    webpage += "</table>";

                    webpage += "<br><br><div class='d-sm-flex align-items-center justify-content-between mb-4' id='containerWeatherLoacation'>";
                      webpage += "<h1 class='h5 mb-0 text-gray-800'>Weather location</h1>";
                    webpage += "</div>";

                    webpage += "<table class='table'>";

                      webpage += "<tr><td>ZIP Code<div class='form-text text-muted small'>Introduce el codigo postal (ZIP / CP)";
                      webpage += " de la localidad que desea mostrar el tiempo climatologico.</div></td><td>";
                        webpage += "<input class='form-control' type='number' min='0' placeholder='ZIP / CP' name='ZIP_CODE' value='"+ZIPCodeSTR+"'>";
                      webpage += "</td></tr>";


                      webpage += "<tr><td>Country Code<div class='form-text text-muted small'>Selecciona el código del pais de la";
                      webpage += "localidad que desea mostrar el tiempo climatologico.</div></td><td>";
                      webpage += "<input id='input_COUNTRY_CODE' type='hidden' value='"+countryCodeSTR+"'>";
                        webpage += "<select class='form-control' name='COUNTRY_CODE' id='select_COUNTRY_CODE' >";

                        webpage += "</select>";
                      webpage += "</td></tr>";
                    webpage += "</table>";


                    webpage += "<br><br><div class='d-sm-flex align-items-center justify-content-between mb-4' id='containerTimeLoacation'>";
                      webpage += "<h1 class='h5 mb-0 text-gray-800'>Time location</h1>";
                    webpage += "</div>";

                    webpage += "<table class='table'>";

                      webpage += "<tr><td>UTC Code<div class='form-text text-muted small'>Selecciona el código de la franja horaria UTC ";
                      webpage += "del pais que desea mostrar la hora.</div></td><td>";
                      //webpage += "<input id='input_UTC_CODE' type='hidden' value='"+((String)UTC_CODE)+"'>";
                        webpage += "<select class='form-control' name='UTC_CODE' id='select_UTC_CODE' >";

                        webpage += "</select>";
                      webpage += "</td></tr>";
                    webpage += "</table>";

                    webpage += "<br><br><div class='d-sm-flex align-items-center justify-content-between mb-4' id='containerDeviceName'>";
                      webpage += "<h1 class='h5 mb-0 text-gray-800'>Device name</h1>";
                    webpage += "</div>";

                    webpage += "<table class='table'>";

                      webpage += "<tr><td>Device name<div class='form-text text-muted small'>Intriduce el nombre del dispositivo con el que desea ";
                      webpage += "acceder a el panel de control del dispositivo desde su navegador/explorador de internet (Hostname). ";
                      webpage += " <b>Para acceder al panel de control debe poner en su navegador 'http://hostname.lan'<b/>.</div></td><td>";
                      webpage += "<input class='form-control' type='text' name='DEVICE_NAME' value='"+deviceNameSTR+"'>";
                      webpage += "</td></tr>";

                    webpage += "</table>";

                    webpage += "<div class='form-group'>";
                      webpage += "<button type='submit' class='btn btn-primary'>Guardar</button>";
                    webpage += "</div>";
                  webpage += "</form>";
                  webpage += "</div>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";
          webpage += "</div>";
        webpage += "</div>";
      webpage += "</div>";

  document.getElementById("settingsContentDiv").innerHTML = webpage;

  loadCountryCodes();
  loadUTCCodes();
  setSelectedOptCountry();
  setSelectedOptUTC();
  setSelectedOptStartupMode();
}








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
  getPageSettingsHTML();

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


        var webpage="";
              webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
          webpage += "<h1 class='h3 mb-0 text-gray-800'>Image</h1>";
        webpage += "</div>";

        webpage += "<div class='row'>";

          webpage += "<div class='col-xl-12 col-sm-12 col-xl-12 col-md-12 mb-4'>";
            webpage += "<div class='card shadow h-100 py-2'>";
              webpage += "<div class='card-body'>";
                webpage += "<div class='row no-gutters align-items-center'>";
                  webpage += "<div class='col '>";
                    webpage += "<div class='col-12' style='padding: 0px;'>";


                        webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
                          webpage += "<h1 class='h5 mb-0 text-gray-800'>Images Files</h1>";
                        webpage += "</div>";

                      webpage += "<table class='table' id='tableImages'>";


                      webpage += "</table>";





                      webpage += "<br><br><div class='d-sm-flex align-items-center justify-content-between mb-4' id='containerDeviceName'>";
                        webpage += "<h1 class='h5 mb-0 text-gray-800'>Upload Image</h1>";
                      webpage += "</div>";

                      //webpage += "<form method='post' action='/upload' enctype='multipart/form-data' class='box has-advanced-upload' > ";
                      webpage += "<table class='table'>";

                        webpage += "<tr><td><input type='file' name='fileToUpload' id='fileToUpload' accept='image/jpeg'></td><td>";
                        webpage += "<button class='btn btn-primary' style='float: right;'  id='upload-button' >Upload</button>";
                        webpage += "</td></tr>";

                      webpage += "</table>";
                        //webpage += "</form>";



                    webpage += "</div>";
                  webpage += "</div>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";
          webpage += "</div>";
        webpage += "</div>";

document.getElementById("imageContentDiv").innerHTML = webpage;



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

              strHTML=strHTML+"<tr><td>"+tempArrayFile+"</td><td><button onclick='setImageAsync("+'"'+tempArrayFile+'"'+")' class='btn btn-primary btnSetImage' >Set Image</button><button onclick='eliminarFichero("+'"'+tempArrayFile+'"'+")' class='btn btn-danger btnSetImage btnDeleteImage' >Delete Image</button></td></tr>";
            }
          }
          document.getElementById("tableImages").innerHTML = strHTML;
        }
      };
      xhttp.open("GET", "http://matrixled.lan/list", true);
      xhttp.send();

      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "none";
      imageCD.style.display = "block";
      animationCD.style.display = "none";


          document.getElementById('upload-button').addEventListener('click', function() {
          	// user has not chosen any file
          	if(document.getElementById('fileToUpload').files.length == 0) {
          		//alert('Error : No file selected');
              Swal.fire({icon: 'error', title: 'Error : No file selected',showConfirmButton: false,timer: 2500})

          		return;
          	}

          	// first file that was chosen
          	var file = document.getElementById('fileToUpload').files[0];

          	// allowed types
          	var mime_types = [ 'image/jpeg' ];

          	// validate MIME type
          	if(mime_types.indexOf(file.type) == -1) {
          		//alert('Error : Incorrect file type');
              Swal.fire({icon: 'error', title: 'Error : Incorrect file type',showConfirmButton: false,timer: 2500})
          		return;
          	}

          	// max 2 MB size allowed
          	if(file.size > 16*1024) {
          		//alert('Error : Exceeded size 2MB');
              Swal.fire({icon: 'error', title: 'Error : Exceeded size 16KB',showConfirmButton: false,timer: 2500})
          		return;
          	}

          	// validation is successful
          	//alert('You have chosen the file ' + file.name);

          	// upload file now


            var data = new FormData();

            // file selected by the user
            // in case of multiple files append each of them
            data.append('file', document.getElementById('fileToUpload').files[0]);

            var request = new XMLHttpRequest();
            request.open('post', 'http://matrixled.lan/upload');

            // upload progress event
            request.upload.addEventListener('progress', function(e) {
            	var percent_complete = (e.loaded / e.total)*100;

            	// Percentage of upload completed
            	console.log(percent_complete);
            });

            // AJAX request finished event
            request.addEventListener('load', function(e) {
            	// HTTP status message
            	console.log(request.status);

              if(request.status == 200){

                Swal.fire({icon: 'success', title: 'Your file has been saved',showConfirmButton: false,timer: 2500})
                getListFiles();
              }

            	// request.response will hold the response from the server
            	console.log(request.response);
            });

            // send POST request to server side script
            request.send(data);

          });


    }
})();









(function () {
    document.getElementById("btnMenuSettings").addEventListener('click', showhideDivs);//attaching click event for button
    function showhideDivs() {
      getPageSettingsHTML();
      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "block";
      imageCD.style.display = "none";
      animationCD.style.display = "none";
    }
})();

(function () {
    document.getElementById("btnMenuSettings2").addEventListener('click', showhideDivs);//attaching click event for button
    function showhideDivs() {
      getPageSettingsHTML();
      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "block";
      imageCD.style.display = "none";
      animationCD.style.display = "none";
    }
})();

(function () {
    document.getElementById("btnMenuSettings3").addEventListener('click', showhideDivs);//attaching click event for button
    function showhideDivs() {
      getPageSettingsHTML();
      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "block";
      imageCD.style.display = "none";
      animationCD.style.display = "none";
    }
})();


(function () {
    document.getElementById("btnMenuSettings4").addEventListener('click', showhideDivs);//attaching click event for button
    function showhideDivs() {
      getPageSettingsHTML();
      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "block";
      imageCD.style.display = "none";
      animationCD.style.display = "none";
    }
})();



(function () {
    document.getElementById("btnHomeControl").addEventListener('click', showhideDivs);//attaching click event for button
    function showhideDivs() {
      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");

      deviceCD.style.display = "block";
      settingsCD.style.display = "none";
      imageCD.style.display = "none";
      animationCD.style.display = "none";
    }
})();

function getListFiles() {


  var webpage="";
        webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
    webpage += "<h1 class='h3 mb-0 text-gray-800'>Image</h1>";
  webpage += "</div>";

  webpage += "<div class='row'>";

    webpage += "<div class='col-xl-12 col-sm-12 col-xl-12 col-md-12 mb-4'>";
      webpage += "<div class='card shadow h-100 py-2'>";
        webpage += "<div class='card-body'>";
          webpage += "<div class='row no-gutters align-items-center'>";
            webpage += "<div class='col '>";
              webpage += "<div class='col-12' style='padding: 0px;'>";


                  webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
                    webpage += "<h1 class='h5 mb-0 text-gray-800'>Images Files</h1>";
                  webpage += "</div>";

                webpage += "<table class='table' id='tableImages'>";


                webpage += "</table>";





                webpage += "<br><br><div class='d-sm-flex align-items-center justify-content-between mb-4' id='containerDeviceName'>";
                  webpage += "<h1 class='h5 mb-0 text-gray-800'>Upload Image</h1>";
                webpage += "</div>";

                //webpage += "<form method='post' action='/upload' enctype='multipart/form-data' class='box has-advanced-upload' > ";
                webpage += "<table class='table'>";

                  webpage += "<tr><td><input type='file' name='fileToUpload' id='fileToUpload' accept='image/jpeg'></td><td>";
                  webpage += "<button class='btn btn-primary' style='float: right;'  id='upload-button' >Upload</button>";
                  webpage += "</td></tr>";

                webpage += "</table>";
                  //webpage += "</form>";



              webpage += "</div>";
            webpage += "</div>";
          webpage += "</div>";
        webpage += "</div>";
      webpage += "</div>";
    webpage += "</div>";
  webpage += "</div>";


  document.getElementById("imageContentDiv").innerHTML = webpage;


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

          strHTML=strHTML+"<tr><td>"+tempArrayFile+"</td><td><button onclick='setImageAsync("+'"'+tempArrayFile+'"'+")' class='btn btn-primary btnSetImage' >Set Image</button><button onclick='eliminarFichero("+'"'+tempArrayFile+'"'+")' class='btn btn-danger btnSetImage btnDeleteImage' >Delete Image</button></td></tr>";
        }
      }
      document.getElementById("tableImages").innerHTML = strHTML;
    }
  };
  xhttp.open("GET", "http://matrixled.lan/list", true);
  xhttp.send();

  var deviceCD = document.getElementById("deviceContentDiv");
  var settingsCD = document.getElementById("settingsContentDiv");
  var imageCD = document.getElementById("imageContentDiv");
  var animationCD = document.getElementById("animationContentDiv");

  deviceCD.style.display = "none";
  settingsCD.style.display = "none";
  imageCD.style.display = "block";
  animationCD.style.display = "none";


    document.getElementById('upload-button').addEventListener('click', function() {
    	// user has not chosen any file
    	if(document.getElementById('fileToUpload').files.length == 0) {
    		//alert('Error : No file selected');
        Swal.fire({icon: 'error', title: 'Error : No file selected',showConfirmButton: false,timer: 2500})

    		return;
    	}

    	// first file that was chosen
    	var file = document.getElementById('fileToUpload').files[0];

    	// allowed types
    	var mime_types = [ 'image/jpeg' ];

    	// validate MIME type
    	if(mime_types.indexOf(file.type) == -1) {
    		//alert('Error : Incorrect file type');
        Swal.fire({icon: 'error', title: 'Error : Incorrect file type',showConfirmButton: false,timer: 2500})
    		return;
    	}

    	// max 2 MB size allowed
    	if(file.size > 16*1024) {
    		//alert('Error : Exceeded size 2MB');
        Swal.fire({icon: 'error', title: 'Error : Exceeded size 16KB',showConfirmButton: false,timer: 2500})
    		return;
    	}

    	// validation is successful
    	//alert('You have chosen the file ' + file.name);

    	// upload file now


      var data = new FormData();

      // file selected by the user
      // in case of multiple files append each of them
      data.append('file', document.getElementById('fileToUpload').files[0]);

      var request = new XMLHttpRequest();
      request.open('post', 'http://matrixled.lan/upload');

      // upload progress event
      request.upload.addEventListener('progress', function(e) {
      	var percent_complete = (e.loaded / e.total)*100;

      	// Percentage of upload completed
      	console.log(percent_complete);
      });

      // AJAX request finished event
      request.addEventListener('load', function(e) {
      	// HTTP status message
      	console.log(request.status);

        if(request.status == 200){

          Swal.fire({icon: 'success', title: 'Your file has been saved',showConfirmButton: false,timer: 2500})
          getListFiles();
        }

      	// request.response will hold the response from the server
      	console.log(request.response);
      });

      // send POST request to server side script
      request.send(data);

    });

}

function easyHTTP() {
// Initialising new XMLHttpRequest method.
this.http = new XMLHttpRequest();
}

// Make an HTTP Delete Request
easyHTTP.prototype.delete
= function (url, callback) {

// Open an request (GET/POST/PUT/DELETE,
// PATH, ASYNC - TRUE/FALSE)
this.http.open("DELETE", url, true);

// Assigning this to self to have
// scope of this into the function
let self = this;

// When the response is ready
this.http.onload = function () {

	// Checking status
	if (self.http.status === 200) {

	// Callback function (Error, response text)
	callback(null, "Post Deleted");
	} else {

	// Callback function (Error message)
	callback("Error: " + self.http.status);
	}
};

// Send the request
this.http.send();
};

// Instantiate easyHTTP
const http = new easyHTTP();

// Use the delete prototype
// method with (URL, callback(error, response text))

function eliminarFichero(file) {
//alert(file);

http.delete("http://matrixled.lan/delete?file=/"+file, function ( err, response ) {
if (err) {
	console.log(err);
  Swal.fire({icon: 'error', title: 'Your file could not be deleted',showConfirmButton: false,timer: 2500});
} else {
	console.log(response);
  Swal.fire({icon: 'success', title: 'Your file has been deleted',showConfirmButton: false,timer: 2500});
}
getListFiles();
});

}

function sendPostSetAnimation(nameFileAnimation) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "http://matrixled.lan/animation", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("name="+nameFileAnimation+"&delay="+500);
}

function getListFilesAnimation() {
  var webpage="";

  webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
      webpage += "<h1 class='h3 mb-0 text-gray-800'>Animation</h1>";
    webpage += "</div>";

    webpage += "<div class='row'>";

      webpage += "<div class='col-xl-12 col-sm-12 col-xl-12 col-md-12 mb-4'>";
        webpage += "<div class='card shadow h-100 py-2'>";
          webpage += "<div class='card-body'>";
            webpage += "<div class='row no-gutters align-items-center'>";
              webpage += "<div class='col '>";
                webpage += "<div class='col-12' style='padding: 0px;'>";


                    webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
                      webpage += "<h1 class='h5 mb-0 text-gray-800'>Animations</h1>";
                    webpage += "</div>";

                  webpage += "<table class='table' id='tableAnimations'>";


                  webpage += "</table>";





                  webpage += "<br><br><div class='d-sm-flex align-items-center justify-content-between mb-4' id='containerDeviceName'>";
                    webpage += "<h1 class='h5 mb-0 text-gray-800'>Upload Animation</h1>";
                  webpage += "</div>";

                  //webpage += "<form method='post' action='/upload' enctype='multipart/form-data' class='box has-advanced-upload' > ";
                  webpage += "<table class='table'>";

                    webpage += "<tr><td><input type='file' name='fileToUpload' id='fileToUpload' accept='.txt'></td><td>";
                    webpage += "<button class='btn btn-primary' style='float: right;' id='upload-button' >Upload</button>";
                    webpage += "</td></tr>";

                  webpage += "</table>";
                    //webpage += "</form>";



                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";
          webpage += "</div>";
        webpage += "</div>";
      webpage += "</div>";
    webpage += "</div>";

document.getElementById("animationContentDiv").innerHTML = webpage;


  var arrayFiles;
  var strHTML="";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("select_COUNTRY_CODE").innerHTML = this.responseText;
      var strFiles = this.responseText;
      arrayFiles = strFiles.split(",");


      for (var i = 0; i < arrayFiles.length; i++) {
        if(arrayFiles[i].includes(".txt")==true){
          tempArrayFile=arrayFiles[i];
          tempArrayFile=tempArrayFile.replace("[", "");
          tempArrayFile=tempArrayFile.replace("]", "");
          //alert(tempArrayFile);

          strHTML=strHTML+"<tr><td>"+tempArrayFile+"</td><td><button onclick='sendPostSetAnimation("+'"'+tempArrayFile+'"'+")' class='btn btn-primary btnSetImage'>Set Animation</button><button onclick='eliminarFicheroAnimation("+'"'+tempArrayFile+'"'+")' class='btn btn-danger btnSetImage btnDeleteImage' >Delete Animation</button></td></tr>";
        }
      }
      document.getElementById("tableAnimations").innerHTML = strHTML;
    }
  };
  xhttp.open("GET", "http://matrixled.lan/list", true);
  xhttp.send();

  var deviceCD = document.getElementById("deviceContentDiv");
  var settingsCD = document.getElementById("settingsContentDiv");
  var imageCD = document.getElementById("imageContentDiv");
  var animationCD = document.getElementById("animationContentDiv");

  deviceCD.style.display = "none";
  settingsCD.style.display = "none";
  imageCD.style.display = "none";
  animationCD.style.display = "block";


  document.getElementById('upload-button').addEventListener('click', function() {
  	// user has not chosen any file
  	if(document.getElementById('fileToUpload').files.length == 0) {
  		//alert('Error : No file selected');
      Swal.fire({icon: 'error', title: 'Error : No file selected',showConfirmButton: false,timer: 2500})

  		return;
  	}

  	// first file that was chosen
  	var file = document.getElementById('fileToUpload').files[0];

  	// allowed types
  	var mime_types = [ 'text/plain' ];

  	// validate MIME type
  	if(mime_types.indexOf(file.type) == -1) {
  		//alert('Error : Incorrect file type');
      Swal.fire({icon: 'error', title: 'Error : Incorrect file type',showConfirmButton: false,timer: 2500})
  		return;
  	}

  	// max 2 MB size allowed
  	if(file.size > 16*1024) {
  		//alert('Error : Exceeded size 2MB');
      Swal.fire({icon: 'error', title: 'Error : Exceeded size 16KB',showConfirmButton: false,timer: 2500})
  		return;
  	}

  	// validation is successful
  	//alert('You have chosen the file ' + file.name);

  	// upload file now


    var data = new FormData();

    // file selected by the user
    // in case of multiple files append each of them
    data.append('file', document.getElementById('fileToUpload').files[0]);

    var request = new XMLHttpRequest();
    request.open('post', 'http://matrixled.lan/upload');

    // upload progress event
    request.upload.addEventListener('progress', function(e) {
    	var percent_complete = (e.loaded / e.total)*100;

    	// Percentage of upload completed
    	console.log(percent_complete);
    });

    // AJAX request finished event
    request.addEventListener('load', function(e) {
    	// HTTP status message
    	console.log(request.status);

      if(request.status == 200){

        Swal.fire({icon: 'success', title: 'Your file has been saved',showConfirmButton: false,timer: 2500})
        getListFilesAnimation();
      }

    	// request.response will hold the response from the server
    	console.log(request.response);
    });

    // send POST request to server side script
    request.send(data);

  });


}

function eliminarFicheroAnimation(file) {
//alert(file);

http.delete("http://matrixled.lan/delete?file=/"+file, function ( err, response ) {
if (err) {
	console.log(err);
  Swal.fire({icon: 'error', title: 'Your file could not be deleted',showConfirmButton: false,timer: 2500});
} else {
	console.log(response);
  Swal.fire({icon: 'success', title: 'Your file has been deleted',showConfirmButton: false,timer: 2500});
}
getListFilesAnimation();
});

}

(function () {
    document.getElementById("btnAnimationMenu").addEventListener('click', getListFilesAnimation);//attaching click event for button
})();








/*

document.getElementById('upload-button').addEventListener('click', function() {
	// user has not chosen any file
	if(document.getElementById('fileToUpload').files.length == 0) {
		alert('Error : No file selected');
		return;
	}

	// first file that was chosen
	var file = document.getElementById('fileToUpload').files[0];

	// allowed types
	var mime_types = [ '.txt' ];

	// validate MIME type
	if(mime_types.indexOf(file.type) == -1) {
		alert('Error : Incorrect file type');
		return;
	}

	// max 2 MB size allowed
	if(file.size > 2*1024*1024) {
		alert('Error : Exceeded size 2MB');
		return;
	}

	// validation is successful
	alert('You have chosen the file ' + file.name);

	// upload file now


  var data = new FormData();

  // file selected by the user
  // in case of multiple files append each of them
  data.append('file', documentgetElementById('fileToUpload').files[0]);

  var request = new XMLHttpRequest();
  request.open('post', 'http://matrixled.lan/upload');

  // upload progress event
  request.upload.addEventListener('progress', function(e) {
  	var percent_complete = (e.loaded / e.total)*100;

  	// Percentage of upload completed
  	console.log(percent_complete);
  });

  // AJAX request finished event
  request.addEventListener('load', function(e) {
  	// HTTP status message
  	console.log(request.status);

  	// request.response will hold the response from the server
  	console.log(request.response);
  });

  // send POST request to server side script
  request.send(data);

});


*/





/*function loadAnimations() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  };
  xhttp.open("GET", "https://aarmdlr.github.io/MatrixLED/animations.html", true);
  xhttp.send();
}*/

/*function setAnimationAsync(id){
  var htmlInputsFormAnimation="";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

            var myArr = JSON.parse(this.responseText);
            console.log(myArr);
            //console.log(myArr.Animations[1].frames[0][0][0]);
            var strDelay=myArr.Animations[id].delay;
            htmlInputsFormAnimation=htmlInputsFormAnimation+"<input name='delay' type='hidden' value='"+strDelay+"'>";

            //var strNumFrames=myArr.Animations[id].numFrames;
            //htmlInputsFormAnimation=htmlInputsFormAnimation+"<input name='numFrames' type='hidden' value='"+strNumFrames+"'>";

            for (i in myArr.Animations[id].frames){
              for (var j = 0; j < 8; j++) {
                var strFrameLine=myArr.Animations[id].frames[i][j].toString();
                strFrameLine=strFrameLine+myArr.Animations[id].frames[i][j+1].toString();
                console.log(strFrameLine);
                htmlInputsFormAnimation=htmlInputsFormAnimation+"<input name='"+i+j+"' type='hidden' value='"+strFrameLine+"'>";
              }
            }

            htmlInputsFormAnimation=htmlInputsFormAnimation+"<button type='submit' id='btnSubmmitSetAnimation' style='display:none'>Enviar</button>";
            document.getElementById("formAnimations").innerHTML=htmlInputsFormAnimation;



    }
  };
  xhttp.open("GET", "https://aarmdlr.github.io/MatrixLED/animations.html", true);
  xhttp.send();


}




(function () {
    document.getElementById("btnAnimationMenu").addEventListener('click', getListFilesAnimation);//attaching click event for button

    function getListFilesAnimation() {
      var arrayFilesAnimations;
      var arrayFilesFrame;
      var arrayFilesline;
      var arrayFilesInfo;
      var strHTML="";

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

                var myArr = JSON.parse(this.responseText);
                console.log(myArr);
                console.log(myArr.Animations[1].frames[0][0][0]);



          for (i in myArr.Animations){
            alert(myArr.Animations[i].name);
            strHTML=strHTML+"<tr><td>"+myArr.Animations[i].name+"</td><td><button onclick='setAnimationAsync("+i+")' class='btn btn-primary btnSetImage' >Set Image</button></td></tr>";

          }


          document.getElementById("tableAnimations").innerHTML = strHTML;
        }
      };
      xhttp.open("GET", "https://aarmdlr.github.io/MatrixLED/animations.html", true);
      xhttp.send();

      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "none";
      //imageCD.style.display = "none";
      animationCD.style.display = "block";


    }
})();*/

/*
function myFunctionJSON(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<a href="' + arr[i].url + '">' +
    arr[i].display + '</a><br>';
  }
  document.getElementById("id01").innerHTML = out;
}
*/
