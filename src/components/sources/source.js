import React, { Component } from 'react'
import '../../styles/source.css'
import data from './sources.json'
const firebase = require('firebase')


class Source extends Component {
    constructor()
    {
        super()
        this.state = {
            sources:[],
            email:localStorage.getItem('email')
        }
    }



    source = (e) =>
    {
        let id = e.target.id
        
        if(this.state.sources.includes(id))
        {
        
        let i = this.state.sources.indexOf(id)
        let a = this.state.sources.slice()
        a.splice(i,1)

        this.setState({sources:a},()=>{
            if(this.state.sources.length<5)
        {
            document.getElementById('nxtt2').style.display='none'

        }
        
        })
        
        




        document.getElementById(id).style.backgroundColor='rgba(255, 255, 255, 0.685)'
        document.getElementById(id).style.color='black'
        


        }
        else
        {

        
            this.setState({sources:[...this.state.sources,id]},()=>
            {
                console.log(this.state.sources)
                if(this.state.sources.length>=5)
                {
                    document.getElementById('nxtt2').style.display='inline'
    
                }
                
            })

           

        document.getElementById(id).style.backgroundColor='rgb(74, 107, 212)'
        document.getElementById(id).style.color='white'
    }
        
        

    
    }
    apply = async () =>
    {
        if(this.state.sources.length>0)
        {
        const data = await firebase
        .firestore()
        .collection('user')
        .doc(this.state.email)
        .collection('source')
        .doc('list')
        .set({source:this.state.sources})
        }
        localStorage.setItem('articles','empty')

        this.props.history.push('/newspage')



    }
        
    bckto = () =>
    {
        this.props.history.push('/newspage')
    }


    render() {

        
        return (
            <div id='sv'>
                <h4 id='saq'>Filter Sources</h4>
                <h4 id='sa' style={{textAlign:'center'}}>(Select atleast 5)</h4>

                
                <div id='ss'>
                <div  id='sourceselector'>
                    {
                        data.sources.map(sour=> <button id={sour} key={sour} className='sbtn' onClick={(e)=>{this.source(e)}}>{sour.replace('-',' ').toUpperCase()}</button>)
                    }
            </div>
                    <div id='nxt2'>
                        <button id='nxtt2' onClick={()=>{this.apply()}}>Apply!</button>

                    </div>
               

            </div>
            <button id='bckto' onClick={()=>{this.bckto()}}>Cancel!</button>

            </div>
        )
    }
}


export default Source