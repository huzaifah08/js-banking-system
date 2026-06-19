

class Account {
    constructor(owner, startingBalance) {
      this.owner = owner;
      this.balance = startingBalance;
      this.transactions = [];
    }
  

    deposit(amount) {
      if (amount <= 0) {
        return "Deposit amount must be greater than zero.";
      }
  
      this.balance += amount;
      this.transactions.push(`Deposited £${amount}`);
  
      return `Successfully deposited £${amount}.`;
    }
  

    withdraw(amount) {
      if (amount <= 0) {
        return "Withdrawal amount must be greater than zero.";
      }
  
      if (amount > this.balance) {
        this.transactions.push(`Failed withdrawal of £${amount}`);
        return "Insufficient funds. Withdrawal cancelled.";
      }
  
      this.balance -= amount;
      this.transactions.push(`Withdrew £${amount}`);
  
      return `Successfully withdrew £${amount}.`;
    }
  

    getBalance() {
      return this.balance;
    }
  

    getTransactions() {
      return this.transactions;
    }
  }
  

  export default Account;