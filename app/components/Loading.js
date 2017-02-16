var React = require('react');
var PropTypes = React.PropTypes;
var Reselect = require('./Reselect');


var styles = {
	container: {
		margin: '0 auto',
		textAlign: 'center',
		fontSize: '55px'
	},
	content: {
		textAlign: 'center',
		marginTop: '30px',
	},
	info: {
		padding: '0px 10px',
		marginTop: '60px',
		color: 'crimson',
		fontWeight: 1000,
		fontStyle: 'italic',
		fontSize: '0.6em',
		background: 'black',
		animation: 'fadeIn 4s',
	}
};

var Loading = React.createClass({
	propTypes: {
		text: PropTypes.string,
		speed: PropTypes.number
	},
	getDefaultProps: function() {
		return {
			text: 'Loading',
			speed: 300
		}
	},
	getInitialState: function() {
		this.originalText = this.props.text;
		return {
			text: this.originalText
		}
	},
	componentDidMount: function() {
		var stopper = this.originalText + '...';
		this.interval = setInterval(function() {
			if (this.state.text === stopper) {
				this.setState({
					text: this.originalText
				});
			} else {
				this.setState({
					text: this.state.text + '.'
				});
			}
		}.bind(this), this.props.speed);
	},
	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	render: function() {
		return (
			<div style={styles.container}>
				<p style={styles.content}>{this.state.text}</p>
				<div style={styles.info}>
					<span>If this message remains, there has been an error retrieving user data.<br /><br />Most likely scenario: GitHub user does not exist.</span>
					<Reselect />
				</div>
			</div>
		);
	}
});

module.exports = Loading;