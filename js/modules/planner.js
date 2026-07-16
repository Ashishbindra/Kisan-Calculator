/*
=========================================
Planner Module
=========================================
*/
let currentPlan = null;
let currentPlannerFarm = null;
let currentPlannerArea = null;

document.addEventListener("DOMContentLoaded", () => {

    initializePlanner();

});

function initializePlanner() {

    currentPlannerFarm = getCurrentFarm();

    currentPlannerArea = getLastArea();

    showPlannerInfo();

    const btn = document.getElementById("generatePlan");

    if (btn) {

        btn.addEventListener("click", generatePlan);

    }

}

function showPlannerInfo() {

    const container = document.getElementById("plannerArea");

    if (!container) return;

    let html = "";

    if (currentPlannerFarm) {

        html += `
            <h3>🌾 ${currentPlannerFarm.name}</h3>

            <p>👤 ${currentPlannerFarm.owner}</p>

            <p>📍 ${currentPlannerFarm.village}</p>

            <p>🗺️ ${currentPlannerFarm.state}</p>
        `;

    } else {

        html += `

            <p>

                कोई Farm Select नहीं है।

            </p>

        `;

    }

    if (currentPlannerArea) {

        html += `

            <hr>

            <p>

                📏 Area :

                <b>

                    ${currentPlannerArea.acre.toFixed(2)} Acre

                </b>

            </p>

        `;

    } else {

        html += `

            <p>

                Area उपलब्ध नहीं है।

            </p>

        `;

    }

    container.innerHTML = html;

}
function generatePlan() {

    if (!currentPlannerFarm) {

        alert("पहले Farm Select करें।");
        return;

    }

    if (!currentPlannerArea) {

        alert("पहले Area Calculate करें।");
        return;

    }

    const cropKey = document.getElementById("plannerCrop").value;

    if (!cropKey) {

        alert("कृपया Crop चुनें।");
        return;

    }

    const crop = CROP_DATABASE[cropKey];

    if (!crop) {

        alert("Crop Data नहीं मिला।");
        return;

    }

    const acre = currentPlannerArea.acre;

    const seed = crop.seed * acre;
    const urea = crop.fertilizer.urea * acre;
    const dap = crop.fertilizer.dap * acre;
    const potash = crop.fertilizer.potash * acre;
    const irrigation = crop.irrigation;
    const yieldQty = crop.yield * acre;
    const income = yieldQty * crop.price;

    currentPlan = {

        farmId: currentPlannerFarm.id,

        farmName: currentPlannerFarm.name,

        village: currentPlannerFarm.village,

        owner: currentPlannerFarm.owner,

        crop: crop.name,

        cropKey: cropKey,

        area: acre,

        seed: seed,

        urea: urea,

        dap: dap,

        potash: potash,

        irrigation: irrigation,

        yield: yieldQty,

        income: income

    };

    document.getElementById("plannerOutput").innerHTML = `

        <div class="recommend-card">

            <h2>${crop.name}</h2>

            <hr>

            <h3>🌱 Crop Information</h3>

            <p>🌦️ <b>Season:</b> ${crop.season}</p>

            <p>📅 <b>Sowing:</b> ${crop.sowing}</p>

            <p>🌾 <b>Harvest:</b> ${crop.harvest}</p>

            <p>⏳ <b>Duration:</b> ${crop.duration}</p>

            <p>🌡️ <b>Temperature:</b> ${crop.temperature}</p>

            <p>🌍 <b>Soil:</b> ${crop.soil}</p>

            <hr>

            <h3>📊 Farm Planning</h3>

            <p>📏 <b>Area:</b> ${acre.toFixed(2)} Acre</p>

            <p>🌱 <b>Seed:</b> ${seed.toFixed(2)} KG</p>

            <p>🧪 <b>Urea:</b> ${urea.toFixed(2)} KG</p>

            <p>🧪 <b>DAP:</b> ${dap.toFixed(2)} KG</p>

            <p>🧪 <b>Potash:</b> ${potash.toFixed(2)} KG</p>

            <p>💧 <b>Irrigation:</b> ${irrigation} Times</p>

            <p>🌾 <b>Estimated Yield:</b> ${yieldQty.toFixed(2)} Quintal</p>

            <p style="font-size:20px;color:#2e7d32;">

                💰 <b>Estimated Income:</b>

                ₹ ${income.toLocaleString("en-IN")}

            </p>

        </div>`;

    document.getElementById("plannerResult").style.display = "block";
    document.getElementById("savePlan").style.display = "block";

    const viewBtn = document.getElementById("viewCropDetails");

    viewBtn.style.display = "block";

    viewBtn.onclick = () => {

        showCropDetails(cropKey);

    };
}

const savePlanBtn = document.getElementById("savePlan");

if (savePlanBtn) {

    savePlanBtn.onclick = saveCurrentPlan;

}

function saveCurrentPlan() {

    if (!currentPlan) {

        alert("पहले Generate Plan करें।");

        return;

    }

    addPlan(currentPlan);

    alert("✅ Crop Plan सफलतापूर्वक Save हो गया।");

}

function renderPlanHistory() {

    const container = document.getElementById("planHistory");

    if (!container) return;

    const plans = getPlans();

    if (plans.length === 0) {

        container.innerHTML = `

            <div class="empty-record">

                अभी कोई Crop Plan Save नहीं है।

            </div>

        `;

        return;

    }

    let html = "";

    plans.forEach(plan => {

        html += `

        <div class="record-card">

            <div class="record-header">

                <h3>

                    🌾 ${plan.farmName}

                </h3>

                <span>

                    ${plan.createdAt}

                </span>

            </div>

            <div class="record-body">

                <p>

                    Crop : <b>${plan.crop}</b>

                </p>

                <p>

                    Area : <b>${plan.area.toFixed(2)} Acre</b>

                </p>

                <p>

                    Income : <b>₹ ${plan.income.toLocaleString()}</b>

                </p>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

}

function showCropDetails(cropKey) {

    const crop = CROP_DATABASE[cropKey];

    if (!crop) return;

    showPage("cropDetailsPage");

    document.getElementById("cropDetailsContent").innerHTML = `

        <div class="card">

            <h2>${crop.name}</h2>

            <div class="info-grid">

                <div class="info-box">
                    <span>🌦️ Season</span>
                    <strong>${crop.season}</strong>
                </div>

                <div class="info-box">
                    <span>📅 Sowing</span>
                    <strong>${crop.sowing}</strong>
                </div>

                <div class="info-box">
                    <span>🌾 Harvest</span>
                    <strong>${crop.harvest}</strong>
                </div>

                <div class="info-box">
                    <span>⏳ Duration</span>
                    <strong>${crop.duration}</strong>
                </div>

                <div class="info-box">
                    <span>🌡️ Temperature</span>
                    <strong>${crop.temperature}</strong>
                </div>

                <div class="info-box">
                    <span>🌍 Soil</span>
                    <strong>${crop.soil}</strong>
                </div>

                <div class="info-box">
                    <span>🌧️ Rainfall</span>
                    <strong>${crop.rainfall}</strong>
                </div>

                <div class="info-box">
                    <span>🧪 Soil pH</span>
                    <strong>${crop.ph}</strong>
                </div>

            </div>

            <hr>

            <h3>🌱 Farming Information</h3>

            <p><b>🌱 Seed:</b> ${crop.seed} KG / Acre</p>

            <p><b>🧪 Urea:</b> ${crop.fertilizer.urea} KG</p>

            <p><b>🧪 DAP:</b> ${crop.fertilizer.dap} KG</p>

            <p><b>🧪 Potash:</b> ${crop.fertilizer.potash} KG</p>

            <p><b>💧 Irrigation:</b> ${crop.irrigation} Times</p>

            <p><b>🌾 Average Yield:</b> ${crop.yield} Quintal / Acre</p>

            <p><b>💰 Market Price:</b> ₹ ${crop.price} / Quintal</p>
            <hr>

            <h3>🌱 Recommended Varieties (अनुशंसित किस्में)</h3>

            <div class="list-card">

                ${crop.varieties.map(item => `
                    <div class="list-item">🌾 ${item}</div>
                `).join("")}

            </div>

            <hr>

            <h3>🦠 Major Diseases (मुख्य रोग)</h3>

            <div class="list-card">

                ${crop.diseases.map(item => `
                    <div class="list-item">🦠 ${item}</div>
                `).join("")}

            </div>

            <hr>

            <h3>🐛 Major Pests (मुख्य कीट)</h3>

            <div class="list-card">

                ${crop.pests.map(item => `
                    <div class="list-item">🐛 ${item}</div>
                `).join("")}

            </div>

            <hr>

            <h3>💊 Treatment (उपचार)</h3>

            <div class="list-card">

                ${crop.treatment.map(item => `
                    <div class="list-item">💊 ${item}</div>
                `).join("")}

            </div>
        </div>

        `;
}

