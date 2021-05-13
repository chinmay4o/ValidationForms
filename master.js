
var btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  var fname = document.querySelector("#fname").value;
  var lname = document.querySelector("#lname").value;
  var address = document.querySelector("#home").value;
  var pincode = document.querySelector("#pincode").value;
  var food = getCheck();
        
  var gnd = getGender();
  var state = document.querySelector("#state").value;
  var country = document.querySelector("#country").value;
  //   <<<<<<<<<< innertex0x0 >>>>>>>>>>>>>>
    if (fname && lname && address && pincode && 
      food && gnd && state && country ){

      document.querySelector("#w1").innerText = fname;
      document.querySelector("#w2").innerText = lname;
      document.querySelector("#w3").innerText = address;
      document.querySelector("#w4").innerText = pincode;
      document.querySelector("#w5").innerText = food;
      document.querySelector("#w6").innerText = gnd;
      document.querySelector("#w7").innerText = state;
      document.querySelector("#w8").innerText = country;
      }
     else {
      document.querySelector("#error").innerText ="Error: PLEASE FILL ALL THE DETAILS";
    }

      e.preventDefault();
});

// getchecked >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function getCheck() {
  var k = 0;
  var food3 = "";

  var f1 = document.getElementById("veg");
  var f2 = document.querySelector("#Non-veg");
  var f3 = document.querySelector("#Street");
  var f4 = document.querySelector("#Diet");
  var f5 = document.querySelector("#sweet");

  if (f1.checked === true) {
    k++;
    food3 += f1.value + ", ";
  }

  if (f2.checked === true) {
    k++;
    food3 +=f2.value + ", ";
      }

  if (f3.checked === true) {
    k++;
    food3 +=f3.value + ", ";
      }

  if (f4.checked === true) {
    k++;
    food3 +=f4.value + ", ";
      }

  if (f5.checked === true) {
    k++;
    food3 +=f5.value + ", ";
      }
  
  if (k !== 2) {
    document.querySelector("#error2").innerText ="Error: Please select any 2";
  } else{
    return food3;
  }

}

function getGender(){

  var gAll = "";

  var g1 = document.querySelector("#Gender");
  var g2 = document.querySelector("#Gender2");

  if (g1.checked){
    gAll = gAll + g1.value;
  }
   
  if (g2.checked){
    gAll = gAll + g2.value;
  }

  return gAll;
}



