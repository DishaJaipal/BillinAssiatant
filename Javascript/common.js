const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
});


const profile = document.getElementById("profile1");
const profileForm = document.getElementById("profileForm");

const cancelUserPopupButton = document.getElementById("cancelUserPopupButton");
const editButton = document.getElementById("editButton");

const addUserForm=document.getElementById("addUserForm");


profile.addEventListener("click", function () {
  profileForm.showModal();
});

cancelUserPopupButton.addEventListener("click", function () {
  profileForm.close();
});

let users=[]
let edituser=null
addUserForm.addEventListener("submit",function(event){
    event.preventDefault();

    
    const first= document.getElementById("userFirstName").value.trim();
    const last= document.getElementById("userLastName").value.trim();
    const phn= document.getElementById("userNumber").value.trim();
    const email= document.getElementById("userEmail").value.trim();
    const gstid= document.getElementById("gstID").value.trim();

    if (users.length=== 0 || edituser === null) {
    const user = {
        id: "userID"+Math.random().toString(16).slice(2),
        first,
        last,
        phn,
        email,
        gstid,
    };
    // const total = item.quantity * item.price;
    // if(edittingItem===null){
    users.push(user);
    console.log("New user", user);
    edituser = user;
    profileForm.close();
    }
    else{

        edituser.first = first;
        edituser.last = last;
        edituser.phn = phn;
        edituser.email = email;
        edituser.gstid = gstid;
        console.log("User updated:", edituser);
        edituser = null;
        profileForm.close();
    }

    addUserForm.reset();
    profileForm.close();

});

profileForm.addEventListener("click", function (event) {
  if (event.target === profileForm) {
    profileForm.close();
  }
});
