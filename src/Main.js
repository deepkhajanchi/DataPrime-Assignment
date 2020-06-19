import React, { Component} from 'react' ;
import {Route} from 'react-router-dom';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Sidebar from './sidebar';
import Profile from './Cards/Profile/Profile';
import Dashboard from './Cards/Dashboard';
import ResumeBuilder from './Cards/ResumeBuilder';
import Community from './Cards/Community';
import Resources from './Cards/Resources';
import FAQ from './Cards/FAQ';
import Contact from './Cards/Contact';
import Referral from './Cards/Referral';

class Main extends Component{
    render(){
        return(
            <div>
                <Route path='/sidebar' component= {Sidebar}/>
                <Route path='/profile' component= {Profile}/>
                <Route path='/dashboard' component= {Dashboard}/>
                <Route path='/resumebuilder' component= {ResumeBuilder}/>
                <Route path='/community' component= {Community}/>
                <Route path='/resources' component= {Resources}/>
                <Route path='/faq' component= {FAQ}/>
                <Route path='/contact' component= {Contact}/>
                <Route path='/referral' component= {Referral}/>
            </div>
        )
    }
}

export default Main; 