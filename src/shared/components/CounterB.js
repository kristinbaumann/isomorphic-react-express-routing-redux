import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CounterB extends Component {
    render(){
        return (
           <div>
                <h1>This is Component B!</h1>
                <Link to='/'>Link to Home</Link>
                <br />
                <br />
                <Link to='/counterA'>Link to Counter A</Link>
            </div>
        );
    }
}