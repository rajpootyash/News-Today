import React, { Component } from 'react'
import '../styles/weather.css'
import axios from 'axios'
import api from '../config1'
import moment from 'moment'
import Divider from '@material-ui/core/Divider';

 class Weather extends Component {
        constructor () 
        {
            super()
            this.state = 
            {
                data : null,
                states:[],
                error:null,
                lat:null,
                lon:null,
                time:null
            }
        } 


    componentDidMount = async() =>{
        this.getLocation()
        this.setState({time:moment().format('h:mm a')})
        


       


    }

     getLocation=() =>{
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position)=>this.showPosition(position));
        } else {
          this.setState({'error':'Unable to retrieve your location..'})
        }
      }

      showPosition =(position) =>
      {
        this.setState({lat:position.coords.latitude})
        this.setState({lon:position.coords.longitude},async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=${api}`
            const res= await axios.get(url)
            const data = await res.data
            this.setState({data:data})
            console.log(this.state.data)
        })

      }

    render() {

        setInterval(()=>{
            this.setState({time:moment().format('h:mm a')})
        },60000)

        return (
            <div id='weather'>
                <h2 id='we'>Weather Forecast</h2>
                <Divider style={{boxShadow:'1px 1px black'}}/>
                <div id='wselect'>
              
                </div>

                {this.state.data!==null ?
                <div>
                <h4 id='dat'>{moment().format('dddd')}-{moment().format('LL')}</h4>
                <h4 id='tim'>{this.state.time}</h4>

                <h2 id='area'>{this.state.data.name}</h2>
                <div id='dt'>
                <h2 id='temp'>{this.state.data.main.temp} &#8451;</h2>
                <img id='im' src={`http://openweathermap.org/img/w/${this.state.data.weather[0].icon}.png`}/>
                </div>
                </div>

                :null}
            </div>
        )
    }
}


export default Weather