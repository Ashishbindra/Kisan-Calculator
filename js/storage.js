const STORAGE_KEY = "kisan_calculator_records";

/* सभी रिकॉर्ड पढ़ें */
function getRecords() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

/* सभी रिकॉर्ड सेव करें */
function saveRecords(records) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

/* नया रिकॉर्ड जोड़ें */
function addRecord(record) {
    const records = getRecords();

    record.id = Date.now();

    records.unshift(record);

    saveRecords(records);

    return record;
}

/* रिकॉर्ड हटाएँ */
function deleteRecord(id) {

    const records = getRecords().filter(item => item.id !== id);

    saveRecords(records);

}

function updateRecord(updatedRecord) {

    const records = getRecords();

    const index = records.findIndex(r => r.id === updatedRecord.id);

    if (index !== -1) {

        records[index] = updatedRecord;

        saveRecords(records);

    }

}

function saveLastArea(data) {

    localStorage.setItem("lastArea", JSON.stringify(data));

}

function getLastArea() {

    return JSON.parse(localStorage.getItem("lastArea"));

}
function getFarms() {

    return JSON.parse(localStorage.getItem("kisan_farms")) || [];

}

function saveFarms(farms) {

    localStorage.setItem("kisan_farms", JSON.stringify(farms));

}

function addFarm(farm) {

    const farms = getFarms();

    farm.id = Date.now();

    farms.unshift(farm);

    saveFarms(farms);

}

function deleteFarm(id) {

    const farms = getFarms().filter(farm => farm.id !== id);

    saveFarms(farms);

}

const CURRENT_FARM_KEY = "current_farm";

function setCurrentFarm(farm){

    localStorage.setItem(
        CURRENT_FARM_KEY,
        JSON.stringify(farm)
    );

}

function getCurrentFarm(){

    return JSON.parse(
        localStorage.getItem(CURRENT_FARM_KEY)
    );

}

const PLAN_KEY = "kisan_crop_plans";

function getPlans() {

    return JSON.parse(localStorage.getItem(PLAN_KEY)) || [];

}

function savePlans(plans) {

    localStorage.setItem(PLAN_KEY, JSON.stringify(plans));

}

function addPlan(plan) {

    const plans = getPlans();

    plan.id = Date.now();

    plan.createdAt = new Date().toLocaleString();

    plans.unshift(plan);

    savePlans(plans);

}

function exportData() {

    return {

        farms: getFarms(),

        plans: getPlans(),

        records: getRecords()

    };

}

function importData(data) {

    localStorage.setItem("kisan_farms", JSON.stringify(data.farms || []));

    localStorage.setItem("kisan_crop_plans", JSON.stringify(data.plans || []));

    localStorage.setItem("area_records", JSON.stringify(data.records || []));

}

const FARMER_KEY = "kisan_farmer_profile";

function saveFarmerProfile(profile){

    localStorage.setItem(
        FARMER_KEY,
        JSON.stringify(profile)
    );

}

function getFarmerProfile(){

    return JSON.parse(
        localStorage.getItem(FARMER_KEY)
    ) || {};

}

