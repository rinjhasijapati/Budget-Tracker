let errorMessage = document.getElementById("budget-error");
let totalNumber = document.querySelector(".total-number");
let submitBtn = document.getElementById("set-budget");
let productTitleError = document.getElementById("expenses-error");
let productName = document.querySelector(".product-name");
let productCost = document.querySelector(".product-cost");
let checkBtn = document.getElementById("check-amt"); 
let amount = document.getElementById("amount");
let expenditure = document.getElementById("expenditure-value");
let balance = document.getElementById("balance-amt");
let list = document.getElementById("list");
let tempAmount = 0;

//setting the balance amount
submitBtn.addEventListener("click", ()=>{
    tempAmount = totalNumber.value;
    if(tempAmount === "" || tempAmount < 0){
        errorMessage.classList.remove("hide");
    }else{
        errorMessage.classList.add("hide");
        amount.innerHTML = tempAmount;
        balance.innerText = tempAmount - expenditure.innerText;
        //clear value 
        totalNumber.value = "";
    }
});

//disable edit and delete button function

