import React, { Component } from 'react'
import axios from 'axios'
import '../styles/newspage.css'
import api from '../config'
import moment from 'moment'
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './sidebar'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Fab from '@material-ui/core/Fab';
import authenticate from '../auth'
import News from './news'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import data from './sources/subTopics.json'
import CircularProgress from '@material-ui/core/CircularProgress'
import Coronaupdate from './coronaupdate'
import Weather from './weather'



const firebase = require('firebase')


class Newspage extends Component {
    
    constructor()
    {
        super()
        this.state= {
            headlines :[],
            open:false,
            name:null,
            topics:[],
            subtopics:[],
            email:null,
            value:0,
            loading:false,
            loading1:false,

            Technology:[],
            Sports:[],
            Entertainment:[],
            Business:[],
            Health:[],
            Science:[],
            Education:[],
            Lifestyle:[],

            currentTopic:null,
            articles:[],
            btns:null
            
             
        }

   
    }

    
componentDidMount = async () =>
{



    var url = `https://yacdn.org/proxy/http://newsapi.org/v2/top-headlines?`+
    `language=en&`+
    `domains=googlenews.com,bbcnews.com,thehindu.com,thetimesofindia.com&`+
    `sortBy=publishedAt&`+
    `country=in&`+
    `apiKey=${api}`;

    var url1 =`https://yacdn.org/proxy/http://newsapi.org/v2/top-headlines?`+
    `country=us&`+
    `language=en&`+
    `sortBy=publishedAt&`+
    `apiKey=${api}`;
   
    let article =localStorage.getItem('articles').split(',') 

    if(article.length <= 1)
    {

    const top = await localStorage.getItem('topic').split(',')

    top.map(i=>{
        localStorage.setItem(i,'empty')
    })
    
    const res = await axios.get(url)
    const data = await res.data
    const a = await data.articles.slice()
    
    const res1 = await axios.get(url1)
    const data1 = await res1.data
    const b = await data1.articles.slice()
    const c = await a.concat(b)

    const filteredArr = await c.reduce((acc, current) => {
        const x = acc.find(item => item.title === current.title);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);


    
   const d = await  filteredArr.sort((time1,time2) =>{
        if(time1.publishedAt>time2.publishedAt) return -1
        if(time1.publishedAt<time2.publishedAt) return 1
    })
    
    localStorage.setItem('articles',JSON.stringify(d))
    
    this.setState({headlines:d},()=>
    { console.log("Data Fetched")
        console.log(this.state.headlines)
        this.setState({loading:true})
    })
    

   

    }
    else
    {

       let articles = JSON.parse(localStorage.getItem('articles'))
       this.setState({headlines:articles},()=>{
        this.setState({loading:true})
       })


    }



    firebase.auth().onAuthStateChanged(async _usr => {
        if(!_usr)
        this.props.history.push('/')

        else
        {

            const name   = await firebase
            .firestore()
            .collection('names')
            .where('email','==',localStorage.getItem('email'))
            .get()

            let data = name.docs
            let arr = []
            data.forEach((i)=>arr.push(i.data()))
            let email = arr[0].email
            let names = arr[0].name

            this.setState({email:email})
            this.setState({name:names})

        
        
            const snapShot= await firebase
            .firestore()
            .collection('user')
            .doc(localStorage.getItem('email'))
            .collection('topics')
            .doc('list')
            .get()
            
        
            let v = Object.values(snapShot.data())
            

            this.setState({topics:v[0]})
            localStorage.setItem('topic',v[0])
            
            
            const snapShot1= await firebase
            .firestore()
            .collection('user')
            .doc(localStorage.getItem('email'))
            .collection('subtopics')
            .doc('list')
            .get()
        
            let v1 = await Object.values(snapShot1.data())
           
            
            this.setState({subtopics:v1[0]},()=>{
                this.subtopicsMount()
                this.setState({currentTopic:v[0][0]})

                
                
            })
        
    
        }

    } )}


     
toggleDrawer = (i) =>
{
   this.setState({open:i})
}

hand =async (side) =>
{
  

    if(side==='topic')
    {
        this.setState({open:false},()=>{
            localStorage.setItem('fromsignup','false')
            this.props.history.push('/topic')
    
        })
    }

    else if(side==='subtopic')
    {

        this.setState({open:false},()=>{
            localStorage.setItem('from','news')

            this.props.history.push('/subtopic')
    
        })
    }

    else if(side==='sources')
    {        
        this.setState({open:false},()=>{
      
        this.props.history.push('/source')

    })

    }

    else if(side==='removesources')
    {
       const a =await firebase
        .firestore()
        .collection('user')
        .doc(this.state.email)
        .collection('source')
        .doc('list')
        .set({source:'empty'})
        localStorage.setItem('articles','empty')
        window.location.reload(false)
    }

    
}




arrow = () =>
{
     document.getElementById('headlines').scrollLeft -=800
}

arrows = () =>
{
    document.getElementById('headlines').scrollLeft +=800
}

logout = () =>
{
    authenticate.logout(()=>{this.props.history.push('/')})
}



subtopicsMount = () =>
{
    let Technology=[]
    let Sports=[]
    let Entertainment=[]
    let Business=[]
    let Health=[]
    let Science=[]
    let Education=[]
    let Lifestyle=[]
   
    this.state.topics.forEach(topic=>
        {
        let subtopicList = Object.values(data[topic])
        
        
        
            for(let i=0;i<this.state.subtopics.length;i++)
            {
               

                if(subtopicList.includes(this.state.subtopics[i]))
                {
                    let u = this.state.subtopics[i]
                   
                    if(topic==='Technology')Technology.push(u)
                    if(topic==='Sports')Sports.push(u)
                    if(topic==='Entertainment')Entertainment.push(u)
                    if(topic==='Business')Business.push(u)
                    if(topic==='Health')Health.push(u)
                    if(topic==='Science')Science.push(u)
                    if(topic==='Education')Education.push(u)
                    if(topic==='Lifestyle')Lifestyle.push(u)


                    
                }
        
                
            }
         

        } 
        )

        this.setState({
            Technology:Technology,
            Sports:Sports,
            Entertainment:Entertainment,
            Business:Business,
            Health:Health,
            Science:Science,
            Education:Education,
            Lifestyle:Lifestyle,

        })

        this.setState({loading1:true},()=>
        {
            console.log(this.state.loading1)
        })
    
}









    render() {

    setInterval(() => {
        localStorage.setItem('articles','empty')
        console.log("data refreshed")
    
    }, 1800000);

        

  


        this.handleChange = (e,newValue) =>
        {
            this.setState({value:newValue})
            
        
            
        
        }
    
        
    

        return (
            
            <div id='sda'>
                 
                <div id='header'>
                <MenuIcon onClick={()=>this.toggleDrawer(true)} id='menu'></MenuIcon>
                <Drawer  open={this.state.open} onClose={()=>this.toggleDrawer(false)}>   
                  <Sidebar handle={this.hand} logout={this.logout} name={this.state.name} />
                  </Drawer>
                <h2 id='hd'>NEWS TODAY</h2>
                </div>

                
                <h2 id='hdtg'>HEADLINES</h2> 
                <div id='headlines'>
                
                    <Fab id='leftArrow' onClick={()=>{this.arrow()}}><ArrowBackIosIcon/></Fab>
                    <Fab id='rightArrow' onClick={()=>{this.arrows()}}><ArrowForwardIosIcon/></Fab>
                    
                    {
                    
                    this.state.loading?
                    this.state.headlines.map(data => 
                        <a href={data.url} target="_blank" style={{textDecoration:'none',color:'black'}} key={data.url}>
                        <div id={data.title} key={data.title} id='hdlns' >
                            
                            <div id='himgs'>
                           <img src={data.urlToImage} id='himg'></img>
                            </div>
                            <div id='tit'>
                                {data.title}
                            </div>
                            <div id='htime'>
                                {moment(data.publishedAt).fromNow()}

                            </div>
                         </div>
                         </a>
                        )
                        
                        :
                        <CircularProgress style={{marginLeft:'750px', marginTop:'50px'}}/>
                        
                        }

                </div>
                <div id='main-content'>
               
                    <Coronaupdate/>
              
                <div id='news'>
                        
                    <div id='appbar'>          
                        <Tabs value={this.state.value} onChange={this.handleChange} variant="scrollable"scrollButtons="auto" >
                    
                        {
                            this.state.topics.map(top => <Tab label={<h4 id='tab'>{top}</h4>} key={top} />)
                        }
                         </Tabs>
                    
                    </div>
                    
                <div id='nw'>
                {
                    
                    this.state.topics.map((top,i)=><News subtopic={this.state[top]} topic={top} index={i} value={this.state.value} key={i}  />)
                }
                
                </div>
                </div>
 
                    <Weather/>
               

       
                </div>
            </div>

            
            )
    }
}


export default Newspage