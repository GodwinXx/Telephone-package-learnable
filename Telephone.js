class Telephone {
    constructor() {
        this.phoneNumber = undefined;
        this.contacts = new Set();
        this.observersArray = [];
}

    AddPhoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
        this.contacts.add(this.phoneNumber);
        if(this.contacts.has(phoneNumber) && this.contacts.has(phoneNumber) !== null ){
            console.log(`${phoneNumber} has been added!...\n`);
        }
        console.log(this.contacts);
    }

     RemovePhoneNumber(phoneNumber){
         this.contacts.delete(phoneNumber)
         if(!this.contacts.has(phoneNumber)){
               console.log(`${phoneNumber} has been deleted!...\n`);
               
         }
    }
      AddObserver(observer) {
        this.observersArray.push(observer)
   
        if(this.observersArray.includes(observer)) { 
            console.log('New observer has been added!....');
        }
    }
}
class Observer {
constructor(){
this.message = ''
}
}

//Exporting the Oberver class and Telephone class
module.exports = { Observer, Telephone }