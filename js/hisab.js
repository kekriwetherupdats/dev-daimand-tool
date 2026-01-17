/*************************************
 * Dev Daimand Tool
 * Hisab Calculation Logic (FINAL)
 * File: js/hisab.js
 *************************************/

// Page load hote hi hisab calculate karo
document.addEventListener("DOMContentLoaded", calculateDashboard);

function calculateDashboard() {
  const data = getData(); // data.js se aa raha hai

  let todaySale = 0;
  let totalDue = 0;

  const todayDate = new Date().toISOString().slice(0, 10);

  data.forEach(entry => {
    const amount = Number(entry.amount) || 0;

    // Aaj ki sale
    if (entry.type === "sale" && entry.date === todayDate) {
      todaySale += amount;
    }

    // Total udhar
    if (entry.type === "due") {
      totalDue += amount;
    }
  });

  // Dashboard update
  const todaySaleEl = document.getElementById("todaySale");
  const totalDueEl = document.getElementById("totalDue");

  if (todaySaleEl) {
    todaySaleEl.innerText = "₹" + todaySale;
  }

  if (totalDueEl) {
    totalDueEl.innerText = "₹" + totalDue;
  }
}
