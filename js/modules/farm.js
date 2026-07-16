document.addEventListener("DOMContentLoaded", () => {

    const dialog = document.getElementById("farmDialog");
    const addFarmBtn = document.getElementById("addFarmBtn");
    const saveFarmBtn = document.getElementById("saveFarm");
    const closeFarmBtn = document.getElementById("closeFarmDialog");

    addFarmBtn.addEventListener("click", () => {

        dialog.classList.add("active");

    });

    closeFarmBtn.addEventListener("click", () => {

        dialog.classList.remove("active");

    });

    saveFarmBtn.addEventListener("click", () => {

        const farm = {

            name: document.getElementById("farmName").value,
            village: document.getElementById("village").value,
            owner: document.getElementById("owner").value,
            state: document.getElementById("farmState").value

        };

        addFarm(farm);

        renderFarms();

        dialog.classList.remove("active");

    });

});