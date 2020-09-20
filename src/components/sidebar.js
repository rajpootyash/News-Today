import React, { Component } from 'react'
import '../styles/sidebar.css'
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';


class Sidebar extends Component {
   
    handler =(e) =>
    {
        this.props.handle(e.target.id)

    }

    logout = () =>
    {
        this.props.logout()
    }

   
   
   
    render() {



        return (
            <div id='sidebar'>
               <div id='per'> <div id='person'><PersonIcon id='avt'/><h4 id='name2'>{this.props.name}</h4></div></div>
               <Divider style={{boxShadow:'1px 1px black'}}/>

               <h2 id='topic' onClick={(e)=>this.handler(e)}>Topics</h2>
               <Divider style={{boxShadow:'1px 1px black'}} variant='middle'/>
               
               <h2 id='subtopic' onClick={(e)=>this.handler(e)}>Sub-Topics</h2>
               <Divider style={{boxShadow:'1px 1px black'}} variant='middle'/>

               <h2 id='sources' onClick={(e)=>this.handler(e)}>Filter Sources</h2>
               <Divider style={{boxShadow:'1px 1px black'}} variant='middle'/>

               <h2 id='removesources' onClick={(e)=>this.handler(e)}>Remove Filtered Sources</h2>
               <Divider style={{boxShadow:'1px 1px black'}} variant='middle'/>

            <div id='logdiv'>
                <Divider style={{boxShadow:'1px 1px black'}}/>
                <h2 id='logout' onClick ={()=>this.logout()}>Logout</h2>
               <Divider style={{boxShadow:'1px 1px black'}}/>
               </div>

            </div>
        )
    }
}


export default Sidebar