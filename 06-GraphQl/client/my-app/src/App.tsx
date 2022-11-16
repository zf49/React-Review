import React from 'react';
import { Z_ASCII } from 'zlib';




function App() {


  let text = "0123456789";
  let pattern = /[0-9]/g;
  let result = text.match(pattern);
  let a:any = []
  a.push(result)
  let arr: string[] = []

let c = ()=>{
  let i
  for (i = 97; i <= 122; i++) {
    arr.push(String.fromCharCode(i));
  } 


  // console.log(result)


  // console.log(arr)

  let c = a.concat(arr)

  console.log(c)



}




  return (
    <>
      client

      {

          c()
      }


    </>
  );
}

export default App;
