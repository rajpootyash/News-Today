import React, { Component } from 'react'
import '../styles/news.css'
import api from '../config'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import moment from 'moment'
const firebase = require('firebase')


class News extends Component {

    constructor()
    {
        super()
        this.state ={

            articles:[],
            loading:false,
            topic:null,
            topics:null,
            source:null,
            email:localStorage.getItem('email'),
            domain:''
            
        }
    }


componentDidMount = async() =>
{

  const source = await firebase
                .firestore()
                .collection('user')
                .doc(this.state.email)
                .collection('source')
                .doc('list')
                .get()

               
                let v = Object.values(source.data())
                
                if(v[0].length>1)
                {
                
                
                localStorage.setItem('sources',v[0])
                console.log(v[0])
                }
                else
                {
                  localStorage.setItem('sources','empty')
                }

}


    componentDidUpdate = (prevProp,prevState) =>
    {
      
        
        if(prevState.topic!==this.props.topic)
        {
            if(this.props.value===this.props.index )
            {
            this.setState({topic:this.props.topic})
          
            this.article(this.props.subtopic,this.props.topic)
        }}

    }



    article = async (subtopic,topic)=>
    {
      let sources = []
      let domains
      let source = localStorage.getItem('sources').split(',')
      if(source.length>1)
      {
       const a = await source.map(i => sources.push(i.replace(/\s/g,'')+'.com') )
       domains = sources.join(',')

       this.setState({domain:domains})
       console.log(domains)

      }


      let ctopic =  localStorage.getItem(topic).split(',')
     
    
      if(ctopic.length<=1)
      {
      this.setState({loading:false})
         if(subtopic.length>0)
         {
       
          
          subtopic.map(async (sub)=>{
          let url = `https://yacdn.org/proxy/http://newsapi.org/v2/everything?`+
            `q=${sub}&`+
            `language=en&`+
            `domains=${this.state.domain}&`+
            `sortBy=publishedAt&`+
            `apiKey=${api}`;
       
         
            const res = await axios.get(url)
    const data = await res.data
    const c = await data.articles.slice()
    const d = this.state.articles.slice()
    const e = await c.concat(d)
    const filteredArr = await e.reduce((acc, current) => {
                const x = acc.find(item => item.title === current.title);
                if (!x) {
                  return acc.concat([current]);
                } else {
                  return acc;
                }
              }, []);

      const sorted = await filteredArr.sort((time1,time2) =>{
        if(time1.publishedAt>time2.publishedAt) return -1
        if(time1.publishedAt<time2.publishedAt) return 1
    })
   
    this.setState({articles:sorted},()=>
    {

      localStorage.setItem(topic,JSON.stringify(this.state.articles))
    })
    
    this.setState({loading1:true})


          })
            
         }
         else
         {
          let url = `https://yacdn.org/proxy/http://newsapi.org/v2/everything?`+
          `q=${topic}&`+
          `language=en&`+
          `domains=${this.state.domain}&`+
          `sortBy=publishedAt&`+
          `apiKey=${api}`;
         
      
    const res = await axios.get(url)
    const data = await res.data
    const c = await data.articles.slice()
    const d = this.state.articles.slice()
    const e = await c.concat(d)
    const filteredArr = await e.reduce((acc, current) => {
                const x = acc.find(item => item.title === current.title);
                if (!x) {
                  return acc.concat([current]);
                } else {
                  return acc;
                }
              }, []);

      const sorted = await filteredArr.sort((time1,time2) =>{
        if(time1.publishedAt>time2.publishedAt) return -1
        if(time1.publishedAt<time2.publishedAt) return 1
    })

    this.setState({articles:sorted},()=>{

      localStorage.setItem(topic,JSON.stringify(this.state.articles))
    })
    
    
    this.setState({loading1:true})
        
         }
        
        }
      else
      {
        let csubtopic = JSON.parse(localStorage.getItem(topic))
        this.setState({articles:csubtopic})
      this.setState({loading1:true})
    

      }



    
    
    }


    render() {
        
      
        return (
        <div>

         
        {this.props.value===this.props.index && (

        this.state.loading1?
        this.state.articles.map(data => 
          data.description!==null?
            data.title!==null?
            
             
          <Card id={data.title} key={data.title} className='cards'>
            {data.urlToImage!==null?
            data.urlToImage.includes('images.hotukdeals.com')===false?
            <div id='nmg'>
            <CardMedia id='nimg' alt='No-Image' component="img" image={data.urlToImage}  />
            </div>:
            null
            :null
            }
            
            <div id='contents'>
            <CardContent>
            <a href={data.url} target="_blank" style={{textDecoration:'none',color:'black'}}> <b> <h2 id='ntitle'>{data.title.replace( /(<([^>]+)>)/ig, '')}</h2></b></a><br />
              <hr />
            <h4 id='ndesc'>{data.description.replace( /(<([^>]+)>)/ig, '')}</h4>
            <div id='domain'>
              {data.source.name}
            </div>


            <div id='ntime'>
                    {moment(data.publishedAt).fromNow()}

             </div>
              </CardContent>

            </div>
      

          </Card>
         
          :
          null
         :
          null
        )
        :
        <CircularProgress id='nc' style={{marginLeft:'310px', marginTop:'200px'}}/>

        )}
              
            </div>
        )
    }
}

export default News