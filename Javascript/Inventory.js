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

addProductButton.addEventListener("click", showPopup);
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
const type= document.getElementById("itemType");
const brand= document.getElementById("itemBrand");

const submitButton = document.getElementById("submitButton");

const tableBody = document.getElementById("tableBody");

submitButton.addEventListener("click", addProduct);
function addProduct() {
     const product = productName.value.trim();
    const productCost = Number(cost.value);
    const productWeight = weight.value.trim();
    const productQuantity = Number(quantity.value);
    const productType=type.value.trim();
    const productBrand=brand.value.trim();
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

    // const rows = document.querySelectorAll("#tableBody tr");

    // for (let row of rows) {

    //     const existingProduct = row.querySelector("strong").textContent.trim().toLowerCase();

    //     if (existingProduct === product.toLowerCase()) {
    //         alert("Product already exists.");
    //         return;
    //     }
    // }

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
        <td class="status-cell">
         ${
            productStatus === "Available"
                ? '<button class="status-btn"><img src="../../assets/icons/tick.png" alt="Available"></button>'
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

// function deleteRow(button) {
//     button.closest("tr").remove();
//     const table = document.querySelector("table tbody");
//         if (table.rows.length===0){
//           const row = document.createElement("tr");
//           row.setAttribute('class','emptyBillRow');
//           row.innerHTML=`<td colspan="5" class="empty-bill-cell">
//                       No bill items yet. Use Add Item or voice billing.
//                     </td>`;

//         }
// }

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
}

function editRow(button) {
    const row = button.closest("tr");

    productName.value = row.querySelector("strong").textContent;
    cost.value = row.cells[1].textContent.replace("₹", "");
    weight.value = row.cells[2].textContent;
    quantity.value = row.cells[3].textContent;

    showPopup();
    row.remove();
}


// window.onload = function () {
//     updateCards();
// };

// function updateCards() {

//     const rows = document.querySelectorAll("#tableBody tr");

//     let itemsIn = 0;
//     let lowStock = 0;
//     let outOfStock = 0;

//     rows.forEach(function(row) {

//         if (row.id === "emptyBillRow") return;

//         itemsIn++;

//         const quantity = Number(row.cells[3].textContent);

//         if (quantity === 0) {
//             outOfStock++;
//         } else if (quantity <= 5) {
//             lowStock++;
//         }

//     });

//      document.getElementById("itemsInCount").textContent = itemsIn;
//      document.getElementById("lowStockCount").textContent = lowStock;
//      document.getElementById("outOfStockCount").textContent = outOfStock;
// }
