import axios from 'axios'


// redux-thunk
// function getCinemaListAction() {

//     return (dispatch)=>{
//         axios({
//             url:"https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=983941",
//             method:'get',
//             headers:{
//                 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623691791635729704747009"}',
//                 'X-Host': 'mall.film-ticket.cinema.list'
//             }
//         }).then((res)=>{
             
//             // console.log(res.data.data.cinemas)
//             dispatch({
//                 type:"change-list",
//                 cinemasList:res.data.data.cinemas
//             }) 
    
//         })
//     }

// }


// promise style
async function getCinemaListAction() {

 var list = await axios({
    url:"https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=983941",
    method:'get',
    headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623691791635729704747009"}',
        'X-Host': 'mall.film-ticket.cinema.list'
    }
}).then((res)=>{
     
    // console.log(res.data.data.cinemas)
    return{
        type:"change-list",
        cinemasList:res.data.data.cinemas
    }

})

       return list 

}


export default getCinemaListAction