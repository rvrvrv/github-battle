var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var styles = require('../styles');

function Reselect() {
  return (
	  <div className="col-sm-12" style={styles.space}>
		  <Link to='/playerOne'>
		  <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
		  </Link>
	  </div>
  );
}

module.exports = Reselect;