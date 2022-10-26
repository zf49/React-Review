export default {}


class Bus  {
    private _list:any=[]
    subscribe(cb:any){
        this._list.push(cb)
    }

    dispatch(){
        this._list.forEach((cb:any)=>{
            cb&&cb()
        })
    }

}
var obj = new Bus()

console.log(obj)