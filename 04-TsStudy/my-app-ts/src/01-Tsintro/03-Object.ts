import { Interface } from "readline"

export default {}



interface IObj {
name:string,
age:number,
isShow?:boolean, //问号表示可有可没有
location:string,
[propName:string]:any // 后端发送过来的值将全都堆在这
}

let obj:IObj = {
    name:"chris",
    age:26,
    // isShow: false,
    location:"AKL"
}




console.log(obj.isShow)