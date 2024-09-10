function convert() {
    const inputValue = document.getElementById("userInput").value;
    console.log("Input Value:", inputValue); // Depuración

    const unit = document.getElementById("unit").value;
    console.log("Selected Unit:", unit); // Depuración

    let result = 0;

    if (unit === "milesToKm") {
        result = Math.round((inputValue * 1.60934)*100)/100;
        const resultString = inputValue + " miles are " + result + " Km";
        console.log("Result String:", resultString); // Depuración

        const resultElement = document.getElementById("resultElement");
        resultElement.innerHTML = resultString;
    } else {
        result = Math.round((inputValue / 1.60934)*100)/100;
        const resultString = inputValue + " Kilometers are " + result + " Miles";
        console.log("Result String:", resultString); // Depuración

        const resultElement = document.getElementById("resultElement");
        resultElement.innerHTML = resultString;
    }
    
    
}

