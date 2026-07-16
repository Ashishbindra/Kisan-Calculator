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

            <p>📏 Area : <b>${acre.toFixed(2)} Acre</b></p>

            <p>🌱 Seed : <b>${seed.toFixed(2)} KG</b></p>

            <p>🧪 Urea : <b>${urea.toFixed(2)} KG</b></p>

            <p>🧪 DAP : <b>${dap.toFixed(2)} KG</b></p>

            <p>🧪 Potash : <b>${potash.toFixed(2)} KG</b></p>

            <p>💧 Irrigation : <b>${irrigation} Times</b></p>

            <p>🌾 Estimated Yield : <b>${yieldQty.toFixed(2)} Quintal</b></p>

            <p>💰 Estimated Income : <b>₹ ${income.toLocaleString("en-IN")}</b></p>

        </div>

    `;

    document.getElementById("plannerResult").style.display = "block";
    document.getElementById("savePlan").style.display = "block";
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

function renderPlanHistory(){

    const container=document.getElementById("planHistory");

    if(!container) return;

    const plans=getPlans();

    if(plans.length===0){

        container.innerHTML=`

            <div class="empty-record">

                अभी कोई Crop Plan Save नहीं है।

            </div>

        `;

        return;

    }

    let html="";

    plans.forEach(plan=>{

        html+=`

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

    container.innerHTML=html;

}