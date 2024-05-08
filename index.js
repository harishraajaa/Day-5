console.log("Welcome Harish!!!")

// class user{
//     constructor(name,email,mobilenumber,pwd){
//         this.name=name
//         this.email=email
//         this.mobilenumber=mobilenumber
//         this.pwd=pwd
//     }

//     display(){
//         console.log(this.name,this.email,this.mobilenumber,this.pwd)
//     }
// }

// let user1 = new user("Harish","rvharish@gmail.com",8973815197,"123")
// let user2 = new user("Pavithra","paviforharish@gmail.com",8883670253)

// //console.log(user1.name,user1.email,user1.mobilenumber)

// user1.display()
// user2.display()


//----------------------------------------------------------------------------------------------------------

//Inheritance - Single

// class parent{
//     constructor(fname,famount){
//         this.fname=fname
//         this.famount=famount
//     }

//     pdisplay(){
//         console.log(`${this.fname} Holds Rs: ${this.famount}`)
//     }
// }


// class child extends parent{
//     constructor(cname,camount,fname,famount){
//         super(fname,famount)
//         this.cname=cname
//         this.camount=camount
//     }

//     cdisplay(){
//         console.log(`${this.cname} Holds Rs: ${this.camount} his father name is ${this.fname} and he holds Rs: ${this.famount}`)
//     }

//     totalasset(){
//         console.log(`Total Asset ${this.camount+this.famount}`)
//     }
// }


// let obj=new child("Harish",10000,"Ramesh",55000)
// //let fobj=new parent("Ramesh",55000)

// obj.cdisplay()
// obj.totalasset()
// //fobj.pdisplay()

//-------------------------------------------------------------------------------------------------------

//Inheritance - Hierarchical

// class Meta{
//     constructor(fname,famount){
//         this.fname=fname
//         this.famount=famount
//     }

//     pdisplay(){
//         console.log(`${this.fname} Holds Rs: ${this.famount}`)
//     }
// }

// class whatsapp extends Meta{
//     constructor(cname,camount,fname,famount){
//         super(fname,famount)
//         this.cname=cname
//         this.camount=camount
//     }

//     cdisplay(){
//         console.log(`${this.cname} Holds Rs: ${this.camount} his father name is ${this.fname} and he holds Rs: ${this.famount}`)
//     }

//     totalasset(){
//         console.log(`Total Asset ${this.camount+this.famount}`)
//     }
// }

// class Instagram extends Meta{
//     constructor(cname,camount,fname,famount){
//         super(fname,famount)
//         this.cname=cname
//         this.camount=camount
//     }

//     cdisplay(){
//         console.log(`${this.cname} Holds Rs: ${this.camount} his father name is ${this.fname} and he holds Rs: ${this.famount}`)
//     }

//     totalasset(){
//         console.log(`Total Asset ${this.camount+this.famount}`)
//     }
// }

// let myobj1=new Instagram("Insta",78000,"Meta",5000000)
// myobj1.cdisplay()
// myobj1.pdisplay()
// myobj1.totalasset()

//---------------------------------------------------------------------------------------------------------


class Rectangle{
    #l
    #b
    constructor(l,b){
        this.#l=l
        this.#b=b
    }

    area(){
        return (this.#l*this.#b)
    }
}

let rect=new Rectangle(10,90)
console.log(rect.area())