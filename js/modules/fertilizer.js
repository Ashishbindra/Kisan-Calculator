const fertilizerBtn = document.getElementById("calculateFertilizer");

document.addEventListener("DOMContentLoaded", () => {

    const lastArea = getLastArea();

    if (lastArea) {

        document.getElementById("fertilizerArea").innerHTML = `
            <strong>${lastArea.acre.toFixed(2)} Acre</strong><br>
            ${lastArea.fieldName}
        `;

    }

});

if (fertilizerBtn) {

    fertilizerBtn.addEventListener("click", calculateFertilizer);

}

function calculateFertilizer() {

    const selectedCrop = document.getElementById("fertilizerCrop").value;

    const lastArea = getLastArea();

    if (!lastArea) {

        alert("पहले Area Calculator से क्षेत्रफल निकालें।");

        return;

    }

    if (!selectedCrop) {

        alert("कृपया फसल चुनें।");

        return;

    }

    const crop = CROP_DATABASE[selectedCrop];

    if (!crop) {

        alert("Crop Data नहीं मिला।");

        return;

    }

    const acre = lastArea.acre;

    const urea = crop.fertilizer.urea * acre;

    const dap = crop.fertilizer.dap * acre;

    const potash = crop.fertilizer.potash * acre;

    document.getElementById("fertilizerOutput").innerHTML = `

        <div class="recommend-card">

            <h2>🧪 ${crop.name}</h2>

            <hr>

            <p>📏 Area : <b>${acre.toFixed(2)} Acre</b></p>

            <p>🧪 Urea : <b>${urea.toFixed(2)} KG</b></p>

            <p>🧪 DAP : <b>${dap.toFixed(2)} KG</b></p>

            <p>🧪 Potash : <b>${potash.toFixed(2)} KG</b></p>

        </div>

    `;

    document.getElementById("fertilizerResult").style.display = "block";

}