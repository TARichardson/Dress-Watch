import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import ProfileList from './ProfileList.jsx';
import { getMyComments } from '../services/comments.jsx';

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      has_data: false,
      not_loaded: true
    }
  }

  componentDidMount = async () => {
    const comments = await getMyComments();
    this.props.saveProfileData(comments);
    try {
      const has_data = !!this.props.app_state.profileData[0].title
      await this.setState({
        has_data: has_data,
        not_loaded: !has_data,
      })
    }
    catch(evt) {
      this.props.app_state.profileData = comments
    }
  }

  loadData = async () => {
    try {
      const comments = await getMyComments();
      this.props.saveProfileData(comments);
      await this.setState({
        has_data: true,
        not_loaded: false,
      });
    }
    catch(evt) {
      console.log(evt)
    }
  }
  render() {
    if(this.state.not_loaded) {
      this.loadData()
    }
    const main = this.state.has_data
    ? <ProfileList comments={this.props.app_state.profileData} />
    : <h2>Loading</h2>

    const profile = ( this.props.app_state.to_auth )
    ? <Redirect push to="/auth" />
    : <div key="profileDiv">
        <button onClick={this.props.log_out}>Log Out</button>
        <h1>Profile</h1>
        {main}
      </div>

    return (
      <Fragment>
      {profile}
      </Fragment>
    )
  }


}
