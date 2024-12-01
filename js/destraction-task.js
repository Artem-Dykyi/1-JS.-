const accaunt = {
    balance: 0,
    transaction: [],

    getBalance() {
        return `Ваш поточний баланс: ${this.balance} грн`;
    },

    deposit(amount) {
        if (amount <= 0) {
            return "Сума для поповнення повинна бути більше 0";
        }
        this.balance += amount;
        return `Ви успішно поповнили баланс на ${amount} грн. ${this.getBalance()}`;
    },

    withdraw(amount) {
        if (amount <= 0) {
            return "Сума для зняття повинна бути більше 0";
        }
        if (amount > this.balance) {
            return "Недостатньо коштів на рахунку для зняття";
        }
        this.balance -= amount;
        return `Ви успішно зняли ${amount} грн. ${this.getBalance()}`;
    }
}

const { balance, transactions, getBalance, deposit, withdraw, getTransactions } = account;

console.log(deposit(700));
console.log(withdraw(450));