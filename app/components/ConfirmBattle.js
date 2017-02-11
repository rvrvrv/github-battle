var React = require('react');


function showIt(obj) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle(props) {
	return props.isLoading === true
		? <p>Loading!</p>
		: <div>Confirm Battle!: {showIt(props)}</div>
}

module.exports = ConfirmBattle;
