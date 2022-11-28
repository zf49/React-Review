
import{ApolloProvider,Query,Mutation } from 'react-apollo'

import ApolloClient from 'apollo-boost'

import gql from 'graphql-tag'

const client = new ApolloClient({
  uri:"http://localhost:3001/graphql"
})



function App() {
  return (

    <ApolloProvider client={client}>
      <div>
        <ChrisDelete></ChrisDelete>
      </div>
    </ApolloProvider>


  );
}



 function ChrisDelete() {

  const deleteFilm = gql`
  mutation deleteFilm($id:String!){
    deleteFilm(id:$id) 
  }`

  

  

  return (
    <div>

     <h1>Update</h1>

      <Mutation mutation={deleteFilm}>
      {
          (deleteFilm,{data})=>{
            console.log(data)
            return <div><button onClick={()=>{
              deleteFilm({
                  variables:{
                    id:"637c516cbd4d55e00612a23b"
                  }
              })
            }}>delete</button></div>
          }

      }

      </Mutation>

    </div>
  )
}





export default App;
