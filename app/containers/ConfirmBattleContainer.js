var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');


var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			isLoading: true,
			playersInfo: []
		}
	},
	componentDidMount: function() {
		var query = this.props.location.query; //PlayerOne and PlayerTwo
		//Get both players' info from Github API call (via our utils)
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function(players) {
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				});
			}.bind(this));
	},
	handleInitiateBattle: function() {
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		});
	},
	render: function() {
		return (
			<ConfirmBattle 
			isLoading={this.state.isLoading}
			playersInfo={this.state.playersInfo} />
		);
	}
});

module.exports = ConfirmBattleContainer;