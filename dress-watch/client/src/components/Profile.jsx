import React, { Component, Fragment } from 'react';
import { Redirect }  from 'react-router-dom';
import ProfileList   from './ProfileList.jsx';
import ProfileDetail from './ProfileDetail.jsx';
import ProfileForm   from './ProfileForm.jsx';


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
    const comments = await getMyComments(localStorage.getItem('token'));
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
      const comments = await getMyComments(localStorage.getItem('token'));
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
    const main = this.props.app_state.profile.edit_mode
    ? <ProfileForm profile={this.props.app_state.profile}
                  change={this.props.handle_user_change}
                  submit={this.props.Update_User_submit}/>
    : <ProfileDetail profile={this.props.app_state.profile}
                      click={this.props.toggle_user_edit}/>

    const com = this.state.has_data
    ? <ProfileList comments={this.props.app_state.profileData} />
    : <h2>Loading</h2>

    const profile = ( this.props.app_state.to_auth )
    ? <Redirect push to="/auth" />
    : <div key="profileDiv">
        <button onClick={this.props.log_out}>Log Out</button>
        <h1>Profile</h1>
        {main}
        <hr/>
        {com}
        <hr/>
        <button onClick={() =>
          this.props.delete_user(this.props.app_state.profile.id,
            {role:this.props.app_state.profile.role}) } >Delete Account</button>
      </div>

    return (
      <Fragment>
      {profile}
      </Fragment>
    )
  }


}
