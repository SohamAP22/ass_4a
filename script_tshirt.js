





function checkInputLength(len,id_el,name) {
    let  inputElement = document.getElementById(id_el);
    // const lengthDisplay = document.getElementById('lengthDisplay');
    
    let inputLength = inputElement.value.length;
    if (len >= inputLength) {

        console.log(inputLength)
    }
    //lengthDisplay.innerText = 'Length: ' + inputLength;
    else{
        alert(`Text length limit exceeded in ${name}`)
        inputElement.value=""
    }
    

    
  }
function quantity_check(id){
    let  inputElement = document.getElementById(id);
    if (inputElement.value>10){
        alert("You cannot select more than 10 quantity at a time")
        inputElement.value=10
    }
    else if (inputElement.value<1){
        alert("Cannot choose 0 items in quantity")
        inputElement.value=1
    }
    //console.log(inputElement.value)
 }

function check_mobile(id){
    let  inputElement = document.getElementById(id);
    if (inputElement.value.length ==9 ){
       
        
    } 
    else {
        console.log(inputElement.value.length)
        alert("Contact number invalid")
        inputElement.value=""
    }
}

// function validateForm(){
//     var today= new Date()
//     date= today.toLocaleDateString();
//     time= today.toLocaleTimeString();
//     var receipt = `
//       Order Receipt
//       Date: ${date}
//       Time: ${time}
//       Tagline: ${document.getElementById("tag_line").value}
//       Color: ${document.getElementById("color").value}
//       Size: ${document.getElementById("size").value}
//       Quantity: ${document.getElementById("quan").value}
//       Delivery Date: ${document.getElementByName("dod").value}
//       Contact No: ${document.getElementById("contact").value}
//       Address: ${document.getElementById("add").value}`
//       document.getElementById("receipt").value=receipt
//       alert(receipt)
// }
function validateForm(){
    color=document.getElementById("color").value
    var today= new Date()
    date= today.toLocaleDateString();
    time= today.toLocaleTimeString();
    tag=document.getElementById("tag_line").value
    size=document.getElementById("size").value
    quantity=document.getElementById("quan").value
    dod=document.getElementById("dod").value
    add=document.getElementById("add").value
    contact=document.getElementById("contact").value
    email=document.getElementById("email").value

    var receipt =`
    Order placed date:${date}
    Time of placement: ${time}
    Colour: ${color}
    Tagline: ${tag}
    Size: ${size}
    Quantity: ${quantity}
    Date of delivery: ${dod}
    Address: ${add}
    Contact: ${contact}
    Email: ${email}`
    // var receipt = `
    //   Order Receipt
    //   Date: ${date}
    //   Time: ${time}
    //   Tagline: ${document.getElementById("tag_line").value}
    //   Color: ${document.getElementById("color").value}
    //   Size: ${document.getElementById("size").value}
    //   Quantity: ${document.getElementById("quan").value}
    //   Delivery Date: ${document.getElementByName("dod").value}
    //   Contact No: ${document.getElementById("contact").value}
    //   Address: ${document.getElementById("add").value}`
    //   //document.getElementById("receipt").value=receipt
    // alert(`      Order Receipt
    // Date: ${date}
    // Time: ${time}
    // Tagline: ${document.getElementById("tag_line").value}
    // Color: ${document.getElementById("color").value}
    // Size: ${document.getElementById("size").value}
    // Quantity: ${document.getElementById("quan").value}
    // Delivery Date: ${document.getElementByName("dod").value}
    // Contact No: ${document.getElementById("contact").value}
    // Address: ${document.getElementById("add").value}`) 
    alert(receipt)
   
}