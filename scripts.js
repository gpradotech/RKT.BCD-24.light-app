// SELEÇÃO DE ELEMENTOS
const light = document.getElementById('light');
const hueRange = document.getElementById('hue');
const saturationRange = document.getElementById('saturation');
const lightnessRange = document.getElementById('lightness');

// FUNÇÃO DE ATUALIZAÇÃO DA COR
function updateLightColor() {
  const hueValue = hueRange.value;
  const saturationValue = saturationRange.value;
  const lightnessValue = lightnessRange.value;
  // Acessa a primeira folha de estilo da página
  const sheet = document.styleSheets[1];

  ////////// BOLINHA HUE ///////////////////////////////////////////////
  // Percorre as regras até achar a classe desejada
  for (const rule of sheet.cssRules) {
    if (rule.selectorText === '#hue::-moz-range-thumb' || rule.selectorText === '#hue::-webkit-slider-thumb') {
      rule.style.background = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`;
    }
  }

   ////////// BOLINHA SATURATION ///////////////////////////////////////////////
  // Percorre as regras até achar a classe desejada
  for (const rule of sheet.cssRules) {
    if (rule.selectorText === '#saturation::-moz-range-thumb' || rule.selectorText === '#saturation::-webkit-slider-thumb') {
      rule.style.background = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`;
    }
  }

  ////////// BOLINHA LIGHTNESS ///////////////////////////////////////////////
  // Percorre as regras até achar a classe desejada
  for (const rule of sheet.cssRules) {
    if (rule.selectorText === '#lightness::-moz-range-thumb' || rule.selectorText === '#lightness::-webkit-slider-thumb') {
      rule.style.background = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`;
    }
  }

  ////////// BARRA HUE ///////////////////////////////////////////////
    for (const rule of sheet.cssRules) {
    if (rule.selectorText === '#hue::-moz-range-track' || rule.selectorText === '#hue::-webkit-slider-runnable-track') {
      rule.style.background = `linear-gradient(90deg, 
        hsl(0deg, ${saturationValue}%, ${lightnessValue}%), 
        hsl(40deg, ${saturationValue}%, ${lightnessValue}%), 
        hsl(80deg, ${saturationValue}%, ${lightnessValue}%), 
        hsl(120deg, ${saturationValue}%, ${lightnessValue}%), 
        hsl(160deg, ${saturationValue}%, ${lightnessValue}%), 
        hsl(200deg, ${saturationValue}%, ${lightnessValue}%), 
        hsl(240deg, ${saturationValue}%, ${lightnessValue}%), 
        hsl(280deg, ${saturationValue}%, ${lightnessValue}%), 
        hsl(320deg, ${saturationValue}%, ${lightnessValue}%), 
        hsl(360deg, ${saturationValue}%, ${lightnessValue}%) 
        )`;
    }
  }

  ////////// BARRA SATURATION ///////////////////////////////////////////////
    for (const rule of sheet.cssRules) {
    if (rule.selectorText === '#saturation::-moz-range-track' || rule.selectorText === '#saturation::-webkit-slider-runnable-track') {
      rule.style.background = `linear-gradient(90deg, 
        hsl(${hueValue}, 0%, ${lightnessValue}%), 
        hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%), 
        hsl(${hueValue}, 100%, ${lightnessValue}%)
        )`;
    }
  }

    ////////// BARRA LIGHTNESS ///////////////////////////////////////////////
    for (const rule of sheet.cssRules) {
    if (rule.selectorText === '#lightness::-moz-range-track' || rule.selectorText === '#lightness::-webkit-slider-runnable-track') {
      rule.style.background = `linear-gradient(90deg, 
        hsl(${hueValue}, ${saturationValue}%, 0%), 
        hsl(${hueValue}, ${saturationValue}%, 50%), 
        hsl(${hueValue}, ${saturationValue}%, 100%)
        )`;
    }
  }

  // Atualiza o estilo com base nos valores atuais dos sliders
  light.style.backgroundColor = `hsl(${hueValue}deg, ${saturationValue}%, ${lightnessValue}%)`;
}

// EVENTOS: atualiza a cor sempre que qualquer slider muda
hueRange.addEventListener('input', updateLightColor);
saturationRange.addEventListener('input', updateLightColor);
lightnessRange.addEventListener('input', updateLightColor);

// APLICA COR INICIAL
updateLightColor();