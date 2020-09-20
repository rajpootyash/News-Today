import React, { Component } from 'react'
import '../../styles/topic.css'
const firebase = require('firebase')

class TopicSelector extends Component {

    constructor()
    {
        super()
        this.state =
        {
            topics:['Technology','Business','Sports','Entertainment','Health','Science','Education','Lifestyle'],
            topicsSelected:[],
            email:localStorage.getItem('email')
            
        }
    }

    

    
    topicHandler = (e) =>
    {


        if(this.state.topicsSelected.includes(e.target.id))
        {
        
            document.getElementById(e.target.id).style.backgroundColor='#f3c1bdaf'

            let i = this.state.topicsSelected.indexOf(e.target.id)
            let b = this.state.topicsSelected.slice()
            b.splice(i,1)

            this.setState({topicsSelected:b},()=>{
            
                if(this.state.topicsSelected.length>4)
                {
                    document.getElementById('next').style.display='block'
                }
                else
                {
                    document.getElementById('next').style.display='none'

                }
                console.log(this.state.topicsSelected)
                    


                    })

        }  
        else{ 
        
        this.setState({topicsSelected:[...this.state.topicsSelected,e.target.id]},()=>{
            
                if(this.state.topicsSelected.length>4)
                {
                    document.getElementById('next').style.display='block'
                }
                else
                {
                    document.getElementById('next').style.display='none'

                }
                console.log(this.state.topicsSelected)
                })
        
        document.getElementById(e.target.id).style.backgroundColor='white'


      
        }

    }
        source =async() =>
        {
            localStorage.setItem('topic',this.state.topicsSelected)

            const topics = this.state.topicsSelected 

            if(topics.length>0)
            {
            const data = await firebase
            .firestore()
            .collection('user')
            .doc(this.state.email)
            .collection('topics')
            .doc('list')
            .set({topics:topics})
            }

            localStorage.setItem('articles','empty')
            localStorage.setItem('from','topics')
            this.props.history.push('/subtopic')
        }


            back = () =>
            {
                this.props.history.push('/newspage')
            }



    




    render() {


        return (
            <div id='cont'>
                <h2 id='sel'>Select some of the topics</h2>
                <h4 id='sa' style={{textAlign:'center'}}>(Select atleast 5)</h4>

                <div id='source'>
                    <div id='align'>
                    {this.state.topics.map(topic => 
                        <div id={topic} className='top' key={topic} onClick={(e)=>{this.topicHandler(e)}}>
                            {topic}
                         </div>
                    )}
                    </div>  
                    <h3 style={{color:'red'}}></h3>
                    <button id='next' onClick={()=>{this.source()}}>NEXT!</button>
                </div>
                {
                localStorage.getItem('fromsignup')==='false'?
                <button id='backtopage' onClick={()=>{this.back()}}>Back</button>
                    :null
            }
            </div>
        )
    }
}


export default TopicSelector