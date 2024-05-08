class Person {
    constructor(firstName, lastName, email, AadharNum, mobile) {
      this.firstName = firstName
      this.lastName = lastName
      this.email = email
      this.AadharNum=AadharNum
      this.mobile=mobile
    }
    getFullName() {
      var fullName = this.firstName + ' ' + this.lastName
      return fullName
    }

    getAadharNum(){
        return this.AadharNum
    }

    getEmail(){
        return this.email
    }

  }
  
  let p1 = new Person("Harish","Raajaa","rvharish@gmail.com",746789762345,8973815197)
  console.log(p1.getFullName())
  console.log(p1.getAadharNum())