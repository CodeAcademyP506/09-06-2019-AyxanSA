function Phone(_brand, _modelName, _balance, _chargeBalance) {

    this.brand = _brand;
    this.modelName = _modelName;
    this.balance = _balance;
    this.chargeBalance = _chargeBalance;
    this.getinfo = function () {
        return "Phone: " + this.brand + " " + this.modelName + " | "
            + "Balance: " + this.getBalance() + " | "
            + "Charge: " + this.getChargeBalance();
    };
    this.getBalance = function () {
        return this.balance
    };
    this.getChargeBalance = function () {
        return this.chargeBalance
    }
}


var samsung = new Phone("Samsung", "s8+", "34azn", "68%");
var nokia = new Phone("Nokia", "6110", "20azn", "57%");
var mi = new Phone("Motorolla", "Moto g7", "31azn", "86%");


console.log(samsung.getinfo())
console.log(nokia.getinfo())
console.log(mi.getinfo())