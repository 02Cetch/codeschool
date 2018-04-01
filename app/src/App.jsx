import React from 'react';

import Home from './pages/Home';
import OnlineCourses from './pages/OnlineCoursesPage';
import OnlineCourse from './pages/OnlineCourse';
import VideoCourses from './pages/VideoCoursesPage';
import Profile from './pages/Profile';
import VideoCourse from './pages/VideoCourse'

// import {Route, Switch} from 'react-router-dom';

function App(){
    return (
      <div className="App">
          <OnlineCourse/>
      </div>
    );
  }

export default App;
