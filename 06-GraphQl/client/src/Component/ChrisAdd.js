import React from 'react'


import{gql} from 'graphql-tag'
import{Mutation} from 'react-apollo'



export default function ChrisAdd(props) {

    const createFilm = gql`
    mutation createFilm($input:FilmInput){
      createFilm(input:$input) {
        id,
        name,
        price
      } 
    }`
  
    let nameRef = React.createRef()
    let posterRef = React.createRef()
    let priceRef = React.createRef()
  
    
  
    return (
      <div>
  
       
  
        <Mutation mutation={createFilm}>
        {
            (createFilm,{data})=>{
              console.log(data)
              return <div>
                  <p>Name:<input ref={nameRef} type="text"/></p>
                  <p>Pic:<input ref={posterRef} type="text"/></p>
                  <p>Price:<input ref={priceRef} type="number"/></p>


                  <button onClick={()=>{
                createFilm({
                    variables:{
                      input:{
                          name:nameRef.current.value,
                          poster:posterRef.current.value,
                          price:Number(priceRef.current.value)
                      }
                    }
                }).then(res=>props.cb())
                console.log(nameRef.current.value)
              }}>Click</button></div>
            }
  
        }
  
        </Mutation>
  
      </div>
    )
  }
  
