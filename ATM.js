function dep(){
    var Amount = userAmount.value;
    var output = para.value;
    userAmount.value = ""
      if (Amount){
        let total = Number(Amount) + Number(output)
        para.value = total
        par.innerText = total
        write.innerHTML = "<b>You Have Successfully Deposited to your account and your balance is now " + total + ".00k</b>"
        write.style.color = "white"

    }else if (Amount === "" || Amount === 'string'){
        write.innerHTML = "<b>Please Input Your Amount</b>"
        write.style.color = "purple"
    }else if (Amount == 0){
        write.innerHTML = "<b>Please Input Your Amount</b>"
        write.style.color = "red"
    }else if (Amount){
        para.value = Amount
     }
     }

function Tran(){
        var Amount = userAmount.value;
        var output = para.value;
    userAmount.value = ""

     if (Amount === "" || Amount === 'string'){
        write.innerHTML = "<b>Please Input Your Amount</b>"
        write.style.color = "tomato"
     }else if (Amount > output ){
        write.innerHTML = "<b>Insufficient Fund</b>"
        write.style.color = "purple"
        para.value = output
        par.innerText = output
    }else if (Amount){
        let total = Number(output) - Number(Amount)
        para.value = total
        par.innerText = total
        write.innerHTML = "<b>You Have Successfully Transfer to Another account and your balance is now " + total + ".00k </b>"
        write.style.color = "white"
    }
}

function With(){
    var Amount = userAmount.value;
    var output = para.value;
    userAmount.value = ""
    

    if (Amount === "" || Amount === 'string'){
        write.innerHTML = "<b>Please Input Your Amount</b>"
        write.style.color = "purple"
    }else if(output === " "){
        write.innerHTML = "<b>Please Input Your Amount</b>"
        write.style.color = "purple"
    }else if(Amount > output){
        write.innerHTML = "<b>Not sufficient Fund</b>"
        write.style.color = "green"
    } else if (Amount){
        let total = Number(output) - Number(Amount)
        write.innerHTML = "<b>You have successfully withdrawl from your Account and your balance is now " + total + ".00k</b>"
        write.style.color = "white"
        para.value = total
        par.innerText = total
    }
}

function cash(){
    var getConfirm = confirm("Are you sure you want to make this transaction?, this transaction will clear all your transaction history and the balance, and this transaction is irreversible")
    
    if(getConfirm == true){
        write.innerHTML = "<b>You have successfully Cash all your money out from your Account and your balance is now " + ".00k</b>"
        para.value = ""
        par.innerText = ""
    }else{
        alert("You better be careful")
    }
    // write.innerHTML = "<b>Sorry, this service is not available</b>"   
}