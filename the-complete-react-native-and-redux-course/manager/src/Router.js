import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';

/* Screens */
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => (
  <Router>
    <Stack key='root' hideNavBar>
      <Scene key='auth'>
        <Scene
          key='login'
          component={LoginForm}
          title='Please login'
        />
      </Scene>
      <Scene key='main'>
        <Scene
          key='employeeList'
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          component={EmployeeList}
          title='Employees'
        />
        <Scene
          key='employeeCreate'
          component={EmployeeCreate}
          title='Create Employee'
        />
        <Scene
          key='employeeEdit'
          component={EmployeeEdit}
          title='Edit Employee'
        />
      </Scene>
    </Stack>
  </Router>
)

export default RouterComponent;