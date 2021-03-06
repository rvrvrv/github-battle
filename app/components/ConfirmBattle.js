var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');
var Reselect = require('./Reselect');

function ConfirmBattle(props) {
	return props.isLoading === true
		? <Loading speed={700} text={'Retrieving Player Info'} />
		: <MainContainer>
				<h1>Confirm Players</h1>
				<div className="col-sm-8 col-sm-offset-2">
					<UserDetailsWrapper header='Player 1'>
						<UserDetails info={props.playersInfo[0]} />
					</UserDetailsWrapper>
					<UserDetailsWrapper header='Player 2'>
						<UserDetails info={props.playersInfo[1]} />
					</UserDetailsWrapper>
				</div>
				<div className="col-sm-8 col-sm-offset-2">
				  <div className="col-sm-12" style={styles.space}>
					  <button type="button" className="btn btn-lg btn-warning" onClick={props.onInitiateBattle}>Initiate Battle!</button>
				  </div>
				  <Reselect />
				</div>
      </MainContainer>
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onInitiateBattle: PropTypes.func.isRequired,
	playersInfo: PropTypes.array.isRequired
};

module.exports = ConfirmBattle;
