// let firstName = document.getElementById("firstName");
// let lastName = document.getElementById("lastName");
// let letUs = /^[A-Za-z]+$/;
// function changePg() {
//   if (firstName == ["/(?=.*[a-zA-Z])/"] && lastName == ["/(?=.*[a-zA-Z])/"]) {
//     location.href = "profile.html";
//   } else {
//     console.log("not working");
//   }
// }

// function changePg() {
//   let first_name = document.getElementById("firstName").value;
//   // let last_name = document.getElementById("lastName").value;

//   //email id expression code

//   let letters = /^[A-Za-z]+$/;

//   if (first_name == "") {
//     alert("Please enter your first name");
//   } else if (!letters.test(first_name)) {
//     alert("Name field required only alphabet characters");
//   } else {
//     // alert("Thank You for Login & You are Redirecting to Campuslife Website");
//     // Redirecting to other page or webste code.
//     location.href = "profile.html";
//   }
// }

function changePg() {
  var firstName = document.getElementById("firstName").value;

  //email id expression code

  var letters = /^[A-Za-z]+$/;

  if (name == "") {
    alert("Please enter your name");
  } else if (!letters.test(name)) {
    alert("Name field required only alphabet characters");
  } else if (email == "") {
    alert("Please enter your user email id");
  } else if (!filter.test(email)) {
    alert("Invalid email");
  } else if (uname == "") {
    alert("Please enter the user name.");
  } else if (!letters.test(uname)) {
    alert("User name field required only alphabet characters");
  } else if (pwd == "") {
    alert("Please enter Password");
  } else if (cpwd == "") {
    alert("Enter Confirm Password");
  } else if (!pwd_expression.test(pwd)) {
    alert(
      "Upper case, Lower case, Special character and Numeric letter are required in Password filed"
    );
  } else if (pwd != cpwd) {
    alert("Password not Matched");
  } else if (document.getElementById("t5").value.length < 6) {
    alert("Password minimum length is 6");
  } else if (document.getElementById("t5").value.length > 12) {
    alert("Password max length is 12");
  } else {
    alert("Thank You for Login & You are Redirecting to Campuslife Website");
    // Redirecting to other page or webste code.
    window.location = "profile.html";
  }
}
