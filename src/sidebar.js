import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import './stylesheet/sidebar.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import { TiThLargeOutline } from "react-icons/ti";
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import FilterNoneOutlinedIcon from '@material-ui/icons/FilterNoneOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';

export default class Sidebar extends Component{  
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
        }
    }
       render(){
          
        return(
            <div classname="sidebar">
                <Avatar/> {this.state.firstname} {this.state.lastname} 
                <div className="subsidebar">
                <Link to='/profile'><PersonOutlineRoundedIcon />Profile</Link>
                <Link to='/dashboard'><TiThLargeOutline />Dashboard</Link>
                <Link to='/resumebuilder'><InsertDriveFileOutlinedIcon />ResumeBuilder</Link>
                <Link to='/community'><PeopleAltOutlinedIcon />Community</Link>
                <Link to='/resources'><FilterNoneOutlinedIcon />Resources</Link>
                <Link to='/faq'><HelpOutlineOutlinedIcon />FAQ</Link>
                <Link to='/contact'><ChatBubbleOutlineIcon />Contact</Link>
                <Link to='/referral'><AccountBalanceWalletOutlinedIcon /> Referral programs</Link>
                </div>
            </div>
        )
    }
}