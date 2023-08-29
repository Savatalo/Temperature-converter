const cel = document.getElementById('inpc');
const far = document.getElementById('inpf');
const kel = document.getElementById('inpk');
let convertedFarenteitValue;
let convertedKelvinValue;
let convertedCelsiusValue;

cel.addEventListener('input', () => {
    convertedFarenteitValue = (cel.value * 1.8) + 32;
    far.value = convertedFarenteitValue;

    convertedKelvinValue = (cel.value * 1) + 273.15;
    kel.value = convertedKelvinValue;
})

far.addEventListener('input', () => {
    convertedCelsiusValue = (far.value - 32) * 5/9;
    cel.value = convertedCelsiusValue ;

    convertedKelvinValue = (far.value - 32) * 5/9 + 273.15;
    kel.value = convertedKelvinValue;
})

kel.addEventListener('input', () => {
    convertedCelsiusValue = kel.value - 273.15;
    cel.value = convertedCelsiusValue ;

    convertedFarenteitValue = 1.8 * (kel.value - 273) + 32;
    far.value = convertedFarenteitValue;
})

