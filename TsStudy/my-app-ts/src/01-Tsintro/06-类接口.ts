export default {}
// 接口规范-对象需要其约束保证不会出bug
interface Ifunc{
    getName:()=>string,
    getAge:()=>number
}


class A implements Ifunc{
    getAge(){
        return 123
    }
    a1(){

    }

    a2(){

    }
    getName(){
        return "A"
    }

}

class B implements Ifunc{
    getAge(){
        return 123
    }
    b1(){

    }

    b2(){

    }
    getName(){
        return "A"

    }
}

let obja=new A()
let objb=new B()


let init = (obj:Ifunc)=>{
    obj.getName()

}
init(obja)

init(objb)