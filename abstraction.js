class a{
    constructor(name){
        if (new.target===a){
            console.log("A direct object nahi bana sakta")
        }else{
            console.log("subclass object bana sakta hai")
        }
    }
}

class b extends a{
    constructor(name){
        super(name)
    }
    
}

const s=new b("1")
const s2=new a("soumo")
console.log(s)