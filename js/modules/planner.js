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

    loadPlannerFarm();

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

        sowingDate: new Date().toISOString(),

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

            <p><b>📏 Area:</b> ${formatArea(acre)}</p>

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
    document.getElementById("downloadPdf").style.display = "block";
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

function renderCropLibrary(search = "") {

    const container = document.getElementById("cropLibraryList");

    let html = "";

    Object.keys(CROP_DATABASE).forEach(key => {

        const crop = CROP_DATABASE[key];

        if (
            crop.name.toLowerCase().includes(search.toLowerCase())
        ) {

            html += `

            <div class="card crop-card">

                <h3>${crop.name}</h3>

                <p>

                    🌦️ ${crop.season}

                </p>

                <button
                    class="btn"
                    onclick="showCropDetails('${key}')">

                    📖 View Details

                </button>

            </div>

            `;

        }

    });

    container.innerHTML = html;

}

document.addEventListener("DOMContentLoaded", () => {

    const search = document.getElementById("cropSearch");

    if (search) {

        search.oninput = () => {

            renderCropLibrary(search.value);

        };

    }

});

function loadCompareDropdown() {

    const crop1 = document.getElementById("compareCrop1");
    const crop2 = document.getElementById("compareCrop2");

    crop1.innerHTML = "";
    crop2.innerHTML = "";

    Object.keys(CROP_DATABASE).forEach(key => {

        const crop = CROP_DATABASE[key];

        crop1.innerHTML += `
            <option value="${key}">
                ${crop.name}
            </option>
        `;

        crop2.innerHTML += `
            <option value="${key}">
                ${crop.name}
            </option>
        `;

    });

}

document.getElementById("compareBtn").onclick = compareCrops;

function compareCrops() {

    const crop1 = CROP_DATABASE[
        document.getElementById("compareCrop1").value
    ];

    const crop2 = CROP_DATABASE[
        document.getElementById("compareCrop2").value
    ];

    document.getElementById("compareResult").innerHTML = `

<table class="compare-table">

<tr>

<th>Feature</th>

<th>${crop1.name}</th>

<th>${crop2.name}</th>

</tr>

<tr>

<td>Season</td>

<td>${crop1.season}</td>

<td>${crop2.season}</td>

</tr>

<tr>

<td>Seed</td>

<td>${crop1.seed} KG</td>

<td>${crop2.seed} KG</td>

</tr>

<tr>

<td>Yield</td>

<td>${crop1.yield}</td>

<td>${crop2.yield}</td>

</tr>

<tr>

<td>Price</td>

<td>₹${crop1.price}</td>

<td>₹${crop2.price}</td>

</tr>

<tr>

<td>Irrigation</td>

<td>${crop1.irrigation}</td>

<td>${crop2.irrigation}</td>

</tr>

</table>

`;

}

function loadCompareDropdown() {

    const crop1 = document.getElementById("compareCrop1");

    const crop2 = document.getElementById("compareCrop2");

    crop1.innerHTML = "";

    crop2.innerHTML = "";

    Object.keys(CROP_DATABASE).forEach(key => {

        const crop = CROP_DATABASE[key];

        crop1.innerHTML += `

            <option value="${key}">

                ${crop.name}

            </option>

        `;

        crop2.innerHTML += `

            <option value="${key}">

                ${crop.name}

            </option>

        `;

    });

}

document.getElementById("compareBtn").onclick = compareCrops;

function compareCrops() {

    const crop1 = CROP_DATABASE[
        document.getElementById("compareCrop1").value
    ];

    const crop2 = CROP_DATABASE[
        document.getElementById("compareCrop2").value
    ];

    document.getElementById("compareResult").innerHTML = `

<div class="card">

<table class="compare-table">

<tr>

<th>Feature</th>

<th>${crop1.name}</th>

<th>${crop2.name}</th>

</tr>

<tr>

<td>🌦️ Season</td>

<td>${crop1.season}</td>

<td>${crop2.season}</td>

</tr>

<tr>

<td>🌱 Seed</td>

<td>${crop1.seed} KG</td>

<td>${crop2.seed} KG</td>

</tr>

<tr>

<td>💧 Irrigation</td>

<td>${crop1.irrigation}</td>

<td>${crop2.irrigation}</td>

</tr>

<tr>

<td>🌾 Yield</td>

<td>${crop1.yield} Qt</td>

<td>${crop2.yield} Qt</td>

</tr>

<tr>

<td>💰 Price</td>

<td>₹${crop1.price}</td>

<td>₹${crop2.price}</td>

</tr>

<tr>

<td>🌍 Soil</td>

<td>${crop1.soil}</td>

<td>${crop2.soil}</td>

</tr>

<tr>

<td>🌡️ Temperature</td>

<td>${crop1.temperature}</td>

<td>${crop2.temperature}</td>

</tr>

<tr>

<td>📅 Duration</td>

<td>${crop1.duration}</td>

<td>${crop2.duration}</td>

</tr>

</table>

</div>

`;

}

document.getElementById("advisorBtn").onclick = suggestCrop;

function suggestCrop() {

    const month =
        document.getElementById("advisorMonth").value;

    const soil =
        document.getElementById("advisorSoil").value;

    const result =
        document.getElementById("advisorResult");

    let crops = [];

    Object.keys(CROP_DATABASE).forEach(key => {

        const crop = CROP_DATABASE[key];

        if (crop.soil.includes(soil.split(" ")[0])) {

            crops.push(crop);

        }

    });

    if (crops.length === 0) {

        result.innerHTML = `

            <div class="card">

                ❌ No Crop Found

            </div>

        `;

        return;

    }

    let html = `<div class="card">

<h2>🌾 Recommended Crops</h2>`;

    crops.forEach(crop => {

        html += `

        <div class="list-item">

            <h3>${crop.name}</h3>

            <p>🌦️ ${crop.season}</p>

            <p>🌱 Seed : ${crop.seed} KG</p>

            <p>💧 Irrigation : ${crop.irrigation}</p>

        </div>

        `;

    });

    html += "</div>";

    result.innerHTML = html;

}

function loadTodayTasks() {

    const container = document.getElementById("todayTasks");

    const plans = getPlans();

    let html = "";

    const today = new Date();

    plans.forEach(plan => {

        const crop = Object.values(CROP_DATABASE)
            .find(c => c.name === plan.crop);

        if (!crop) return;

        const sowDate = new Date(plan.sowingDate);

        const days = Math.floor(

            (today - sowDate) / (1000 * 60 * 60 * 24)

        );

        if (days === crop.workSchedule.firstIrrigation) {

            html += createTask(

                "💧",

                "First Irrigation",

                plan.crop,

                plan.farmName

            );

        }

        if (days === crop.workSchedule.fertilizer) {

            html += createTask(

                "🧪",

                "Apply Fertilizer",

                plan.crop,

                plan.farmName

            );

        }

        if (days === crop.workSchedule.harvest) {

            html += createTask(

                "🌾",

                "Harvest Ready",

                plan.crop,

                plan.farmName

            );

        }

    });

    if (html === "") {

        html = `

        <div class="empty-task">

            🎉 No farming work due today.

        </div>

        `;

    }

    container.innerHTML = html;

}

function createTask(icon, title, crop, farm) {

    return `

    <div class="task-card">

        <div class="task-icon">

            ${icon}

        </div>

        <div>

            <div class="task-title">

                ${title}

            </div>

            <div class="task-desc">

                🌾 ${crop}

                <br>

                🏡 ${farm}

            </div>

        </div>

    </div>

    `;

}

document.getElementById("downloadPdf").onclick = downloadCropPDF;

async function downloadCropPDF() {

    const report = document.getElementById("pdfReport");
    const farmer = getFarmerProfile();
    const crop = CROP_DATABASE[
        Object.keys(CROP_DATABASE).find(
            key => CROP_DATABASE[key].name === currentPlan.crop
        )
    ];

    document.getElementById("pdfContent").innerHTML = `

        <div style="font-family:Arial,sans-serif;padding:30px;background:#ffffff;color:#333;">

            <div style="text-align:center;border-bottom:3px solid #2e7d32;padding-bottom:15px;">

                <h1 style="margin:0;color:#2e7d32;">
                    🌾 Kisan Calculator
                </h1>

                <p style="margin:5px 0;font-size:18px;color:#666;">
                    Smart Farming Toolkit
                </p>

                <h2 style="margin-top:15px;">
                    Crop Planning Report
                </h2>

                <p>
                    Generated :
                    ${new Date().toLocaleString("en-IN")}
                </p>

            </div>

            <br>

            <h2 style="color:#2e7d32;">
                👨‍🌾 Farmer Information
            </h2>

            <table style="width:100%;border-collapse:collapse;" border="1">

                <tr>

                    <td><b>Name</b></td>

                    <td>${farmer.name || "-"}</td>

                </tr>

                <tr>

                    <td><b>Mobile</b></td>

                    <td>${farmer.mobile || "-"}</td>

                </tr>

                <tr>

                    <td><b>Village</b></td>

                    <td>${farmer.village || "-"}</td>

                </tr>

                <tr>

                    <td><b>District</b></td>

                    <td>${farmer.district || "-"}</td>

                </tr>

                <tr>

                    <td><b>State</b></td>

                    <td>${farmer.state || "-"}</td>

                </tr>

            </table>

            <br>

            <h2 style="color:#2e7d32;">
                🏡 Farm Information
            </h2>

            <table style="width:100%;border-collapse:collapse;" border="1">

                <tr>

                    <td><b>Farm Name</b></td>

                    <td>${currentPlan.farmName}</td>

                </tr>

                <tr>

                    <td><b>Crop</b></td>

                    <td>${currentPlan.crop}</td>

                </tr>

                <tr>

                    <td><b>Area</b></td>

                    <td>${formatArea(currentPlan.area)}</td>

                </tr>

            </table>

            <br>

            <h2 style="color:#2e7d32;">
                🌱 Crop Information
            </h2>

            <table style="width:100%;border-collapse:collapse;" border="1">

                <tr>

                    <td><b>Season</b></td>

                    <td>${crop.season}</td>

                </tr>

                <tr>

                    <td><b>Sowing</b></td>

                    <td>${crop.sowing}</td>

                </tr>

                <tr>

                    <td><b>Harvest</b></td>

                    <td>${crop.harvest}</td>

                </tr>

                <tr>

                    <td><b>Duration</b></td>

                    <td>${crop.duration}</td>

                </tr>

                <tr>

                    <td><b>Temperature</b></td>

                    <td>${crop.temperature}</td>

                </tr>

                <tr>

                    <td><b>Soil</b></td>

                    <td>${crop.soil}</td>

                </tr>

                <tr>

                    <td><b>Rainfall</b></td>

                    <td>${crop.rainfall}</td>

                </tr>

                <tr>

                    <td><b>Soil pH</b></td>

                    <td>${crop.ph}</td>

                </tr>

            </table>

            <br>

            <h2 style="color:#2e7d32;">
                🌾 Farming Recommendation
            </h2>

            <table style="width:100%;border-collapse:collapse;text-align:center;" border="1">

                <tr>

                    <th>Seed</th>

                    <th>Urea</th>

                    <th>DAP</th>

                    <th>Potash</th>

                    <th>Irrigation</th>

                </tr>

                <tr>

                    <td>${currentPlan.seed.toFixed(2)} KG</td>

                    <td>${currentPlan.urea.toFixed(2)} KG</td>

                    <td>${currentPlan.dap.toFixed(2)} KG</td>

                    <td>${currentPlan.potash.toFixed(2)} KG</td>

                    <td>${currentPlan.irrigation}</td>

                </tr>

            </table>

            <br>

            <h2 style="color:#2e7d32;">
                💰 Production Summary
            </h2>

            <table style="width:100%;border-collapse:collapse;text-align:center;" border="1">

                <tr>

                    <th>Yield</th>

                    <th>Market Price</th>

                    <th>Estimated Income</th>

                </tr>

                <tr>

                    <td>${currentPlan.yield.toFixed(2)} Quintal</td>

                    <td>₹ ${crop.price}</td>

                    <td style="color:#2e7d32;font-weight:bold;">

                        ₹ ${currentPlan.income.toLocaleString("en-IN")}

                    </td>

                </tr>

            </table>

            <br>

            <h2 style="color:#2e7d32;">
                🌱 Recommended Varieties
            </h2>

            <ul>

                ${crop.varieties.map(item => `<li>${item}</li>`).join("")}

            </ul>

            <h2 style="color:#2e7d32;">
                🦠 Major Diseases
            </h2>

            <ul>

                ${crop.diseases.map(item => `<li>${item}</li>`).join("")}

            </ul>

            <h2 style="color:#2e7d32;">
                🐛 Major Pests
            </h2>

            <ul>

                ${crop.pests.map(item => `<li>${item}</li>`).join("")}

            </ul>

            <h2 style="color:#2e7d32;">
                💊 Treatment
            </h2>

            <ul>

                ${crop.treatment.map(item => `<li>${item}</li>`).join("")}

            </ul>

            <br>

            <hr>

            <div style="text-align:center;color:#777;">

                <h3 style="margin-bottom:5px;">
                    🌾 Kisan Calculator
                </h3>

                <p>
                    Smart Farming Toolkit
                </p>

                <p>
                    Generated on ${new Date().toLocaleDateString("en-IN")}
                </p>

            </div>

        </div>

        `;

    report.style.display = "block";

    const canvas = await html2canvas(report, {

        scale: 2

    });

    report.style.display = "none";

    const imgData = canvas.toDataURL("image/png");

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF("p", "mm", "a4");

    const width = 190;

    const height = canvas.height * width / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, width, height);

    pdf.save(currentPlan.crop + "-Report.pdf");

}

function loadFarmerProfile() {

    const farmer = getFarmerProfile();

    document.getElementById("farmerName").value =
        farmer.name || "";

    document.getElementById("farmerMobile").value =
        farmer.mobile || "";

    document.getElementById("farmerVillage").value =
        farmer.village || "";

    document.getElementById("farmerDistrict").value =
        farmer.district || "";

    document.getElementById("farmerState").value =
        farmer.state || "";

}

document.getElementById("saveFarmerProfile").onclick = () => {

    saveFarmerProfile({

        name:
            document.getElementById("farmerName").value,

        mobile:
            document.getElementById("farmerMobile").value,

        village:
            document.getElementById("farmerVillage").value,

        district:
            document.getElementById("farmerDistrict").value,

        state:
            document.getElementById("farmerState").value

    });

    alert("✅ Farmer Profile Saved");

};

function loadPlannerFarm() {

    currentPlannerFarm = getCurrentFarm();

    if (!currentPlannerFarm) {

        currentPlannerArea = null;

    } else {

        currentPlannerArea = {

            acre: Number(currentPlannerFarm.area)

        };

    }

    showPlannerInfo();

}