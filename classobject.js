class bank {
    createaccount(id,accno,name,amount) {

        this.id = id,
            this.accno = accno,
            this.name = name,
            this.amount = amount

            console.log(`h1 ${this.name} your account with account number ${this.accno} 
                created successfully`);
    }
    deposit(amount) {
        this.amount += amount
        console.log(`amount ${amount} is credited in your account ${this.accno}
            successfully, you current account balance is ${this.amount}`);
    }
    withdrawel(amount) {
        if (amount > this.amount) {
            console.log(`transaction error`)
        } else {
            (this.amount -= amount)
            console.log(`amount ${amount} is debited from your account,
                 your  current account balance is ${this.amount}`)
        }
    }
}///////////////////////