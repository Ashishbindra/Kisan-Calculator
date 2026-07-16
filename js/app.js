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

    showPage("homePage");

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