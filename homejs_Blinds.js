var hostIP_STR;

var STR_PER_STEPPER_TARGET_L;
var STR_PER_STEPPER_TARGET;
var STR_PER_STEPPER_TARGET_R;

var STR_STEPPER_MAX_STEPS_L;
var STR_MOTOR_RPM_L;
var STR_MOTOR_ACCEL_L;
var STR_MOTOR_DECEL_L;
var STR_STEPPER_REVERSE_L;

var STR_STEPPER_MAX_STEPS;
var STR_MOTOR_RPM;
var STR_MOTOR_ACCEL;
var STR_MOTOR_DECEL;
var STR_STEPPER_REVERSE;

var STR_STEPPER_MAX_STEPS_R;
var STR_MOTOR_RPM_R;
var STR_MOTOR_ACCEL_R;
var STR_MOTOR_DECEL_R;
var STR_STEPPER_REVERSE_R;

function getPageValuesHTML(){
  hostIP_STR = document.getElementById("IPDevice_STR-H").value;

  STR_PER_STEPPER_TARGET_L = document.getElementById("customRange3L-H").value;
  STR_PER_STEPPER_TARGET = document.getElementById("customRange3C-H").value;
  STR_PER_STEPPER_TARGET_R = document.getElementById("customRange3R-H").value;

  STR_STEPPER_MAX_STEPS_L = document.getElementById("CM_STEPPER_MAX_STEPS_L-H").value;
  STR_MOTOR_RPM_L = document.getElementById("MOTOR_RPM_L-H").value;
  STR_MOTOR_ACCEL_L = document.getElementById("MOTOR_ACCEL_L-H").value;
  STR_MOTOR_DECEL_L = document.getElementById("MOTOR_DECEL_L-H").value;
  STR_STEPPER_REVERSE_L = document.getElementById("STEPPER_REVERSE_L-H").value;

  STR_STEPPER_MAX_STEPS = document.getElementById("CM_STEPPER_MAX_STEPS_C-H").value;
  STR_MOTOR_RPM = document.getElementById("MOTOR_RPM-H").value;
  STR_MOTOR_ACCEL = document.getElementById("MOTOR_ACCEL-H").value;
  STR_MOTOR_DECEL = document.getElementById("MOTOR_DECEL-H").value;
  STR_STEPPER_REVERSE = document.getElementById("STEPPER_REVERSE-H").value;

  STR_STEPPER_MAX_STEPS_R = document.getElementById("CM_STEPPER_MAX_STEPS_R-H").value;
  STR_MOTOR_RPM_R = document.getElementById("MOTOR_RPM_R-H").value;
  STR_MOTOR_ACCEL_R = document.getElementById("MOTOR_ACCEL_R-H").value;
  STR_MOTOR_DECEL_R = document.getElementById("MOTOR_DECEL_R-H").value;
  STR_STEPPER_REVERSE_R = document.getElementById("STEPPER_REVERSE_R-H").value;

}

function homeHTML(){

var webpage="";

/*webpage += "<a class='scroll-to-top rounded' href='#page-top' style='display: none; z-index: 1000;'><i class='fas fa-angle-up' style='margin-top: 14px;'></i></a>";
webpage += "<script src='https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.1/vendor/jquery/jquery.min.js'></script>";
webpage += "<script src='https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.1/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>";
webpage += "<script src='https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.1/vendor/jquery-easing/jquery.easing.min.js'></script>";
webpage += "<script src='https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.1/js/sb-admin-2.min.js'></script>";
webpage += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'></script>";
webpage += "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' integrity='sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa' crossorigin='anonymous'></script>";

webpage += "<script>";
webpage += "$(document).ready(function(){$(document).on('input', '#inputDistanceCML', function() {$('#CM_STEPPER_MAX_STEPS_L').val($(this).val()*1427);});";
webpage += "$(document).on('input', '#inputDistanceCMC', function() {$('#CM_STEPPER_MAX_STEPS_C').val($(this).val()*1427);});";
webpage += "$(document).on('input', '#inputDistanceCMR', function() {$('#CM_STEPPER_MAX_STEPS_R').val($(this).val()*1427);});";
webpage += "$(document).on('input', '#customRange3L', function() {var addrTempPos='setL?pos='+$(this).val(); sendBTN_async_update(addrTempPos);});";
webpage += "$(document).on('input', '#customRange3C', function() {var addrTempPos='set?pos='+$(this).val(); sendBTN_async_update(addrTempPos);});";
webpage += "$(document).on('input', '#customRange3R', function() {var addrTempPos='setR?pos='+$(this).val(); sendBTN_async_update(addrTempPos);});";
webpage += "$('#sidebarToggleTop').click(function() {$('#accordionSidebar').toggle();});});";
webpage += "</script>";*/

webpage += "<a class='scroll-to-top rounded' href='#page-top' style='display: none; z-index: 1000;'><i class='fas fa-angle-up' style='margin-top: 14px;'></i></a>";

webpage += "<div id='wrapper'>";

    webpage += "<ul class='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion visible-lg' id='accordionSidebar' style='display: none;'>";
      webpage += "<a class='sidebar-brand d-flex align-items-center justify-content-center' href='#' id='btnHomeControl'>";
        webpage += "<div class='sidebar-brand-icon'><i class='fas fa-home'></i></div>";
        webpage += "<div class='sidebar-brand-text mx-3'>Alex's Home</div>";
      webpage += "</a>";
      webpage += "<hr class='sidebar-divider my-0'>";
      webpage += "<li class='nav-item active'>";
        webpage += "<a class='nav-link' href='#' id='btnHomeControl2'><i class='fas fa-fw fa-tachometer-alt'></i><span>Control</span></a>";
      webpage += "</li>";
      webpage += "<hr class='sidebar-divider'>";
      webpage += "<div class='sidebar-heading'>Settings</div>";
      webpage += "<li class='nav-item'>";
        webpage += "<a class='nav-link collapsed' href='##' data-toggle='collapse' data-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'><i class='fas fa-fw fa-cog'></i><span>Select curtain</span></a>";
          webpage += "<div id='collapseTwo' class='collapse show' aria-labelledby='headingTwo' data-parent='#accordionSidebar' style='' aria-expanded='false'>";
            webpage += "<div class='bg-white py-2 collapse-inner rounded'>";
              webpage += "<a class='collapse-item' href='#containerSettingsLeft'>Left</a>";
              webpage += "<a class='collapse-item' href='#containerSettingsCenter'>Center</a>";
              webpage += "<a class='collapse-item' href='#containerSettingsRight'>Right</a>";
            webpage += "</div>";
          webpage += "</div>";
      webpage += "</li>";
    webpage += "</ul>";

    webpage += "<div id='content-wrapper' class='d-flex flex-column'>";
      webpage += "<div id='content'>";
        webpage += "<nav class='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow' style='height: 45px;'>";
          webpage += "<button id='sidebarToggleTop' class='btn btn-link d-md-none rounded-circle mr-3'><i class='fa fa-bars'></i></button>";
        webpage += "</nav>";
        webpage += "<div class='container-fluid' id='containerHome'>";
          webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
            webpage += "<h1 class='h3 mb-0 text-gray-800'>Control</h1>";
          webpage += "</div>";

          webpage += "<div class='row'>";
            webpage += "<div class='col-xl-4 col-md-6 mb-4'>";
              webpage += "<div class='card shadow h-100 py-2'>";
                webpage += "<div class='card-body'>";
                  webpage += "<div class='row no-gutters align-items-center'>";
                    webpage += "<div class='col '>";
                      webpage += "<div class='text-xs font-weight-bold text-uppercase mb-1 text-center'>Cortina Izquierda</div>";
                      webpage += "<div class='card-body mx-auto col-6'>";
                        webpage += "<a class='btn btn-primary btn-block' href='/upL'><i class='fas fa-chevron-up'></i></a>";
                        webpage += "<a class='btn btn-primary btn-block' href='/stopL'><i class='fas fa-minus'></i></a>";
                        webpage += "<a class='btn btn-primary btn-block' href='/downL'><i class='fas fa-chevron-down'></i></a>";
                      webpage += "</div>";
                      webpage += "<div id='divSliderRange' class='card-body mx-auto'>";
                        webpage += "<p class='text-left col-6 text-xs' style='float: left; padding: 0px;'>Close</p>";
                        webpage += "<p class='text-right col-6 text-xs' style='float: right; padding: 0px;'>Open</p>";
                        webpage += "<input type='range' class='custom-range' min='0' max='100' step='10' id='customRange3L' onchange='"+'sendRANGE_async_update("customRange3L")'+"' style='margin-top: -15px;' value='"+STR_PER_STEPPER_TARGET_L+"'>";
                      webpage += "</div>";
                    webpage += "</div>";
                  webpage += "</div>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";

            webpage += "<div class='col-xl-4 col-md-6 mb-4'>";
              webpage += "<div class='card shadow h-100 py-2'>";
                webpage += "<div class='card-body'>";
                  webpage += "<div class='row no-gutters align-items-center'>";
                    webpage += "<div class='col '>";
                      webpage += "<div class='text-xs font-weight-bold text-uppercase mb-1 text-center'>Cortina Central</div>";
                      webpage += "<div class='card-body mx-auto col-6'>";
                        webpage += "<a class='btn btn-primary btn-block' href='/up'><i class='fas fa-chevron-up'></i></a>";
                        webpage += "<a class='btn btn-primary btn-block' href='/stop'><i class='fas fa-minus'></i></a>";
                        webpage += "<a class='btn btn-primary btn-block' href='/down'><i class='fas fa-chevron-down'></i></a>";
                      webpage += "</div>";
                      webpage += "<div id='divSliderRange' class='card-body mx-auto'>";
                        webpage += "<p class='text-left col-6 text-xs' style='float: left; padding: 0px;'>Close</p>";
                        webpage += "<p class='text-right col-6 text-xs' style='float: right; padding: 0px;'>Open</p>";
                        webpage += "<input type='range' class='custom-range' min='0' max='100' step='10' id='customRange3C' onchange='"+'sendRANGE_async_update("customRange3C")'+"' style='margin-top: -15px;' value='"+STR_PER_STEPPER_TARGET+"'>";
                      webpage += "</div>";
                    webpage += "</div>";
                  webpage += "</div>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";

            webpage += "<div class='col-xl-4 col-md-6 mb-4'>";
              webpage += "<div class='card shadow h-100 py-2'>";
                webpage += "<div class='card-body'>";
                  webpage += "<div class='row no-gutters align-items-center'>";
                    webpage += "<div class='col '>";
                      webpage += "<div class='text-xs font-weight-bold text-uppercase mb-1 text-center'>Cortina Derecha</div>";
                        webpage += "<div class='card-body mx-auto col-6'>";
                          webpage += "<a class='btn btn-primary btn-block' href='/upR'><i class='fas fa-chevron-up'></i></a>";
                          webpage += "<a class='btn btn-primary btn-block' href='/stopR'><i class='fas fa-minus'></i></a>";
                          webpage += "<a class='btn btn-primary btn-block' href='/downR'><i class='fas fa-chevron-down'></i></a>";
                        webpage += "</div>";
                        webpage += "<div id='divSliderRange' class='card-body mx-auto'>";
                          webpage += "<p class='text-left col-6 text-xs' style='float: left; padding: 0px;'>Close</p>";
                          webpage += "<p class='text-right col-6 text-xs' style='float: right; padding: 0px;'>Open</p>";
                          webpage += "<input type='range' class='custom-range' min='0' max='100' step='10' id='customRange3R' onchange='"+'sendRANGE_async_update("customRange3R")'+"' style='margin-top: -15px;' value='"+STR_PER_STEPPER_TARGET_R+"'>";
                        webpage += "</div>";
                      webpage += "</div>";
                    webpage += "</div>";
                  webpage += "</div>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";


            webpage += "</div>";









  webpage += "<div class='container-fluid' id='containerSettingsLeft' style=''>";
    webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
      webpage += "<h1 class='h3 mb-0 text-gray-800'>Settings left curtine</h1>";
    webpage += "</div>";


    webpage += "<div class='row'>";
      webpage += "<div class='col-xs-12 col-sm-12 col-xl-8 col-md-12 mb-4'>";
        webpage += "<div class='card shadow h-100 py-2'>";
          webpage += "<div class='card-body'>";
            webpage += "<div class='row no-gutters align-items-center'>";
              webpage += "<div class='col '>";
                webpage += "<div class='text-xs font-weight-bold text-uppercase mb-1 text-center'>Cortina Izquierda</div>";
                webpage += "<br>";
                webpage += "<div class='card-body mx-auto col-6'>";
                  webpage += "<a class='btn btn-primary btn-block' onclick='"+'sendBTN_async_update("upL")'+"' id='btn_upL-H'><i class='fas fa-chevron-up'></i></a>";
                  webpage += "<a class='btn btn-primary btn-block' onclick='"+'sendBTN_async_update("stopL")'+"' id='btn_stopL-H'><i class='fas fa-minus'></i></a>";
                  webpage += "<a class='btn btn-primary btn-block' onclick='"+'sendBTN_async_update("downL")'+"' id='btn_downL-H'><i class='fas fa-chevron-down'></i></a>";
                webpage += "</div>";
                webpage += "<br>";
                webpage += "<div class='btn-group pb-6 col-12 text-xs' role='group'>";

                  webpage += "<a class='btn btn-primary text-xs' style='line-height: 24px;' id='btn_set_topL-H'>SET TOP</a>";
                  webpage += "<a class='btn btn-primary text-xs' style='line-height: 24px;' id='btn_set_bottomL-H'>SET BOTTOM</a>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";
          webpage += "</div>";
        webpage += "</div>";
      webpage += "</div>";




      webpage += "<div class='col-xs-12 col-sm-12 col-xl-4 col-md-12 mb-4'>";
        webpage += "<div class='card shadow h-100 py-2'>";
          webpage += "<div class='card-body'>";
            webpage += "<div class='row no-gutters align-items-center'>";
              webpage += "<div class='col '>";
                webpage += "<div class='text-xs font-weight-bold text-uppercase text-center mb-1'>Info</div>";
                webpage += "<div class='card-body mx-auto col-12' id='infoMotorBlind'><br>";
                  webpage += "<ol>";
                    webpage += "<li>Establece los parametros de la cortina.</li>";
                    webpage += "<li>Introduce la distancia a recorrer en 'DISTANCE_TO_TRAVEL'.</li>";
                    webpage += "<li>Pulsa el botón guardar.</li>";
                    webpage += "<li>Presione el botón 'SET_TOP' si la cortina esta Subida, o el botón 'SET_BOTTOM' si está Bajada.</li>";
                    webpage += "<li>Listo!</li>";
                  webpage += "</ol>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";
          webpage += "</div>";
        webpage += "</div>";
      webpage += "</div>";

      webpage += "<div class='col-xl-12 col-sm-12 col-xl-12 col-md-12 mb-4'>";
        webpage += "<div class='card shadow h-100 py-2'>";
          webpage += "<div class='card-body'>";
            webpage += "<div class='row no-gutters align-items-center'>";
              webpage += "<div class='col '>";
                webpage += "<div class='col-12' style='padding: 0px;'>";
                  webpage += "<form action='/' method='POST'>";
                  webpage += "<table class='table'>";
                    webpage += "<tr><th>Parámetro</th><th>Valor</th></tr>";


                    webpage += "<tr><td>DISTANCE_TO_TRAVEL<div class='form-text text-muted small'>Intriduce la distacia que ha de recorer la cortina, <b>esto calculara los pasos del motor del campo siguiente automaticamente<b>. (Introduce la distancia en centimetros)</div></td><td>";
                    webpage += "<input class='form-control' type='number' min='0' id='inputDistanceCML' placeholder='CM' >";
                    webpage += "</td></tr>";

                    webpage += "<tr><td>STEPPER_MAX_STEPS<div class='form-text text-muted small'>Selecciona el numero de pasos para desenrollar la cortina.</div></td><td>";

                    webpage += "<input class='form-control' type='number' min='0' id='CM_STEPPER_MAX_STEPS_L' name='STEPPER_MAX_STEPS_L' value='"+STR_STEPPER_MAX_STEPS_L+"'>";
                    webpage += "</td></tr>";

                    webpage += "<tr><td>MOTOR_RPM<div class='form-text text-muted small'>El número de revoluciones por minuto. 28byj-48 no admite más de 12-15 rpm, sin embargo, si pones más, afectará la velocidad debido a la curva de aceleración.</div></td><td>";

                    webpage += "<input class='form-control' type='number' min='1' max='90' name='MOTOR_RPM_L' value='"+STR_MOTOR_RPM_L+"'>";
                    webpage += "</td></tr>";

                    webpage += "<tr><td>MOTOR_ACCEL<div class='form-text text-muted small'>Aumento suave de la velocidad al inicio. Cuanto más suave es la aceleración, mayor es el par.</div></td><td>";

                    webpage += "<input class='form-control' type='number' min='0' name='MOTOR_ACCEL_L' value='"+STR_MOTOR_ACCEL_L+"'>";
                    webpage += "</td></tr>";

                    webpage += "<tr><td>MOTOR_DECEL<div class='form-text text-muted small'>Deceleración para deneter el motor.</div></td><td>";

                    webpage += "<input class='form-control' type='number' min='0' name='MOTOR_DECEL_L' value='"+STR_MOTOR_DECEL_L+"'>";
                    webpage += "</td></tr>";


                    webpage += "<tr><td>STEPPER_REVERSE<div class='form-text text-muted small'>La dirección de rotación del motor. 0 - el motor está instalado a la derecha, 1 - a la izquierda</div></td><td>";

                    webpage += "<input class='form-control' type='number' min='0' max='1' name='STEPPER_REVERSE_L' value='"+STR_STEPPER_REVERSE_L+"'>";
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

  webpage += "</div>";














  webpage += "<div class='container-fluid' id='containerSettingsCenter' style=''>";
    webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
      webpage += "<h1 class='h3 mb-0 text-gray-800'>Settings central curtine</h1>";
    webpage += "</div>";


    webpage += "<div class='row'>";
      webpage += "<div class='col-xs-12 col-sm-12 col-xl-8 col-md-12 mb-4'>";
        webpage += "<div class='card shadow h-100 py-2'>";
          webpage += "<div class='card-body'>";
            webpage += "<div class='row no-gutters align-items-center'>";
              webpage += "<div class='col '>";
                webpage += "<div class='text-xs font-weight-bold text-uppercase mb-1 text-center'>Cortina Central</div>";
                webpage += "<br>";
                webpage += "<div class='card-body mx-auto col-6'>";
                  webpage += "<a class='btn btn-primary btn-block' href='/up'><i class='fas fa-chevron-up'></i></a>";
                  webpage += "<a class='btn btn-primary btn-block' href='/stop'><i class='fas fa-minus'></i></a>";
                  webpage += "<a class='btn btn-primary btn-block' href='/down'><i class='fas fa-chevron-down'></i></a>";
                webpage += "</div>";
                webpage += "<br>";
                webpage += "<div class='btn-group pb-6 col-12 text-xs' role='group'>";

                  webpage += "<a class='btn btn-primary text-xs' style='line-height: 24px;' href='/set_top'>SET TOP</a>";

                  webpage += "<a class='btn btn-primary text-xs' style='line-height: 24px;' href='/set_bottom'>SET BOTTOM</a>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";
          webpage += "</div>";
        webpage += "</div>";
      webpage += "</div>";
      webpage += "<div class='col-xs-12 col-sm-12 col-xl-4 col-md-12 mb-4'>";
        webpage += "<div class='card shadow h-100 py-2'>";
          webpage += "<div class='card-body'>";
            webpage += "<div class='row no-gutters align-items-center'>";
              webpage += "<div class='col '>";
                webpage += "<div class='text-xs font-weight-bold text-uppercase text-center mb-1'>Info</div>";
                webpage += "<div class='card-body mx-auto col-12' id='infoMotorBlind'><br>";
                  webpage += "<ol>";
                    webpage += "<li>Establece los parametros de la cortina.</li>";
                    webpage += "<li>Introduce la distancia a recorrer en 'DISTANCE_TO_TRAVEL'.</li>";
                    webpage += "<li>Pulsa el botón guardar.</li>";
                    webpage += "<li>Presione el botón 'SET_TOP' si la cortina esta Subida, o el botón 'SET_BOTTOM' si está Bajada.</li>";
                    webpage += "<li>Listo!</li>";
                  webpage += "</ol>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";
          webpage += "</div>";
        webpage += "</div>";
      webpage += "</div>";

      webpage += "<div class='col-xl-12 col-sm-12 col-xl-12 col-md-12 mb-4'>";
        webpage += "<div class='card shadow h-100 py-2'>";
          webpage += "<div class='card-body'>";
            webpage += "<div class='row no-gutters align-items-center'>";
              webpage += "<div class='col '>";
                webpage += "<div class='col-12' style='padding: 0px;'>";
                  webpage += "<form action='/' method='POST'>";
                  webpage += "<table class='table'>";
                    webpage += "<tr><th>Parámetro</th><th>Valor</th></tr>";

                    webpage += "<tr><td>DISTANCE_TO_TRAVEL<div class='form-text text-muted small'>Intriduce la distacia que ha de recorer la cortina, <b>esto calculara los pasos del motor del campo siguiente automaticamente<b>. (Introduce la distancia en centimetros)</div></td><td>";
                    webpage += "<input class='form-control' type='number' min='0' id='inputDistanceCMC' placeholder='CM'>";
                    webpage += "</td></tr>";

                    webpage += "<tr><td>STEPPER_MAX_STEPS<div class='form-text text-muted small'>Selecciona el numero de pasos para desenrollar la cortina.</div></td><td>";
                    webpage += "<input class='form-control' type='number' min='0' id='CM_STEPPER_MAX_STEPS_C' name='STEPPER_MAX_STEPS' value='"+STR_STEPPER_MAX_STEPS+"'>";
                    webpage += "</td></tr>";

                    webpage += "<tr><td>MOTOR_RPM<div class='form-text text-muted small'>El número de revoluciones por minuto. 28byj-48 no admite más de 12-15 rpm, sin embargo, si pones más, afectará la velocidad debido a la curva de aceleración.</div></td><td>";
                    webpage += "<input class='form-control' type='number' min='1' max='90' name='MOTOR_RPM' value='"+STR_MOTOR_RPM+"'>";
                    webpage += "</td></tr>";

                    webpage += "<tr><td>MOTOR_ACCEL<div class='form-text text-muted small'>Aumento suave de la velocidad al inicio. Cuanto más suave es la aceleración, mayor es el par.</div></td><td>";
                    webpage += "<input class='form-control' type='number' min='0' name='MOTOR_ACCEL' value='"+STR_MOTOR_ACCEL+"'>";
                    webpage += "</td></tr>";

                    webpage += "<tr><td>MOTOR_DECEL<div class='form-text text-muted small'>Deceleración para deneter el motor.</div></td><td>";
                    webpage += "<input class='form-control' type='number' min='0' name='MOTOR_DECEL' value='"+STR_MOTOR_DECEL+"'>";
                    webpage += "</td></tr>";

                    webpage += "<tr><td>STEPPER_REVERSE<div class='form-text text-muted small'>La dirección de rotación del motor. 0 - el motor está instalado a la derecha, 1 - a la izquierda</div></td><td>";
                    webpage += "<input class='form-control' type='number' min='0' max='1' name='STEPPER_REVERSE' value='"+STR_STEPPER_REVERSE+"'>";
                    webpage += "</td></tr>";

                  webpage += "</table>";

                  webpage += "<div class='form-group'><button type='submit' class='btn btn-primary'>Guardar</button></div>";
                webpage += "</form>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";
          webpage += "</div>";
        webpage += "</div>";
      webpage += "</div>";
    webpage += "</div>";

  webpage += "</div>";


















        webpage += "<div class='container-fluid' id='containerSettingsRight' style=''>";
          webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
            webpage += "<h1 class='h3 mb-0 text-gray-800'>Settings right curtine</h1>";
          webpage += "</div>";


          webpage += "<div class='row'>";
            webpage += "<div class='col-xs-12 col-sm-12 col-xl-8 col-md-12 mb-4'>";
              webpage += "<div class='card shadow h-100 py-2'>";
                webpage += "<div class='card-body'>";
                  webpage += "<div class='row no-gutters align-items-center'>";
                    webpage += "<div class='col '>";
                      webpage += "<div class='text-xs font-weight-bold text-uppercase mb-1 text-center'>Cortina Derecha</div>";
                      webpage += "<br>";
                      webpage += "<div class='card-body mx-auto col-6'>";
                        webpage += "<a class='btn btn-primary btn-block' href='/upR'><i class='fas fa-chevron-up'></i></a>";
                        webpage += "<a class='btn btn-primary btn-block' href='/stopR'><i class='fas fa-minus'></i></a>";
                        webpage += "<a class='btn btn-primary btn-block' href='/downR'><i class='fas fa-chevron-down'></i></a>";
                      webpage += "</div>";
                      webpage += "<br>";
                      webpage += "<div class='btn-group pb-6 col-12 text-xs' role='group'>";

                        webpage += "<a class='btn btn-primary text-xs' style='line-height: 24px;' href='/set_topR'>SET TOP</a>";

                        webpage += "<a class='btn btn-primary text-xs' style='line-height: 24px;' href='/set_bottomR'>SET BOTTOM</a>";
                      webpage += "</div>";
                    webpage += "</div>";
                  webpage += "</div>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";
            webpage += "<div class='col-xs-12 col-sm-12 col-xl-4 col-md-12 mb-4'>";
              webpage += "<div class='card shadow h-100 py-2'>";
                webpage += "<div class='card-body'>";
                  webpage += "<div class='row no-gutters align-items-center'>";
                    webpage += "<div class='col '>";
                      webpage += "<div class='text-xs font-weight-bold text-uppercase text-center mb-1'>Info</div>";
                      webpage += "<div class='card-body mx-auto col-12' id='infoMotorBlind'><br>";
                        webpage += "<ol>";
                          webpage += "<li>Establece los parametros de la cortina.</li>";
                          webpage += "<li>Introduce la distancia a recorrer en 'DISTANCE_TO_TRAVEL'.</li>";
                          webpage += "<li>Pulsa el botón guardar.</li>";
                          webpage += "<li>Presione el botón 'SET_TOP' si la cortina esta Subida, o el botón 'SET_BOTTOM' si está Bajada.</li>";
                          webpage += "<li>Listo!</li>";
                        webpage += "</ol>";
                      webpage += "</div>";
                    webpage += "</div>";
                  webpage += "</div>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";

            webpage += "<div class='col-xl-12 col-sm-12 col-xl-12 col-md-12 mb-4'>";
              webpage += "<div class='card shadow h-100 py-2'>";
                webpage += "<div class='card-body'>";
                  webpage += "<div class='row no-gutters align-items-center'>";
                    webpage += "<div class='col '>";
                      webpage += "<div class='col-12' style='padding: 0px;'>";
                        webpage += "<form action='/' method='POST'>";
                        webpage += "<table class='table'>";
                          webpage += "<tr><th>Parámetro</th><th>Valor</th></tr>";

                          webpage += "<tr><td>DISTANCE_TO_TRAVEL<div class='form-text text-muted small'>Intriduce la distacia que ha de recorer la cortina, <b>esto calculara los pasos del motor del campo siguiente automaticamente<b>. (Introduce la distancia en centimetros)</div></td><td>";
                          webpage += "<input class='form-control' type='number' min='0' id='inputDistanceCMR' placeholder='CM'>";
                          webpage += "</td></tr>";

                          webpage += "<tr><td>STEPPER_MAX_STEPS<div class='form-text text-muted small'>Selecciona el numero de pasos para desenrollar la cortina.</div></td><td>";
                          webpage += "<input class='form-control' type='number' min='0' id='CM_STEPPER_MAX_STEPS_R' name='STEPPER_MAX_STEPS_R' value='"+STR_STEPPER_MAX_STEPS_R+"'>";
                          webpage += "</td></tr>";

                          webpage += "<tr><td>MOTOR_RPM<div class='form-text text-muted small'>El número de revoluciones por minuto. 28byj-48 no admite más de 12-15 rpm, sin embargo, si pones más, afectará la velocidad debido a la curva de aceleración.</div></td><td>";
                          webpage += "<input class='form-control' type='number' min='1' max='90' name='MOTOR_RPM_R' value='"+STR_MOTOR_RPM_R+"'>";
                          webpage += "</td></tr>";

                          webpage += "<tr><td>MOTOR_ACCEL<div class='form-text text-muted small'>Aumento suave de la velocidad al inicio. Cuanto más suave es la aceleración, mayor es el par.</div></td><td>";
                          webpage += "<input class='form-control' type='number' min='0' name='MOTOR_ACCEL_R' value='"+STR_MOTOR_ACCEL_R+"'>";
                          webpage += "</td></tr>";

                          webpage += "<tr><td>MOTOR_DECEL<div class='form-text text-muted small'>Deceleración para deneter el motor.</div></td><td>";
                          webpage += "<input class='form-control' type='number' min='0' name='MOTOR_DECEL_R' value='"+STR_MOTOR_DECEL_R+"'>";
                          webpage += "</td></tr>";

                          webpage += "<tr><td>STEPPER_REVERSE<div class='form-text text-muted small'>La dirección de rotación del motor. 0 - el motor está instalado a la derecha, 1 - a la izquierda</div></td><td>";
                          webpage += "<input class='form-control' type='number' min='0' max='1' name='STEPPER_REVERSE_R' value='"+STR_STEPPER_REVERSE_R+"'>";
                          webpage += "</td></tr>";

                        webpage += "</table>";

                        webpage += "<div class='form-group'><button type='submit' class='btn btn-primary'>Guardar</button></div>";
                      webpage += "</form>";
                      webpage += "</div>";
                    webpage += "</div>";
                  webpage += "</div>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";
          webpage += "</div>";

        webpage += "</div>";






      webpage += "</div>";

      webpage += "<footer class='sticky-footer bg-white'></footer>";
    webpage += "</div>";
  webpage += "</div>";






  document.getElementById("page-top").innerHTML+=webpage;
}






/*
function makeRequestWeather() {
    var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
    httpRequest.open('GET', 'http://'+hostIP_STR+'/weather'); // service call
    httpRequest.send();
}

(function () {
    document.getElementById("btnTime").addEventListener('click', makeRequest);//attaching click event for button
    function makeRequest() {
        var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
        httpRequest.open('GET', 'http://'+hostIP_STR+'/time'); // service call
        httpRequest.send();
    }
})();

function makeRequestTime() {
    var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
    httpRequest.open('GET', 'http://'+hostIP_STR+'/time'); // service call
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
*/

window.onload = function() {
  getPageValuesHTML();
  homeHTML();


/*  (function () {
      document.getElementById("btn_upL-H").addEventListener('click', makeRequest);//attaching click event for button
      function makeRequest() {
          var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
          httpRequest.open('GET', 'http://'+hostIP_STR+'/upL'); // service call
          httpRequest.send();
      }
  })();

  (function () {
      document.getElementById("btn_stopL-H").addEventListener('click', makeRequest);//attaching click event for button
      function makeRequest() {
          var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
          httpRequest.open('GET', 'http://'+hostIP_STR+'/stopL'); // service call
          httpRequest.send();
      }
  })();

  (function () {
      document.getElementById("btn_downL-H").addEventListener('click', makeRequest);//attaching click event for button
      function makeRequest() {
          var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
          httpRequest.open('GET', 'http://'+hostIP_STR+'/downL'); // service call
          httpRequest.send();
      }
  })();

  (function () {
      document.getElementById("btn_set_topL-H").addEventListener('click', makeRequest);//attaching click event for button
      function makeRequest() {
          var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
          httpRequest.open('GET', 'http://'+hostIP_STR+'/set_topL'); // service call
          httpRequest.send();
      }
  })();

  (function () {
      document.getElementById("btn_set_bottomL-H").addEventListener('click', makeRequest);//attaching click event for button
      function makeRequest() {
          var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
          httpRequest.open('GET', 'http://'+hostIP_STR+'/set_bottomL'); // service call
          httpRequest.send();
      }
  })();*/
};


function sendBTN_async_update(addr){
  var address="http://"+hostIP_STR+"/"+addr;
  var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
  httpRequest.open('GET', address, true); // service call

  httpRequest.onreadystatechange = function (aEvt) {
    if (httpRequest.readyState == 4) {
       if(httpRequest.status == 302){
        //console.log(httpRequest.responseText);
        var resultPerRangeGetted=httpRequest.responseText.split(",");

        STR_PER_STEPPER_TARGET_L = resultPerRangeGetted[0];
        STR_PER_STEPPER_TARGET = resultPerRangeGetted[1];
        STR_PER_STEPPER_TARGET_R = resultPerRangeGetted[2];

        document.getElementById("customRange3L").value = STR_PER_STEPPER_TARGET_L;
        document.getElementById("customRange3C").value = STR_PER_STEPPER_TARGET;
        document.getElementById("customRange3R").value = STR_PER_STEPPER_TARGET_R;

      }else{
        console.log("Error loading page\n");
      }
    }
  };
  httpRequest.send(null);
}


function sendRANGE_async_update(identifier){
  var addrTempPos="";
  if(identifier=="customRange3L"){
    addrTempPos='setL?pos='+document.getElementById(identifier).value;
  }else if(identifier=="customRange3C"){
    addrTempPos='set?pos='+document.getElementById(identifier).value;
  }else if(identifier=="customRange3R"){
    addrTempPos='setR?pos='+document.getElementById(identifier).value;
  }

  if (addrTempPos!=""){
    var address="http://"+hostIP_STR+"/"+addrTempPos;
    var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest
    httpRequest.open('GET', address, true); // service call

    httpRequest.onreadystatechange = function (aEvt) {
      if (httpRequest.readyState == 4) {
         if(httpRequest.status == 302){
          console.log(httpRequest.responseText);
          var resultPerRangeGetted=httpRequest.responseText.split(",");

          STR_PER_STEPPER_TARGET_L = resultPerRangeGetted[0];
          STR_PER_STEPPER_TARGET = resultPerRangeGetted[1];
          STR_PER_STEPPER_TARGET_R = resultPerRangeGetted[2];

          document.getElementById("customRange3L").value = STR_PER_STEPPER_TARGET_L;
          document.getElementById("customRange3C").value = STR_PER_STEPPER_TARGET;
          document.getElementById("customRange3R").value = STR_PER_STEPPER_TARGET_R;

        }else{
          console.log("Error loading page\n");
        }
      }
    };
    httpRequest.send(null);
  }
}

/*
function setImageAsync(addr){
  var address="http://"+hostIP_STR+"/"+addr;
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
      xhttp.open("GET", "http://"+hostIP_STR+"/list", true);
      xhttp.send();

      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");
      var textCD = document.getElementById("textContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "none";
      imageCD.style.display = "block";
      animationCD.style.display = "none";
      textCD.style.display = "none";


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
          	if(file.size > 64*1024) {
          		//alert('Error : Exceeded size 2MB');
              Swal.fire({icon: 'error', title: 'Error : Exceeded size 64KB',showConfirmButton: false,timer: 2500})
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
            request.open('post', 'http://'+hostIP_STR+'/upload');

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


*/



/*


(function () {
    document.getElementById("btnMenuSettings").addEventListener('click', showhideDivs);//attaching click event for button
    function showhideDivs() {
      getPageSettingsHTML();
      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");
      var textCD = document.getElementById("textContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "block";
      imageCD.style.display = "none";
      animationCD.style.display = "none";
      textCD.style.display = "none";
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
      var textCD = document.getElementById("textContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "block";
      imageCD.style.display = "none";
      animationCD.style.display = "none";
      textCD.style.display = "none";
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
      var textCD = document.getElementById("textContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "block";
      imageCD.style.display = "none";
      animationCD.style.display = "none";
      textCD.style.display = "none";
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
      var textCD = document.getElementById("textContentDiv");

      deviceCD.style.display = "none";
      settingsCD.style.display = "block";
      imageCD.style.display = "none";
      animationCD.style.display = "none";
      textCD.style.display = "none";
    }
})();



(function () {
    document.getElementById("btnHomeControl").addEventListener('click', showhideDivs);//attaching click event for button
    function showhideDivs() {
      var deviceCD = document.getElementById("deviceContentDiv");
      var settingsCD = document.getElementById("settingsContentDiv");
      var imageCD = document.getElementById("imageContentDiv");
      var animationCD = document.getElementById("animationContentDiv");
      var textCD = document.getElementById("textContentDiv");

      deviceCD.style.display = "block";
      settingsCD.style.display = "none";
      imageCD.style.display = "none";
      animationCD.style.display = "none";
      textCD.style.display = "none";
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
  xhttp.open("GET", "http://"+hostIP_STR+"/list", true);
  xhttp.send();

  var deviceCD = document.getElementById("deviceContentDiv");
  var settingsCD = document.getElementById("settingsContentDiv");
  var imageCD = document.getElementById("imageContentDiv");
  var animationCD = document.getElementById("animationContentDiv");
  var textCD = document.getElementById("textContentDiv");

  deviceCD.style.display = "none";
  settingsCD.style.display = "none";
  imageCD.style.display = "block";
  animationCD.style.display = "none";
  textCD.style.display = "none";

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
    	if(file.size > 64*1024) {
    		//alert('Error : Exceeded size 2MB');
        Swal.fire({icon: 'error', title: 'Error : Exceeded size 64KB',showConfirmButton: false,timer: 2500})
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
      request.open('post', 'http://'+hostIP_STR+'/upload');

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

http.delete("http://"+hostIP_STR+"/delete?file=/"+file, function ( err, response ) {
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
  xhttp.open("POST", "http://"+hostIP_STR+"/animation", true);
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
  xhttp.open("GET", "http://"+hostIP_STR+"/list", true);
  xhttp.send();

  var deviceCD = document.getElementById("deviceContentDiv");
  var settingsCD = document.getElementById("settingsContentDiv");
  var imageCD = document.getElementById("imageContentDiv");
  var animationCD = document.getElementById("animationContentDiv");
  var textCD = document.getElementById("textContentDiv");

  deviceCD.style.display = "none";
  settingsCD.style.display = "none";
  imageCD.style.display = "none";
  animationCD.style.display = "block";
  textCD.style.display = "none";


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
  	if(file.size > 64*1024) {
  		//alert('Error : Exceeded size 2MB');
      Swal.fire({icon: 'error', title: 'Error : Exceeded size 64KB',showConfirmButton: false,timer: 2500})
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
    request.open('post', 'http://'+hostIP_STR+'/upload');

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

http.delete("http://"+hostIP_STR+"/delete?file=/"+file, function ( err, response ) {
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





function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}




function sendPostSetText() {

  var textSTR=document.getElementById("strTextToSet").value;
  var colorTextTemp=document.getElementById("textColorSelected").value;
  var posText=document.getElementById("positionTextSelect").value;
  var velText=document.getElementById("velTextToSet").value;

  var colorTextR = hexToRgb(colorTextTemp).r;
  var colorTextG = hexToRgb(colorTextTemp).g;
  var colorTextB = hexToRgb(colorTextTemp).b;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "http://"+hostIP_STR+"/text", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("text="+textSTR+"&colorR="+colorTextR+"&colorG="+colorTextG+"&colorB="+colorTextB+"&pos="+posText+"&vel="+velText);
}



function getPageText() {

    var webpage="";
      webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
        webpage += "<h1 class='h3 mb-0 text-gray-800'>Text</h1>";
      webpage += "</div>";

      webpage += "<div class='row'>";

        webpage += "<div class='col-xl-12 col-sm-12 col-xl-12 col-md-12 mb-4'>";
          webpage += "<div class='card shadow h-100 py-2'>";
            webpage += "<div class='card-body'>";
              webpage += "<div class='row no-gutters align-items-center'>";
                webpage += "<div class='col '>";
                  webpage += "<div class='col-12' style='padding: 0px;'>";

                      webpage += "<div class='d-sm-flex align-items-center justify-content-between mb-4' id='containerStartupMode'>";
                        webpage += "<h1 class='h5 mb-0 text-gray-800'>Set Text</h1>";
                      webpage += "</div>";

                    webpage += "<table class='table'>";

                      webpage += "<tr><td>Text<div class='form-text text-muted small'>";
                      webpage += "Introduce el texto que desea mostrar en la matriz led. (Max. 100 caracteres)</div></td><td>";
                      webpage += "<input class='form-control' type='text' name='str' id='strTextToSet' maxlength='100' placeholder='Text'>";

                      webpage += "</td></tr>";

                      webpage += "<tr><td>Color<div class='form-text text-muted small'>";
                      webpage += "Esoge el color del texto que desea mostrar en la matriz led.</div></td><td>";
                      webpage += "<input class='form-control' type='color' id='textColorSelected' name='textColorSelected' value='#FFFFFF'>";

                      webpage += "</td></tr>";

                      webpage += "<tr><td>Position<div class='form-text text-muted small'>";
                      webpage += "Escoge la posición del texto que desea mostrar en la matriz led.</div></td><td>";
                      webpage += "<select class='form-control' name='pos' id='positionTextSelect'>";
                        webpage += "<option value='0'>Top-Left</option><option value='1'>Top-Center</option><option value='2'>Top-Right</option>";
                        webpage += "<option value='3'>Center-Left</option><option value='4'>Center-Center</option><option value='5'>Center-Right</option>";
                        webpage += "<option value='6'>Bottom-Left</option><option value='7'>Bottom-Center</option><option value='8'>Bottom-Right</option>";
                      webpage += "</select>";
                      webpage += "</td></tr>";

                      webpage += "<tr><td>Velocity<div class='form-text text-muted small'>";
                      webpage += "Introduce la velocidad de scroll del texto que desea mostrar en la matriz led. (Velocidad en ms, a mas milisegundos, mas rapido.)</div></td><td>";
                      webpage += "<input class='form-control' type='number' name='vel' id='velTextToSet' max='2000' min='50' value='100'>";

                      webpage += "</td></tr>";
                    webpage += "</table>";


                    webpage += "<div class='form-group'>";
                      webpage += "<button type='submit' onclick='sendPostSetText()' class='btn btn-primary'>Set Text</button>";
                    webpage += "</div>";
                  webpage += "</div>";
                webpage += "</div>";
              webpage += "</div>";
            webpage += "</div>";
          webpage += "</div>";
        webpage += "</div>";
      webpage += "</div>";

document.getElementById("textContentDiv").innerHTML = webpage;


  var deviceCD = document.getElementById("deviceContentDiv");
  var settingsCD = document.getElementById("settingsContentDiv");
  var imageCD = document.getElementById("imageContentDiv");
  var animationCD = document.getElementById("animationContentDiv");
  var textCD = document.getElementById("textContentDiv");

  deviceCD.style.display = "none";
  settingsCD.style.display = "none";
  imageCD.style.display = "none";
  animationCD.style.display = "none";
  textCD.style.display = "block";

}


(function () {
    document.getElementById("btnText").addEventListener('click', getPageText);//attaching click event for button
})();
*/
