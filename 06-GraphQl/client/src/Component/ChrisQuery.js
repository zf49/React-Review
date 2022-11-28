import React, { useState } from 'react'




import{gql} from 'graphql-tag'
import{Query} from 'react-apollo'



export default function ChrisQuery() {

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
      {id:''
      })
  
    
  
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
  