/*
=========================================
Kisan Calculator V2
App Navigation
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Pages
    // ==========================
    const pages = document.querySelectorAll(".page");

    const navButtons = document.querySelectorAll(".nav-btn");

    // ==========================
    // Show Page
    // ==========================

    window.showPage = function (pageId) {

        pages.forEach(page => {

            page.classList.remove("active-page");

        });

        const currentPage = document.getElementById(pageId);

        if (currentPage) {

            currentPage.classList.add("active-page");

        }

        navButtons.forEach(btn => {

            btn.classList.remove("active");

            if (btn.dataset.page === pageId) {

                btn.classList.add("active");

            }

        });

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }


    // ==========================
    // Bottom Navigation
    // ==========================

    navButtons.forEach(button => {

        button.addEventListener("click", () => {

            showPage(button.dataset.page);

        });

    });


    // ==========================
    // Home Cards
    // ==========================

    const areaCard = document.querySelector(".open-area");

    const seedCard = document.querySelector(".open-seed");

    const fertilizerCard = document.querySelector(".open-fertilizer");

    const profitCard = document.querySelector(".open-profit");

    const plannerCard = document.querySelector(".open-planner");

    const historyCard = document.querySelector(".open-history");

    if (historyCard) {

        historyCard.onclick = () => {

            showPage("planHistoryPage");

            renderPlanHistory();

        }

    }

    if (areaCard) {

        areaCard.onclick = () => {

            showPage("areaPage");

        }

    }


    if (seedCard) {

        seedCard.onclick = () => {

            showPage("seedPage");

        }

    }


    if (fertilizerCard) {

        fertilizerCard.onclick = () => {

            showPage("fertilizerPage");

        }

    }


    if (profitCard) {

        profitCard.onclick = () => {

            showPage("profitPage");

        }

    }


    if (plannerCard) {

        plannerCard.onclick = () => {

            showPage("plannerPage");

        };

    }

    const farmCard = document.querySelector(".open-farms");

    if (farmCard) {

        farmCard.onclick = () => {

            showPage("farmPage");

        };

    }
    // ==========================
    // Default Page
    // ==========================
    applySettings();
    showPage("homePage");
    loadDashboard();
    updateNotificationStatus();
    loadTodayTasks();

    document.getElementById("todayDate").textContent =
        new Date().toLocaleDateString("en-IN", {

            weekday: "long",

            day: "numeric",

            month: "long",

            year: "numeric"

        });


    const shareApp = document.getElementById("shareApp");

    if (shareApp) {

        shareApp.onclick = () => {

            const text =
                `🌾 Kisan Calculator

                Smart Farming Toolkit

                https://ashishbindra.github.io/Kisan-Calculator/`;

            if (navigator.share) {

                navigator.share({

                    title: "Kisan Calculator",

                    text

                });

            } else {

                navigator.clipboard.writeText(text);

                alert("App link copied.");

            }

        };
        const aboutApp = document.getElementById("aboutApp");

        if (aboutApp) {

            aboutApp.onclick = () => {

                alert("Kisan Calculator\nVersion 1.0.0");

            };

        }
    }
    const contactDeveloper = document.getElementById("contactDeveloper");

    if (contactDeveloper) {

        contactDeveloper.onclick = () => {

            window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=ashishbindra648@gmail.com&su=Kisan%20Calculator%20Feedback",
                "_blank"
            );

        };

    }

});

// =========================================
// Records
// =========================================

window.renderRecords = function () {

    const container = document.getElementById("recordsContainer");

    if (!container) return;

    const records = getRecords();

    if (records.length === 0) {

        container.innerHTML = `

            <div class="empty-record">

                <h3>📂 कोई रिकॉर्ड नहीं मिला</h3>

                <p>

                    पहला खेत जोड़ने के लिए
                    Area Calculator का उपयोग करें।

                </p>

            </div>

        `;

        return;

    }

    let html = "";

    records.forEach(record => {

        html += `

        <div class="record-card">

            <div class="record-header">

                <h3>

                    🌾 ${record.fieldName}

                </h3>

                <span class="record-date">

                    ${record.createdAt}

                </span>

            </div>


            <div class="record-body">

                <p>

                    📏 <b>Length :</b>

                    ${record.length} ${record.unit}

                </p>

                <p>

                    📐 <b>Width :</b>

                    ${record.width} ${record.unit}

                </p>

                <p>

                    🌍 <b>Area :</b>

                    ${record.acre.toFixed(4)} Acre

                </p>

                <p>

                    🌾 <b>Bigha :</b>

                    ${record.bigha.toFixed(4)}

                </p>

            </div>


            <div class="record-footer">

                <button
                    class="btn edit-btn"
                    onclick="editRecord(${record.id})">

                    ✏ Edit

                </button>

                <button
                    class="btn delete-btn"
                    onclick="removeRecord(${record.id})">

                    🗑 Delete

                </button>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

}



// =========================================
// Delete Record
// =========================================

window.removeRecord = function (id) {

    if (confirm("क्या आप यह रिकॉर्ड हटाना चाहते हैं?")) {

        deleteRecord(id);

        renderRecords();

    }

}



// =========================================
// Edit Record
// =========================================

window.editRecord = function (id) {

    const records = getRecords();

    const record = records.find(r => r.id === id);

    if (!record) {

        return;

    }

    editRecordId = record.id;

    document.getElementById("fieldName").value = record.fieldName;

    document.getElementById("length").value = record.length;

    document.getElementById("width").value = record.width;

    document.getElementById("unit").value = record.unit;

    document.getElementById("state").value = record.state;

    showPage("areaPage");

}



// =========================================
// Profit Calculator
// =========================================

const profitBtn = document.getElementById("calculateProfit");

if (profitBtn) {

    profitBtn.addEventListener("click", () => {

        const cost = Number(document.getElementById("totalCost").value);

        const income = Number(document.getElementById("totalIncome").value);

        if (cost <= 0 || income <= 0) {

            alert("Cost और Income भरें");

            return;

        }

        const profit = income - cost;

        document.getElementById("profitOutput").innerHTML =

            "₹ " + profit.toLocaleString();

        document.getElementById("profitResult").style.display = "block";

    });

}



// =========================================
// Auto Load
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    renderRecords();

});

function loadDashboard() {

    const farms = getFarms();
    const plans = getPlans();

    let area = 0;
    let income = 0;

    plans.forEach(plan => {

        area += Number(plan.area || 0);
        income += Number(plan.income || 0);

    });

    document.getElementById("totalFarms").textContent = farms.length;
    document.getElementById("totalPlans").textContent = plans.length;
    document.getElementById("totalArea").textContent = area.toFixed(2);

    document.getElementById("totalIncome").textContent =
        "₹ " + income.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

}

document.getElementById("backupData").onclick = () => {

    const data = exportData();

    const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "kisan-backup.json";

    a.click();

};

document.getElementById("restoreData").onclick = () => {

    document.getElementById("restoreFile").click();

};

document.getElementById("restoreFile").onchange = e => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {

        const data = JSON.parse(reader.result);

        importData(data);

        alert("✅ Data Restore हो गया।");

        location.reload();

    };

    reader.readAsText(file);

};

document.getElementById("clearData").onclick = () => {

    if (!confirm("क्या आप पूरा Data Delete करना चाहते हैं?")) {

        return;

    }

    localStorage.clear();

    location.reload();

};

document.getElementById("plannerSeason").onchange = function () {

    const season = this.value;

    const cropSelect = document.getElementById("plannerCrop");

    cropSelect.innerHTML = '<option value="">Select Crop</option>';

    Object.keys(CROP_DATABASE).forEach(key => {

        const crop = CROP_DATABASE[key];

        if (crop.season === season) {

            cropSelect.innerHTML += `
                <option value="${key}">
                    ${crop.name}
                </option>
            `;

        }

    });

};

const cropLibraryBtn = document.querySelector(".open-crop-library");

if (cropLibraryBtn) {

    cropLibraryBtn.onclick = () => {

        showPage("cropLibraryPage");

        renderCropLibrary();

    };

}

const compareCard = document.querySelector(".open-compare");

if (compareCard) {

    compareCard.onclick = () => {

        showPage("compareCropPage");

        loadCompareDropdown();

    };

}

const compareBtnCard = document.querySelector(".open-compare");

if (compareBtnCard) {

    compareBtnCard.onclick = () => {

        showPage("compareCropPage");

        loadCompareDropdown();

    }

}

const advisorCard = document.querySelector(".open-advisor");

if (advisorCard) {

    advisorCard.onclick = () => {

        showPage("cropAdvisorPage");

    }

}

function loadTodayTasks() {

    const container = document.getElementById("todayTasks");

    const plans = getPlans();

    if (plans.length === 0) {

        container.innerHTML = `

            <div class="empty-task">

                No Crop Plans Found.

            </div>

        `;

        return;

    }

    let html = "";

    plans.slice(0, 3).forEach(plan => {

        html += `

        <div class="task-card">

            <div class="task-icon">

                🌾

            </div>

            <div>

                <div class="task-title">

                    ${plan.crop}

                </div>

                <div class="task-desc">

                    Farm : ${plan.farmName}

                </div>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

}

document.querySelector(".open-profile").onclick = () => {

    showPage("farmerProfilePage");

    loadFarmerProfile();

};

function loadSettings() {

    const s = getSettings();

    document.getElementById("darkMode").checked = s.dark;

    document.getElementById("defaultUnit").value = s.unit;

    document.getElementById("currency").value = s.currency;

    document.getElementById("pdfQuality").value = s.pdf;

    document.getElementById("notification").checked = s.notification;
}

function updateSettings() {

    const settings = getSettings();

    settings.dark =
        document.getElementById("darkMode").checked;

    settings.notification =
        document.getElementById("notification").checked;

    settings.unit =
        document.getElementById("defaultUnit").value;

    settings.currency =
        document.getElementById("currency").value;

    settings.pdf =
        document.getElementById("pdfQuality").value;

    saveSettings(settings);

}

document.querySelectorAll("#settingsPage input,#settingsPage select")
    .forEach(el => {

        el.onchange = updateSettings;

    });

function applySettings() {

    const settings = getSettings();

    document.body.classList.toggle(
        "dark-mode",
        settings.dark
    );

}

document.getElementById("darkMode").onchange = function () {

    const settings = getSettings();

    settings.dark = this.checked;

    saveSettings(settings);

    applySettings();

};

function formatArea(area) {

    const settings = getSettings();

    switch (settings.unit) {

        case "Hectare":
            return (area * 0.404686).toFixed(2) + " Hectare";

        case "Bigha":
            return (area * 2).toFixed(2) + " Bigha";

        default:
            return area.toFixed(2) + " Acre";

    }

}

function applyTheme() {

    const settings = getSettings();

    document.body.classList.remove(

        "theme-green",

        "theme-blue",

        "theme-orange"

    );

    document.body.classList.add(

        "theme-" + settings.theme

    );

}

document.getElementById("themeColor").onchange = function () {

    const settings = getSettings();

    settings.theme = this.value;

    saveSettings(settings);

    applyTheme();

};

function updateNotificationStatus() {

    const settings = getSettings();

    const box =
        document.getElementById("notificationStatus");

    if (!box) return;

    if (settings.notification) {

        box.innerHTML = `

        <div class="task-card">

            🔔 Notifications Enabled

        </div>

        `;

    } else {

        box.innerHTML = `

        <div class="task-card">

            🔕 Notifications Disabled

        </div>

        `;

    }

}
