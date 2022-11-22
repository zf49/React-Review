
import{ApolloProvider,Query } from 'react-apollo'

import ApolloClient from 'apollo-boost'

import gql from 'graphql-tag'

const client = new ApolloClient({
  uri:"http://localhost:3001/graphql"
})



function App() {
  return (

    <ApolloProvider client={client}>
      <div>
        <ChrisQuery></ChrisQuery>
      </div>
    </ApolloProvider>


  );
}



 function ChrisQuery() {

  const query = gql`
  query{
    getNowPlayingList {
      id,
      name,
      poster,
      price
    }
  }`


  return (
    <Query query={query}> 
        {({loading,data})=>{
            console.log(data)
            return loading?<div>loading...</div>:<div>{data.getNowPlayingList.map(((item)=>{
                return <li key={item.id}>{item.name}</li>
            }))
            
            
            
            }</div>
        }}
    </Query>
  )
}





export default App;
