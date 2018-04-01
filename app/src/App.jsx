import React from 'react';

import Home from './pages/Home';
import OnlineCourses from './pages/OnlineCoursesPage';
import OnlineCourse from './pages/OnlineCourse';
import VideoCourses from './pages/VideoCoursesPage';
import Profile from './pages/Profile';
import VideoCourse from './pages/VideoCourse'

import Footer from './components/Footer';

import {Route, Switch} from 'react-router-dom';

function App(){
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/onlinecourses" component={OnlineCourses} />
            <Route exact path="/videocourses" component={VideoCourses} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/onlinecourses/course/:id" render={props => (<OnlineCourse {...props}  />)} />
            <Route exact path="/videocourses/course/:id" render={props => (<VideoCourse {...props}  />)} />
          </Switch>
          <Footer/>
      </div>
    );
  }

export default App;
