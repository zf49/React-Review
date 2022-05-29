import React, { Component } from 'react'



export default class Navbar extends Component {


    
    render() {

        console.log(this.props)
        let{title,leftshow} = this.props
        return (
            <div>
                {/* {leftshow && <button>返回</button>} */}

                {leftshow == true?<button>返回</button>:null}


                Navbar-{title}
                <button>Home</button>

            </div>
        )
    }
}
