


// // ============================================================
// // BILLING PAGE BUTTONS
// // ============================================================

// // WhatsApp button on billing page
// const whatsappBillButton =
//   document.getElementById("whatsapp-bill-button");

// if (whatsappBillButton) {
//   whatsappBillButton.addEventListener("click", shareReceipt);
// }
// =======
// >>>>>>> dd5404542cd6e35268ceac58504af60ff661a04a

// function shareReceipt() {

//   const message = "Here is your bill receipt.";

//   const whatsappURL =
//     "https://wa.me/?text=" + encodeURIComponent(message);

//   window.open(whatsappURL, "_blank");
// }


// // Print button on billing page
// const printBillButton =
//   document.getElementById("print-bill-button");

// if (printBillButton) {
//   printBillButton.addEventListener("click", printBill);
// }

// function printBill() {
//   window.print();
// }


// // ============================================================
// // ADD ITEM POPUP
// // ============================================================

// const openPopupButton =
//   document.getElementById("openPopupButton");

// const billItemForm =
//   document.getElementById("billItemForm");

// const cancelPopupButton =
//   document.getElementById("cancelPopupButton");

// const submitItem =
//   document.getElementById("submitItem");

// const addItemForm =
//   document.getElementById("addItemForm");

// const billItemsBody =
//   document.getElementById("billItemsBody");


// // ============================================================
// // BILL TOTAL ELEMENTS
// // ============================================================

// const subtotalEl =
//   document.getElementById("bill-subtotal");

// const gstEl =
//   document.getElementById("bill-gst");

// const grandTotalEl =
//   document.getElementById("bill-grand-total");

// const discountEl =
//   document.getElementById("bill-discount");

// const gstPer = 18;


// // ============================================================
// // OPEN ADD ITEM POPUP
// // ============================================================

// if (openPopupButton && billItemForm) {

//   openPopupButton.addEventListener("click", function () {

//     // Reset editing mode
//     edittingItem = null;

//     const dialogTitle =
//       billItemForm.querySelector("h2");

//     if (dialogTitle) {
//       dialogTitle.textContent = "Add bill item";
//     }
// <<<<<<< HEAD
// =======
//     billItemsBody.appendChild(newRow);
//     addItemForm.reset();
//     billItemForm.close();
//     items.push(item);
//     updateTotals();
//     addItemForm.reset();
//     document.getElementById("itemQuantity").value = 1;
    
  
//   } else {
//     edittingItem.name=document.getElementById("itemName").value.trim();
//     edittingItem.quantity= Number(document.getElementById("itemQuantity").value);
//     edittingItem.type=document.getElementById("itemType").value.trim();
//     edittingItem.brand=document.getElementById("itemBrand").value.trim();
//     edittingItem.price=Number(document.getElementById("itemPrice").value);
//     edittingItem.total=(Number(document.getElementById("itemQuantity").value))*(Number(document.getElementById("itemPrice").value));
    
//     const existingRow = billItemsBody.querySelector(`tr[data-item-id="${edittingItem.id}"]`);
//     if (existingRow) {
//       const quantityCell = existingRow.querySelector(".quantity-cell");
//       const priceCell = existingRow.querySelector(".price-cell");
//       const totalCell = existingRow.querySelector(".total-cell");
//       const itemCell = existingRow.children[1];
// >>>>>>> dd5404542cd6e35268ceac58504af60ff661a04a

//     if (submitItem) {
//       submitItem.textContent = "Add item";
//     }
// <<<<<<< HEAD
// =======
//     addItemForm.reset();
//     billItemForm.close();
//     updateTotals();
    
//     edittingItem=null;
//   }
// >>>>>>> dd5404542cd6e35268ceac58504af60ff661a04a

//     billItemForm.showModal();

//   });

// <<<<<<< HEAD
// =======
// billItemForm.addEventListener("click", function (event) {
//   if (event.target === billItemForm) {
//     billItemForm.close();
//   }
// });


// billItemsBody.addEventListener("click", function (event) {
//   const deleteButton = event.target.closest("button[data-action='delete']");
//   if (!deleteButton){
//     return;
//   }
//   const row= deleteButton.closest("tr");
//   let targetId =row.getAttribute("data-item-id");
//   row.remove();
//   const index = items.findIndex(it => it.id === targetId);
//   if (index !== -1) {
//     items.splice(index, 1);
//   }
//   console.log(items);
//   const table = document.querySelector("#billItemsBody");
//   if (table.rows.length===0){
//     const row = document.createElement("tr")
//     row.setAttribute('id','emptyBillRow');
//     row.innerHTML=`<td colspan="5" class="empty-bill-cell">
//                 No bill items yet. Use Add Item or voice billing.
//               </td>`;
//     table.appendChild(row);
//   }
//   subtotalEl.textContent = ``;
//   gstEl.textContent = ``;
//   discountEl.textContent = ``;
//   grandTotalEl.textContent = ``;


// });


// billItemsBody.addEventListener("click",function(event){
//   const editButton=event.target.closest("Button[data-action='editItem']");
//   if (!editButton){
//     return;
//   }
//   const row = editButton.closest("tr");
//   let targetId= row.getAttribute("data-item-id");
//   const target = items.find(item=>item.id===targetId);
//   if (!target){
//     return;
//   }
//   edittingItem=target;
//   console.log(edittingItem.id);
//   document.getElementById("itemName").value = target.name;
//   document.getElementById("itemQuantity").value = target.quantity;
//   document.getElementById("itemType").value = target.type;
//   document.getElementById("itemBrand").value = target.brand;
//   document.getElementById("itemPrice").value = target.price;

//   const dialogTitle = billItemForm.querySelector("h2");

//   dialogTitle.textContent ="Edit biill item"
//   submitItem.textContent = "Save changes";

//   billItemForm.showModal();
  

// });


// function updateTotals() {
//   // const subTotal = items.reduce((sum, item) => sum + item.total, 0);
//   // subtotalEl.textContent = `₹${subTotal.toFixed(2)}`;

//   // const gst = (subTotal * gstPer)/100;
//   // gstEl.textContent = `₹${gst.toFixed(2)}`;
//   const subGst=updateSubtotal();
  
//   // document.getElementById("discount-per").contentEditable = "true";
//   // const discountValueEl = document.getElementById("discount-per");
//   // const discountValue = Number(discountValueEl.textContent);
//   // discountEl.textContent = `₹${((subGst*discountValue)/100).toFixed(2)}`;

//   const discountValue=updateDiscount(subGst);

//   // const grandTotal = subGst - ((subGst*discountValue)/100);
//   // grandTotalEl.textContent = `₹${grandTotal.toFixed(2)}`;

//   updateGrandTotal(subGst,discountValue);
// }

// function updateSubtotal(){
//   let subTotal = items.reduce((sum, item) => sum + item.total, 0);
//   subtotalEl.textContent = `₹${subTotal.toFixed(2)}`;

//   let gst = (subTotal * gstPer)/100;
//   gstEl.textContent = `₹${gst.toFixed(2)}`;

//   let total=subTotal+gst; 

//   return total;

// }

// function updateGrandTotal(subGst,discountValue){
//   const grandTotal = subGst - ((subGst*discountValue)/100);
//   grandTotalEl.textContent = `₹${grandTotal.toFixed(2)}`;
// >>>>>>> dd5404542cd6e35268ceac58504af60ff661a04a
// }

// function updateDiscount(subGst){
//   document.getElementById("discount-per").contentEditable = "true";
//   const discountValueEl = document.getElementById("discount-per");
//   const discountValue = Number(discountValueEl.textContent);
//   discountEl.textContent = `₹${((subGst*discountValue)/100).toFixed(2)}`;

//   return discountValue;
// }

// const discount = document.getElementById("discount-per");
// discount.addEventListener("keydown",function(event){
//   if (event.key === "Enter"){
//     event.preventDefault();
//     discount.blur();
//   }
//   const subGst=updateSubtotal();
//   if (subGst){
//     const discountValue=updateDiscount(subGst);
//     updateGrandTotal(subGst,discountValue);

//   }
// });




// // ============================================================
// // CANCEL POPUP
// // ============================================================

// if (cancelPopupButton && billItemForm) {

//   cancelPopupButton.addEventListener("click", function () {

//     billItemForm.close();

//     addItemForm.reset();

//     document.getElementById("itemQuantity").value = 1;

//     edittingItem = null;

//     const dialogTitle =
//       billItemForm.querySelector("h2");

//     if (dialogTitle) {
//       dialogTitle.textContent = "Add bill item";
//     }

//     if (submitItem) {
//       submitItem.textContent = "Add item";
//     }

//   });

// }


// // ============================================================
// // BILL ITEMS ARRAY
// // ============================================================

// let items = [];

// let edittingItem = null;


// // ============================================================
// // ADD / EDIT ITEM
// // ============================================================

// if (addItemForm) {

//   addItemForm.addEventListener("submit", function (event) {

//     event.preventDefault();


//     // ========================================================
//     // ADD NEW ITEM
//     // ========================================================

//     if (edittingItem === null) {

//       const quantity =
//         Number(document.getElementById("itemQuantity").value);

//       const price =
//         Number(document.getElementById("itemPrice").value);


//       const item = {

//         id:
//           Date.now() +
//           Math.random().toString(16).slice(2),

//         name:
//           document.getElementById("itemName").value.trim(),

//         quantity: quantity,

//         type:
//           document.getElementById("itemType").value.trim(),

//         brand:
//           document.getElementById("itemBrand").value.trim(),

//         price: price,

//         total: quantity * price

//       };


//       console.log("New bill item:", item);


//       // ======================================================
//       // CREATE TABLE ROW
//       // ======================================================

//       const newRow =
//         document.createElement("tr");

//       newRow.setAttribute(
//         "data-item-id",
//         item.id
//       );


//       newRow.innerHTML = `

//         <td class="quantity-cell">
//           ${item.quantity}
//         </td>

//         <td>
//           ${item.name}

//           <br>

//           <span class="item-description">
//             (${item.type} - ${item.brand})
//           </span>
//         </td>

//         <td class="price-cell">
//           ₹${item.price.toFixed(2)}
//         </td>

//         <td class="total-cell">
//           ₹${item.total.toFixed(2)}
//         </td>

//         <td>

//           <div class="row-actions">

//             <button
//               class="edit-item-button"
//               data-action="editItem"
//               type="button"
//               aria-label="Edit ${item.name}"
//             >

//               <img
//                 src="../../assets/icons/pencil.png"
//                 alt=""
//               >

//             </button>


//             <button
//               class="delete-item-button"
//               data-action="delete"
//               type="button"
//               aria-label="Remove ${item.name}"
//             >

//               <img
//                 src="../../assets/icons/delete.png"
//                 alt=""
//               >

//             </button>

//           </div>

//         </td>
//       `;


//       // ======================================================
//       // REMOVE EMPTY ROW
//       // ======================================================

//       const emptyBillRow =
//         document.getElementById("emptyBillRow");

//       if (emptyBillRow) {
//         emptyBillRow.remove();
//       }


//       // ======================================================
//       // ADD ROW TO TABLE
//       // ======================================================

//       billItemsBody.appendChild(newRow);


//       // Add item to array
//       items.push(item);


//       // Update totals
//       updateTotals();


//       // Close popup
//       billItemForm.close();


//       // Reset form
//       addItemForm.reset();

//       document.getElementById("itemQuantity").value = 1;


//       return;
//     }


//     // ========================================================
//     // EDIT EXISTING ITEM
//     // ========================================================

//     edittingItem.name =
//       document.getElementById("itemName").value.trim();

//     edittingItem.quantity =
//       Number(
//         document.getElementById("itemQuantity").value
//       );

//     edittingItem.type =
//       document.getElementById("itemType").value.trim();

//     edittingItem.brand =
//       document.getElementById("itemBrand").value.trim();

//     edittingItem.price =
//       Number(
//         document.getElementById("itemPrice").value
//       );


//     edittingItem.total =
//       edittingItem.quantity *
//       edittingItem.price;


//     // ========================================================
//     // FIND EXISTING TABLE ROW
//     // ========================================================

//     const existingRow =
//       billItemsBody.querySelector(
//         `tr[data-item-id="${edittingItem.id}"]`
//       );


//     if (existingRow) {

//       const quantityCell =
//         existingRow.querySelector(".quantity-cell");

//       const priceCell =
//         existingRow.querySelector(".price-cell");

//       const totalCell =
//         existingRow.querySelector(".total-cell");

//       const itemCell =
//         existingRow.children[1];


//       quantityCell.textContent =
//         edittingItem.quantity;


//       itemCell.innerHTML = `

//         ${edittingItem.name}

//         <br>

//         <span class="item-description">
//           (${edittingItem.type} - ${edittingItem.brand})
//         </span>

//       `;


//       priceCell.textContent =
//         `₹${edittingItem.price.toFixed(2)}`;


//       totalCell.textContent =
//         `₹${edittingItem.total.toFixed(2)}`;

//     }


//     // Update totals
//     updateTotals();


//     // Close popup
//     billItemForm.close();


//     // Reset form
//     addItemForm.reset();

//     document.getElementById("itemQuantity").value = 1;


//     // Reset editing mode
//     edittingItem = null;


//     // Change popup back to Add mode
//     const dialogTitle =
//       billItemForm.querySelector("h2");

//     if (dialogTitle) {
//       dialogTitle.textContent = "Add bill item";
//     }

//     if (submitItem) {
//       submitItem.textContent = "Add item";
//     }

//   });

// }


// // ============================================================
// // CLOSE POPUP WHEN CLICKING OUTSIDE
// // ============================================================

// if (billItemForm) {

//   billItemForm.addEventListener("click", function (event) {

//     if (event.target === billItemForm) {

//       billItemForm.close();

//       addItemForm.reset();

//       document.getElementById("itemQuantity").value = 1;

//       edittingItem = null;

//       const dialogTitle =
//         billItemForm.querySelector("h2");

//       if (dialogTitle) {
//         dialogTitle.textContent = "Add bill item";
//       }

//       if (submitItem) {
//         submitItem.textContent = "Add item";
//       }

//     }

//   });

// }


// // ============================================================
// // DELETE ITEM
// // ============================================================

// if (billItemsBody) {

//   billItemsBody.addEventListener(
//     "click",
//     function (event) {

//       const deleteButton =
//         event.target.closest(
//           "button[data-action='delete']"
//         );


//       if (!deleteButton) {
//         return;
//       }


//       const row =
//         deleteButton.closest("tr");


//       if (!row) {
//         return;
//       }


//       const targetId =
//         row.getAttribute("data-item-id");


//       // Remove row
//       row.remove();


//       // Remove item from array
//       const index =
//         items.findIndex(
//           item => item.id === targetId
//         );


//       if (index !== -1) {

//         items.splice(index, 1);

//       }


//       console.log("Remaining items:", items);


//       // ======================================================
//       // SHOW EMPTY ROW
//       // ======================================================

//       if (billItemsBody.rows.length === 0) {

//         const emptyRow =
//           document.createElement("tr");

//         emptyRow.setAttribute(
//           "id",
//           "emptyBillRow"
//         );


//         emptyRow.innerHTML = `

//           <td
//             colspan="5"
//             class="empty-bill-cell"
//           >
//             No bill items yet. Use Add Item or voice billing.
//           </td>

//         `;


//         billItemsBody.appendChild(emptyRow);

//       }


//       // Update totals
//       updateTotals();

//     }
//   );

// }


// // ============================================================
// // EDIT ITEM
// // ============================================================

// if (billItemsBody) {

//   billItemsBody.addEventListener(
//     "click",
//     function (event) {

//       const editButton =
//         event.target.closest(
//           "button[data-action='editItem']"
//         );


//       if (!editButton) {
//         return;
//       }


//       const row =
//         editButton.closest("tr");


//       if (!row) {
//         return;
//       }


//       const targetId =
//         row.getAttribute("data-item-id");


//       const target =
//         items.find(
//           item => item.id === targetId
//         );


//       if (!target) {
//         return;
//       }


//       // Store item being edited
//       edittingItem = target;


//       console.log(
//         "Editing item:",
//         edittingItem.id
//       );


//       // ======================================================
//       // PUT DATA INTO FORM
//       // ======================================================

//       document.getElementById("itemName").value =
//         target.name;

//       document.getElementById("itemQuantity").value =
//         target.quantity;

//       document.getElementById("itemType").value =
//         target.type;

//       document.getElementById("itemBrand").value =
//         target.brand;

//       document.getElementById("itemPrice").value =
//         target.price;


//       // ======================================================
//       // CHANGE POPUP TITLE
//       // ======================================================

//       const dialogTitle =
//         billItemForm.querySelector("h2");


//       if (dialogTitle) {
//         dialogTitle.textContent =
//           "Edit bill item";
//       }


//       // Change button text
//       submitItem.textContent =
//         "Save changes";


//       // Open popup
//       billItemForm.showModal();

//     }
//   );

// }


// // ============================================================
// // UPDATE TOTALS
// // ============================================================

// function updateTotals() {

//   // ==========================================================
//   // SUBTOTAL
//   // ==========================================================

//   const subTotal =
//     items.reduce(
//       (sum, item) => sum + item.total,
//       0
//     );


//   subtotalEl.textContent =
//     `₹${subTotal.toFixed(2)}`;


//   // ==========================================================
//   // GST
//   // ==========================================================

//   const gst =
//     (subTotal * gstPer) / 100;


//   gstEl.textContent =
//     `₹${gst.toFixed(2)}`;


//   // ==========================================================
//   // DISCOUNT
//   // ==========================================================

//   const discountValueEl =
//     document.getElementById("discount-per");


//   if (!discountValueEl) {
//     return;
//   }


//   discountValueEl.contentEditable = "true";


//   const discountValue =
//     Number(
//       discountValueEl.textContent
//     ) || 0;


//   discountEl.textContent =
//     `₹${discountValue.toFixed(2)}`;


//   // ==========================================================
//   // GRAND TOTAL
//   // ==========================================================

//   const grandTotal =
//     subTotal +
//     gst -
//     discountValue;


//   grandTotalEl.textContent =
//     `₹${grandTotal.toFixed(2)}`;

// }


// ============================================================
// SUCCESS SCREEN
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const voiceBillingView =
      document.getElementById(
        "voiceBillingView"
      );


    const billSuccessScreen =
      document.getElementById(
        "billSuccessScreen"
      );


    const generateBillButton =
      document.getElementById(
        "generateBillButton"
      );


    const backButton =
      document.getElementById(
        "backButton"
      );


    const successShareButton =
      document.getElementById(
        "shareReceiptButton"
      );


    const successPrintButton =
      document.getElementById(
        "printBillButton"
      );


    const newBillButton =
      document.getElementById(
        "newBill"
      );


    // ========================================================
    // GENERATE BILL
    // ========================================================

    if (
      generateBillButton &&
      voiceBillingView &&
      billSuccessScreen
    ) {

      generateBillButton.addEventListener(
        "click",
        () => {

          voiceBillingView.classList.add(
            "hidden"
          );


          billSuccessScreen.classList.remove(
            "hidden"
          );

        }
      );

    }


    // ========================================================
    // BACK BUTTON
    // ========================================================

    if (backButton) {

      backButton.addEventListener(
        "click",
        () => {

          billSuccessScreen.classList.add(
            "hidden"
          );


          voiceBillingView.classList.remove(
            "hidden"
          );

        }
      );

    }


    // ========================================================
    // SHARE RECEIPT
    // ========================================================

    if (successShareButton) {

      successShareButton.addEventListener(
        "click",
        shareReceipt
      );

    }


    // ========================================================
    // PRINT BILL
    // ========================================================

    if (successPrintButton) {

      successPrintButton.addEventListener(
        "click",
        printBill
      );

    }


    // ========================================================
    // NEW BILL
    // ========================================================

    if (newBillButton) {

      newBillButton.addEventListener(
        "click",
        () => {

          // Hide success screen
          billSuccessScreen.classList.add(
            "hidden"
          );


          // Show billing page
          voiceBillingView.classList.remove(
            "hidden"
          );


          // Clear items array
          items = [];


          // Reset editing
          edittingItem = null;


          // Clear table
          billItemsBody.innerHTML = `

            <tr id="emptyBillRow">

              <td
                colspan="5"
                class="empty-bill-cell"
              >
                No bill items yet. Use Add Item or voice billing.
              </td>

            </tr>

          `;


          // Reset form
          if (addItemForm) {

            addItemForm.reset();

          }


          // Set default quantity
          const quantityInput =
            document.getElementById(
              "itemQuantity"
            );


          if (quantityInput) {

            quantityInput.value = 1;

          }


          // Reset popup title
          if (billItemForm) {

            const dialogTitle =
              billItemForm.querySelector("h2");


            if (dialogTitle) {

              dialogTitle.textContent =
                "Add bill item";

            }

          }


          // Reset submit button
          if (submitItem) {

            submitItem.textContent =
              "Add item";

          }


          // Update totals
          updateTotals();

        }
      );

    }

  }
);