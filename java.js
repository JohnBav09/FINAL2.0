'use strict';

var form = document.getElementById; ("survay");

form.addEventListener('submit', function (formSubmit) {
  formSubmit.preventDefault();
  console.log(formSubmit);
  console.log(formSubmit.target.survay.value);
  var visit = formSubmit.target.visit.value;
  console.log({
    visit: visit,});
});