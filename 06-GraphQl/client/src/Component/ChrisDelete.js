import React from 'react'


import{gql} from 'graphql-tag'
import{Mutation} from 'react-apollo'

export default function ChrisDelete(props) {



    const deleteFilm = gql`
    mutation deleteFilm($id:String!){
      deleteFilm(id:$id) 
    }`

    

    return (
        <div>

      <Mutation mutation={deleteFilm}>
      {
          (deleteFilm,{data})=>{
            console.log(data)
            return <div><button onClick={()=>{
              deleteFilm({
                  variables:{
                    id:props.id
                  }
              }).then(res=>props.cb())
            }}>delete</button></div>
          }

      }

      </Mutation>

    </div>
    )
}
