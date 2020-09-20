import React, { Component } from 'react'
import '../../styles/subtopic.css'
import data from './subTopics.json'
const firebase = require('firebase')


class SubTopics extends Component {


    constructor()
    {
        super()
        this.state =
        {
            subtopic:[],
            selected:[],
            email:localStorage.getItem('email'),
            
           
        }


    }

    val = () =>
    {
        const topics = localStorage.getItem('topic').split(',')
        
        const vals = []
        for(let i=0;i<topics.length;i++)
        {
            let value = data[topics[i]]
            for(let j=0;j<value.length;j++)
            {
                vals.push(value[j])
                this.setState({subtopic:vals})
                
            }     
        }

        

    }
   

    componentDidMount = () =>
    {
        this.val()

    }


    back = () =>
    {
        if(localStorage.getItem('from')==='news')
        this.props.history.push('/newspage')

        if(localStorage.getItem('from')==='topics')
        this.props.history.push('/topic')
    }

    subtopic = async () =>
    {
        
        

        if(this.state.selected.length>0)
        {
        const data = await firebase
        .firestore()
        .collection('user')
        .doc(this.state.email)
        .collection('subtopics')
        .doc('list')
        .set({subtopic:this.state.selected})
        }
        localStorage.setItem('articles','empty')

        if(localStorage.getItem('from')==='topics')
        {
            const source = await firebase
                .firestore()
                .collection('user')
                .doc(this.state.email)
                .collection('source')
                .doc('list')
                .set({source:'empty'})
        }




        this.props.history.push('/newspage')
      




    }
       



  


    render() {

 


       this.sub = (e) =>
        {
             let id = e.target.id

            if(this.state.selected.includes(id))
            {
            
            let i = this.state.selected.indexOf(id)
            let a = this.state.selected.slice()
            a.splice(i,1)

            this.setState({selected:a},()=>{
                if(this.state.selected.length<15)
            {
                document.getElementById('next1').style.display='none'

            }
            
            })
            
            




            document.getElementById(id).style.backgroundColor='rgba(255, 255, 255, 0.685)'
            document.getElementById(id).style.color='black'
            


            }
            else
            {
  
            
                this.setState({selected:[...this.state.selected,id]},()=>
                {
                    console.log(this.state.selected)
                    if(this.state.selected.length>=15)
                    {
                        document.getElementById('next1').style.display='block'
        
                    }
                    
                })

               

            document.getElementById(id).style.backgroundColor='rgb(74, 107, 212)'
            document.getElementById(id).style.color='white'
        }
            
            

   
        }

    
      
     

        return (
            <div id='sb'>
                <h4 id='sq'>Select Some Of The Sub-Topics</h4>
                <h4 id='sa'>(Select atleast 15)</h4>
            <div id='subtopics'>
                
            <div id='sbt'>
                {this.state.subtopic.map(sub => 
                    
                <button id={sub} key={sub} className='btns' onClick={(e)=>this.sub(e)}>{sub}</button>
                    
            
            )}

            </div>
            <div id='nxt'>
            <button id='next1' onClick={()=>{this.subtopic()}}>Next</button>
            </div>
            {
            localStorage.getItem('fromsignup')==='false'?
            <button id='backto' onClick={()=>{this.back()}}>Back</button>
                :null
        }
            </div>
        </div>
        )
    }
}

export default SubTopics