
import{ApolloProvider,Query,Mutation } from 'react-apollo'

import ApolloClient from 'apollo-boost'



import ChrisQuery from './../src/Component/ChrisQuery'
import ChrisAdd from './../src/Component/ChrisAdd'


const client = new ApolloClient({
  uri:"http://localhost:3001/graphql"
})



function App() {

  let refetch = null


  return (

    <ApolloProvider client={client}>

      <h1>Film CRUD</h1>
      <ChrisAdd cb={()=>{
        refetch() //let ChrisQuery request again
      }}/>
      <ChrisQuery fetch={(reload)=>{
          refetch = reload

          console.log(refetch)
      }}/>
    </ApolloProvider>


  );
}









export default App;
