let account = JSON.parse(localStorage.getItem("account"));
let detail = account[account.length-1]
console.log(detail);

let name=document.createElement("h3");
name.innerText=`Name - ${detail.name}`

let email=document.createElement("h3");
email.innerText=`Email - ${detail.email}`

let company = document.createElement("h3");
company.innerText=`Company Name - ${detail.comname}`

let country = document.createElement("h3");
country.innerText=`Country - ${detail.cname}`

let input = document.createElement("input");
input.setAttribute("class","class");
input.placeholder="Enter OTP"


let btn=document.createElement("button")
btn.innerText="Confirm Your Order";
btn.addEventListener("click", () => {

    setTimeout(function(){
        alert("Enjoy Learning")
        window.location.href="../fw18_0390_falgun/createaccount day-5/createAccount.html"
    },1000)

    
})
document.getElementById("review1").append(name,email,country,input,btn)
// cemail: "sanjivmahto8@gmail.com"
// cname: "russia"
// comname: "gfgf"
// email: "sanjivmahto8@gmail.com"
// lname: "gyggi"
// name: "SANJIV KUMAR MAHTO"