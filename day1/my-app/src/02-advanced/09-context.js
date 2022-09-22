import axios from 'axios';
import React, { Component } from 'react'

// 创建context
const GlobleContext = React.createContext()



export default class App extends Component {


    constructor(){
        super();

        this.state= {
            filmList:[] 
        ,info:""
           }



        axios({
            url:"https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=983941",
            method:'get',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623691791635729704747009"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res)=>{
            console.log(res.data.data.cinemas)
            this.setState({
                filmList:res.data.data.cinemas
            })
        }).catch((err)=>{
            console.log(err)
        })
    }



    render() {
        return (
            <GlobleContext.Provider value={{
                call:"打电话",
                sms:"短信服务",
                info:this.state.info,
                changeInfo:(value)=>{
                    this.setState({
                        info:value
                    })
                }

            }}>
            <div>

                {
                  this.state.filmList.map(item=><FilmItem key={item.cinemaId} {...item} ></FilmItem>)  
                }

                <FilmDetail ></FilmDetail>
            </div>
            </GlobleContext.Provider>
        )
    }
}


class FilmItem extends Component{
    render(){

        let {name,address,lowPrice,phone} = this.props


       return (
           <GlobleContext.Consumer>
              { (value)=>{
                  return <div onClick={
                    ()=>{
                     // console.log(lowPrice+"---"+phone)
                    //  this.props.onEvent(lowPrice+"---"+phone)
                    // value.info= "2222222";

                        value.changeInfo(lowPrice+"---"+phone)

                    }
                }> 
                    <ul>
                        
                        <li>{name}</li>
                        <li>{address}
                        </li>
                    </ul>
                    <hr></hr>
                    <br></br>
                </div>
               }
            }
           </GlobleContext.Consumer>
       )
    }  
}

class FilmDetail extends Component{
    render(){

    
       return (
           <GlobleContext.Consumer>
               {
                   (value)=>{
                   return <div className="" style={
                        {
                            "position":"fixed",
                            "right":"0",
                            "top":"100px",
                            "background":"yellow",
                            "width":"200px",
                            "height":"200px"
                        }
                    }>
             FilmDetail-{value.info}
                    </div>
                   }
               }
           </GlobleContext.Consumer>



       )
    }  
}