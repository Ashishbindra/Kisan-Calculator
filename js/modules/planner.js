const plannerBtn=document.getElementById("generatePlan");

if(plannerBtn){

plannerBtn.onclick=generatePlan;

}

function generatePlan(){

const crop=CROP_DATABASE[
document.getElementById("plannerCrop").value
];

const area=getLastArea();

if(!crop){

alert("Crop चुनें");

return;

}

if(!area){

alert("पहले Area निकालें");

return;

}

const seed=crop.seed*area.acre;

const urea=crop.fertilizer.urea*area.acre;

const dap=crop.fertilizer.dap*area.acre;

const potash=crop.fertilizer.potash*area.acre;

const yieldData=crop.yield*area.acre;

const income=yieldData*crop.price;

document.getElementById("plannerOutput").innerHTML=`

<h2>${crop.name}</h2>

<hr>

<p>🌱 Seed : <b>${seed.toFixed(2)} KG</b></p>

<p>🧪 Urea : <b>${urea.toFixed(2)} KG</b></p>

<p>🧪 DAP : <b>${dap.toFixed(2)} KG</b></p>

<p>🧪 Potash : <b>${potash.toFixed(2)} KG</b></p>

<p>💧 Irrigation : <b>${crop.irrigation}</b></p>

<p>🌾 Yield : <b>${yieldData.toFixed(2)} Quintal</b></p>

<p>💰 Income : <b>₹ ${income.toLocaleString()}</b></p>

`;

document.getElementById("plannerResult").style.display="block";

}