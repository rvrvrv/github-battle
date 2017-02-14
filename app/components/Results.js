var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');



function Results(props) {
	return (
		<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
			<h1>Results</h1>
			<div className="col-sm-8 col-sm-offset-2">
				<UserDetailsWrapper header='Winner'>
				
				</UserDetailsWrapper>
			</div>
		</div>
	);
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
};

module.exports = Results;
