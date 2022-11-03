import React, { Component } from 'react'
import propty from 'prop-types'
console.log(propty)


// 

export default class Navbar extends Component {

    static propTypes = {
        
            title:propty.string,
            leftshow:propty.bool
        
    }
    

    static defaultProps = {
        leftshow : true
    }


   


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




