class Bank {
  createAccount(id, accNo, name, amount) {
    this.id = id;
    this.accNo = accNo;
    this.name = name;
    this.amount = amount;
    console.log(
      `Hi ${this.name}, your account with account number ${this.accNo} was created successfully.`
    );
  }

  deposit(amount) {
    this.amount += amount;
    console.log(
      `Amount ${amount} is credited to your account ${this.accNo} successfully. Your current account balance is ${this.amount}.`
    );
  }

  withdrawal(amount) {
    if (amount > this.amount) {
      console.log("Transaction error: Insufficient funds.");
    } else {
      this.amount -= amount;
      console.log(
        `Amount ${amount} is debited from your account. Your current balance is ${this.amount}.`
      );
    }
  }

  balance() {
    console.log(`Your account balance is ${this.amount}.`);
  }
}

const bankData = new Bank();
bankData.createAccount(10001, 456634566, "Karthika", 5000);
bankData.deposit(5000);
bankData.withdrawal(5500);
bankData.balance();
