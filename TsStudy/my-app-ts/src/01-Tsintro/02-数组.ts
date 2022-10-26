export default {}

let list:string[] = ['1','2','3','4']
list.push('5')
for (let i in list){

    list[i].substring(0,1)

}



let numArr: number[]= [1,2,3,4,5]
numArr.push(6)


let list3:(number|string)[] = [1,2,3,4,5,'1','2','3','5']

//-----------------------------------

let myList1:Array<String> = ['1','3']
myList1.push('123')

let myList2:Array<String|number> = ['1','3',123,34,456,7]
myList2.push(123)
myList2.push("123")

