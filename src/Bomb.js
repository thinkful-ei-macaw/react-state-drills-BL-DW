import React, { Component } from 'react';


class Bomb extends Component {
	state = { count: 0 };

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({ count: this.state.count + 1 });
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	renderDom() {
		const { count } = this.state;
		if (count % 2 == 0) {
			return 'tick';
		} else if (count % 2 !== 0) {
			return 'tock';
		} else if (count >= 8) {
			return 'BOOM!!!!';
		} else {
			clearInterval(this.interval);
		}
	}

	render() {
		return (
			<div className="bomb-state">
				<p>{this.renderDom()}</p>
			</div>
		);
	}
}

export default Bomb;
