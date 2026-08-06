const backButton = document.getElementById("backButton");
backButton.addEventListener("click", goBack);

function goBack() {
    window.history.back();
}


const addProductButton = document.getElementById("addProductButton");
const closePopupButton = document.getElementById("closePopupButton");
const addProductPopup = document.getElementById("addProductPopup");

addProductButton.addEventListener("click", showPopup);
closePopupButton.addEventListener("click", closePopup);


function showPopup() {
    console.log("Button Click");
    addProductPopup.style.display = "flex";
}

function closePopup() {
    addProductPopup.style.display = "none";
}


const productName = document.getElementById("Item");
const cost = document.getElementById("cost");
const weight = document.getElementById("Weight");
const quantity = document.getElementById("Quantity");
const status = document.getElementById("status");
const type = document.getElementById("itemType");
const brand = document.getElementById("itemBrand");

const submitButton = document.getElementById("submitButton");
const tableBody = document.getElementById("tableBody");

submitButton.addEventListener("click", addProduct);


function addProduct() {

    const product = productName.value.trim();
    const productCost = Number(cost.value);
    const productWeight = weight.value.trim();
    const productQuantity = Number(quantity.value);
    const productType = type.value.trim();
    const productBrand = brand.value.trim();
    const productStatus = status.value;

    // Validation
    if (
        product === "" ||
        cost.value === "" ||
        productWeight === "" ||
        quantity.value === "" ||
        type.value === "" ||
        brand.value === ""
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

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>
            <div class="item">
                <strong>${product}</strong>
                <br>
                <span class="item-description">
                    (${productType} - ${productBrand})
                </span>
            </div>
        </td>

        <td class="price">₹${productCost}</td>

        <td class="meta-text">${productWeight}</td>

        <td class="meta-text">${productQuantity}</td>

        <td class="status-cell" id="${
            productStatus === "Available"
                ? "available"
                : productStatus === "Low Stock"
                ? "lowStock"
                : "outOfStock"
        }">
            ${
                productStatus === "Available"
                    ? '<button class="status-btn"><img src="../../assets/icons/tick.png" alt="Available"></button>'
                    : productStatus === "Low Stock"
                    ? '<button class="status-btn"><img src="../../assets/icons/tick.png" alt="Low Stock"></button>'
                    : '<button class="status-btn"><img src="../../assets/icons/remove.png" alt="Out of Stock"></button>'
            }
        </td>

        <td class="action-buttons">
            <button class="icon-btn" onclick="editRow(this)">
                <img src="../../assets/icons/pencil.png" alt="Edit"/>
            </button>

            <button class="icon-btn" onclick="deleteRow(this)">
                <img src="../../assets/icons/delete.png" alt="Delete"/>
            </button>
        </td>
    `;

    const emptyBillRow = document.getElementById("emptyBillRow");

    if (emptyBillRow) {
        emptyBillRow.remove();
    }

    tableBody.appendChild(newRow);

    productName.value = "";
    cost.value = "";
    weight.value = "";
    quantity.value = "";

    closePopup();

    updateCards();
    updatePagination();
}


// Search
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", searchProduct);

function searchProduct() {

    const searchValue = searchInput.value.toLowerCase().trim();

    const rows = document.querySelectorAll("#tableBody tr");

    rows.forEach(function(row) {

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


// Delete
function deleteRow(button) {

    button.closest("tr").remove();

    const table = document.getElementById("tableBody");

    if (table.rows.length === 0) {

        const row = document.createElement("tr");

        row.id = "emptyBillRow";

        row.innerHTML = `
            <td colspan="6" class="empty-bill-cell">
                No bill items yet. Use Add Item or voice billing.
            </td>
        `;

        table.appendChild(row);
    }

    updateCards();
    updatePagination();
}


// Edit
function editRow(button) {

    const row = button.closest("tr");

    productName.value =
        row.querySelector("strong").textContent;

    cost.value =
        row.cells[1].textContent.replace("₹", "");

    weight.value =
        row.cells[2].textContent;

    quantity.value =
        row.cells[3].textContent;

    showPopup();

    row.remove();

    updateCards();
    updatePagination();
}


// Update status cards
window.onload = function () {
    updateCards();
};


function updateCards() {

    const rows = document.querySelectorAll("#tableBody tr");

    let itemsIn = 0;
    let lowStock = 0;
    let outOfStock = 0;

    rows.forEach(row => {

        const statusCell =
            row.querySelector(".status-cell");

        if (!statusCell) {
            return;
        }

        const statusId =
            statusCell.id;

        if (statusId === "available") {
            itemsIn++;
        }

        else if (statusId === "lowStock") {
            lowStock++;
        }

        else if (statusId === "outOfStock") {
            outOfStock++;
        }
    });


    document.getElementById("itemsInCount").textContent =
        String(itemsIn).padStart(2, "0");

    document.getElementById("lowStockCount").textContent =
        String(lowStock).padStart(2, "0");

    document.getElementById("outOfStockCount").textContent =
        String(outOfStock).padStart(2, "0");
}




// PAGINATION



const rowsPerPage = 6;
let currentPage = 1;

function getProductRows() {
    return Array.from(
        document.querySelectorAll("#tableBody tr")
    ).filter(row =>
        row.id !== "emptyBillRow" &&
        row.querySelector("strong")
    );
}

function updatePagination() {

    const rows = getProductRows();
    const totalProducts = rows.length;
    const totalPages = Math.ceil(totalProducts / rowsPerPage);

    if (totalPages === 0) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    // Hide all product rows
    rows.forEach(row => {
        row.style.display = "none";
    });

    // Show only 6 products on current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    rows.slice(startIndex, endIndex).forEach(row => {
        row.style.display = "";
    });

    // Update "Showing..."
    const paginationText =
        document.querySelector(".pagination-text");

    if (paginationText) {

        if (totalProducts === 0) {
            paginationText.textContent =
                "Showing 0 of 0 products";
        } else {

            const firstProduct = startIndex + 1;
            const lastProduct =
                Math.min(endIndex, totalProducts);

            paginationText.textContent =
                `Showing ${firstProduct}-${lastProduct} of ${totalProducts} products`;
        }
    }

    // Previous button
    const previousButton =
        document.querySelector(".pagination-buttons .pagination-btn:first-child");

    if (previousButton) {
        previousButton.disabled =
            currentPage === 1 || totalProducts === 0;
    }

    // Next button
    const nextButton =
        document.querySelector(".pagination-buttons .pagination-btn:last-child");

    if (nextButton) {
        nextButton.disabled =
            currentPage >= totalPages || totalProducts === 0;
    }
}


// Previous page
function previousPage() {

    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
}


// Next page
function nextPage() {

    const rows = getProductRows();
    const totalPages =
        Math.ceil(rows.length / rowsPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
}


// Initial pagination
document.addEventListener("DOMContentLoaded", function () {
    updatePagination();
});

addProductPopup.addEventListener("click",function(event){
    event.preventDefault();
    if (event.target === addProductPopup){
        closePopup();
    }
});