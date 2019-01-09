import React, { Component, Fragment }
        from 'react';
import { BrowserRouter as Router, Route, Redirect}
        from 'react-router-dom';

import Welcome   from './components/Welcome.jsx';
import NavBar    from './components/NavBar.jsx';
import Home      from './components/Home.jsx';
import News      from './components/News.jsx';
import Reviews   from './components/Reviews.jsx';
import Products  from './components/Products.jsx';
import Brands    from './components/Brands.jsx';
import AuthForms from './components/AuthForms.jsx';
import Profile   from './components/Profile.jsx';
//import axios     from 'axios';
//import Login    from './componets/Login.jsx';
import './App.css';



class App extends Component {
  constructor() {
    super()

    this.state = {
      login: {
        email: "",
        user_name: "",
        password: ""
      },
      register: {
        email: "",
        user_name: "",
        real_first_name: "",
        real_last_name: "",
        password: "",
        password_confirmation: "",
      },
      logged_in: false,
      to_welcome: true,
      to_profile: false,
      to_register: false,
      to_auth: true

    }
  }

  componentDidMount = async () => {
    //localStorage.setItem('token',"hgkgkjhkjb");
    // check if the user has a token in local storage
    // if localStorage is empty =>  localStorage = nil, !localStorage = true, !!localStorage = false
    const token = !!localStorage.getItem('token')
    // if token skip welcome page
    if (token) {
      this.setState({
        logged_in: true,
        to_welcome: false

      })
    }
    // grab the latest info for the Home
    // const resp = await axios("");
    // console.log(resp.data);
  }

  toggle_logged_in = () => {
    const new_log = !this.state.logged_in;
    const new_auth = !this.state.to_auth;
    this.setState({
      logged_in: new_log,
      to_auth: new_auth,
      to_welcome: false

    })
  }

  toggle_welcome = () => {
    const no_wel = !this.state.to_welcome;
    this.setState({
      to_welcome: no_wel
    })
  }

  get_token = async (credentials) => {
    // make call to login and get jwt token
    const tokenData = "this is your token";
    localStorage.setItem('token', tokenData.jwt);
    this.setState({
      to_profile: true,
      to_welcome: false
    });
  }

  log_out = (evt) => {
    localStorage.removeItem('token');
    this.setState({
      to_auth: true,
      logged_in: false
    })
  }

  create_user = async (register) => {

  }
  handle_login_submit = (evt) => {
    evt.preventDefault();
    this.get_token(this.state.credentials);
    this.toggle_logged_in();
  }

  handle_register_submit = (evt) => {
    evt.preventDefault();
    this.create_user(this.state.register);
    this.get_token(this.state.credentials);
    this.toggle_logged_in();
  }

  handle_login_change = (evt) => {}
  handle_register_change = (evt) => {}

  toggle_register = () => {
    const new_reg = !this.state.to_register;
    this.setState({
      to_register: new_reg,
      to_welcome: false

    })
  }

  render() {
    const msg = `is logged in? ${this.state.logged_in}`;
    const main = this.state.to_welcome
    ? <Fragment>
      <Route exact path="/" render={ () =>
        <Redirect push to="/welcome" />
      }/>
      <Route path="/welcome" render={(match) => <Welcome match={match} toggle_welcome={this.toggle_welcome}/> }/>
    </Fragment>

    : <Fragment>
      <NavBar logged_in={this.state.logged_in}/>
      <Route exact path="/" render={ () =>
        <Redirect push to="/Home" />
      }/>
      <h1>React</h1>
      <h2>{msg}</h2>
      <Route path="/Home" render={(match) => <Home logged_in={this.state.logged_in} match={match} /> } />
      <Route path="/news" component={News} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/products" component={Products} />
      <Route path="/brands" component={Brands} />
      <Route path="/auth" render={(match) => <AuthForms match={match}
                                                        app_state={this.state}
                                                        toggle_register={this.toggle_register}
                                                        handle_login_submit={this.handle_login_submit} /> } />
      <Route path="/profile" render={(match) => <Profile match={match}
                                                         app_state={this.state}
                                                         log_out={this.log_out} /> } />
    </Fragment>


    return (
      <Router>
        <div className="App">
          {main}
        </div>
      </Router>
    );
  }
}

export default App;
