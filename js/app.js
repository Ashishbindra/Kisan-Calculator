/*
=========================================
Kisan Calculator
App Navigation
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    // सभी Pages
    const pages = document.querySelectorAll(".page");

    // Bottom Navigation Buttons
    const navButtons = document.querySelectorAll(".nav-btn");

    // Area Calculator Card
    const areaCard = document.querySelector(".open-area");



    /*
    =============================
        Show Page Function
    =============================
    */

    function showPage(pageId) {

        // सभी Pages Hide
        pages.forEach(page => {

            page.classList.remove("active-page");

        });

        // Selected Page Show
        document
            .getElementById(pageId)
            .classList.add("active-page");


        // Active Button Change
        navButtons.forEach(btn => {

            btn.classList.remove("active");

            if (btn.dataset.page === pageId) {

                btn.classList.add("active");

            }

        });


        // Scroll Top
        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }



    /*
    =============================
        Bottom Navigation
    =============================
    */

    navButtons.forEach(button => {

        button.addEventListener("click", () => {

            showPage(button.dataset.page);

        });

    });



    /*
    =============================
        Home Card Click
    =============================
    */

    if (areaCard) {

        areaCard.addEventListener("click", () => {

            document.querySelector('[data-page="areaPage"]').click();
        });

    }

});

function renderRecords() {

    const container = document.getElementById("recordsContainer");

    const records = getRecords();

    if (records.length === 0) {

        container.innerHTML = `
            <div class="empty-record">
                <h3>📂 कोई रिकॉर्ड नहीं मिला</h3>
                <p>पहला खेत जोड़ने के लिए Area Calculator का उपयोग करें।</p>
            </div>
        `;

        return;
    }

    let html = "";

    records.forEach(record => {

        html += `
        <div class="record-card">

            <div class="record-header">

                <h3>🌾 ${record.fieldName}</h3>

                <span class="record-date">
                    ${record.createdAt}
                </span>

            </div>

            <div class="record-body">

                <p><strong>📏 लंबाई:</strong> ${record.length} ${record.unit}</p>

                <p><strong>📐 चौड़ाई:</strong> ${record.width} ${record.unit}</p>

                <hr>

                <p><strong>Square Feet:</strong> ${record.sqFeet.toFixed(2)}</p>

                <p><strong>Square Meter:</strong> ${record.sqMeter.toFixed(2)}</p>

                <p><strong>Acre:</strong> ${record.acre.toFixed(4)}</p>

                <p><strong>Hectare:</strong> ${record.hectare.toFixed(4)}</p>

                <p><strong>Bigha:</strong> ${record.bigha.toFixed(4)}</p>

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

function removeRecord(id) {

    deleteRecord(id);

    renderRecords();

}

renderRecords();

function editRecord(id) {

    const records = getRecords();

    const record = records.find(r => r.id === id);

    if (!record) return;

    // Edit Mode
    editRecordId = record.id;

    // Form Fill
    document.getElementById("fieldName").value = record.fieldName;
    document.getElementById("length").value = record.length;
    document.getElementById("width").value = record.width;
    document.getElementById("unit").value = record.unit;
    document.getElementById("state").value = record.state;

    // Area Page खोलो
    document.querySelector('[data-page="areaPage"]').click();

    // ऊपर Scroll करो
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}