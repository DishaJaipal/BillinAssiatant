const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
});

const shareReceiptButton = document.getElementById("whatsapp-bill-button",);
shareReceiptButton.addEventListener("click", shareReceipt);
function shareReceipt() {
  const message = "Here is your bill receipt.";
  const whatsappURL =
    "https://wa.me/?text=" + encodeURIComponent(message);
  window.open(whatsappURL, "_blank");
}

const printBillButton = document.getElementById("print-bill-button");
printBillButton.addEventListener("click", printBill);
function printBill() {
  window.print();
}


const openPopupButton = document.getElementById("openPopupButton");
const billItemForm = document.getElementById("billItemForm");

const cancelPopupButton = document.getElementById("cancelPopupButton");
const submitItem = document.getElementById("submitItem");

const addItemForm = document.getElementById("addItemForm");
const billItemsBody = document.getElementById("billItemsBody");

const subtotalEl = document.getElementById("bill-subtotal");
const gstEl = document.getElementById("bill-gst");
const grandTotalEl = document.getElementById("bill-grand-total");
const discountEl = document.getElementById("bill-discount");

openPopupButton.addEventListener("click", function () {
  billItemForm.showModal();
});

cancelPopupButton.addEventListener("click", function () {
  billItemForm.close();
});


let items=[];
let edittingItem=null;
addItemForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (edittingItem === null) {
    const item = {
      id: Date.now() + Math.random().toString(16).slice(2),
      name: document.getElementById("itemName").value.trim(),
      quantity: Number(document.getElementById("itemQuantity").value),
      type: document.getElementById("itemType").value.trim(),
      brand: document.getElementById("itemBrand").value.trim(),
      price: Number(document.getElementById("itemPrice").value),
      total : (Number(document.getElementById("itemQuantity").value))*(Number(document.getElementById("itemPrice").value)),
    };
    // const total = item.quantity * item.price;
    // if(edittingItem===null){
    console.log("New bill item:", item);
    const newRow = document.createElement("tr");
    newRow.setAttribute("data-item-id",item.id);
    newRow.innerHTML = `
    <td class="quantity-cell" >${item.quantity}</td>
    <td>
      ${item.name}
      <br>
      <span class="item-description">
        (${item.type} - ${item.brand})
      </span>
    </td>
    
    <td class="price-cell">₹${item.price.toFixed(2)}</td>
    <td class="total-cell">₹${(item.total).toFixed(2)}</td>
    
    <td>
      <div class="row-actions">
        <button
          class="edit-item-button"
          data-action="editItem"
          type="button"
          aria-label="Edit ${item.name}"
        >
          <img src="../../assets/icons/pencil.png" alt="">
        </button>
        <button
          class="delete-item-button"
          data-action="delete"
          type="button"
          aria-label="Remove ${item.name}"
        >
          <img src="../../assets/icons/delete.png" alt="">
        </button>
      </div>
    </td>
    `;
    const emptyBillRow = document.getElementById("emptyBillRow");
    if (emptyBillRow) {
      emptyBillRow.remove();
    }
    billItemsBody.appendChild(newRow);
    items.push(item)
    addItemForm.reset();
    document.getElementById("itemQuantity").value = 1;
  
  } else {
    edittingItem.name=document.getElementById("itemName").value.trim();
    edittingItem.quantity= Number(document.getElementById("itemQuantity").value);
    edittingItem.type=document.getElementById("itemType").value.trim();
    edittingItem.brand=document.getElementById("itemBrand").value.trim();
    edittingItem.price=Number(document.getElementById("itemPrice").value);
    edittingItem.total=(Number(document.getElementById("itemQuantity").value))*(Number(document.getElementById("itemPrice").value));
    
    const existingRow = billItemsBody.querySelector(`tr[data-item-id="${edittingItem.id}"]`);
    if (existingRow) {
      const quantityCell = existingRow.querySelector(".quantity-cell");
      const priceCell = existingRow.querySelector(".price-cell");
      const totalCell = existingRow.querySelector(".total-cell");
      const itemCell = existingRow.children[1];

      quantityCell.textContent = edittingItem.quantity;
      itemCell.innerHTML = `${edittingItem.name}
      <br>
      <span class="item-description">
      (${edittingItem.type} - ${edittingItem.brand})
      </span>
      `;
      priceCell.textContent = `₹${edittingItem.price.toFixed(2)}`;
      totalCell.textContent = `₹${edittingItem.total.toFixed(2)}`;
    }

    addItemForm.reset();
    edittingItem=null;
  }
  
  billItemForm.close();
  

  
});


billItemForm.addEventListener("click", function (event) {
  if (event.target === billItemForm) {
    billItemForm.close();
  }
});


billItemsBody.addEventListener("click", function (event) {
  const deleteButton = event.target.closest("button[data-action='delete']");
  if (!deleteButton){
    return;
  }
  const row= deleteButton.closest("tr");
  let targetId =row.getAttribute("data-item-id");
  row.remove();
  const index = items.findIndex(it => it.id === targetId);
  if (index !== -1) {
    items.splice(index, 1);
  }
  console.log(items);
  const table = document.querySelector("#billItemsBody");
  if (table.rows.length===0){
    const row = document.createElement("tr")
    row.setAttribute('id','emptyBillRow');
    row.innerHTML=`<td colspan="5" class="empty-bill-cell">
                No bill items yet. Use Add Item or voice billing.
              </td>`;
    table.appendChild(row);
  }
});


billItemsBody.addEventListener("click",function(event){
  const editButton=event.target.closest("Button[data-action='editItem']");
  if (!editButton){
    return;
  }
  const row = editButton.closest("tr");
  let targetId= row.getAttribute("data-item-id");
  const target = items.find(item=>item.id===targetId);
  if (!target){
    return;
  }
  edittingItem=target;
  console.log(edittingItem.id);
  document.getElementById("itemName").value = target.name;
  document.getElementById("itemQuantity").value = target.quantity;
  document.getElementById("itemType").value = target.type;
  document.getElementById("itemBrand").value = target.brand;
  document.getElementById("itemPrice").value = target.price;

  const dialogTitle = billItemForm.querySelector("h2");

  dialogTitle.textContent ="Edit biill item"
  submitItem.textContent = "Save changes";

  billItemForm.showModal();

});