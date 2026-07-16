document.addEventListener("DOMContentLoaded", () => {

    const dialog = document.getElementById("farmDialog");

    document.getElementById("addFarmBtn").onclick = () => {

        dialog.classList.add("active");

    };

    document.getElementById("closeFarmDialog").onclick = () => {

        dialog.classList.remove("active");

    };

    dialog.addEventListener("click", (e) => {

        if (e.target === dialog) {

            dialog.classList.remove("active");

        }

    });

    document.getElementById("saveFarm").onclick = () => {

        const farm = {

            name: document.getElementById("farmName").value,

            village: document.getElementById("village").value,

            owner: document.getElementById("owner").value,

            state: document.getElementById("farmState").value,

            area: parseFloat(document.getElementById("farmArea").value),

            unit: document.getElementById("farmAreaUnit").value

        };

        if (!farm.name) {

            alert("Field Name लिखें");

            return;

        }

        addFarm(farm);

        renderFarms();

        dialog.classList.remove("active");

        document.getElementById("farmName").value = "";
        document.getElementById("village").value = "";
        document.getElementById("owner").value = "";

    };

    renderFarms();

});

function renderFarms() {

    const farmList = document.getElementById("farmList");

    if (!farmList) return;

    const farms = getFarms();

    if (farms.length === 0) {

        farmList.innerHTML = `

            <div class="empty-record">

                अभी कोई Farm नहीं जोड़ा गया।

            </div>

        `;

        return;

    }

    let html = "";

    farms.forEach(farm => {

        html += `

        <div class="record-card">

            <div class="record-header">

                <h3>🌾 ${farm.name}</h3>

            </div>

            <div class="record-body">

                <p>📍 ${farm.village}</p>
                <p>

                📏 ${farm.area} ${farm.unit}

                </p>
                <p>👤 ${farm.owner}</p>

            </div>

            <div class="record-footer">

                <button class="btn"
                    onclick="openFarm(${farm.id})">

                    Open

                </button>

                <button class="btn edit-btn"
                    onclick="editFarm(${farm.id})">

                    Edit

                </button>

                <button class="btn delete-btn"
                    onclick="removeFarm(${farm.id})">

                    Delete

                </button>

            </div>

        </div>

        `;

    });

    farmList.innerHTML = html;

}

function removeFarm(id) {

    if (confirm("Farm Delete करना चाहते हैं?")) {

        deleteFarm(id);

        renderFarms();

    }

}

function openFarm(id) {

    const farms = getFarms();

    const farm = farms.find(f => f.id === id);

    if (!farm) {

        return;

    }

    setCurrentFarm(farm);

    showPage("plannerPage");

}

function editFarm(id) {

    alert("अगले Step में Edit Farm आएगा।");

}