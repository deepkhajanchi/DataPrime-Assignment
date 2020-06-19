import React, { Component} from 'react' ;
import {Route} from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <Route path='profile' component= {profile}/>
            </div>
        )
    }
}

export default Main; 