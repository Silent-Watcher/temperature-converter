'use strict';
//
const $ = document;
let baseUnit = '℃';
let resultUnit = '℉';
let baseUnitSelect = $.getElementById('base_unit_selection');
let baseUnitInput = $.getElementById('base_unit_input');
let resultUnitInput = $.getElementById('result_unit_input');
let resultUnitSelection = $.getElementById('result_unit_selection');
let equals = $.getElementById('equals');
let baseUnitHeading = $.getElementById('base_unit_heading');
let resultUnitHeading = $.getElementById('result_unit_heading');
//
function convert() {
  if (baseUnit === '℃')
    resultUnitInput.value = (baseUnitInput.value * 9) / 5 + 32;
  else resultUnitInput.value = (baseUnitInput.value - 32) * (5 / 9);
}
//
$.title = `${baseUnit} to ${resultUnit}`;
//
// °C to °F
// formula : (°C × 9/5) + 32 = °F
// °F to °C
// formula : (°F − 32) × 5/9 = 0°C
baseUnitSelect.addEventListener('change', function () {
  if (this.value === 'Fahrenheit') [baseUnit, resultUnit] = ['℉', '℃'];
  else [baseUnit, resultUnit] = ['℃', '℉'];
  if (baseUnitInput.value.length !== 0) convert();
  $.title = `${baseUnit} to ${resultUnit}`;
  baseUnitInput.placeholder = baseUnit;
  resultUnitInput.placeholder = resultUnit;
  baseUnitHeading.innerHTML = baseUnit;
  resultUnitHeading.innerHTML = resultUnit;
  resultUnitSelection.firstElementChild.innerHTML =
    resultUnit === '℉' ? 'Fahrenheit' : 'Celsius';
  resultUnitSelection.firstElementChild.value =
    resultUnit === '℉' ? 'Fahrenheit' : 'Celsius';
});
//
baseUnitInput.addEventListener('keyup', function () {
  if (this.value.length === 0) resultUnitInput.value = '';
  else convert();
});

// change equals icon 
if (window.innerWidth <= 992)
equals.firstElementChild.classList.replace('fa-equals', 'fa-arrow-down');
else equals.firstElementChild.classList.replace('fa-arrow-down', 'fa-equals');
// change equals icon 