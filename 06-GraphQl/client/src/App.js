
import{ApolloProvider,Query } from 'react-apollo'

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
        <ChrisQuery></ChrisQuery>
      </div>
    </ApolloProvider>


  );
}



 function ChrisQuery() {

  const query = gql`
  query getNowPlayingList ($id:String!){
    getNowPlayingList (id:$id) {
      id,
      name,
      poster,
      price
    }
  }`

  const [state, setstate] = useState(
    {id:'6375b6cbbbadc4c1e311cb8b'
    
  
    }

)

  

  return (
    <div>

      <input type='text' onChange={(evt)=>{

        setstate({id:evt.target.value})

      }}></input>




      <Query query={query} variables={{id:state.id}}> 
        {({loading,data})=>{
            console.log(data)
            return loading?<div>loading...</div>:<div>{data.getNowPlayingList.map(((item)=>{
                return <li key={item.id}>{item.name}</li>
            }))
            
            
            
            }</div>
        }}
    </Query>
    </div>
  )
}





export default App;
