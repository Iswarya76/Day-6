class Person{
    constructor(fname,lname,age,gender,location,email,contact){
       this.fname=fname
       this.lname=lname
       this.age=age
       this.gender=gender
       this.location=location
       this.email=email
       this.contact=contact
    }
    getAlldetail(){
        let per=`
        fname: ${this.fname}
        lname: ${this.lname}
        age: ${this.age}
        gender: ${this.gender}
        location: ${this.location}
        email: ${this.email}
        contact: ${this.contact}
        `
        return per
    }
}

const newPerson = new Person("Ashok", "Babu", 23, "Male", "Tamilnadu", "abc@gmail.com",9987654321);

console.log(newPerson.getAlldetail());