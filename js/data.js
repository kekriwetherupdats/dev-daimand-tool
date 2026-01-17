/*************************************
 * Dev Daimand Tool
 * Data Storage Engine (FINAL)
 * File: js/data.js
 *************************************/

// Agar localStorage me pehle se data nahi hai
// to ek empty array create kar do
if (localStorage.getItem("hisabData") === null) {
  localStorage.setItem("hisabData", JSON.stringify([]));
}

// Saara data read karne ka function
function getData() {
  try {
    return JSON.parse(localStorage.getItem("hisabData")) || [];
  } catch (e) {
    console.error("Data read error:", e);
    return [];
  }
}

// Poora data save karne ka function
function saveData(data) {
  try {
    localStorage.setItem("hisabData", JSON.stringify(data));
  } catch (e) {
    alert("Storage full ya error aa gaya!");
  }
}

// Nayi entry add karne ka helper function
function addEntry(entry) {
  const data = getData();
  data.push(entry);
  saveData(data);
}

// Saara data clear karne ka function (future use)
function clearAllData() {
  if (confirm("Kya aap saara hisab delete karna chahte ho?")) {
    localStorage.setItem("hisabData", JSON.stringify([]));
  }
}
