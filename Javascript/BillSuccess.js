document.addEventListener("DOMContentLoaded", () => {
const backButton = document.getElementById("backButton");
backButton.addEventListener('click', goBack);
});

function goBack() {
    console.log("clicked");
    window.history.back();
}

const shareReceiptButton = document.getElementById("shareReceiptButton");


shareReceiptButton.addEventListener("click", shareReceipt);
function shareReceipt() {

    const message = "Here is your bill receipt.";

    const whatsappURL =
        "https://wa.me/?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}

const printBillButton = document.getElementById("printBillButton");

printBillButton.addEventListener("click", printBill);

function printBill() {
    window.print();
}

document.addEventListener("DOMContentLoaded", () => {
    const newBillButton = document.getElementById("newBill");
    newBillButton.addEventListener("click", openBillingPage);
});

const backButton = document.getElementById("newBill");
function openBillingPage() {
    console.log("New Bill clicked");
    window.location.href = "../voiceBilling/voiceBilling.html";
}
