// Reuse the solution created to dynamically create order form fields developed 
// in the previous sprint challenge

//Save the order details captured from the form in json-server using Axios API

let count=0;
function AddOrder(event){
    event.preventDefault();
    let orderElement = document.createElement('form');
     orderElement.innerHTML=`<div>
    <label for="Cateogry Name" class="form-label ">Cateogry Name</label>
    <input type="text" class="form-control" id="category${count}"  placeholder="Enter The category">
    </div>
    <div>
    <label for="Item Name" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="item${count}"  placeholder="Please Enter the name">
    </div>
    <div>
    <label for="Price" class="form-label">Price</label>
    <input type="text" class="form-control" id="price${count}"  placeholder="Please Enter the Price">
    </div>
    <div>
    <label for="Quantity" class="form-label">Quantity</label>
    <input type="text" class="form-control" id="quantity${count}" placeholder="0">
    </div>
    <div>
    <label for="Order Amount" class="form-label">Order Amount</label>
    <input type="text" class="form-control" id="amount${count}" placeholder="0">
    </div>`
    const orderData=document.getElementById("Orders");
    orderData.appendChild(orderElement);
   
    calculateAmount(`price${count}`,`quantity${count}`,`amount${count}`);
    count=count+1;
    console.log(count);
    
}

let amtarr=[];
function calculateAmount(price,quantity,amount){
    
   
    let Price=document.getElementById(price);
    let Quantity=document.getElementById(quantity);
    let Amount=document.getElementById(amount);

    Quantity.addEventListener("input", () => {
        Amount.value = Price.value * Quantity.value;
        amtarr.push(parseInt(Amount.value));
    })
   
   
   
    
}



let sum=0;
function calculateTotalAmt(){
    let totalAmount=document.getElementById("TotalAmount");
    for(let i=0;i<amtarr.length;i++){
        sum+=amtarr[i];
    }
    totalAmount.value=sum;
}


let url=" http://localhost:3002/order";
// Save the order details on clicking the submit button
function SaveOrder(event){
    calculateTotalAmt();
    const orderData = new FormData(event.target);
    const orderProps = Object.fromEntries(orderData);
    const orderPromise = axios.post(url,orderProps);
    orderPromise.then(response=>{
        event.preventDefault();
        console.log(response);
       
         
    });
    
}
function aleartf()
{
    
    alert(`Order has been submitted your bill is ${sum}`);
    
}