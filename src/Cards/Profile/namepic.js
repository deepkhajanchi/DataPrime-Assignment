import React, { Component} from 'react';
import '../../stylesheet/profile.css';
//import Avatar from '@material-ui/core/Avatar';
import Avatar from 'react-avatar';

import { Dropdown } from 'semantic-ui-react';

export default class Namepic extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            location:"No location added",
            description:"Description (In your words)",
            profile_pic:"",
            isInEditAction: false
        }
        
    }
    editaction=()=>{
        this.setState({
            isInEditAction: ! this.state.isInEditAction
        })
    }

    editpic=()=>{

    }

    renderEditView=()=>{
        return <div>
            <label>First Name</label><input type ="text" defaultValue={this.state.firstname}/>
            <label>Last Name</label><input type ="text" defaultValue={this.state.lastname}/>
            <label>Location</label> <Dropdown defaultText="Choose" />
            <label>Description</label> <input type= "textarea"/>
        </div>
    }

    renderDefaultView=()=>{
        <div>
    <p>{this.state.firstname}</p>
    <p>{this.state.lastname}</p>
    <p>{this.state.location}</p>
    <p>{this.state.discription}</p>
    </div>
    }
    
    render(){
        const locationOptions = [
            { key: '1',  text: 'San Francisco' },
            { key: '2',  text: 'New York' },
            { key: '3',  text: 'New Orlens' },
            { key: '4',  text: 'Los Angeles' },
            { key: '5',  text: 'Houston' },
            { key: '6',  text: 'Dallas' },
            { key: '7',  text: 'Chicago' },
            { key: '8',  text: 'Miami' },
            { key: '9',  text: 'Seattle' }
          ]

          const Dropdown=()=>(
            <Dropdown
                placeholder= 'Choose'
                fluid
                search
                selection
                options={locationOptions}
                />
          )
        return this.state.isInEditAction ?
            this.renderEditView():
            this.renderDefaultView()
    }
}