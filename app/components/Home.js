var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var MainContainer = require('./MainContainer');

function Home() {
  return (
    <MainContainer>
      <h1>GitHub Battle</h1>
      <p className="lead">Are you ready?</p>
      <Link to='/playerOne'>
        <button type="button" className="btn btn-lg btn-success">Get Started</button>
      </Link>
    </MainContainer>
  )
}

module.exports = Home;