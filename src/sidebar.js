import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import Profile from './Cards/Profile/Profile';
import Dashboard from './Cards/Dashboard';
import ResumeBuilder from './Cards/ResumeBuilder';
import Community from './Cards/Community';
import Resources from './Cards/Resources';
import FAQ from './Cards/FAQ';
import Contact from './Cards/Contact';
import Referral from './Cards/Referral';

export default class Sidebar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Link to='/profile'>Profile</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/resumebuilder'>ResumeBuilder</Link>
                <Link to='/community'>Community</Link>
                <Link to='/resources'>Resources</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='referral'> Referral programs</Link>
            </div>
        )
    }

}