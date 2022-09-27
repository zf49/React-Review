import React, { Component } from 'react'

export default class App extends Component {

    state= {
        list:["111","222","333","444","555","666","777","888","999","000"]
    }


    render() {
        return (
            <div>
                <div id = "wrapper">
                    <ul>
                        {
                            this.state.list.map((item)=>{return <li key={item}>{item}</li>

                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
