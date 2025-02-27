function bankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function (amount) {
            balance += amount;
            console.log(`Balance: ${balance}`);
        },
        withdraw: function (amount) {
            if (balance >= amount) {
                balance -= amount;
                console.log(`Balance: ${balance}`);
            } else {
                console.log("Insufficient funds");
            }
        },
        checkBalance: function () {
            return balance;
        }
    }
}

// Creating multiple independent accounts
const account1 = bankAccount(1000);
const account2 = bankAccount(2000);

// Test Cases
account1.deposit(500); // Balance: 1500
account2.withdraw(1000); // Balance: 1000

console.log(account1.checkBalance()); // 1500
console.log(account2.checkBalance()); // 1000