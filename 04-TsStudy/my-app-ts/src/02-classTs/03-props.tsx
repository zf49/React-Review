import React, { Children, Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                123
                <hr></hr>
                <Child name={"123"}></Child>
            </div>
        );
    }
}

export default App;


interface IProps{
    name:string
}

class Child extends Component<IProps,any> {
    render() {
        return (
            <div>
                children={this.props.name}
            </div>
        );
    }
}

