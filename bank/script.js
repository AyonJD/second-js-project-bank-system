//Making function for getting value from input field
function getInputValue(inputId) {
    const getInput = document.getElementById(inputId);
    const inputValue = parseFloat(getInput.value);
    //Clear input filed
    getInput.value = "";
    return inputValue;
  }
  
  //Making function for adding balance in deposit and withdraw field
  function totalCash(depositFieldId, inputAmount) {
    const depositField = document.getElementById(depositFieldId);
    const depositPrevious = parseFloat(depositField.innerText);
    depositField.innerText = depositPrevious + inputAmount;
  }
  
  //Making function for getting the current balance of Total deposit and Total balance field
  function currentBalance() {
    const balance = document.getElementById("balance-amount");
    const totalBalance = parseFloat(balance.innerText);
    return totalBalance;
  }
  
  //Making function for adding and removing balance from Total balance field
  function totalBalance(inputAmount, isAdd) {
    const oldBalance = currentBalance();
    const balanceTotal = document.getElementById("balance-amount");
    if (isAdd == true) {
      balanceTotal.innerText = oldBalance + inputAmount;
    } else {
      balanceTotal.innerText = oldBalance - inputAmount;
    }
  }
  
  //For Add Balance button
  document.getElementById("add-balance").addEventListener("click", function () {
    const depositAmount = getInputValue("input-amount");
    console.log(depositAmount);
    if (depositAmount <= 0 || isNaN(depositAmount) == true) {
      alert("Please enter a valid amount");
    } else {
      totalCash("deposit-amount", depositAmount);
      totalBalance(depositAmount, true);
    }
  });
  
  //For Withdraw button
  document
    .getElementById("withraw-balance")
    .addEventListener("click", function () {
      const withdrawAmount = getInputValue("add-withdraw");
      if (withdrawAmount <= 0 || isNaN(withdrawAmount) == true) {
        alert("Please enter a valid amount");
      } else {
        totalCash("withdraw-amount", withdrawAmount);
        totalBalance(withdrawAmount, false);
      }
    });
    