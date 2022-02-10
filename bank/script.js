//Handling Deposit and Balance section by Add Balance button
document.getElementById('add-balance').addEventListener('click', function () {
    //For adding balance to Deposit section
    const inputAmount = parseFloat(document.getElementById('input-amount').value);
    const depositAmount = parseFloat(document.getElementById('deposit-amount').innerText);
    const totalDeposit = depositAmount + inputAmount;
    document.getElementById('deposit-amount').innerText = totalDeposit;

    //For adding balance to Balance section
    const balanceAmount = parseFloat(document.getElementById('balance-amount').innerText);
    const totalBalance = balanceAmount + inputAmount;
    document.getElementById('balance-amount').innerText = totalBalance;

    //Clearing input field after adding balance
    document.getElementById('input-amount').value = '';
});
//Handling Withdrawn and Balance section by Withdrawn button
document.getElementById('withraw-balance').addEventListener('click', function () {
    const withdrawn = parseFloat(document.getElementById('add-withdraw').value);
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').innerText);
    const totalWithdraw = withdrawn + withdrawAmount;
    document.getElementById('withdraw-amount').innerText = totalWithdraw;

    const balanceAmount = parseFloat(document.getElementById('balance-amount').innerText);
    const balanceSoFar = balanceAmount - withdrawn;
    document.getElementById('balance-amount').innerText = balanceSoFar;

    document.getElementById('add-withdraw').value = '';
})