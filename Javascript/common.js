const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
});


const profileButtons = document.querySelectorAll(".profile");

const profileForm = document.getElementById("profileForm");

const cancelUserPopupButton = document.getElementById("cancelUserPopupButton");
const editButton = document.getElementById("editButton");

const addUserForm=document.getElementById("addUserForm");

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
      console.log("No profile data found in localStorage.");
      setFieldsLocked(fieldsLocked);
      editButton.textContent = "Save Details";
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



// // let users=[]
// // let edituser=null

addUserForm.addEventListener("submit",function(event){
    event.preventDefault();

    if (fieldsLocked) {
      fieldsLocked = false;
      setFieldsLocked(fieldsLocked);
      editButton.textContent = "Save Details";
      return;
    }
    else{
      const profileData={
        first: document.getElementById("userFirstName").value.trim(),
        last: document.getElementById("userLastName").value.trim(),
        phn: Number(document.getElementById("userNumber").value.trim()),
        email: document.getElementById("userEmail").value.trim(),
        gstId: document.getElementById("gstID").value.trim(),
        
      };
      localStorage.setItem("profile", JSON.stringify(profileData));
      profileForm.close();
    }
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