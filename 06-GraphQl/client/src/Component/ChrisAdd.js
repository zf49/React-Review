import React from 'react'


import{gql} from 'graphql-tag'
import{Mutation} from 'react-apollo'



export default function ChrisAdd() {

    const createFilm = gql`
    mutation createFilm($input:FilmInput){
      createFilm(input:$input) {
        id,
        name,
        price
      } 
    }`
  
    
  
    
  
    return (
      <div>
  
       <h1>create</h1>
  
        <Mutation mutation={createFilm}>
        {
            (createFilm,{data})=>{
              console.log(data)
              return <div><button onClick={()=>{
                createFilm({
                    variables:{
                      input:{
                          name:"777",
                          poster:"http://777",
                          price:777
                      }
                    }
                })
              }}>asdasdasd</button></div>
            }
  
        }
  
        </Mutation>
  
      </div>
    )
  }
  
