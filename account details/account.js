

let data=JSON.parse(localStorage.getItem("account")) || [];


let form = document.getElementById("btn");
form.addEventListener("click",accountDetails)

function accountDetails(event){
    event.preventDefault();
    
    console.log("inside fun")

    let name=document.getElementById("name").value;
    let lname=document.getElementById("lname").value;
    let email=document.getElementById("email").value;
    let cemail=document.getElementById("cemail").value;
    let cname=document.getElementById("cname").value;
    let comname=document.getElementById("comname").value;

    let obj = new Account (name,lname,email,cemail,cname,comname)
    data.push(obj);

    localStorage.setItem("account",JSON.stringify(data));
    if(name=="" || lname=="" || email=="" || cemail=="" || cname=="" || comname==""){
        alert("Please fill all the details")
    }
    else{
        alert("Your account details is saved")
        alert("Please make your payment")
        window.location.href="payment.html"
    }
    
}

function Account(n,ln,e,ce,c,cn){
    this.name=n;
    this.lname=ln;
    this.email=e;
    this.cemail=ce;
    this.cname=c;
    this.comname=cn;
}