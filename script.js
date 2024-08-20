function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

function chequearAñoBisiesto() {
    const year = document.getElementById('year').value;
    const resultElement = document.getElementById('result');
    
    if (year) {
        const isLeap = esBisiesto(parseInt(year)); //el ParseInt asegura que trabajemos con un int y no un string
        if (isLeap) {
            resultElement.textContent = `${year} es un año bisiesto.`;
        } else {
            resultElement.textContent = `${year} no es un año bisiesto.`;
        }
    } else {
        resultElement.textContent = "Por favor, ingresa un año.";
    }
}
