import React, {Component} from 'react';

// PAGES
import Home from './pages/Home';
import OnlineCourses from './pages/OnlineCoursesPage';
import OnlineCourse from './pages/OnlineCourse';
import VideoCourses from './pages/VideoCoursesPage';
import Profile from './pages/Profile';
import VideoCourse from './pages/VideoCourse'
// END PAGES

// DATABASES
import OnlineCoursesDB from './api/onlineCoursesDB';
import videoCoursesDB from './api/videoCoursesDB';
import userInfo from './api/user';
// END DATABASES

// ROUTER
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoutes';
// END ROUTER

import Footer from './components/Footer';


class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      user: null,
      redirected: false
    }
  }
  login = user =>{ // works if user try to log in
    this.setState({user})
  }
  logout = () =>{ // works if user try to log out
    this.setState({user: null})
  }
  redirected = () =>{ // work if user try to see Private Router Pages
    this.setState({redirected: true})
    console.log('redirected')
  }
  render(){
      return (
        <div className="App">
            <Switch>
              <Route exact path="/" render={props => (<Home redirected = {this.state.redirected}onLogin={this.login} {...props}/>)} />
              <PrivateRoute exact path="/onlinecourses" onLogout={this.logout}  data={OnlineCoursesDB} user={this.state.user}  component={OnlineCourses} redirected={this.redirected}/>
              <PrivateRoute exact path="/videocourses"  onLogout={this.logout}  data={videoCoursesDB}  user={this.state.user}  component={VideoCourses}  redirected={this.redirected}/>
              <PrivateRoute exact path="/profile"       onLogout={this.logout}  data={userInfo}        user={this.state.user}  component={Profile}       redirected={this.redirected} />
              <PrivateRoute exact path="/onlinecourses/course/:id" onLogout={this.logout} user={this.state.user}  component={OnlineCourse}  redirected={this.redirected}/>
              <PrivateRoute exact path="/videocourses/course/:id"  onLogout={this.logout} user={this.state.user}  component={VideoCourse}  redirected={this.redirected}/>
            </Switch>
            <Footer/>
        </div>
      );
    }
}
export default App;
