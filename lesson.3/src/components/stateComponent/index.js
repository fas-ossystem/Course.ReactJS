import React from 'react';

class StateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    changeState() {
        this.setState( { value: Math.floor( Math.random()*100 ) } );
    }

    render() {
        return (
            <div>
                <h1>Random value: {this.state.value}</h1>
                <button onClick={ () => this.changeState() }>
                    Get random value
                </button>
            </div>
        )
    }
}

export default StateComponent;