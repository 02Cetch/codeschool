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

import PrivateRoute from './components/PrivateRoutes';
import Footer from './components/Footer';

import {Route, Switch} from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      user: null
    }
  }
  login = user =>{
    this.setState({user})
  }
  logout = () =>{
    this.setState({user: null})
    console.log('logouted')
  }
  render(){
      return (
        <div className="App">
            <Switch>
              <Route exact path="/" render={props => (<Home onLogin={this.login} {...props}/>)} />
              <PrivateRoute exact path="/onlinecourses" onLogout={this.logout}  data={OnlineCoursesDB} user={this.state.user}  component={OnlineCourses} />
              <PrivateRoute exact path="/videocourses"  onLogout={this.logout}  data={videoCoursesDB}  user={this.state.user}  component={VideoCourses}/>
              <PrivateRoute exact path="/profile"       onLogout={this.logout}  data={userInfo}        user={this.state.user}  component={Profile} />
              <PrivateRoute exact path="/onlinecourses/course/:id" onLogout={this.logout} user={this.state.user}  component={OnlineCourse} />
              <PrivateRoute exact path="/videocourses/course/:id"  onLogout={this.logout} user={this.state.user}  component={VideoCourse} />
            </Switch>
            <Footer/>
        </div>
      );
    }
}
export default App;
