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

//import Nav from './components/Nav';
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
  }
  render(){
      return (
        <div className="App">
            <Switch>
              <Route exact path="/" render={props => (<Home onLogin={this.login} {...props}/>)} />
              <Route exact path="/onlinecourses" render={props => (<OnlineCourses data={OnlineCoursesDB} {...props} />)} />
              <Route exact path="/videocourses" render={props => (<VideoCourses data={videoCoursesDB} {...props} />)} />
              <Route exact path="/profile" render={props => (<Profile data={userInfo} {...props} />)} />
              <Route exact path="/onlinecourses/course/:id" render={props => (<OnlineCourse {...props}  />)} />
              <Route exact path="/videocourses/course/:id" render={props => (<VideoCourse {...props}  />)} />
            </Switch>
            <Footer/>
        </div>
      );
    }
}
export default App;
