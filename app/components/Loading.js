var React = require('react');

var styles = {
	container: {
		margin: '0 auto',
		textAlign: 'center',
		fontSize: '55px'
	},
	content: {
		textAlign: 'center',
		marginTop: '30px'
	}
};

var Loading = React.createClass({
	getInitialState: function() {
		this.originalText = 'Loading';
		return {
			text: 'Loading'
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
		}.bind(this), 300);
	},
	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	render: function() {
		return (
			<div style={styles.container}>
				<p style={styles.content}>{this.state.text}</p>
			</div>
		);
	}
});

module.exports = Loading;