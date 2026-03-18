class ATM{
    withdraw(amount){
        this.#Verifypin()
        console.log(amount +"Withdraw")
    }
    #Verifypin(){
        console.log("Pin Verified")
    }

    }


let cash=new ATM()
cash.withdraw(500)
