import Navbar from './navbar';
import React from 'react';
import url from './url';
import '../css/home.css';
import '../css/teaching_staff.css';
import {Link} from 'react-router-dom';
import Footer from './footer';
import '../css/sidenavbar.css';
import sidenavbar from './sidenavbar';
import '../css/Department_css.css';
import Header from './header';


export default class AcademicActivities extends React.Component
{
    constructor(props){
      super(props);

      // state initialization
      this.state={ user:"",

                  deptsData:[
                              {
                                name:'Medicine Department',
                                events:[
                                    {head:'Dr. S. A. Sangle\nDr. Vinay k. Thorat\nDr. Sheetal Mahajani\nDr. Sachin  Palnitkar\nDr. Sunil Pawar\nDr. R. T. Borse',subject:'World Hepatitis Day',venue:'Medicine Lecture Hall',date:'27/07/2018'}

                                  ]
                               },
                               {
                                 name:'Department of Microbiology',
                                 events:[
                                     {head:'IDSP',subject:'National workshop of microbiologists was organized',venue:'bjmc',date:'March 2018'},
                                     {head:'',subject:'Ten Interdepartmental academic seminars organised by department',venue:'bjmc',date:'From January 2016 till August 2017'},
                                     {head:'',subject:'State level IDSP workshop was organised',venue:'bjmc',date:'20/03/2018'}
                                   ]
                                },
                                {
                                  name:'Department of Anatomy',
                                  events:[
                                      {head:'',subject:'CME was conducted in collaboration with Department of ENT on Cadaver dissection with reference to surgery on Neck, Paranasal Sinuses and Rhinoplasty',venue:'bjpmc',date:'25/03/2020'},
                                      {head:'',subject:'2 UG student  seminars',venue:'bjmc',date:'Aug 2016, Dec 2016'}
                                    ]
                                 }

                           ],

                           guestsData:[
                                       {
                                         name:'Dr. Ramesh A. Bhosale',
                                         events:[
                                             {subject:'Lecture on ’eMTCT in India and Maharashtra’ at – Tr@inforPedHIV India, Residential Course Programme',venue:' Pune, India',date:'30/01/2016'},
                                             {subject:'Group leader for ‘Case Discussions in groups - Early Infant Diagnosis and pMTCT’ at – Tr@inforPedHIV India, Residential Course Programme, Pune, India',venue:' Pune, India',date:'25/01/2016'},
                                             {subject:'Lecture to general practitioners on Contraception and Abortion',venue:'FPAI Pune',date:'11/03/2016'}
                                           ]
                                        },
                                        {
                                          name:'Dr. Uma Wankhede',
                                          events:[
                                            {subject:'Oration At Satara On PPH',venue:'bjmc',date:'February 2016'},
                                            {subject:'Gestosis Conference At Nashik Talk On Dengue In Pregnancy',venue:'bjmc',date:'March 2016'},
                                            {subject:'Ima Lecture On Anc Care',venue:'bjmc',date:'September 2016'}
                                            ]
                                         },
                                         {
                                           name:'Dr. Shilpa Naik',
                                           events:[
                                             {subject:'Pursuing cases on Balloon Tamponade in Obstetric Hemorrhage',venue:'bjmc',date:'20/12/2017'},
                                             {subject:'Zika virus screening orientation',venue:'bjmc',date:'20/08/2017'},
                                             {subject:'Live laproscopy workshop on AUB and endometriosis',venue:'bjmc',date:'20/07/2017'}
                                             ]
                                          }

                                    ],



                    otherData:[{subject:'Shirur camp',venue:'bjmc',date:'7/12/2017'},
                            {subject:'Pachora Jalgaon camp ',venue:'bjmc',date:'12/11/2017'},
                            {subject:'Yerwada prison health camp',venue:'Heritage',date:'15/11/2017'}

                            ],

                  show:{
                        deptsData:[{name:'',events:[{head:'',subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}]}],
                        guestsData:[{name:'',events:[{subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}]}],
                        otherData:[{subject:'dgdsggegege',venue:'Heritage',date:'20/12/2020'}]
                      }
                }

    }

      componentDidMount(){

        this.setState({show:{deptsData:this.state.deptsData,guestsData:this.state.guestsData,otherData:this.state.otherData}})
        window.scrollTo(0,0);

        // Fetching data from database

       fetch(url+'/api/academicActivities',{ method:'GET'})
             .then(response=>{ return response.json()})
             .then((body)=>{
               // set the state using response data from server
                    this.setState({deptsData:body.deptsData});
                    this.setState({guestsData:body.guestsData});
                    this.setState({otherData:body.otherData});
                    this.setState({show:{deptsData:this.state.deptsData,guestsData:this.state.guestsData,otherData:this.state.otherData}});

              })
             .catch(err=>{});




      }
        // To set only department activities in the table
     deptClick(){

       this.setState({show:{deptsData:this.state.deptsData,guestsData:[{name:null,events:[]}],otherData:[]}});
       if( document.getElementById('dept')){
           document.getElementById('dept').style.display='block';
           document.getElementById('guest').style.display='none';
           document.getElementById('other').style.display='none';
        }
       sidenavbar();
      }
      // To set only selected department activities in the table

     deptOneClick(ind){
       this.setState({show:{deptsData:[this.state.deptsData[ind]],guestsData:[{name:null,events:[]}],otherData:[]}});
       document.getElementById('dept').style.display='block';
       document.getElementById('guest').style.display='none';
       document.getElementById('other').style.display='none';
     }

     // To set only guest activities in the table
     guestClick(){
       this.setState({show:{guestsData:this.state.guestsData,deptsData:[{name:null,events:[]}],otherData:[]}});
       if( document.getElementById('dept')){

       document.getElementById('dept').style.display='none';
       document.getElementById('guest').style.display='block';
       document.getElementById('other').style.display='none';
       }
     }

     // To set only selected guest activities in the table
     guestOneClick(ind){
       this.setState({show:{guestsData:[this.state.guestsData[ind]],deptsData:[{name:null,events:[]}],otherData:[]}});
       if( document.getElementById('guest')){
       document.getElementById('dept').style.display='none';
       document.getElementById('guest').style.display='block';
       document.getElementById('other').style.display='none';
       }
         sidenavbar();
     }

     // To set only other activities in the table
     otherClick(){
       this.setState({show:{guestsData:[{name:null,events:[]}],deptsData:[{name:null,events:[]}],otherData:this.state.otherData}});
       if( document.getElementById('dept')){

       document.getElementById('dept').style.display='none';
       document.getElementById('guest').style.display='none';
       document.getElementById('other').style.display='block';
       }
     }

     // To set only all activities in the table

      allClick(){
        this.setState({show:{guestsData:this.state.guestsData,deptsData:this.state.deptsData,otherData:this.state.otherData}});
        if( document.getElementById('dept')){
        document.getElementById('dept').style.display='block';
        document.getElementById('guest').style.display='block';
        document.getElementById('other').style.display='block';
        }
      }
render(){
	return <div   id='mainBody'>
  <Header />

			 <Navbar />



               <section class="New_Department row" onClick={sidenavbar}>
               <i style={{fontSize:'30px'}} class='fa fa-bars burger' ></i>

                       <nav class="side_navigation col-lg-3 mysidenavbar">

                        <ul class='list-group sidenav_list' >

            <li ><a  href="#" class='list-group-item list-group-item-action active' data-toggle='list' onClick={this.allClick.bind(this)}>
                    <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;All
                  </a>
            </li>
            <li>
              <a  href="#" class='list-group-item list-group-item-action' data-toggle='list' onClick={this.deptClick.bind(this)}>
                  <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;By Departments
              </a>
            </li>
            <li>
              <a  style={{marginLeft:'1px',paddingLeft:'30px',backgroundColor:'white'}} href="#demo1" class='dropdown-toggle' data-toggle="collapse">
              <span style={{fontFamily:'sans-serif',fontSize:'17px'}}>Select</span>
              </a>
            </li>
               {
                  this.state.deptsData.map((res,ind)=>{
                   return  <li id='demo1' class='collapse'>
                            <a href='#'  style={{paddingLeft:'30px'}} class='list-group-item list-group-item-action' data-toggle='list'  onClick={this.deptOneClick.bind(this,ind)} >
                              <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;{res.name}
                            </a>
                           </li>
                 })
               }
             <li>
                <a  href='#' class='list-group-item list-group-item-action' data-toggle='list' onClick={this.guestClick.bind(this)}>
                  <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;By Guests
                </a>
              </li>
              <li>
                <a  style={{marginLeft:'1px',paddingLeft:'30px',backgroundColor:'white'}} href="#demo2" class='list-group-item list-group-item-action' data-toggle='list' data-toggle="collapse" class="dropdown-toggle">
                  <span style={{fontFamily:'sans-serif',fontSize:'17px'}}>Select</span>
                </a>
              </li>
                 {
                 this.state.guestsData.map((res,ind)=>{
                     return <li id='demo2' class='collapse'>
                            <a  style={{paddingLeft:'30px'}} href='#' class='list-group-item list-group-item-action' data-toggle='list'  onClick={this.guestOneClick.bind(this,ind)} >
                              <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;{res.name}
                            </a>
                            </li>
                 })
                }
               <li>
                <a href="#" class='list-group-item list-group-item-action' data-toggle='list' onClick={this.otherClick.bind(this)}>
                <i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Other Activities
                </a>
               </li>
            </ul>
          </nav>


          <article class='col-lg-9' >
          <header id="article_heading">Academic Activities</header>

          <div id='dept'  style={{border:'2px solid #003a9b',borderRadius:'10px',padding:'5px',marginBottom:'15px'}}>
          <center><h3 style={{color:'black'}}>By Departments</h3></center>
             <div>
                 { this.state.show.deptsData.map((res)=>{
                  return <div>
                  <h5 style={{float:'left',color:'#003a9b'}}>{res.name}</h5>
                        <div class="table-responsive">
                          <table class="table table-bordered">
                            <thead>
                               <tr>
                                 <th>Head</th>
                                 <th>Subject</th>
                                 <th>Venue</th>
                                 <th>Date</th>
                               </tr>
                            </thead>
                            <tbody>
                               {
                                 res.events.map(r=>{
                                 return    <tr>
                                       <td>{r.head}</td>
                                       <td>{r.subject}</td>
                                       <td>{r.venue}</td>
                                       <td>{r.date}</td>
                                     </tr>
                                 })
                               }
                            </tbody>
                         </table>
                         </div>
                        </div>
                })
              }
              </div>
            </div>


            <div id='guest'  style={{border:'2px solid green',borderRadius:'10px',padding:'5px',marginBottom:'15px'}}>
            <center><h3 style={{color:'black'}}>By Guests</h3></center>
               <div>
                     {
                       this.state.show.guestsData.map((res)=>{
                         return <div>
                               <h5 style={{float:'left',color:'green'}}>{res.name}</h5>
                               <div class="table-responsive">
                                 <table class="table table-bordered">
                                   <thead>
                                      <tr>
                                        <th>Subject</th>
                                        <th>Venue</th>
                                        <th>Date</th>
                                      </tr>
                                   </thead>
                                   <tbody>
                                      {
                                        res.events.map(r=>{
                                           return <tr>
                                              <td>{r.subject}</td>
                                              <td>{r.venue}</td>
                                              <td>{r.date}</td>
                                            </tr>
                                        })
                                      }
                                   </tbody>
                                </table>
                                </div>
                               </div>
                       })
                     }
                     </div>
             </div>
           <div id='other'  style={{border:'2px solid red',borderRadius:'10px',padding:'5px'}}>
           <center><h3 style={{color:'black'}}>Other Activities</h3></center>
                       <div class="table-responsive">
                         <table class="table table-bordered">
                           <thead>
                              <tr>
                                <th>Subject</th>
                                <th>Venue</th>
                                <th>Date</th>
                              </tr>
                           </thead>
                           <tbody>
                       {
                         this.state.show.otherData.map((res)=>{
                           return  <tr>
                                    <td>{res.subject}</td>
                                    <td>{res.venue}</td>
                                    <td>{res.date}</td>
                                 </tr>
                           })
                       }
                         </tbody>
                        </table>
                       </div>
          </div>


          </article>


        </section>


    <Footer/>


	</div>
}

}
