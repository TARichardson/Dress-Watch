import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';


export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
    }

  }

  render() {
    console.log(this.props)
    const token = `token = ${!!localStorage.getItem('token')}`
    const profile = ( this.props.app_state.to_auth
    )

    ? <Redirect push to="/auth" />
    : <div key="profile">
    <button onClick={this.props.log_out}>Log Out</button>
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
