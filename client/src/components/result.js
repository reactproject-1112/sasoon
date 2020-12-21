import Navbar from './navbar';
import React from 'react';
import url from './url';
import {Link} from 'react-router-dom';
import '../css/home.css';


export default class Result extends React.Component
{
    constructor(props){
      super(props);
      this.state={ user:"",
                  arr:[{type:'UG',link:'https://ug'},{type:'PG',link:'https://pg'}
                ,{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'}
              ,{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'}
            ,{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'},{type:'MBBS',link:'https://mbbs'}],
                  show:{type:"",link:""}
                }
                this.openNav=this.openNav.bind(this);
                this.closeNav=this.closeNav.bind(this);
    }


    componentDidMount(){
      fetch(url+'/api/result',{ method:'GET'})
           .then(response=>{ return response.json()})
           .then((body)=>{
                  this.setState({arr:body});
                    //alert(body.msg);
                  //  dispatch({type:'add_video',payload:body.video});
            })
           .catch(err=>alert(JSON.stringify(err)));

      this.setState({show:{type:this.state.arr[0].type,link:this.state.arr[0].link}});
    }


      openNav() {
       document.getElementById("mySidenav").style.width = "250px";
       document.getElementById("main").style.marginLeft = "250px";
     }

      closeNav() {
       document.getElementById("mySidenav").style.width = "0";
       document.getElementById("main").style.marginLeft= "0";
     }



     linkOneClick(ind){
       this.setState({show:{type:this.state.arr[ind].type,link:this.state.arr[ind].link}});
       this.closeNav();
     }

render(){
	return <div id="mainBody">
			 <Navbar />
           <div id="main">
             <span style={{fontSize:'30px',cursor:'pointer',float:'left'}} onClick={this.openNav.bind(this)}>&#9776; Result</span>
           </div>

           <div id="mySidenav" class="sidenav" >
            <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
            <ul>
             {
                this.state.arr.map((res,ind)=>{
                 return  <li><a href='#' onClick={this.linkOneClick.bind(this,ind)} >{res.type}</a></li>
               })
             }

             </ul>
         </div>

         <br></br>
           <div>
             <section class='jumbotron'>
                   <div class="container">
                      <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                          <p class="lead mb-0" style={{fontSize:'30px',fontWeight:"bold"}}>Click on the link below to check your result</p><br></br><br></br>
                          <center><a href={this.state.show.link} target="_blank" class='btn btn-primary'> Results of {this.state.show.type}</a></center>
                      </div>
                    </div>
              </section>
            </div>

	</div>
}

}