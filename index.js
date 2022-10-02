(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


var cnfPass=document.getElementById("password2");
cnfPass.onI = function(){
    var passValue = document.getElementById("password")
    var confpassValue = document.getElementById("password2")
    if(passValue != confpassValue) {
        document.getElementsById("password2").setClass("is-invalid")
     }
     else{
        document.getElementsById("password2").setClass("is-valid")
     }
}