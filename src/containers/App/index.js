import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Card from '../../components/card';
import './index.scss';

const transitionDuration = 500;
const App = React.createClass({

    displayName: 'App',

    getInitialState() {
        return {
            index: 1
        };
    },

    handleNextCard() {
        this.setState({
            index: this.state.index + 1
        });
    },

    render() {
        return (
            <div className="container-fluid">
                <div className="card-cont">
                    <ReactCSSTransitionGroup
                        transitionName="slide"
                        transitionEnterTimeout={ transitionDuration }
                        transitionLeaveTimeout={ transitionDuration }
                    >
                        <Card
                            index={ this.state.index }
                            key={ this.state.index }
                            transitionDuration={ `${ transitionDuration / 1000 }s` }
                        />
                    </ReactCSSTransitionGroup>
                    <button
                        onClick={ this.handleNextCard }
                        style={{ marginTop: 15 }}
                        className="btn btn-primary"
                    >
                        Increase
                    </button>
                </div>
            </div>
        );
    }

});

module.exports = App;
