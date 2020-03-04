import React, { Component } from 'react';

class RouletteGun extends Component {
    state = {
        chamber: null,
        spinningChamber: false
    };

    defaultProp = {
        bulletChamber: 8
    };

    renderDom() {
        const {chamber, spinningChamber} = this.state
        const {bulletChamber} = this.props
        if(spinningChamber === true) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletChamber) {
            return 'BANG!!!!'
        } else {
            return 'you are safe!'
        }
    }

    handleClick = () => {
        this.setState({
            spinningChamber: true,
        })
        this.timeOut = setTimeout(() => {
            const randomBullet = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomBullet,
                spinningChamber: false,
            })
        }, 2000)
    }


    render() {
        return (
            <div className="Roulette-Gun">
                <p>{this.renderDom()}</p>
                <button onClick={this.handleClick}>
                    Pull trigger
                </button>
            </div>
        )
    }
}

export default RouletteGun;