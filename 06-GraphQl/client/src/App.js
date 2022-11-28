
import{ApolloProvider,Query,Mutation } from 'react-apollo'

import ApolloClient from 'apollo-boost'



import ChrisQuery from './../src/Component/ChrisQuery'
import ChrisAdd from './../src/Component/ChrisAdd'


const client = new ApolloClient({
  uri:"http://localhost:3001/graphql"
})



function App() {
  return (

    <ApolloProvider client={client}>
      <ChrisAdd/>
      <ChrisQuery/>
    </ApolloProvider>


  );
}









export default App;
