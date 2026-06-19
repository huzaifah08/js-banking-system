# JavaScript Banking System

A simple banking system project built using HTML, CSS, and JavaScript.

This project demonstrates core JavaScript concepts including ES6 classes, constructors, methods, ES6 modules, objects, arrays, DOM manipulation, and basic validation logic.

## Live Demo

Add live demo link here after deployment.

## GitHub Repository

Add GitHub repository link here.

## Project Overview

The project creates a simple bank account system.

The user can:

- View the account holder name
- View the current balance
- Deposit money
- Withdraw money
- Prevent withdrawals when there are insufficient funds
- View transaction history
- See account updates in the browser console

## JavaScript Concepts Used

### ES6 Classes

The `Account` class is used as a blueprint for creating a bank account object.

```js
class Account {
  constructor(owner, startingBalance) {
    this.owner = owner;
    this.balance = startingBalance;
    this.transactions = [];
  }
}