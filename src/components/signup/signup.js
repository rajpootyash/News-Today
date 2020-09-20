import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';


const firebase = require('firebase')
class SignUpComponent extends React.Component
{
    constructor()
        {
            super()
            this.state = {
                email:null,
                password:null,
                confirm_password:null,
                name:'',
                signUpError:''
            }
        }
    
    render()
    
    {
        this.formValid = () => this.state.password === this.state.confirm_password
        


        //Instead of typing this.props everytime it can be store in a variable
      this.userTyping = (type,e) =>
       {
           switch (type) {
               case 'email':
                   this.setState({email: e.target.value})
                   break;
                case 'password':
                   this.setState({password: e.target.value})
                   break;
                case 'confirm_password':
                   this.setState({confirm_password: e.target.value})
                   break;
                case 'name':
                    this.setState({name: e.target.value})
                   break;
                   
        
           
               default:
                   break;
           }
       }
        

       this.submitSignUp = e =>
       {
           e.preventDefault()

           
           if(!this.formValid())
           {
              this.setState({signUpError: 'Password Mismatch!!'})
              return
           }
           else
           {
               const name = {
                   email:this.state.email,
                   name:this.state.name
               }
            

               firebase
               .auth()
               .createUserWithEmailAndPassword(this.state.email,this.state.password)
               .then(() => {
                
                firebase
                .firestore()
                .collection('names')
                .add(name)

                localStorage.setItem('email',this.state.email)
                localStorage.setItem('as',true)
                localStorage.setItem('articles','empty')

                localStorage.setItem('fromsignup','true')
                this.props.history.push('/topic')
            },dbError => {
                this.setState({signUpError:'Failed to add User'})
                setTimeout(()=>{
                 window.location.reload(false)

             },1000)
            }
            ,authError => {
             this.setState({signUpError:'Email or password is Invalid..'})
             setTimeout(()=>{
                 window.location.reload(false)

             },1000)
            })
            
               
           
       } }
        return(
            <div className='container'>
                <div id='lheader'>
                    <h2 id='titl'>NEWS TODAY</h2>
                </div>
                <div>
              
                <div className='login'>
                    <h2>Sign Up!</h2>
                    <form onSubmit={(e)=> this.submitSignUp(e)} id='signUp'>
                        
                        
                        <TextField  id='name' label="Enter Your Name..." color="primary" onChange={(e) => this.userTyping('name',e)} /><br /><br/>
                        <TextField  id='email' type='email' label="Enter a valid Email..." color="primary" onChange={(e) => this.userTyping('email',e)} /><br /><br/>
                        <TextField  id='password'  type='password' label="Enter Your Password..." color="primary" onChange={(e) => this.userTyping('password',e)} /><br /><br/>
                        <TextField  id='confirm_password'   type='password' label="Confirm Password..." color="primary" onChange={(e) => this.userTyping('confirm_password',e)} /><br /><br />
                        
                        <div id='sbtn'><Link to='/' style={{ textDecoration: 'none', color:'#0067B8', fontSize:'15px'}}>Already have an account?</Link><button id='sign'>Sign Up</button></div>
                         
                    </form>
                   
                 {this.state.signUpError?
                 <h2 id='err'>{this.state.signUpError}</h2> 
                 :
                 null
                
                
                }

                </div> 
               </div>
            </div>
        )
    }
}


export default SignUpComponent
