class Uber{

    constructor(basefare,kmdriven,costperkm,tip=0){
        this.basefare=basefare
        this.kmdriven=kmdriven
        this.costperkm=costperkm
        this.tip=tip
    }

    gettotalfare(){
        let total_fare
        total_fare=this.basefare+(this.kmdriven*this.costperkm)+this.tip
        console.log(`Your Total fare is Rs: ${total_fare}. Thanks!`)
    }
}


let passenger1=new Uber(25,5.5,10)
passenger1.gettotalfare()

let passenger2=new Uber(25,5.5,10,20)
passenger2.gettotalfare()
