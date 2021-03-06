import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/home';
import AcademicActivities from './components/academicActivities';
import Result from './components/result';
import University from './components/university';
import Admission from './components/admission';
import Gallery from './components/gallery';
import About from './components/about';
import Research from './components/Research';
import teaching_staff from './components/teaching_staff';
import nonTeaching_staff from './components/nonTeaching_staff';
import Department from './components/Department';
import Archives from './components/archives';
import Charts from './components/chart';
import deptCharts from './components/deptCharts';
import Award from './components/Award';
import Appointment from './components/appointment';
import Recognition from './components/Recognition';


import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';



ReactDom.render(
<BrowserRouter>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route  path='/academicActivities' component={AcademicActivities} />
    <Route  path='/result' component={Result} />
    <Route  path='/university' component={University} />
    <Route  path='/admission' component={Admission} />
    <Route  path='/gallery' component={Gallery} />
    <Route  path='/research' component={Research} />
    <Route  path='/teaching_staff' component={teaching_staff} />
    <Route  path='/nonTeaching_staff' component={nonTeaching_staff} />
    <Route  path='/Department' component={Department} />
    <Route  path='/archives' component={Archives} />
    <Route  path='/analytics' component={Charts} />
    <Route  path='/appointment' component={Appointment} />
    <Route path='/deptCharts' component={deptCharts} />
    <Route path='/award' component={Award} />
    <Route path='/recognition' component={Recognition} />
    <Route path='/recognition' component={Recognition} />

  </Switch>
</BrowserRouter>
,
document.getElementById('root'));
