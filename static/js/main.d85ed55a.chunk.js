(this.webpackJsonpnews_paper=this.webpackJsonpnews_paper||[]).push([[0],{104:function(e,t,a){e.exports=a(155)},126:function(e,t,a){},128:function(e,t,a){},133:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),s=a(43),i=a(15),l=a(19),u=a(8),d=a.n(u),m=a(16),p=a(14),h=a(11),g=a(18),f=a(17),b=a(34),E=a.n(b),v=(a(126),"f60b46b94ea74ffe99a95f2670e10f46"),y=a(36),S=a.n(y),x=a(205),w=a(91),k=a.n(w),I=(a(128),a(88)),O=a.n(I),j=a(195),C=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handler=function(t){e.props.handle(t.target.id)},e.logout=function(){e.props.logout()},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"sidebar"},r.a.createElement("div",{id:"per"}," ",r.a.createElement("div",{id:"person"},r.a.createElement(O.a,{id:"avt"}),r.a.createElement("h4",{id:"name2"},this.props.name))),r.a.createElement(j.a,{style:{boxShadow:"1px 1px black"}}),r.a.createElement("h2",{id:"topic",onClick:function(t){return e.handler(t)}},"Topics"),r.a.createElement(j.a,{style:{boxShadow:"1px 1px black"},variant:"middle"}),r.a.createElement("h2",{id:"subtopic",onClick:function(t){return e.handler(t)}},"Sub-Topics"),r.a.createElement(j.a,{style:{boxShadow:"1px 1px black"},variant:"middle"}),r.a.createElement("h2",{id:"sources",onClick:function(t){return e.handler(t)}},"Filter Sources"),r.a.createElement(j.a,{style:{boxShadow:"1px 1px black"},variant:"middle"}),r.a.createElement("h2",{id:"removesources",onClick:function(t){return e.handler(t)}},"Remove Filtered Sources"),r.a.createElement(j.a,{style:{boxShadow:"1px 1px black"},variant:"middle"}),r.a.createElement("div",{id:"logdiv"},r.a.createElement(j.a,{style:{boxShadow:"1px 1px black"}}),r.a.createElement("h2",{id:"logout",onClick:function(){return e.logout()}},"Logout"),r.a.createElement(j.a,{style:{boxShadow:"1px 1px black"}})))}}]),a}(n.Component),A=a(92),D=a.n(A),B=a(93),T=a.n(B),N=a(200),L=new(function(){function e(){Object(p.a)(this,e),this.authenticated=!1}return Object(h.a)(e,[{key:"login",value:function(e){this.authenticated=!0,localStorage.setItem("as",this.authenticated),e()}},{key:"logout",value:function(e){this.authenticated=!1,localStorage.removeItem("as"),localStorage.removeItem("articles"),localStorage.removeItem("fromsignup"),e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),U=(a(133),a(199)),_=a(196),M=a(198),H=a(197),P=a(37),F=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).componentDidMount=Object(m.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.firestore().collection("user").doc(e.state.email).collection("source").doc("list").get();case 2:a=t.sent,(n=Object.values(a.data()))[0].length>1?(localStorage.setItem("sources",n[0]),console.log(n[0])):localStorage.setItem("sources","empty");case 5:case"end":return t.stop()}}),t)}))),e.componentDidUpdate=function(t,a){a.topic!==e.props.topic&&e.props.value===e.props.index&&(e.setState({topic:e.props.topic}),e.article(e.props.subtopic,e.props.topic))},e.article=function(){var t=Object(m.a)(d.a.mark((function t(a,n){var r,c,o,s,i,l,u,p,h,g,f,b;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=[],!((o=localStorage.getItem("sources").split(",")).length>1)){t.next=9;break}return t.next=5,o.map((function(e){return r.push(e.replace(/\s/g,"")+".com")}));case 5:t.sent,c=r.join(","),e.setState({domain:c}),console.log(c);case 9:if(!(localStorage.getItem(n).split(",").length<=1)){t.next=40;break}if(e.setState({loading:!1}),!(a.length>0)){t.next=16;break}a.map(function(){var t=Object(m.a)(d.a.mark((function t(a){var r,c,o,s,i,l,u,m;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://yacdn.org/proxy/http://newsapi.org/v2/everything?"+"q=".concat(a,"&")+"language=en&"+"domains=".concat(e.state.domain,"&")+"sortBy=publishedAt&"+"apiKey=".concat(v),t.next=3,E.a.get(r);case 3:return c=t.sent,t.next=6,c.data;case 6:return o=t.sent,t.next=9,o.articles.slice();case 9:return s=t.sent,i=e.state.articles.slice(),t.next=13,s.concat(i);case 13:return l=t.sent,t.next=16,l.reduce((function(e,t){return e.find((function(e){return e.title===t.title}))?e:e.concat([t])}),[]);case 16:return u=t.sent,t.next=19,u.sort((function(e,t){return e.publishedAt>t.publishedAt?-1:e.publishedAt<t.publishedAt?1:void 0}));case 19:m=t.sent,e.setState({articles:m},(function(){localStorage.setItem(n,JSON.stringify(e.state.articles))})),e.setState({loading1:!0});case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=38;break;case 16:return s="https://yacdn.org/proxy/http://newsapi.org/v2/everything?"+"q=".concat(n,"&")+"language=en&"+"domains=".concat(e.state.domain,"&")+"sortBy=publishedAt&"+"apiKey=".concat(v),t.next=19,E.a.get(s);case 19:return i=t.sent,t.next=22,i.data;case 22:return l=t.sent,t.next=25,l.articles.slice();case 25:return u=t.sent,p=e.state.articles.slice(),t.next=29,u.concat(p);case 29:return h=t.sent,t.next=32,h.reduce((function(e,t){return e.find((function(e){return e.title===t.title}))?e:e.concat([t])}),[]);case 32:return g=t.sent,t.next=35,g.sort((function(e,t){return e.publishedAt>t.publishedAt?-1:e.publishedAt<t.publishedAt?1:void 0}));case 35:f=t.sent,e.setState({articles:f},(function(){localStorage.setItem(n,JSON.stringify(e.state.articles))})),e.setState({loading1:!0});case 38:t.next=43;break;case 40:b=JSON.parse(localStorage.getItem(n)),e.setState({articles:b}),e.setState({loading1:!0});case 43:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.state={articles:[],loading:!1,topic:null,topics:null,source:null,email:localStorage.getItem("email"),domain:""},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.value===this.props.index&&(this.state.loading1?this.state.articles.map((function(e){return null!==e.description&&null!==e.title?r.a.createElement(_.a,{id:e.title,key:e.title,className:"cards"},null!==e.urlToImage&&!1===e.urlToImage.includes("images.hotukdeals.com")?r.a.createElement("div",{id:"nmg"},r.a.createElement(H.a,{id:"nimg",alt:"No-Image",component:"img",image:e.urlToImage})):null,r.a.createElement("div",{id:"contents"},r.a.createElement(M.a,null,r.a.createElement("a",{href:e.url,target:"_blank",style:{textDecoration:"none",color:"black"}}," ",r.a.createElement("b",null," ",r.a.createElement("h2",{id:"ntitle"},e.title.replace(/(<([^>]+)>)/gi,"")))),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("h4",{id:"ndesc"},e.description.replace(/(<([^>]+)>)/gi,"")),r.a.createElement("div",{id:"domain"},e.source.name),r.a.createElement("div",{id:"ntime"},S()(e.publishedAt).fromNow())))):null})):r.a.createElement(U.a,{id:"nc",style:{marginLeft:"310px",marginTop:"200px"}})))}}]),a}(n.Component),W=a(203),J=a(201),Y=a(62),K=(a(143),a(90)),V=a.n(K),R=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).componentDidMount=Object(m.a)(d.a.mark((function t(){var a,n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("https://api.covid19india.org/state_district_wise.json");case 2:return a=t.sent,t.next=5,a.data;case 5:n=t.sent,e.setState({data:n}),console.log(e.state.data),r=Object.keys(n),localStorage.setItem("states",r),e.setState({state:r}),c=Object.keys(e.state.data["Andaman and Nicobar Islands"].districtData),e.setState({districts:c},(function(){e.setState({currentData:e.state.data["Andaman and Nicobar Islands"].districtData.Nicobars}),console.log(e.state.data["Andaman and Nicobar Islands"].districtData.Nicobars)}));case 13:case"end":return t.stop()}}),t)}))),e.clicked=function(t){e.setState({currentState:t.target.value});var a=Object.keys(e.state.data[t.target.value].districtData);e.setState({districts:a},(function(){console.log(e.state.districts)}))},e.clickedD=function(t){e.setState({currentDistrict:t.target.value},(function(){e.setState({currentData:e.state.data[e.state.currentState].districtData[e.state.currentDistrict]},(function(){e.setState({loading:!0})})),console.log(e.state.data[e.state.currentState].districtData[e.state.currentDistrict])}))},e.state={data:[],open:!1,state:[],currentState:"Andaman and Nicobar Islands",districts:[],currentDistrict:"Nicobars",currentData:null,loading:!1},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"corona"},r.a.createElement("div",{id:"ct"}," ",r.a.createElement("img",{src:V.a,id:"cr"}),r.a.createElement("h4",{id:"cs"},"Corona Status In India")),r.a.createElement(j.a,{style:{boxShadow:"1px 1px black"}}),r.a.createElement("div",null,r.a.createElement("select",{id:"state",onChange:function(t){e.clicked(t)}},this.state.state.map((function(e){return"State Unassigned"!==e?r.a.createElement("option",{key:e,value:e,id:e},e):null}))),r.a.createElement("select",{id:"district",onClick:function(t){e.clickedD(t)}},this.state.districts.map((function(e){return"Other State"!==e?r.a.createElement("option",{key:e,value:e,id:e},e):null})))),r.a.createElement("div",{id:"data"},null!==this.state.currentData?r.a.createElement("div",null,r.a.createElement("h5",{id:"rec"},"Recovered:  ",r.a.createElement("span",{id:"recovered"},"  ",this.state.currentData.recovered," ")),r.a.createElement(j.a,{style:{boxShadow:"1px 1px black"},variant:"middle"}),r.a.createElement("h5",{id:"rec"},"Active Cases: ",r.a.createElement("span",{id:"active"}," ",this.state.currentData.active," ")),r.a.createElement(j.a,{style:{boxShadow:"1px 1px black"},variant:"middle"}),r.a.createElement("h5",{id:"rec"},"Confirmed Cases: ",r.a.createElement("span",{id:"confirmed"},"   ",this.state.currentData.confirmed," ")),r.a.createElement(j.a,{style:{boxShadow:"1px 1px black"},variant:"middle"}),r.a.createElement("h5",{id:"rec"},"Death:   ",r.a.createElement("span",{id:"death"}," ",this.state.currentData.deceased," "))):null))}}]),a}(n.Component),z=(a(144),function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).componentDidMount=Object(m.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getLocation(),e.setState({time:S()().format("h:mm a")});case 2:case"end":return t.stop()}}),t)}))),e.getLocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){return e.showPosition(t)})):e.setState({error:"Unable to retrieve your location.."})},e.showPosition=function(t){e.setState({lat:t.coords.latitude}),e.setState({lon:t.coords.longitude},Object(m.a)(d.a.mark((function t(){var a,n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.state.lat,"&lon=").concat(e.state.lon,"&units=metric&appid=").concat("67d8ab708395721818185b36b326f8ce"),t.next=3,E.a.get(a);case 3:return n=t.sent,t.next=6,n.data;case 6:r=t.sent,e.setState({data:r}),console.log(e.state.data);case 9:case"end":return t.stop()}}),t)}))))},e.state={data:null,states:[],error:null,lat:null,lon:null,time:null},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return setInterval((function(){e.setState({time:S()().format("h:mm a")})}),6e4),r.a.createElement("div",{id:"weather"},r.a.createElement("h2",{id:"we"},"Weather Forecast"),r.a.createElement(j.a,{style:{boxShadow:"1px 1px black"}}),r.a.createElement("div",{id:"wselect"}),null!==this.state.data?r.a.createElement("div",null,r.a.createElement("h4",{id:"dat"},S()().format("dddd"),"-",S()().format("LL")),r.a.createElement("h4",{id:"tim"},this.state.time),r.a.createElement("h2",{id:"area"},this.state.data.name),r.a.createElement("div",{id:"dt"},r.a.createElement("h2",{id:"temp"},this.state.data.main.temp," \u2103"),r.a.createElement("img",{id:"im",src:"http://openweathermap.org/img/w/".concat(this.state.data.weather[0].icon,".png")}))):null)}}]),a}(n.Component)),G=a(37),q=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).componentDidMount=Object(m.a)(d.a.mark((function t(){var a,n,r,c,o,s,i,l,u,p,h,g;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="https://yacdn.org/proxy/http://newsapi.org/v2/top-headlines?language=en&domains=googlenews.com,bbcnews.com,thehindu.com,thetimesofindia.com&sortBy=publishedAt&country=in&"+"apiKey=".concat(v),n="https://yacdn.org/proxy/http://newsapi.org/v2/top-headlines?country=us&language=en&sortBy=publishedAt&"+"apiKey=".concat(v),!(localStorage.getItem("articles").split(",").length<=1)){t.next=39;break}return t.next=6,localStorage.getItem("topic").split(",");case 6:return t.sent.map((function(e){localStorage.setItem(e,"empty")})),t.next=10,E.a.get(a);case 10:return r=t.sent,t.next=13,r.data;case 13:return c=t.sent,t.next=16,c.articles.slice();case 16:return o=t.sent,t.next=19,E.a.get(n);case 19:return s=t.sent,t.next=22,s.data;case 22:return i=t.sent,t.next=25,i.articles.slice();case 25:return l=t.sent,t.next=28,o.concat(l);case 28:return u=t.sent,t.next=31,u.reduce((function(e,t){return e.find((function(e){return e.title===t.title}))?e:e.concat([t])}),[]);case 31:return p=t.sent,t.next=34,p.sort((function(e,t){return e.publishedAt>t.publishedAt?-1:e.publishedAt<t.publishedAt?1:void 0}));case 34:h=t.sent,localStorage.setItem("articles",JSON.stringify(h)),e.setState({headlines:h},(function(){console.log("Data Fetched"),console.log(e.state.headlines),e.setState({loading:!0})})),t.next=41;break;case 39:g=JSON.parse(localStorage.getItem("articles")),e.setState({headlines:g},(function(){e.setState({loading:!0})}));case 41:G.auth().onAuthStateChanged(function(){var t=Object(m.a)(d.a.mark((function t(a){var n,r,c,o,s,i,l,u,m;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=4;break}e.props.history.push("/"),t.next=27;break;case 4:return t.next=6,G.firestore().collection("names").where("email","==",localStorage.getItem("email")).get();case 6:return n=t.sent,r=n.docs,c=[],r.forEach((function(e){return c.push(e.data())})),o=c[0].email,s=c[0].name,e.setState({email:o}),e.setState({name:s}),t.next=16,G.firestore().collection("user").doc(localStorage.getItem("email")).collection("topics").doc("list").get();case 16:return i=t.sent,l=Object.values(i.data()),e.setState({topics:l[0]}),localStorage.setItem("topic",l[0]),t.next=22,G.firestore().collection("user").doc(localStorage.getItem("email")).collection("subtopics").doc("list").get();case 22:return u=t.sent,t.next=25,Object.values(u.data());case 25:m=t.sent,e.setState({subtopics:m[0]},(function(){e.subtopicsMount(),e.setState({currentTopic:l[0][0]})}));case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 42:case"end":return t.stop()}}),t)}))),e.toggleDrawer=function(t){e.setState({open:t})},e.hand=function(){var t=Object(m.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("topic"!==a){t.next=4;break}e.setState({open:!1},(function(){localStorage.setItem("fromsignup","false"),e.props.history.push("/topic")})),t.next=18;break;case 4:if("subtopic"!==a){t.next=8;break}e.setState({open:!1},(function(){localStorage.setItem("from","news"),e.props.history.push("/subtopic")})),t.next=18;break;case 8:if("sources"!==a){t.next=12;break}e.setState({open:!1},(function(){e.props.history.push("/source")})),t.next=18;break;case 12:if("removesources"!==a){t.next=18;break}return t.next=15,G.firestore().collection("user").doc(e.state.email).collection("source").doc("list").set({source:"empty"});case 15:t.sent,localStorage.setItem("articles","empty"),window.location.reload(!1);case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.arrow=function(){document.getElementById("headlines").scrollLeft-=800},e.arrows=function(){document.getElementById("headlines").scrollLeft+=800},e.logout=function(){L.logout((function(){e.props.history.push("/")}))},e.subtopicsMount=function(){var t=[],a=[],n=[],r=[],c=[],o=[],s=[],i=[];e.state.topics.forEach((function(l){for(var u=Object.values(Y[l]),d=0;d<e.state.subtopics.length;d++)if(u.includes(e.state.subtopics[d])){var m=e.state.subtopics[d];"Technology"===l&&t.push(m),"Sports"===l&&a.push(m),"Entertainment"===l&&n.push(m),"Business"===l&&r.push(m),"Health"===l&&c.push(m),"Science"===l&&o.push(m),"Education"===l&&s.push(m),"Lifestyle"===l&&i.push(m)}})),e.setState({Technology:t,Sports:a,Entertainment:n,Business:r,Health:c,Science:o,Education:s,Lifestyle:i}),e.setState({loading1:!0},(function(){console.log(e.state.loading1)}))},e.state={headlines:[],open:!1,name:null,topics:[],subtopics:[],email:null,value:0,loading:!1,loading1:!1,Technology:[],Sports:[],Entertainment:[],Business:[],Health:[],Science:[],Education:[],Lifestyle:[],currentTopic:null,articles:[],btns:null},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return setInterval((function(){localStorage.setItem("articles","empty"),console.log("data refreshed")}),18e5),this.handleChange=function(t,a){e.setState({value:a})},r.a.createElement("div",{id:"sda"},r.a.createElement("div",{id:"header"},r.a.createElement(k.a,{onClick:function(){return e.toggleDrawer(!0)},id:"menu"}),r.a.createElement(x.a,{open:this.state.open,onClose:function(){return e.toggleDrawer(!1)}},r.a.createElement(C,{handle:this.hand,logout:this.logout,name:this.state.name})),r.a.createElement("h2",{id:"hd"},"NEWS TODAY")),r.a.createElement("h2",{id:"hdtg"},"HEADLINES"),r.a.createElement("div",{id:"headlines"},r.a.createElement(N.a,{id:"leftArrow",onClick:function(){e.arrow()}},r.a.createElement(D.a,null)),r.a.createElement(N.a,{id:"rightArrow",onClick:function(){e.arrows()}},r.a.createElement(T.a,null)),this.state.loading?this.state.headlines.map((function(e){return r.a.createElement("a",{href:e.url,target:"_blank",style:{textDecoration:"none",color:"black"},key:e.url},r.a.createElement("div",Object(l.a)({id:e.title,key:e.title},"id","hdlns"),r.a.createElement("div",{id:"himgs"},r.a.createElement("img",{src:e.urlToImage,id:"himg"})),r.a.createElement("div",{id:"tit"},e.title),r.a.createElement("div",{id:"htime"},S()(e.publishedAt).fromNow())))})):r.a.createElement(U.a,{style:{marginLeft:"750px",marginTop:"50px"}})),r.a.createElement("div",{id:"main-content"},r.a.createElement(R,null),r.a.createElement("div",{id:"news"},r.a.createElement("div",{id:"appbar"},r.a.createElement(W.a,{value:this.state.value,onChange:this.handleChange,variant:"scrollable",scrollButtons:"auto"},this.state.topics.map((function(e){return r.a.createElement(J.a,{label:r.a.createElement("h4",{id:"tab"},e),key:e})})))),r.a.createElement("div",{id:"nw"},this.state.topics.map((function(t,a){return r.a.createElement(F,{subtopic:e.state[t],topic:t,index:a,value:e.state.value,key:a})})))),r.a.createElement(z,null)))}}]),a}(n.Component),X=a(24),Z=(a(145),a(37)),$=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).topicHandler=function(t){if(e.state.topicsSelected.includes(t.target.id)){document.getElementById(t.target.id).style.backgroundColor="#f3c1bdaf";var a=e.state.topicsSelected.indexOf(t.target.id),n=e.state.topicsSelected.slice();n.splice(a,1),e.setState({topicsSelected:n},(function(){e.state.topicsSelected.length>4?document.getElementById("next").style.display="block":document.getElementById("next").style.display="none",console.log(e.state.topicsSelected)}))}else e.setState({topicsSelected:[].concat(Object(X.a)(e.state.topicsSelected),[t.target.id])},(function(){e.state.topicsSelected.length>4?document.getElementById("next").style.display="block":document.getElementById("next").style.display="none",console.log(e.state.topicsSelected)})),document.getElementById(t.target.id).style.backgroundColor="white"},e.source=Object(m.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.setItem("topic",e.state.topicsSelected),!((a=e.state.topicsSelected).length>0)){t.next=6;break}return t.next=5,Z.firestore().collection("user").doc(e.state.email).collection("topics").doc("list").set({topics:a});case 5:t.sent;case 6:localStorage.setItem("articles","empty"),localStorage.setItem("from","topics"),e.props.history.push("/subtopic");case 9:case"end":return t.stop()}}),t)}))),e.back=function(){e.props.history.push("/newspage")},e.state={topics:["Technology","Business","Sports","Entertainment","Health","Science","Education","Lifestyle"],topicsSelected:[],email:localStorage.getItem("email")},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"cont"},r.a.createElement("h2",{id:"sel"},"Select some of the topics"),r.a.createElement("h4",{id:"sa",style:{textAlign:"center"}},"(Select atleast 5)"),r.a.createElement("div",{id:"source"},r.a.createElement("div",{id:"align"},this.state.topics.map((function(t){return r.a.createElement("div",{id:t,className:"top",key:t,onClick:function(t){e.topicHandler(t)}},t)}))),r.a.createElement("h3",{style:{color:"red"}}),r.a.createElement("button",{id:"next",onClick:function(){e.source()}},"NEXT!")),"false"===localStorage.getItem("fromsignup")?r.a.createElement("button",{id:"backtopage",onClick:function(){e.back()}},"Back"):null)}}]),a}(n.Component),Q=(a(146),a(37)),ee=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).val=function(){for(var t=localStorage.getItem("topic").split(","),a=[],n=0;n<t.length;n++)for(var r=Y[t[n]],c=0;c<r.length;c++)a.push(r[c]),e.setState({subtopic:a})},e.componentDidMount=function(){e.val()},e.back=function(){"news"===localStorage.getItem("from")&&e.props.history.push("/newspage"),"topics"===localStorage.getItem("from")&&e.props.history.push("/topic")},e.subtopic=Object(m.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.state.selected.length>0)){t.next=4;break}return t.next=3,Q.firestore().collection("user").doc(e.state.email).collection("subtopics").doc("list").set({subtopic:e.state.selected});case 3:t.sent;case 4:if(localStorage.setItem("articles","empty"),"topics"!==localStorage.getItem("from")){t.next=9;break}return t.next=8,Q.firestore().collection("user").doc(e.state.email).collection("source").doc("list").set({source:"empty"});case 8:t.sent;case 9:e.props.history.push("/newspage");case 10:case"end":return t.stop()}}),t)}))),e.state={subtopic:[],selected:[],email:localStorage.getItem("email")},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return this.sub=function(t){var a=t.target.id;if(e.state.selected.includes(a)){var n=e.state.selected.indexOf(a),r=e.state.selected.slice();r.splice(n,1),e.setState({selected:r},(function(){e.state.selected.length<15&&(document.getElementById("next1").style.display="none")})),document.getElementById(a).style.backgroundColor="rgba(255, 255, 255, 0.685)",document.getElementById(a).style.color="black"}else e.setState({selected:[].concat(Object(X.a)(e.state.selected),[a])},(function(){console.log(e.state.selected),e.state.selected.length>=15&&(document.getElementById("next1").style.display="block")})),document.getElementById(a).style.backgroundColor="rgb(74, 107, 212)",document.getElementById(a).style.color="white"},r.a.createElement("div",{id:"sb"},r.a.createElement("h4",{id:"sq"},"Select Some Of The Sub-Topics"),r.a.createElement("h4",{id:"sa"},"(Select atleast 15)"),r.a.createElement("div",{id:"subtopics"},r.a.createElement("div",{id:"sbt"},this.state.subtopic.map((function(t){return r.a.createElement("button",{id:t,key:t,className:"btns",onClick:function(t){return e.sub(t)}},t)}))),r.a.createElement("div",{id:"nxt"},r.a.createElement("button",{id:"next1",onClick:function(){e.subtopic()}},"Next")),"false"===localStorage.getItem("fromsignup")?r.a.createElement("button",{id:"backto",onClick:function(){e.back()}},"Back"):null))}}]),a}(n.Component),te={apiKey:"AIzaSyBVUxY7ZzyvVY34UoVikerhct_i7_CKMcw",authDomain:"newspaper-1347d.firebaseapp.com",databaseURL:"https://newspaper-1347d.firebaseio.com",projectId:"newspaper-1347d",storageBucket:"newspaper-1347d.appspot.com",messagingSenderId:"676573539489",appId:"1:676573539489:web:12affa5fe6d8e5a95954e0",measurementId:"G-0VMYK8S1RG"},ae=a(3),ne=function(e){var t=e.component,a=Object(ae.a)(e,["component"]);return r.a.createElement(i.b,Object.assign({},a,{render:function(e){return localStorage.getItem("as")?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/",state:{from:e.location}}})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(151);var re=a(202),ce=a(37),oe=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={email:null,password:null,loginError:""},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return this.userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value})}},this.submitLogin=function(){var t=Object(m.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),localStorage.setItem("email",e.state.email),ce.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(){L.login((function(){localStorage.setItem("articles","empty"),e.props.history.push("/newspage")}))}),(function(t){e.setState({loginError:"Invalid Credentials!"}),setTimeout((function(){window.location.reload(!1)}),1e3)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.a.createElement("div",{id:"container"},r.a.createElement("div",{id:"lheader"},r.a.createElement("h2",{id:"titl"},"NEWS TODAY")),r.a.createElement("div",{id:"login"},r.a.createElement("h2",null,"Login!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(t){return e.submitLogin(t)}},r.a.createElement(re.a,{id:"email1",label:"Enter your email...",type:"email",color:"primary",onChange:function(t){return e.userTyping("email",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(re.a,{id:"password1",label:"Enter your password...",type:"password",color:"primary",onChange:function(t){return e.userTyping("password",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),this.state.loginError?r.a.createElement("h4",{id:"error"},this.state.loginError):null,r.a.createElement("p",null,"Don't have an account ?"),r.a.createElement("div",{id:"sbn"},r.a.createElement(s.b,{to:"/signup",style:{textDecoration:"none",color:"#0067B8",fontSize:"19px"}},"Create account!")," ",r.a.createElement("button",{type:"submit",id:"log"}," Login ")))))}}]),a}(r.a.Component),se=(a(152),a(37)),ie=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).state={email:null,password:null,confirm_password:null,name:"",signUpError:""},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return this.formValid=function(){return e.state.password===e.state.confirm_password},this.userTyping=function(t,a){switch(t){case"email":e.setState({email:a.target.value});break;case"password":e.setState({password:a.target.value});break;case"confirm_password":e.setState({confirm_password:a.target.value});break;case"name":e.setState({name:a.target.value})}},this.submitSignUp=function(t){if(t.preventDefault(),e.formValid()){var a={email:e.state.email,name:e.state.name};se.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(){se.firestore().collection("names").add(a),localStorage.setItem("email",e.state.email),localStorage.setItem("as",!0),localStorage.setItem("articles","empty"),localStorage.setItem("fromsignup","true"),e.props.history.push("/topic")}),(function(t){e.setState({signUpError:"Failed to add User"}),setTimeout((function(){window.location.reload(!1)}),1e3)}),(function(t){e.setState({signUpError:"Email or password is Invalid.."}),setTimeout((function(){window.location.reload(!1)}),1e3)}))}else e.setState({signUpError:"Password Mismatch!!"})},r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"lheader"},r.a.createElement("h2",{id:"titl"},"NEWS TODAY")),r.a.createElement("div",null,r.a.createElement("div",{className:"login"},r.a.createElement("h2",null,"Sign Up!"),r.a.createElement("form",{onSubmit:function(t){return e.submitSignUp(t)},id:"signUp"},r.a.createElement(re.a,{id:"name",label:"Enter Your Name...",color:"primary",onChange:function(t){return e.userTyping("name",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(re.a,{id:"email",type:"email",label:"Enter a valid Email...",color:"primary",onChange:function(t){return e.userTyping("email",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(re.a,{id:"password",type:"password",label:"Enter Your Password...",color:"primary",onChange:function(t){return e.userTyping("password",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(re.a,{id:"confirm_password",type:"password",label:"Confirm Password...",color:"primary",onChange:function(t){return e.userTyping("confirm_password",t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"sbtn"},r.a.createElement(s.b,{to:"/",style:{textDecoration:"none",color:"#0067B8",fontSize:"15px"}},"Already have an account?"),r.a.createElement("button",{id:"sign"},"Sign Up"))),this.state.signUpError?r.a.createElement("h2",{id:"err"},this.state.signUpError):null)))}}]),a}(r.a.Component),le=(a(153),a(95)),ue=a(37),de=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).source=function(t){var a=t.target.id;if(e.state.sources.includes(a)){var n=e.state.sources.indexOf(a),r=e.state.sources.slice();r.splice(n,1),e.setState({sources:r},(function(){e.state.sources.length<5&&(document.getElementById("nxtt2").style.display="none")})),document.getElementById(a).style.backgroundColor="rgba(255, 255, 255, 0.685)",document.getElementById(a).style.color="black"}else e.setState({sources:[].concat(Object(X.a)(e.state.sources),[a])},(function(){console.log(e.state.sources),e.state.sources.length>=5&&(document.getElementById("nxtt2").style.display="inline")})),document.getElementById(a).style.backgroundColor="rgb(74, 107, 212)",document.getElementById(a).style.color="white"},e.apply=Object(m.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.state.sources.length>0)){t.next=4;break}return t.next=3,ue.firestore().collection("user").doc(e.state.email).collection("source").doc("list").set({source:e.state.sources});case 3:t.sent;case 4:localStorage.setItem("articles","empty"),e.props.history.push("/newspage");case 6:case"end":return t.stop()}}),t)}))),e.bckto=function(){e.props.history.push("/newspage")},e.state={sources:[],email:localStorage.getItem("email")},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"sv"},r.a.createElement("h4",{id:"saq"},"Filter Sources"),r.a.createElement("h4",{id:"sa",style:{textAlign:"center"}},"(Select atleast 5)"),r.a.createElement("div",{id:"ss"},r.a.createElement("div",{id:"sourceselector"},le.sources.map((function(t){return r.a.createElement("button",{id:t,key:t,className:"sbtn",onClick:function(t){e.source(t)}},t.replace("-"," ").toUpperCase())}))),r.a.createElement("div",{id:"nxt2"},r.a.createElement("button",{id:"nxtt2",onClick:function(){e.apply()}},"Apply!"))),r.a.createElement("button",{id:"bckto",onClick:function(){e.bckto()}},"Cancel!"))}}]),a}(n.Component),me=r.a.createElement(s.a,null,r.a.createElement("div",{id:"routing-container"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:oe}),r.a.createElement(i.b,{path:"/signup",exact:!0,component:ie}),r.a.createElement(ne,{path:"/newspage",exact:!0,component:q}),r.a.createElement(ne,{path:"/topic",exact:!0,component:$}),r.a.createElement(ne,{path:"/source",exact:!0,component:de}),r.a.createElement(ne,{path:"/subtopic",exact:!0,component:ee}),r.a.createElement(i.b,{path:"*",component:function(){return"404 NOT FOUND"}})))),pe=a(37);a(154),pe.initializeApp(te),pe.analytics(),o.a.render(me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e){e.exports=JSON.parse('{"Technology":["Android","IOS","Artificial Intelligence","Gadgets","Cryptocurrency","Programming Language","Hacking","Games","Ecommerce","Tech","Social-media"],"Sports":["Cricket","Football","Hockey","Tennis","Boxing","Olympic","Women\'s Cricket","F1 Racing"],"Entertainment":["Movie","Music","Web-series","Book","Art"],"Business":["Economy","Markets","Jobs","Personal-finance","Entrepreneurship"],"Health":["Medicine","Healthcare","Mental Health","Nutrition","Fitness"],"Science":["Environment","Outer Space","Physics","Genetics","Wildlife"],"Education":["Teaching","Educational-activity","Education-department"],"Lifestyle":["Photography","Food","Travel","Beauty"]}')},90:function(e,t,a){e.exports=a.p+"static/media/1020px-SARS-CoV-2_without_background.d8d37e80.png"},95:function(e){e.exports=JSON.parse('{"sources":["bbc news","bbc sport","the hindu","the times of india","bloomberg","business insider","cnn","national geographic","fox sports","google news","google news in","the hacker news","ign","news24","reuters","techcrunch","usa today"]}')}},[[104,1,2]]]);
//# sourceMappingURL=main.d85ed55a.chunk.js.map