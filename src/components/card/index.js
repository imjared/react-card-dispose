import randomColor from 'random-color';
import React from 'react';
import './index.scss';

const Card = React.createClass({

    displayName: 'Card',

    render() {
        return (
            <div className="card" style={{
                backgroundColor: randomColor().hexString(),
                transitionDuration: this.props.transitionDuration
            }}>
                <p>card #{ this.props.index }</p>
            </div>
        );
    }

});

module.exports = Card;
