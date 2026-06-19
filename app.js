import Account from "./account.js";



const myAccount = new Account("Huzaifah Ahmed", 500);



const accountOwnerElement = document.querySelector("#account-owner");
const balanceElement = document.querySelector("#balance");
const amountInput = document.querySelector("#amount");
const depositButton = document.querySelector("#deposit-btn");
const withdrawButton = document.querySelector("#withdraw-btn");
const messageElement = document.querySelector("#message");
const transactionList = document.querySelector("#transaction-list");



function updateDisplay() {
  accountOwnerElement.textContent = myAccount.owner;
  balanceElement.textContent = `£${myAccount.getBalance()}`;

  transactionList.innerHTML = "";

  myAccount.getTransactions().forEach((transaction) => {
    const listItem = document.createElement("li");
    listItem.textContent = transaction;
    transactionList.appendChild(listItem);
  });
}



function getAmount() {
  return Number(amountInput.value);
}


depositButton.addEventListener("click", () => {
  const amount = getAmount();

  const result = myAccount.deposit(amount);

  messageElement.textContent = result;
  amountInput.value = "";

  updateDisplay();

  console.log("Deposit completed");
  console.log(myAccount);
});



withdrawButton.addEventListener("click", () => {
  const amount = getAmount();

  const result = myAccount.withdraw(amount);

  messageElement.textContent = result;
  amountInput.value = "";

  updateDisplay();

  console.log("Withdrawal attempted");
  console.log(myAccount);
});



console.log("Banking system loaded");
console.log("Initial account:", myAccount);



updateDisplay();