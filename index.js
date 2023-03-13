// function validateForm() {
//     let f = document.forms["myform"]["FName"].value;
//     let l = document.forms["myform"]["LName"].value;
    
//     if (f == "" || l == "") {
//       alert("FirstName & LastName Must Be Filled Out");
//       return false;
//     }
      
// }
// function number(){
    
//     let num = document.forms["myform"]["num"].value;
//     if (num == "/^[0-9]+$/") {
//         alert("FirstName & LastName Must Be Filled Out");
//       return false;
//     }
// }
$(document).ready(function(){
    $(".addbtn").click(function(){
      $(".addbtn").hide(2000);
      $(".myform").css("margin-top", "-48%");
      $(".myform").css("transition", "3s");

    });
    $(".submit").click(function(){
        $(".addbtn").show(2000);
        // $(".myform").hide();
      $(".myform").css("margin-top", "48%");
        $(".showdatda").css("margin-top","-5%");
      });
  });


  function forform(){
    var fn = document.getElementById("Fname");
    localStorage.setItem("Fname", fn.value);

    var ln = document.getElementById("LName");
    localStorage.setItem("LName", ln.value);

    var em = document.getElementById("email");
    localStorage.setItem("email", em.value);

    var num = document.getElementById("number");
    localStorage.setItem("number", num.value);

    var bd = document.getElementById("Birthdate");
    localStorage.setItem("Birthdate", bd.value);
    
    var at = document.getElementById("Appointment time");
    localStorage.setItem("Appointment time", at.value);
  
    var clr = document.getElementById("color");
    localStorage.setItem("color", clr.value);
  
    var pm = document.getElementsByClassName("Payment Mathod");
    
  for(i=0;i<=pm.length;i++){
    if (pm[i].checked) {
      localStorage.setItem("Payment Mathod", pm[i].value);
    }
  }
     
    var cb = document.getElementById("Age");
    localStorage.setItem("Age", cb.value);

    var age = document.getElementById("checkbox");
    localStorage.setItem("checkbox", age.value);

    var fl = document.getElementById("file");
    localStorage.setItem("file", fl.value);

  }
function formValidation(){
  var FirstName = document.getElementById("Fname").value;
  var LastName = document.getElementById("LName").value;
  var Number = document.getElementById("number").value;

  // var Email = document.getElementById("email").value;

  if (!isNaN(FirstName)) {
    alert("Only Enter Name!");
    return false;
  }
  if (!isNaN(LastName)) {
    alert("Enter The Lastname !");
    return false;
  } 
  if (isNaN(Number)) {
    alert("Enter The Only Number !");
    return false;
  }  
  // if (!isNaN(Email)) {
  //   alert("Enter The Email !");
  //   return false;
  // } 
  
}
