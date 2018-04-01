import React from 'react';

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

import Footer from './components/Footer';

import {Route, Switch} from 'react-router-dom';

function App(){
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
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

export default App;
