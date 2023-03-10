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
      $(".addbtn").hide(1300);
      $(".myform").css("margin-top", "-35%");
      $(".myform").css("transition", "3s");

    });
    $(".submit").click(function(){
        $(".addbtn").show(2000);
        $(".myform").hide();
      });
  });

function forform(){
    let fn = document.getElementsById("Fname").value;

    let f = localStorage.setItem('fn',fn);
}
