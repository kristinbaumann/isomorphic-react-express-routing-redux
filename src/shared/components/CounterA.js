import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../redux/actions';

class CounterA extends Component {
    render(){
        const { counterA, actions } = this.props;
        return (
            <div>
                <h1>Counter A: {counterA}</h1>
                <button onClick={() => actions.incrementA()}>Increment CounterA!</button>
                <br />
                <br />
                <Link to='/'>Link to Home</Link>
                <br />
                <br />
                <Link to='/counterB'>Link to Component B</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counterA: state.counterA
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(counterActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterA)
