import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SigIn from '../pages/SignIn';
import Students from '../pages/Students';
import StudentRegister from '../pages/Students/create';
import StudentEdit from '../pages/Students/edit';
import Plans from '../pages/Plans';
import PlansRegister from '../pages/Plans/create';
import PlansEdit from '../pages/Plans/edit';
import Registrations from '../pages/Registrations';
import RegistrationsRegister from '../pages/Registrations/create';
import RegistrationsEdit from '../pages/Registrations/edit';
import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      <Route path="/students" exact component={Students} isPrivate/>
      <Route path="/students/register" exact component={StudentRegister} isPrivate/>
      <Route path="/students/edit" exact component={StudentEdit} isPrivate/>
      <Route path="/plans" exact component={Plans} isPrivate/>
      <Route path="/plans/register" exact component={PlansRegister} isPrivate/>
      <Route path="/plans/edit" exact component={PlansEdit} isPrivate/>
      <Route path="/registrations" exact component={Registrations} isPrivate/>
      <Route path="/registrations/register" exact component={RegistrationsRegister} isPrivate/>
      <Route path="/registrations/edit" exact component={RegistrationsEdit} isPrivate/>
      <Route path="/help-orders" exact component={HelpOrders} isPrivate/>
    </Switch>
  );
}
