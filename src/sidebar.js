import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import './stylesheet/sidebar.css';
import styled from 'styled-components';
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
import { Avatar } from '@material-ui/core';

    export default class Siderbar extends Component{
        render(){
            return(
            <div classname="sidebar">
             
                <Avatar/> {this.state.firstname} {this.state.lastname} 
                
                <Link to='/profile'><PersonOutlineRoundedIcon />Profile</Link>
                <Link to='/dashboard'><TiThLargeOutline />Dashboard</Link>
                <Link to='/resumebuilder'><InsertDriveFileOutlinedIcon />ResumeBuilder</Link>
                <Link to='/community'><PeopleAltOutlinedIcon />Community</Link>
                <Link to='/resources'><FilterNoneOutlinedIcon />Resources</Link>
                <Link to='/faq'><HelpOutlineOutlinedIcon />FAQ</Link>
                <Link to='/contact'><ChatBubbleOutlineIcon />Contact</Link>
                <Link to='/referral'><AccountBalanceWalletOutlinedIcon /> Referral programs</Link>
                
            </div>
        )
    }
}