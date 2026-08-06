// const menuToggle = document.getElementById("menuToggle");
// const sidebar = document.getElementById("sidebar");
// menuToggle.addEventListener("click", () => {
//   sidebar.classList.toggle("expanded");
// });

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  if (!menuToggle || !sidebar) return;

  menuToggle.addEventListener("click", () => {
    const isExpanded = sidebar.classList.toggle("expanded");

    document.body.classList.toggle(
      "sidebar-is-expanded",
      isExpanded
    );
  });
});


const profileButtons = document.querySelectorAll(".profile");

const profileForm = document.getElementById("profileForm");

const cancelUserPopupButton = document.getElementById("cancelUserPopupButton");
const editButton = document.getElementById("editButton");

const addUserForm=document.getElementById("addUserForm");

const userFirstName = document.getElementById("userFirstName");
const userLastName  = document.getElementById("userLastName");
const userNumber    = document.getElementById("userNumber");
const userEmail     = document.getElementById("userEmail");
const gstID         = document.getElementById("gstID");

// console.log("addUserForm:", addUserForm);
// console.log("editButton:", editButton);
// console.log("cancelUserPopupButton:", cancelUserPopupButton)

// localStorage.setItem("profile", JSON.stringify({ first: "Disha", last: "Test" }));

function setFieldsLocked(locked) {
  addUserForm.querySelectorAll("input").forEach(input => {
      input.disabled = locked;
    });
}
let fieldsLocked = false;

profileButtons.forEach(function(button){
  button.addEventListener("click",function(){
    // console.log("Profile button clicked:", button.id);

    const saved = localStorage.getItem("profile");

    if(saved === null){
      console.log("No profile data found in localStorage.")
      fieldsLocked=false;
      setFieldsLocked(fieldsLocked);
      editButton.textContent = "Save Details";
      addUserForm.reset();
    }
    else{
      const profileData=JSON.parse(saved);
      fieldsLocked=true;
      setFieldsLocked(fieldsLocked);
      console.log("Profile data loaded from localStorage:", profileData);
      document.getElementById("userFirstName").value = profileData.first;
      document.getElementById("userLastName").value = profileData.last;
      document.getElementById("userNumber").value = profileData.phn;
      document.getElementById("userEmail").value = profileData.email;
      document.getElementById("gstID").value = profileData.gstId;  
      fieldsLocked=true;
      setFieldsLocked(true);
      editButton.textContent = "Edit Details";             
    }
    
    profileForm.showModal();
  });
});

// editButton.addEventListener("click", () => {
//   console.log("submit button clicked");
// });

// // let users=[]
// // let edituser=null

addUserForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("submit fired");

    if (editButton.textContent === "Edit Details") {
      fieldsLocked = false;
      setFieldsLocked(false);
      editButton.textContent = "Save Details";
      return;
    }

    // Save Details mode
    const profileData = {
      first: userFirstName.value.trim(),
      last: userLastName.value.trim(),
      phn: userNumber.value.trim(),
      email: userEmail.value.trim(),
      gstId: gstID.value.trim(),
    };

    console.log("Saving profile:", profileData);
    localStorage.setItem("profile", JSON.stringify(profileData));

    fieldsLocked = true;
    setFieldsLocked(true);
    editButton.textContent = "Edit Details";
    profileForm.close();
});

profileForm.addEventListener("click", function (event) {
  if (event.target === profileForm) {
    profileForm.close();
  }
});

cancelUserPopupButton.addEventListener("click", function () {
  profileForm.close();
});

JSON.parse(localStorage.getItem("profile"))

// localStorage.removeItem("profile");

const phoneInput = document.getElementById("userNumber");

phoneInput.addEventListener("input", () => {
  console.log("Phone value now:", phoneInput.value);
  console.log("Length now:", phoneInput.value.length);
});