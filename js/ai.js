/*************************************
 * Dev Daimand Tool
 * AI Summary & Voice Engine (FINAL)
 * File: js/ai.js
 *************************************/

function generateAIReport() {
  const data = getData(); // data.js se aa raha hai

  if (data.length === 0) {
    speakAndShow("Abhi koi hisab data available nahi hai.");
    return;
  }

  let totalSale = 0;
  let totalDue = 0;

  data.forEach(entry => {
    const amount = Number(entry.amount) || 0;

    if (entry.type === "sale") {
      totalSale += amount;
    }

    if (entry.type === "due") {
      totalDue += amount;
    }
  });

  let message = "";

  message += `Ab tak ki kul sale ₹${totalSale} hai. `;
  message += `Kul udhar ₹${totalDue} hai. `;

  if (totalSale > totalDue) {
    message += "Business achha chal raha hai. ";
  } else {
    message += "Udhar zyada hai, paisa vasool karna zaroori hai. ";
  }

  speakAndShow(message);
}

// Text show + voice bolne ka function
function speakAndShow(text) {
  const textEl = document.getElementById("aiText");
  if (textEl) {
    textEl.innerText = text;
  }

  // Voice (Hindi)
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "hi-IN";
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.cancel(); // purani awaaz band
  window.speechSynthesis.speak(speech);
}
