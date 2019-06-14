import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Profiles from './components/Profiles';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import AddExp from './components/AddExp';
import AddEdu from './components/AddEdu';
import CreateProfile from './components/CreateProfile';
import Posts from './components/Posts';
import Post from './components/Post';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Landing} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/profiles' component={Profiles} />
      <Route exact path='/profile/:userId' component={Profile} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/create-profile' component={CreateProfile} />
      <Route exact path='/add-experience' component={AddExp} />
      <Route exact path='/add-education' component={AddEdu} />
      <Route exact path='/posts' component={Posts} />
      <Route exact path='/post/:postId' component={Post} />
    </div>
    </Router>
  );
}

export default App;
