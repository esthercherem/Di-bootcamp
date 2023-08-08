import React, {Component } from 'react';
import "./Card.css"

export default class Card extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render () {
        return(
           < div className='card'>
            <div className='card-subtitle'>
                <i className={this.props.info.icon}></i>
                <h2>{this.props.info.title}</h2>
                </div>
                <h3>{this.props.info.points}</h3>
           </div>
        )
    }
}