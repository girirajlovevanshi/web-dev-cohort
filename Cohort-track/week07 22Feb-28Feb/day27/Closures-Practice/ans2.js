function bankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function (amount) {
            balance += amount;
            console.log(`Balance: ${balance}`);
        },
        withdraw: function (amount) {
            balance -= amount;
            console.log(`Balance: ${balance}`);
        },
        checkBalance: function () {
            return balance;
        }
    }
}

//test 
const myAccount = bankAccount(1000);
myAccount.deposit(500); // Balance: 1500
myAccount.withdraw(200); // Balance: 1300
console.log(myAccount.checkBalance()); // 1300
console.log(myAccount.balance); // Undefined (Should not be accessible)