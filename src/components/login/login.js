import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import auth from "../../auth";
import TextField from '@material-ui/core/TextField';


const firebase = require('firebase')

class LoginComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            email:null,
            password:null,
            loginError:''
        }
    }

    render()
    {
        this.userTyping = (type,e) =>
        {
            switch (type) {
                case 'email':
                    this.setState({email: e.target.value})
                    
                    break;
                 case 'password':
                    this.setState({password: e.target.value})
                    break;
                  
                 
                    
                    
            
                default:
                    break;
            }
        }

        this.submitLogin = async e =>
        {
             e.preventDefault()
             localStorage.setItem('email',this.state.email)
             firebase
             .auth()
             .signInWithEmailAndPassword(this.state.email,this.state.password)
             .then(() => {
                

                auth.login(() => {
                    
                    localStorage.setItem('articles','empty')
                    this.props.history.push("/newspage");
                  
                 })
             }, err => {
                 this.setState({loginError : 'Invalid Credentials!'})
                
                 setTimeout(()=>{
                     window.location.reload(false)

                 },1000)
             })
        }
         
        return(
            <div id='container'>
                <div id='lheader'>
                    <h2 id='titl'>NEWS TODAY</h2>
                </div>


        
                <div id='login'>

                    <h2>Login!</h2>
                    <br />
                    <br />
                    <form onSubmit = {e => this.submitLogin(e)}>
                        <TextField  id='email1' label="Enter your email..." type='email' color="primary" onChange={e => this.userTyping('email',e)}/><br /><br/>
                        <TextField  id='password1' label='Enter your password...' type='password' color="primary" onChange={e => this.userTyping('password',e)} /><br /><br/>
                         
                         
                         {this.state.loginError?
                          
                            <h4 id='error'>{this.state.loginError}</h4>
                            

                         
                         :
                        null}
                        <p>Don't have an account ?</p>
                       <div id='sbn'><Link to='/signup' style={{ textDecoration: 'none', color:'#0067B8', fontSize:'19px'}}>Create account!</Link> <button type='submit' id='log' > Login </button></div>
               
                    


                    </form>


                </div>
                
            </div>
        )
    }
}


export default LoginComponent