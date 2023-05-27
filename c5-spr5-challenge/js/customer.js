//Write  password validation code here 
function setPasswordConfirmValidity(event) {
    
    let password=document.getElementById("custPasword").value;
    let confirmPassword=document.getElementById("custConfirmPassword").value;
    if(password==confirmPassword){
        submitCustomerDetail(event);
    }
    else{
        event.preventDefault();
        const passwordError=document.getElementById("error");
        passwordError.innerHTML="password and confirmpassword shouls be same";
        
       
    }
    
}
// 

let url="http://localhost:3001/customers";
// Write code to submit customer details 
function submitCustomerDetail(event) {
    const customerData = new FormData(event.target);
    const customerProps = Object.fromEntries(customerData);
    const customerPromise = axios.post(url,customerProps);
    customerPromise.then(response=>{
        event.preventDefault();
        console.log(response);
    });
}



