(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,a){},26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(23),c=a.n(r),i=(a(31),a(21),a(2)),l=a(3),s=a(5),p=a(4),m=a(6),d=a(16),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={data:[],endpoint:a.props.endpoint,image:a.props.image,color:a.props.color},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.shrinkNavOnScroll),fetch(this.state.endpoint).then((function(e){return e.json()})).then((function(t){e.setState({data:t})})).catch(console.log)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.shrinkNavOnScroll)}},{key:"shrinkNavOnScroll",value:function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.getElementById("js-header");t.style.transition=".5s",t.style.opacity=e>50?".4":"1"}},{key:"render",value:function(){var e={marginLeft:"1.75%",marginRight:"1.75%",fontWeight:"600",color:"black",textDecoration:"none",fontSize:"22px",fontFamily:"Arvo"},t={height:"100px",position:"fixed",width:"100vw",top:"0",backgroundImage:"url("+this.state.image+")",backgroundColor:this.state.color,boxShadow:"3px 3px 5px gray"},a=this.state.data.map((function(t,a){return n.a.createElement(d.b,{style:e,to:t.link},t.name)}));return n.a.createElement("nav",{style:t,id:"js-header",className:"navbar row justify-content-center sticky-top navbar-expand navbar-dark"},a)}}]),t}(o.Component),u=a(12),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={primaryColor:a.props.primaryColor,secondaryColor:a.props.secondaryColor,link:a.props.link,btnText:a.props.btnText},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t={border:"2px solid ".concat(this.state.primaryColor),color:this.state.primaryColor,backgroundColor:this.state.secondaryColor,padding:"10px 15px",textDecoration:"none",margin:"0 0",fontSize:"20px",fontWeight:"700",transition:".35s linear",fontFamily:"Arvo"};return n.a.createElement("a",{onMouseEnter:function(){e.setState({primaryColor:e.props.secondaryColor,secondaryColor:e.props.primaryColor})},onMouseLeave:function(){e.setState({primaryColor:e.props.primaryColor,secondaryColor:e.props.secondaryColor})},href:this.state.link,style:t},this.state.btnText)}}]),t}(o.Component),b=function e(){Object(i.a)(this,e),this.colStyle={height:"55vh",border:"00px solid white",padding:"0 !important",display:"table",textAlign:"center",backgroundPosition:"center",backgroundSize:"cover",fontFamily:"Arvo",marginTop:"2%"},this.pic1={backgroundImage:'url("https://wpreact.emmalynnn.com/wp-content/uploads/2020/01/20191215_131418-scaled.jpg")',backgroundPosition:"center",backgroundSize:"cover"},this.pic6={backgroundImage:'url("https://wpreact.emmalynnn.com/wp-content/uploads/2020/02/wordpress-581849_1920.jpg")',backgroundPosition:"center",backgroundSize:"cover"},this.headerStyle={height:"80vh",display:"table",textAlign:"center",backgroundImage:'url("https://wpreact.emmalynnn.com/wp-content/uploads/2020/02/plant-2004483_1920-1.jpg")',backgroundSize:"cover",backgroundPosition:"center",fontFamily:"Arvo",color:"white"},this.headerText={fontSize:"50px",fontWeight:"700"},this.containerStyle={maxWidth:"95vw"},this.vAlign={display:"table-cell",verticalAlign:"middle"},this.text={padding:"30px 30px",fontSize:"18px"},this.btnPrimaryColor="black",this.btnSecondaryColor="white"},g=a(15),f=a(13),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={iconColor:a.props.iconColor,backToTopColor:a.props.color,cursor:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this,a=(e={height:"75px",width:"75px",borderRadius:"75px",backgroundColor:this.state.backToTopColor,position:"fixed",bottom:"5vh",right:"5vw",zIndex:"1",color:"white",display:"flex",alignItems:"center",justifyContent:"center",transition:".35s ease-in"},Object(g.a)(e,"display","none"),Object(g.a)(e,"cursor",this.state.cursor),e),o={color:this.state.iconColor,height:"25px",width:"25px",transition:".35s ease-in"};return n.a.createElement("div",{id:"backToTop",onClick:function(){window.scrollTo(0,0)},onMouseEnter:function(){t.setState({iconColor:t.props.color,backToTopColor:t.props.iconColor,cursor:"pointer"})},onMouseLeave:function(){t.setState({iconColor:t.props.iconColor,backToTopColor:t.props.color,cursor:""})},style:a},n.a.createElement(f.a,{style:o}))}}]),t}(o.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={endpoint:a.props.endpoint,pageTitle:"",pic1:"",pic2:"",pic3:"",pic4:"",aboutText:"",frontEndText:"",shopifyText:"",wpText:"",content:[],iconColor:"white",backToTopColor:"black",cursor:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.showBtn),fetch(this.state.endpoint).then((function(e){return e.json()})).then((function(t){e.setState({content:t,aboutText:t.content.aboutText,frontEndText:t.content.frontEndText,shopifyText:t.content.shopifyText,wpText:t.content.wpText,pic1:t.images.img1,pic2:t.images.img2,pic3:t.images.img3,pic4:t.images.img4,pageTitle:t.title})})).catch(console.log)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.showBtn)}},{key:"showBtn",value:function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.getElementById("backToTop");t.style.display=e>50?"flex":"none"}},{key:"render",value:function(){var e=new b,t=e.colStyle,a=e.headerStyle,o=e.containerStyle,r=e.vAlign,c=e.text,i=e.headerText,l=Object(u.a)({},t,{},{backgroundImage:'url("'.concat(this.state.pic1,'")')}),s=Object(u.a)({},t,{},{backgroundImage:'url("'.concat(this.state.pic2,'")')}),p=Object(u.a)({},t,{},{backgroundImage:'url("'.concat(this.state.pic3,'")')}),m=Object(u.a)({},t,{},{backgroundImage:'url("'.concat(this.state.pic4,'")')}),d="col-sm-12 col-md-12 col-lg-6";return n.a.createElement("div",{style:o,className:"container"},n.a.createElement(v,{iconColor:"white",color:"black"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{style:a,className:"col"},n.a.createElement("div",{style:r},n.a.createElement("h1",{style:i},this.state.pageTitle)))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{style:t,className:d},n.a.createElement("div",{style:r},n.a.createElement("h1",{style:i},"About Me"),n.a.createElement("p",{style:c},this.state.aboutText),n.a.createElement(y,{primaryColor:e.btnPrimaryColor,secondaryColor:e.btnSecondaryColor,btnText:"Hire Me",link:"#"}))),n.a.createElement("div",{style:l,className:d},n.a.createElement("div",{style:r}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{style:s,className:d},n.a.createElement("div",{style:r})),n.a.createElement("div",{style:t,className:d},n.a.createElement("div",{style:r},n.a.createElement("h1",{style:i},"Front End Development"),n.a.createElement("p",{style:c},this.state.frontEndText),n.a.createElement(y,{primaryColor:e.btnPrimaryColor,secondaryColor:e.btnSecondaryColor,btnText:"View Portfolio",link:"/portfolio/frontend"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{style:t,className:d},n.a.createElement("div",{style:r},n.a.createElement("h1",{style:i},"Custom Shopify Stores"),n.a.createElement("p",{style:c},this.state.shopifyText),n.a.createElement(y,{primaryColor:e.btnPrimaryColor,secondaryColor:e.btnSecondaryColor,btnText:"View Portfolio",link:"/portfolio/frontend"}))),n.a.createElement("div",{style:p,className:d},n.a.createElement("div",{style:r}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{style:m,className:d},n.a.createElement("div",{style:r})),n.a.createElement("div",{style:t,className:d},n.a.createElement("div",{style:r},n.a.createElement("h1",{style:i},"Custom WordPress Frameworks"),n.a.createElement("p",{style:c},this.state.wpText),n.a.createElement(y,{primaryColor:e.btnPrimaryColor,secondaryColor:e.btnSecondaryColor,btnText:"View Themes",link:"#"})))))}}]),t}(o.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={endpoint:a.props.endpoint,style:a.props.style,sm:a.props.sm,md:a.props.md,lg:a.props.lg,bgImage:"",content:[],opacity:"0"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.endpoint).then((function(e){return e.json()})).then((function(t){e.setState({content:t,bgImage:t.imageLink})})).catch(console.log)}},{key:"render",value:function(){var e=this,t={position:"absolute",top:"0",bottom:"0",left:"0",right:"0",height:"100%",width:"100%",opacity:this.state.opacity,transition:".5s ease",backgroundColor:"white",backgroundImage:'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")'},a={backgroundImage:'url("'.concat(this.state.bgImage,'")')},o="col-sm-".concat(this.state.sm," col-md-").concat(this.state.md," col-lg-").concat(this.state.lg);return n.a.createElement("div",{onMouseEnter:function(){e.setState({opacity:"1"})},onMouseLeave:function(){e.setState({opacity:"0"})},style:Object(u.a)({},this.state.style,{},a),className:o},n.a.createElement("div",{style:t},n.a.createElement("div",{style:{color:"black",fontSize:"24px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center"}},n.a.createElement("h2",null,this.state.content.title),n.a.createElement("p",null,this.state.content.description),n.a.createElement("a",{style:{color:"black",backgroundColor:"white",border:"2px solid black",fontFamily:"Arvo",padding:"5px 35px",textDecoration:"none",margin:"0 2.5px",fontSize:"22px",fontWeight:"700",transition:".35s linear",letterSpacing:"1.5px"},href:this.state.content.link},"View"))))}}]),t}(o.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="https://emma-api-deploy.herokuapp.com/projects/5e426d8b33b86834e7df90c2",t="https://emma-api-deploy.herokuapp.com/projects/5e426eb333b86834e7df90c3",a="https://emma-api-deploy.herokuapp.com/projects/5e426f4833b86834e7df90c4",o="https://emma-api-deploy.herokuapp.com/projects/5e426fb433b86834e7df90c5",r="https://emma-api-deploy.herokuapp.com/projects/5e42705233b86834e7df90c6",c="https://emma-api-deploy.herokuapp.com/projects/5e4270a433b86834e7df90c7",i="https://emma-api-deploy.herokuapp.com/projects/5e42711733b86834e7df90c8",l="https://emma-api-deploy.herokuapp.com/projects/5e4271b233b86834e7df90ca",s="https://emma-api-deploy.herokuapp.com/projects/5e42715633b86834e7df90c9",p={height:"62vh",boxShadow:"2px 2px 5px black",backgroundPosition:"center",backgroundSize:"cover"},m={height:"62vh",boxShadow:"2px 2px 5px black",backgroundPosition:"center",backgroundSize:"cover"};return n.a.createElement("div",{style:{maxWidth:"95vw",height:"200vh"},className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(k,{sm:"12",md:"12",lg:"12",style:p,endpoint:a})),n.a.createElement("div",{className:"row"},n.a.createElement(k,{sm:"12",md:"12",lg:"6",style:p,endpoint:e}),n.a.createElement(k,{sm:"12",md:"12",lg:"6",style:p,endpoint:t})),n.a.createElement("div",{className:"row"},n.a.createElement(k,{sm:"12",md:"12",lg:"8",style:m,endpoint:o}),n.a.createElement(k,{sm:"12",md:"12",lg:"4",style:m,endpoint:c})),n.a.createElement("div",{className:"row"},n.a.createElement(k,{sm:"12",md:"12",lg:"12",style:m,endpoint:r})),n.a.createElement("div",{className:"row"},n.a.createElement(k,{sm:"12",md:"12",lg:"6",style:m,endpoint:i}),n.a.createElement(k,{sm:"12",md:"12",lg:"6",style:m,endpoint:s})),n.a.createElement("div",{className:"row"},n.a.createElement(k,{sm:"12",md:"12",lg:"12",style:m,endpoint:l})))}}]),t}(o.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={description:a.props.description,color:a.props.color,image:a.props.image},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={backgroundColor:this.state.color,backgroundImage:"url(".concat(this.state.image,")"),height:"15vh",borderRadius:"2px",display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center",flexDirection:"row",bottom:"0",right:"0",left:"0"},t={height:"50px",width:"50px",color:"black",display:"flex",marginLeft:"25px"};return n.a.createElement("div",{style:e,className:"footer container-fluid"},n.a.createElement("h2",{style:{color:"black",display:"flex",fontWeight:"700",letterSpacing:"1.25px",fontFamily:"Arvo"}},this.state.description),n.a.createElement("a",{href:"https://github.com/emmalynnn97"},n.a.createElement(f.b,{style:t})),n.a.createElement("a",{href:"https://www.linkedin.com/in/emma-guy-639014189/"},n.a.createElement(f.c,{style:t})))}}]),t}(o.Component),C=a(10);var j=function(){return n.a.createElement(d.a,null,n.a.createElement("div",{style:{height:"100vh"},className:"App"},n.a.createElement(h,{color:"white",image:"https://www.transparenttextures.com/patterns/asfalt-dark.png",endpoint:"https://emma-api-deploy.herokuapp.com/menus"}),n.a.createElement(C.a,{exact:!0,path:"/",component:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(E,{endpoint:"https://emma-api-deploy.herokuapp.com/pages/5e4286185d22753b68a924a5"}))}}),n.a.createElement(C.a,{path:"/contact",component:function(){return n.a.createElement(n.a.Fragment,null)}}),n.a.createElement(C.a,{path:"/portfolio/frontend",component:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(x,null))}}),n.a.createElement(w,{description:"Lynn Co",color:"white",image:"https://www.transparenttextures.com/patterns/asfalt-dark.png"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.e04164e4.chunk.js.map