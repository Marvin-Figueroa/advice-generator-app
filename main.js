const quoteNumber = document.querySelector("#quote-number");
const quoteButton = document.querySelector("#btn-new-quote");
const quoteText = document.querySelector("#quote-text");

document.addEventListener("DOMContentLoaded", displayQuoteData);
quoteButton.addEventListener("click", displayQuoteData);

async function getQuoteData() {
  const quoteAPIendpoint = "https://api.adviceslip.com/advice";
  let quoteObj = null;

  try {
    quoteObj = await (await fetch(quoteAPIendpoint)).json();
  } catch (e) {
    console.error("The quote data could not be loaded...");
  }

  return quoteObj && quoteObj.slip;
}

async function displayQuoteData() {
  const quoteData = await getQuoteData();
  quoteNumber.textContent = quoteData ? quoteData.id : "000";
  quoteText.textContent = quoteData
    ? `"${quoteData.advice}"`
    : "Upss, the advice quote could not be loaded...wait and try again.";
}
