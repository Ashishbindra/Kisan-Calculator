// ======================================
// Area Calculator
// ======================================
let currentResult = null;
let editRecordId = null;

// Calculate Button
const calculateBtn = document.getElementById("calculateBtn");

if (calculateBtn) {
    calculateBtn.addEventListener("click", calculateArea);
}

// Save Button
const saveBtn = document.getElementById("saveRecord");

if (saveBtn) {
    saveBtn.addEventListener("click", saveCurrentRecord);
}

// ======================================
// Calculate Area
// ======================================

function calculateArea() {

    clearValidation();

    const fieldName = document.getElementById("fieldName").value.trim() || "Unnamed Field";

    const lengthInput = document.getElementById("length");
    const widthInput = document.getElementById("width");

    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);

    const unit = document.getElementById("unit").value;
    const state = document.getElementById("state").value;

    // Validation
    if (isNaN(length) || length <= 0) {

        lengthInput.classList.add("input-error");
        lengthInput.focus();

        alert("कृपया सही लंबाई दर्ज करें।");

        return;
    }

    if (isNaN(width) || width <= 0) {

        widthInput.classList.add("input-error");
        widthInput.focus();

        alert("कृपया सही चौड़ाई दर्ज करें।");

        return;
    }

    lengthInput.classList.add("input-success");
    widthInput.classList.add("input-success");

    // ===========================
    // Calculation
    // ===========================

    let sqFeet;

    if (unit === "feet") {

        sqFeet = length * width;

    } else {

        sqFeet = (length * width) * 10.7639104;

    }

    const sqMeter = sqFeet / 10.7639104;
    const acre = sqFeet / 43560;
    const hectare = acre * 0.40468564224;
    let bigha = 0;

    switch (state) {

        case "up":
            bigha = acre * 1.6;
            break;

        case "bihar":
            bigha = acre * 1.6;
            break;

        case "rajasthan":
            bigha = acre * 0.625;
            break;

        case "mp":
            bigha = acre * 1.6;
            break;

        case "haryana":
            bigha = acre * 4;
            break;

        case "punjab":
            bigha = acre * 4;
            break;

        case "maharashtra":
            bigha = acre * 1.6;
            break;

        case "gujarat":
            bigha = acre * 2.5;
            break;

        default:
            bigha = acre * 1.6;

    }
    // Save Current Result
    currentResult = {

        fieldName,

        state,

        length,

        width,

        unit,

        sqFeet,

        sqMeter,

        acre,

        hectare,

        bigha,

        createdAt: new Date().toLocaleString()

    };
    saveLastArea(currentResult);
    // ===========================
    // Show Result
    // ===========================

    document.getElementById("sqFeet").textContent = sqFeet.toFixed(2);

    document.getElementById("sqMeter").textContent = sqMeter.toFixed(2);

    document.getElementById("acre").textContent = acre.toFixed(4);

    document.getElementById("hectare").textContent = hectare.toFixed(4);

    document.getElementById("bigha").textContent = bigha.toFixed(4);

    document.getElementById("resultCard").style.display = "block";

}

// ======================================
// Save Record
// ======================================

function saveCurrentRecord() {

    if (currentResult == null) {

        alert("पहले Calculate करें");

        return;

    }

    if (editRecordId !== null) {

        currentResult.id = editRecordId;

        updateRecord(currentResult);

        alert("रिकॉर्ड अपडेट हो गया।");

        editRecordId = null;

    } else {

        addRecord(currentResult);

        alert("रिकॉर्ड सेव हो गया।");

    }

    renderRecords();

}

// ======================================
// Clear Validation
// ======================================

function clearValidation() {

    document.querySelectorAll("input").forEach(input => {

        input.classList.remove("input-error");
        input.classList.remove("input-success");

    });

}

const saveFarmBtn = document.getElementById("saveToFarm");

if(saveFarmBtn){

    saveFarmBtn.onclick = () => {

        document.getElementById("farmArea").value =
            currentResult.acre.toFixed(2);

        document.getElementById("farmAreaUnit").value =
            "acre";

        document.getElementById("farmDialog")
            .classList.add("active");

    }

}