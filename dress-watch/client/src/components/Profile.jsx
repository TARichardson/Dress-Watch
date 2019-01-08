import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';


export default class Profile extends Component {
  constructor(props) {
  super(props)

  this.state = {
    articles: [],
    to_auth: false
  }

}

componetDidMount = async () => {
  const token = `${!localStorage.getItem('token')}`
  this.setState({
    to_auth: token
  })
}

log_out = (evt) => {
    localStorage.removeItem('token');
    this.setState({
      to_auth: true
    })
}

render() {
  const token = `token = ${!!localStorage.getItem('token')}`
  const profile = ( this.state.to_auth
  )// || !localStorage.getItem('token') )

  ? <Redirect to="/auth" />
  : <div key="profile">
      <button onClick={this.log_out}>Log Out</button>
      <h1>Profile</h1>
      {token}
    </div>

  return (
    <Fragment>
      {profile}
    </Fragment>

  )
}

}
