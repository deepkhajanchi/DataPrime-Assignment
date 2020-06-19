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
            <BrowserRouter>
            <div>
                <Route exact path='/'><Profile/></Route>
                <Route path='/sidebar'><Sidebar/></Route>
                <Route path='/profile'> <Profile/></Route>
                <Route path='/dashboard'><Dashboard/></Route>
                <Route path='/resumebuilder'><ResumeBuilder/></Route> 
                <Route path='/community'><Community/></Route>
                <Route path='/resources'><Resources/></Route>
                <Route path='/faq'> <FAQ/></Route>
                <Route path='/contact'> <Contact/></Route>
                <Route path='/referral'><Referral/></Route>
            </div>
            </BrowserRouter>
        )
    }
}

export default Main; 