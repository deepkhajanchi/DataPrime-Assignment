import React, { Component} from 'react';
import Avatar from 'react-avatar';

export default class Namepic extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            description:"",
            profile_pic:""
        }
    }
    render(){
        return(
            <div>    
                <div className="profilepic"><Avatar/></div>     
                <button>Edit</button>  
                {this.state.firstname} {this.state.lasttname} 
                No location added
                Description (In your words)
            </div>
        )
    }
}