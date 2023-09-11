document.addEventListener("DOMContentLoaded", function () {
    const sideLengthInput = document.getElementById("sideLength");
    const calculateButton = document.getElementById("calculate");
    const areaResult = document.getElementById("areaResult");
    const perimeterResult = document.getElementById("perimeterResult");

    calculateButton.addEventListener("click", function () {
        const sideLength = parseFloat(sideLengthInput.value);

        if (!isNaN(sideLength)) {
            const area = sideLength * sideLength;
            const perimeter = 4 * sideLength;

            areaResult.textContent = area.toFixed(2);
            perimeterResult.textContent = perimeter.toFixed(2);
        } else {
            areaResult.textContent = "Masukkan panjang sisi yang valid.";
            perimeterResult.textContent = "";
        }
    });
});