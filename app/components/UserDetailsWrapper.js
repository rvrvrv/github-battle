var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper(props) {
	return (
		<div className='col-sm-6'>
			<p className='lead' style={{"marginBottom": "0px"}}>{props.header}</p>
			{props.children}
		</div>
	);
}

UserDetailsWrapper.header = {
  header: PropTypes.string.isRequired,
}

module.exports = UserDetailsWrapper;


