import React, { useState } from 'react'




import{gql} from 'graphql-tag'
import{Query} from 'react-apollo'

import ChrisDelete from './ChrisDelete'

export default function ChrisQuery(props) {

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
  
        {/* <input type='text' onChange={(evt)=>{
  
          setstate({id:evt.target.value})
  
        }}></input> */}
  
  
  
  
        <Query query={query} variables={{id:state.id}}> 
          {({loading,data,refetch})=>{
              console.log(data)

            props.fetch(refetch)


              return loading?<div>loading...</div>:<div>{data.getNowPlayingList.map(((item)=>{
                  return <div style={{border:'1px solid black',padding:"20px"}}><ul><li key={item.id}><b>Name: </b>{item.name}</li>
                    <li><b>Price: </b>{item.price}</li>
                    <ChrisDelete cb={()=>{
                        refetch()
                    }} id={item.id}></ChrisDelete>
                  </ul></div>
              }))
              
              
              
              }</div>
          }}
      </Query>
      </div>
    )
  }
  