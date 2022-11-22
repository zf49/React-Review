
import{ApolloProvider,Query,Mutation } from 'react-apollo'

import ApolloClient from 'apollo-boost'

import gql from 'graphql-tag'
import { useState } from 'react';

const client = new ApolloClient({
  uri:"http://localhost:3001/graphql"
})



function App() {
  return (

    <ApolloProvider client={client}>
      <div>
        <ChrisCreate></ChrisCreate>
      </div>
    </ApolloProvider>


  );
}



 function ChrisCreate() {

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





export default App;
