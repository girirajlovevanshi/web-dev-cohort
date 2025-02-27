# Mastering Closures in JavaScript: Real-Life Questions

## **1. Counter with Private State**

### **Problem:**

Create a function `createCounter()` that returns an object with two methods:

- `increment()`: Increases the counter by 1.
- `decrement()`: Decreases the counter by 1.
- `getCount()`: Returns the current count.

**Constraints:**

- The count should be private and not accessible directly.

```javascript
const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1
```

---

## **2. Secure Bank Account**

### **Problem:**

Create a function `bankAccount(initialBalance)` that returns an object with:

- `deposit(amount)`: Adds amount to the balance.
- `withdraw(amount)`: Deducts amount if sufficient balance is available.
- `checkBalance()`: Returns the current balance.

**Constraints:**

- The balance should be private and only modifiable through the provided methods.

```javascript
const myAccount = bankAccount(1000);
myAccount.deposit(500); // Balance: 1500
myAccount.withdraw(200); // Balance: 1300
console.log(myAccount.checkBalance()); // 1300
console.log(myAccount.balance); // Undefined (Should not be accessible)
```

---

## **3. Function Factory**

### **Problem:**

Write a function `createMultiplier(factor)` that returns a function which multiplies a given number by the provided factor.

```javascript
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
```

---

## **4. Delay Execution with Closures**

### **Problem:**

Create a function `delayedLogger(message, delay)` that logs `message` to the console after `delay` milliseconds. Use closures to retain the message value.

```javascript
delayedLogger("Hello, World!", 2000); // Logs "Hello, World!" after 2 seconds
```

---

## **5. Event Listener with Closures**

### **Problem:**

Create a function `buttonClickHandler(buttonId, message)` that adds a click event listener to a button. When clicked, the button should log the provided message.

```javascript
buttonClickHandler("myButton", "Button clicked!");
// Clicking the button with id "myButton" should log "Button clicked!"
```

---

## **Bonus Challenge**

Modify the `bankAccount()` function to support multiple accounts without conflicts.

Good luck mastering closures! 🚀

