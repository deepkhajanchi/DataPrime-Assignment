import React, { Component} from 'react';
//import Avatar from 'react-avatar';
import Avatar from '@material-ui/core/Avatar';

export default class Namepic extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            location:"",
            description:"",
            profile_pic:""
        }
    }
    render(){
        return(
            <div>    
                <div className="profilepic"><Avatar/></div>     
                <button onClick= {this.editaction}>Edit</button>  
                {this.state.firstname} {this.state.lasttname} 
                No location added
                Description (In your words)
            </div>
        )
    }
}