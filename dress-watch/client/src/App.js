import React, { Component, Fragment }
                 from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch}
                 from 'react-router-dom';
// components
import Welcome   from './components/Welcome.jsx';
import NavBar    from './components/NavBar.jsx';
import Footer    from './components/Footer.jsx';
import Home      from './components/Home.jsx';
import News      from './components/News.jsx';
import Reviews   from './components/Reviews.jsx';
import Products  from './components/Products.jsx';
import Brands    from './components/Brands.jsx';
import AuthForms from './components/AuthForms.jsx';
import Profile   from './components/Profile.jsx';
import About     from './components/About.jsx';
import Credit    from './components/Credit.jsx';
// services
import { login, create, getSelf, updateUser, deleteUser }
                 from './services/auth.jsx';
import { createComments, updateComment, deleteComment }
                 from './services/comments.jsx';
import { createReplies, updateReply, deleteReply }
                from './services/replies.jsx';
import { createArticles, updateArticle, deleteArticle }
                from './services/articles.jsx';
import { createBrands, updateBrand, deleteBrand }
                 from './services/brands.jsx';
import { createProducts, updateProduct, deleteProduct }
                from './services/products.jsx';
// style
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
        role: "member",
      },
      profile:  {
        id: "",
        email: "",
        user_name: "",
        real_first_name: "",
        real_last_name: "",
        password: "",
        password_confirmation: "",
        role: "member",
        joined: "",
        edit_mode: false,

      },
      newNews: {
        title: "",
        sub_title: "",
        body: "",
        product_id: 0,
      },
      newReview: {
        title: "",
        sub_title: "",
        body: "",
        product_id: 0,
      },
      newProduct: {
        title: "",
        sub_title: "",
        body: "",
        product_id: 0,
      },
      newBrand: {
        title: "",
        sub_title: "",
        body: "",
        product_id: 0,
      },
      newComment: {
        title: "",
        body: "",
        user_id: 1,
        article_id: 0,
      },
      newReply: {
        title: "",
        body: "",
        user_id: 1,
        comment_id: 0,
      },
      logged_in: false,
      to_welcome: true,
      to_profile: false,
      to_register: false,
      to_auth: true,
      profileData: [],
      brandsData: [],
      productsData: [],
      newsData: [],
      reviewsData: [],
      latestNewsData: [],
      latestReviewsData: [],
      latestProductsData: [],
      resources:{},

    }
  }

  componentDidMount = async () => {
    //localStorage.setItem('token',"hgkgkjhkjb");
    // check if the user has a token in local storage
    // if localStorage is empty =>  localStorage = nil, !localStorage = true, !!localStorage = false
    const token = localStorage.getItem('token')
    // if token skip welcome page
    if (!!token) {
      const userData = await getSelf(token);
      const profile =  {
        id: userData.id,
        email: userData.email,
        user_name: userData.user_name,
        real_first_name: userData.real_first_name,
        real_last_name: userData.real_last_name,
        password: "",
        password_confirmation: "",
        role: userData.role,
        joined: userData.created_at,
        edit_mode: false,

      }
      this.setState({
        logged_in: true,
        to_welcome: false,
        profile: profile,

      })
    }
    // grab the latest info for the Home
    // const resp = await axios("");
    // console.log(resp.data);
  }

  saveBrands = async (brandsData) => {
    await this.setState({
      brandsData: brandsData
    });
  }
  saveProducts = async (productsData) => {
    await this.setState({
      productsData: productsData
    });
  }
  saveNews = async (newsData) => {
    await this.setState({
      newsData: newsData
    });
  }
  saveReviews = async (reviewsData) => {
    await this.setState({
      reviewsData: reviewsData
    });
  }
  saveProfileData = async (profileData) => {
    await this.setState({
      profileData: profileData
    });
  }
  saveLatestNews = async (latestNewsData) => {
    await this.setState({
      latestNewsData: latestNewsData
    });
  }
  saveLatestReviews = async (latestReviewsData) => {
    await this.setState({
      latestReviewsData: latestReviewsData
    });
  }
  saveLatestProducts = async (latestProductsData) => {
    await this.setState({
      latestProductsData: latestProductsData
    });
  }


  toggle_logged_in = async () => {
    const new_log = !this.state.logged_in;
    const new_auth = !this.state.to_auth;
    await this.setState({
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
    try {
      const tokenData = await login(credentials);
      const userData = await getSelf(tokenData.jwt);
      const profile =  {
        id: userData.id,
        email: userData.email,
        user_name: userData.user_name,
        real_first_name: userData.real_first_name,
        real_last_name: userData.real_last_name,
        password: "",
        password_confirmation: "",
        role: userData.role,
        joined: userData.created_at,
        edit_mode: false,

      }
      localStorage.setItem('token', tokenData.jwt);
      await this.setState({
        logged_in: true,
        to_auth: false,
        to_profile: true,
        to_welcome: false,
        to_register: false,
        profile: profile,
      });
    }
    catch(evt){
      console.log(evt);
    }
  }

  log_out = async (evt) => {
    localStorage.removeItem('token');
    await this.setState({
      to_auth: true,
      logged_in: false,
      to_welcome: true,
      to_profile: false,
      to_register: false,
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
        role: "member",
        password_confirmation: "",
      },
      profile:  {
        id: "",
        email: "",
        user_name: "",
        real_first_name: "",
        real_last_name: "",
        password: "",
        password_confirmation: "",
        role: "member",
        joined: "",
        edit_mode: false,
      }
    })
  }

  create_user = async (register) => {
    try {
      const userData = await create(register);
      const login = {
        email: userData.email,
        user_name: userData.user_name,
        password: register.password,
      };
      const profile =  {
        id: userData.id,
        email: userData.email,
        user_name: userData.user_name,
        real_first_name: userData.real_first_name,
        real_last_name: userData.real_last_name,
        password: "",
        password_confirmation: "",
        role: userData.role,
        joined: userData.created_at,
        edit_mode: false,

      }
      this.get_token(login);
      await this.setState(prevState => ({
        ...prevState,
        profile: profile,
      })
    );
  }
  catch(evt) {
    console.log(evt)
  }
}

update_user = async (id,data) => {
  try {
    const updated_user = await updateUser(id,data,localStorage.getItem('token'))
    console.log(updated_user)
  }
  catch(evt) {
    console.log(evt)
  }
}

delete_user = async (id,data) => {
  try {
    const resp = await deleteUser(id,data,localStorage.getItem('token'))
    if(id === this.state.profile.id)
    {
      this.log_out();
    }
    console.log(resp)
  }
  catch(evt) {
    console.log(evt)
  }
}

handle_login_submit = (evt) => {
  evt.preventDefault();
  this.get_token(this.state.login);
}

handle_register_submit = (evt) => {
  evt.preventDefault();
  this.create_user(this.state.register);
}

Update_User_submit = (evt) => {
  evt.preventDefault();
  this.update_user(this.state.profile.id
    ,this.state.profile);
  this.toggle_user_edit();
}

handle_login_change = async (evt) => {
  const { name, value } = evt.target
  await this.setState(prevState => ({
    login: {
      ...prevState.login,
      [name]: value,
    }
  })
)
}

handle_register_change = async (evt) => {
  const {name, value } = evt.target
  await this.setState(prevState => ({
    register: {
      ...prevState.register,
      [name]: value,
    }
  })
)
}

handle_user_change  = async (evt) => {
  const {name, value } = evt.target
  await this.setState(prevState => ({
    profile: {
      ...prevState.profile,
      [name]: value,
    }
  })
)}

toggle_register = async () => {
  const new_reg = !this.state.to_register;
  await this.setState({
    to_register: new_reg,
    to_welcome: false

  })
}

toggle_user_edit = async () => {
  const user_edit = !this.state.profile.edit_mode;
  await this.setState(prevState => ({
    profile: {
      ...prevState.profile,
      edit_mode: user_edit,
    }
  })
)}

toggle_userProfileData_edit = async (index) => {
  const profileData = this.state.profileData
  profileData[index].edit_mode = !profileData[index].edit_mode;
  await this.setState({
    profileData: profileData,
  });
}

  render() {
    const main =
      <Fragment>
      <Switch className="HeaderDiv">
      <Route exact path="/"   render={ ()     => <Redirect  to="/welcome" /> } />
      <Route path="/welcome"  render={(match) => <Welcome match={match} toggle_welcome={this.toggle_welcome} to_welcome={this.state.to_welcome}/> }/>
      <Route path="/"         render={ ()     => <NavBar logged_in={this.state.logged_in}/> } />
      </Switch>

      {/* Logical Main component */}
      <Switch>
      <Route path="/Home"     render={(match) => <Home  match={match}
                                                  logged_in={this.state.logged_in}
                                                  saveLatestNews={this.saveLatestNews}
                                                  latestNewsData={this.state.latestNewsData}
                                                  saveLatestReviews={this.saveLatestReviews}
                                                  latestReviewsData={this.state.latestReviewsData}
                                                  saveLatestProducts={this.saveLatestProducts}
                                                  latestProductsData={this.state.latestProductsData} />} />

      <Route path="/news"     render={(match) => <News match={match}
                                                       saveNews={this.saveNews}
                                                       newsData={this.state.newsData} />} />

      <Route path="/reviews"  render={(match) => <Reviews match={match}
                                                          saveReviews={this.saveReviews}
                                                          reviewsData={this.state.reviewsData} />} />

      <Route path="/products" render={(match) => <Products match={match}
                                                           saveProducts={this.saveProducts}
                                                           productsData={this.state.productsData} />} />

      <Route path="/brands"   render={(match) => <Brands match={match}
                                                         saveBrands={this.saveBrands}
                                                         brandsData={this.state.brandsData} />} />

      <Route path="/auth"     render={(match) => <AuthForms match={match}
                                                            app_state={this.state}
                                                            toggle_register={this.toggle_register}
                                                            handle_login_submit={this.handle_login_submit}
                                                            handle_register_submit={this.handle_register_submit}
                                                            handle_login_change={this.handle_login_change}
                                                            handle_register_change={this.handle_register_change} /> } />

      <Route path="/profile"  render={(match) => <Profile match={match}
                                                          app_state={this.state}
                                                          saveProfileData={this.saveProfileData}
                                                          log_out={this.log_out}
                                                          Update_User_submit={this.Update_User_submit}
                                                          delete_user={this.delete_user}
                                                          handle_user_change={this.handle_user_change}
                                                          toggle_user_edit={this.toggle_user_edit} /> } />
      <Route path="/about" component={About} />
      <Route path="/credit" component={Credit} />
    </Switch>

    <Switch>
      <Route exact path="/" render={ () => <Redirect  to="/welcome" /> } />
      <Route path="/welcome" render={(match) => <Fragment />}/>
      <Route path="/" render={ () => <Footer logged_in={this.state.logged_in}/> } />
    </Switch>
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
