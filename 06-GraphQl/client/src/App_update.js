
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
        <ChrisUpdate></ChrisUpdate>
      </div>
    </ApolloProvider>


  );
}



 function ChrisUpdate() {

  const updateFilm = gql`
  mutation updateFilm($id:String!,$input:FilmInput){
    updateFilm(id:$id,input:$input) {
      id,
      name,
      price
    } 
  }`

  

  

  return (
    <div>

     <h1>Update</h1>

      <Mutation mutation={updateFilm}>
      {
          (updateFilm,{data})=>{
            console.log(data)
            return <div><button onClick={()=>{
              updateFilm({
                  variables:{
                    id:"637c501abd4d55e00612a239",
                    input:{
                        name:"777-修改",
                        poster:"http://777——修改1111",
                        price:77
                    }
                  }
              })
            }}>update</button></div>
          }

      }

      </Mutation>

    </div>
  )
}





export default App;
