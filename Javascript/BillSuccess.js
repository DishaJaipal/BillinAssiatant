const Button = document.getElementById("backButton");
Button.addEventListener('click', goBack);


function goBack() {
    console.log("clicked")
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

window.onload = function () {

    document.getElementById("billNumber").textContent =
        localStorage.getItem("billNumber");

    document.getElementById("billDate").textContent =
        localStorage.getItem("billDate");
};

