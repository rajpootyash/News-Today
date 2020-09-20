import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
   Route,
   Switch
   
 } from "react-router-dom";
import Newspage from './components/newspage'
import TopicSelector from './components/sources/topicSelector'
import SubTopics from './components/sources/subTopics'
import firebaseConfig from './firebaseapi'
import { ProtectedRoute } from "./protected.route";
import * as serviceWorker from './serviceWorker';
import LoginComponent from './components/login/login'
import SignUpComponent from './components/signup/signup'
import Source from './components/sources/source'


const Routing = (
  <Router>
    <div id = 'routing-container'>
      <Switch>
      <Route path= '/' exact component={LoginComponent}></Route>
      <Route path= '/signup' exact component={SignUpComponent}></Route>
      <ProtectedRoute path= '/newspage' exact component={Newspage}></ProtectedRoute>    
      <ProtectedRoute path= '/topic' exact component={TopicSelector}></ProtectedRoute> 
      <ProtectedRoute path= '/source' exact component={Source}></ProtectedRoute>    
      <ProtectedRoute path= '/subtopic' exact component={SubTopics}></ProtectedRoute>    


      

      <Route path = '*' component = {()=>'404 NOT FOUND'}></Route>
      </Switch>
    </div>
  </Router>
)

const firebase = require('firebase')
require('firebase/firestore')


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(

  Routing,
  document.getElementById('root')
);
serviceWorker.unregister();
