import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

class App extends Component {
    render(){
        const { name, counterA } = this.props;
        return (
            <div>
                <h1>Isomorphic JavaScript with Routing welcomes {name}!</h1>
                <h2>CounterA: {counterA}</h2>
                <Link to='/counterA'>Link to Component A</Link>
                <br />
                <br />
                <Link to='/counterB'>Link to Component B</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        counterA: state.counterA
    }
}

export default connect(mapStateToProps)(App)