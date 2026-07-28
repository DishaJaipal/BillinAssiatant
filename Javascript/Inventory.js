const menuToggle=document.getElementById("menuToggle");
const sidebar=document.getElementById("sidebar");
menuToggle.addEventListener('click',()=>{
    sidebar.classList.toggle('expanded');
});

const backButton = document.getElementById("backButton");
backButton.addEventListener("click", goBack);

function goBack() {
    window.history.back();
}


const addProductButton = document.getElementById("addProductButton");
const closePopupButton = document.getElementById("closePopupButton");
const addProductPopup = document.getElementById("addProductPopup");

addProductButton.addEventListener('click', showPopup);
closePopupButton.addEventListener("click", closePopup);

  


function showPopup(){
    console.log("Button Click")
    addProductPopup.style.display = 'flex';
}
function closePopup() {
  addProductPopup.style.display = "none";
}

const productName = document.getElementById("Item");
const cost = document.getElementById("cost");
const weight = document.getElementById("Weight");
const quantity = document.getElementById("Quantity");
const status = document.getElementById("status");

const submitButton = document.getElementById("submitButton");

const tableBody = document.getElementById("tableBody");

submitButton.addEventListener("click", addProduct);
function addProduct() {
     const product = productName.value.trim();
    const productCost = Number(cost.value);
    const productWeight = weight.value.trim();
    const productQuantity = Number(quantity.value);
    const productStatus = status.value;

    // Validation
    if (
        product === "" ||
        cost.value === "" ||
        productWeight === "" ||
        quantity.value === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    if (productCost < 0) {
        alert("Cost cannot be negative.");
        return;
    }

    if (productQuantity < 0) {
        alert("Quantity cannot be negative.");
        return;
    }

    const rows = document.querySelectorAll("#tableBody tr");

    for (let row of rows) {

        const existingProduct = row.querySelector("strong").textContent.trim().toLowerCase();

        if (existingProduct === product.toLowerCase()) {
            alert("Product already exists.");
            return;
        }
    }

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>
            <div class="item">
                <strong>${product}</strong>
            </div>
        </td>
        <td class="price">₹${productCost}</td>
        <td class="meta-text">${productWeight}</td>
        <td class="meta-text">${productQuantity}</td>
        <td class="meta-text">${productStatus}</td>
    `;

    tableBody.appendChild(newRow);

    productName.value = "";
    cost.value = "";
    weight.value = "";
    quantity.value = "";
    status.value = "Available";

    closePopup();
}

    



// Get the search input element
const searchInput = document.getElementById("searchInput");

// Listen for typing in the search box
searchInput.addEventListener("keyup", searchProduct);

// Search function
function searchProduct() {

    // Get the typed text and convert it to lowercase
    const searchValue = searchInput.value.toLowerCase().trim();

    // Get all rows from the table
    const rows = document.querySelectorAll("#tableBody tr");

    // Check each row
    rows.forEach(function(row) {

        // Get the product name
        const productName = row
            .querySelector("strong")
            .textContent
            .toLowerCase();

        
        if (productName.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

}


// Dashboard
const dashboardButton = document.getElementById("dashboardButton");

dashboardButton.addEventListener("click", openDashboard);

function openDashboard() {
    window.location.href = "../HTML/Dashboard.html";
}


// Inventory
const inventoryButton = document.getElementById("inventoryButton");

inventoryButton.addEventListener("click", openInventory);

function openInventory() {
    window.location.href = "../HTML/Inventory.html";
}


// Billing
const billingButton = document.getElementById("billingButton");

billingButton.addEventListener("click", openBilling);

function openBilling() {
    window.location.href = "../HTML/Billing.html";
}


// Profile
const profileButton = document.getElementById("profileButton");

profileButton.addEventListener("click", openProfile);

function openProfile() {
    window.location.href = "../HTML/Profile.html";
}