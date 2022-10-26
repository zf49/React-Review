export default {}


let test1 = (a:string,b:number)=>{
    // a.substring(0,1)+b
}
test1("123",123)


interface Ifunc{
    (a:string, b:number,c?:number):string
}

let myfunc2:Ifunc = (a,b,c)=>{
    return a+b+c
}

//--------------------
// 以后常用
interface Iobj {
    name:string,
    age:number,
    getName:(name:string)=>string
}


let obj:Iobj = {
    name:'chris',
    age:100,
    getName:(a:string)=>{
        return a
    }
}
