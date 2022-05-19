import React, { Component } from 'react'

export default class App extends Component {

    state={
        myHtml: `<div>
        <h1>11231231</h1>

              <b>1666</>

        
        </div>`
    }



    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={
                    {
                        __html:this.state.myHtml
                    }
                }></div>
            </div>
        )
    }
}
