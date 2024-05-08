class Movie{
    
    constructor(title,studio,rating="PG"){
        this.title=title
        this.studio=studio
        this.rating=rating        
    }

    getPG(inarr){

        let array=[]
        console.log(inarr.length)
       for (let i in inarr){
            //console.log(inarr[i].rating)
            if (inarr[i].rating.includes("PG")){
                array.push(inarr[i].title)
            }
       }
        return array
    }


}


let m1=new Movie("Casino Royale","Eon Productions","R13")
let m2=new Movie("Leo","Sun Productions","PG18")
let m3=new Movie("Ghilli","Surya Productions")
let m4=new Movie("Varisu","Dilraju Productions","R13")
let m5=new Movie("GOAT","AGS Production","PG18")

console.log(m1.getPG([m2,m3,m4,m5]))
//------------------------------------------------------------------------------------------------------

