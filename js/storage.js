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

const FARM_KEY = "kisan_farms";

function getFarms() {

    return JSON.parse(

        localStorage.getItem(FARM_KEY)

    ) || [];

}

function saveFarms(farms) {

    localStorage.setItem(

        FARM_KEY,

        JSON.stringify(farms)

    );

}

function addFarm(farm) {

    const farms = getFarms();

    farm.id = Date.now();

    farms.unshift(farm);

    saveFarms(farms);

}