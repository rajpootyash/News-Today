import React, { Component } from 'react'
import axios from 'axios'
import '../styles/coronaupdate.css'
import img from '../styles/1020px-SARS-CoV-2_without_background.png'
import Divider from '@material-ui/core/Divider';

 class Coronaupdate extends Component {
    
    constructor()
    {
        super()
        this.state = {
            data : [],
            open:false,
            state:[],
            currentState:'Andaman and Nicobar Islands',
            districts:[],
            currentDistrict:'Nicobars',
            currentData:null,
            loading:false


        }
    }

    componentDidMount = async () =>
    {

        let res= await axios.get('https://api.covid19india.org/state_district_wise.json')
        let data = await res.data
        this.setState({data:data})
        console.log(this.state.data)
        let a = Object.keys(data)
        localStorage.setItem('states',a)
        this.setState({state:a})
        let b = Object.keys(this.state.data['Andaman and Nicobar Islands'].districtData)
        this.setState({districts:b},()=>{
            this.setState({currentData:this.state.data['Andaman and Nicobar Islands'].districtData['Nicobars']})
            console.log(this.state.data['Andaman and Nicobar Islands'].districtData['Nicobars'])

        })
        
    }
    
    clicked = (e) =>
    {
        this.setState({currentState:e.target.value})
        let b = Object.keys(this.state.data[e.target.value].districtData)
        this.setState({districts:b},()=>{
            console.log(this.state.districts)
        })
        
       

    }
    
    clickedD = (e) =>
    {
        this.setState({currentDistrict:e.target.value},()=>{
    
                this.setState({currentData:this.state.data[this.state.currentState].districtData[this.state.currentDistrict]},()=>{
                    this.setState({loading:true})
                })
                console.log(this.state.data[this.state.currentState].districtData[this.state.currentDistrict])

        })
        
    }
   
    
    render() {
        return (
            <div id='corona'>
               <div id='ct'> <img src={img} id='cr'/><h4 id='cs'>Corona Status In India</h4></div>
               <Divider style={{boxShadow:'1px 1px black'}}/>

      
        <div>
            <select id='state' onChange={(e)=>{this.clicked(e)}}>
        {this.state.state.map(i => i!=='State Unassigned'?<option key={i} value={i} id={i} >{i}</option>:null)}
            </select>

            <select id='district' onClick={(e)=>{this.clickedD(e)}}>
        {this.state.districts.map(i => i!=='Other State'?<option key={i} value={i} id={i} >{i}</option>:null)}
            </select>
            

            


        </div>
        <div id='data'>
        {this.state.currentData !==null?
        <div>
        <h5 id='rec'>Recovered:  <span id='recovered'>  {this.state.currentData.recovered} </span></h5>
        <Divider style={{boxShadow:'1px 1px black'}} variant='middle'/>

        <h5 id='rec'>Active Cases: <span id='active'> {this.state.currentData.active} </span></h5>
        <Divider style={{boxShadow:'1px 1px black'}} variant='middle'/>

        <h5 id='rec'>Confirmed Cases: <span id='confirmed'>   {this.state.currentData.confirmed} </span></h5>
        <Divider style={{boxShadow:'1px 1px black'}} variant='middle'/>

        <h5 id='rec'>Death:   <span id='death'> {this.state.currentData.deceased} </span></h5>

        </div>
        :null}
                </div>
            </div> 
        )
    }
}


export default Coronaupdate

