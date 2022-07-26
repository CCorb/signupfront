import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Contracts from './Components/Contracts/Contracts'
import { Route, BrowserRouter } from 'react-router-dom'
import CommonError from './Components/Error/CommonError'
import PersonalData from './Components/PersonalData/PersonalData'
import Home from './Components/Home/home'
import Products from './Components/Admin/Products/Products'
import AppointmentCalendar from './Components/Calendar/Calendar'
import Tutorial from './Components/Tutorials/Tutorial'
import SignUp from './Components/SignUp/SignUp'
import ContractDetail from './Components/Contracts/ContractDetail'
import Customers from './Components/Admin/Customers/Customers'
import ContractBasisData from './Components/Contracts/ContractBasisData'
import ContractDocuments from './Components/Contracts/ContractDocuments'
import ContractServices from './Components/Contracts/ContractServices'
import ContractUsedServices from './Components/Contracts/ContractUsedServices'
import NewTutorial from './Components/Tutorials/NewTutorial'
import AppointmentCalendarUpdate from './Components/Calendar/AppointmentCalendarUpdate'

const routes = (
  <BrowserRouter>
    <div>
      {/* Customer pages, must be secured by login data */}
      <Route exact path="/" component={App} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Contracts" component={Contracts} />
      <Route exact path="/Contractdetail" component={ContractDetail} />

      <Route
        exact
        path="/Contractdetail/services"
        component={ContractServices}
      />
      <Route
        exact
        path="/Contractdetail/performance"
        component={ContractUsedServices}
      />
      <Route
        exact
        path="/Contractdetail/basisdata"
        component={ContractBasisData}
      />
      <Route
        exact
        path="/Contractdetail/documents"
        component={ContractDocuments}
      />

      <Route exact path="/Error" component={CommonError} />
      <Route exact path="/Settings" component={PersonalData} />
      <Route exact path="/Tutorials" component={Tutorial} />
      <Route exact path="/newTutorial" component={NewTutorial} />
      <Route exact path="/Appointments" component={AppointmentCalendar} />
      <Route
        exact
        path="/Appointments/update"
        component={AppointmentCalendarUpdate}
      />
      <Route exact path="/Signup" component={SignUp} />

      {/* Admin pages, must be secured by login data */}
      <Route path="/Admin/Tutorials" component={Tutorial} />
      <Route path="/Admin/Products" component={Products} />
      <Route exact path="/Admin/Customers" component={Customers} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'))
