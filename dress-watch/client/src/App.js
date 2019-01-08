import React,
       {
         Component, Fragment
       }        from 'react';
import {
        BrowserRouter as Router, Route, Redirect
       }        from 'react-router-dom';

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
      to_welcome: false
    }
  }

componentDidMount = async () => {
  // check if the user has a token in local storage

  // grab the latest info for the Home
  // const resp = await axios("");
  // console.log(resp.data);
}
  render() {
    const msg = `is logged in? ${this.state.logged_in}`;
    const main = this.state.to_welcome
    ? <Fragment>
      <Route exact path="/" render={ () =>
        <Redirect to="/welcome" />
      }/>
      <Route path="/welcome" component={Welcome}/>
      </Fragment>

    : <Fragment>
      <NavBar logged_in={this.state.logged_in}/>
      <Route exact path="/" render={ () =>
        <Redirect to="/Home" />
      }/>
        <h1>React</h1>
        <h2>{msg}</h2>
        <Route path="/Home" render={(match) => <Home logged_in={this.state.logged_in} match={match} />}/>
        <Route path="/news" component={News} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/products" component={Products} />
        <Route path="/brands" component={Brands} />
        <Route path="/auth" component={AuthForms} />
        <Route path="/profile" component={Profile} />


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
