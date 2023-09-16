let records = [];
let recordId = 1;

function createRecord() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const age = document.getElementById("age").value;

    const newRecord = { id: recordId++, name, address, age};
    records.push(newRecord);

    displayRecords();
    clearForm("create-form");
}

function displayRecords() {
    const recordList = document.getElementById("record-list");
    recordList.innerHTML = "";

    for (const record of records) {
        const li = document.createElement("li");
        li.innerHTML = `ID: ${record.id}, Name: ${record.name}, Address: ${record.address}, Age: ${record.age}`;
        recordList.appendChild(li);
    }
}

function clearForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
}

function updateRecord() {
    const id = document.getElementById("update-id").value;
    const name = document.getElementById("update-name").value;
    const address = document.getElementById("update-address").value;
    const age = document.getElementById("update-age").value;

    const recordToUpdate = records.find(record => record.id == id);

    if (recordToUpdate) {
        recordToUpdate.name = name;
        recordToUpdate.address = address;
        recordToUpdate.age = age;
        displayRecords();
        clearForm("update-form");
    } else {
        alert("Record not found");
    }
}

function deleteRecord() {
    const id = document.getElementById("delete-id").value;
    const index = records.findIndex(record => record.id == id);

    if (index !== -1) {
        records.splice(index, 1);
        displayRecords();
        clearForm("delete-form");
    } else {
        alert("Record not found");
    }
}

displayRecords();
