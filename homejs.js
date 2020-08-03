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
      //var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "none";
      //imageCD.style.display = "block";
      animationCD.style.display = "none";



    }
})();


(function () {
    document.getElementById("btnMenuSettings").addEventListener('click', showhideDivs);//attaching click event for button
    function showhideDivs() {
      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      //var imageCD = document.getElementById("imageContentDiv");
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
      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      //var imageCD = document.getElementById("imageContentDiv");
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
      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      //var imageCD = document.getElementById("imageContentDiv");
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
      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      //var imageCD = document.getElementById("imageContentDiv");
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
      //var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");

      deviceCD.style.display = "block";
      settingsCD.style.display = "none";
      imageCD.style.display = "none";
      animationCD.style.display = "none";
    }
})();

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
  //var imageCD = document.getElementById("imageContentDiv");
  var animationCD = document.getElementById("animationContentDiv");

  deviceCD.style.display = "none";
  settingsCD.style.display = "none";
  //imageCD.style.display = "block";
  animationCD.style.display = "none";



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

function setAnimationAsync(id){
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
                strFrameLine+strFrameLine=myArr.Animations[id].frames[i][j+1].toString();
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
      //var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "none";
      //imageCD.style.display = "none";
      animationCD.style.display = "block";


    }
})();

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
