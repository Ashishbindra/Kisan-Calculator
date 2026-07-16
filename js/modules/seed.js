const seedBtn = document.getElementById("calculateSeed");

document.addEventListener("DOMContentLoaded", () => {

    const lastArea = getLastArea();

    if (lastArea) {

        document.getElementById("currentArea").innerHTML = `
            <strong>${lastArea.acre.toFixed(2)} Acre</strong><br>
            ${lastArea.fieldName}
        `;

    }

});

if (seedBtn) {

    seedBtn.addEventListener("click", calculateSeed);

}

function calculateSeed() {

    const selectedCrop = document.getElementById("crop").value;

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

    const seed = crop.seed * lastArea.acre;

    const urea = crop.fertilizer.urea * lastArea.acre;

    const dap = crop.fertilizer.dap * lastArea.acre;

    const potash = crop.fertilizer.potash * lastArea.acre;

    const production = crop.yield * lastArea.acre;

    const income = production * crop.price;

    document.getElementById("cropOutput").innerHTML = `

        <div class="recommend-card">

            <h2>${crop.name}</h2>

            <hr>

            <p>🌱 Seed : <b>${seed.toFixed(2)} KG</b></p>

            <p>🧪 Urea : <b>${urea.toFixed(2)} KG</b></p>

            <p>🧪 DAP : <b>${dap.toFixed(2)} KG</b></p>

            <p>🧪 Potash : <b>${potash.toFixed(2)} KG</b></p>

            <p>💧 Irrigation : <b>${crop.irrigation} Times</b></p>

            <p>🌾 Estimated Yield : <b>${production.toFixed(2)} Quintal</b></p>

            <p>💰 Estimated Income : <b>₹ ${income.toLocaleString()}</b></p>

        </div>

    `;

    document.getElementById("seedResult").style.display = "block";

}