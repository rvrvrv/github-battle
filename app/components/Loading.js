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
		marginTop: '30px'
	},
	info: {
		marginTop: '60px',
		color: 'crimson',
		fontWeight: 1000,
		fontStyle: 'italic',
		fontSize: '0.6em',
		background: 'black',
		opacity: 0,
		transition: 'opacity 1s ease'
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
		styles.info.opacity = 0;
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
		setTimeout(function() {
			styles.info.opacity = 1;
		}, 1200);
	},
	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	render: function() {
		return (
			<div style={styles.container}>
				<p style={styles.content}>{this.state.text}</p>
				<p style={styles.info}>
					<span>If this message remains, there has been an error retrieving user data.<br />Most likely scenario: GitHub user does not exist</span>
					<Reselect />
				</p>
			</div>
		);
	}
});

module.exports = Loading;