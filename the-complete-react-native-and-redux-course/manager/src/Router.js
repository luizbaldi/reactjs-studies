import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';

/* Screens */
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

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
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          key='employeeList'
          component={EmployeeList}
          title='Employees'
        />
        <Scene
          key='employeeCreate'
          component={EmployeeCreate}
          title='Create Employee'
        />
      </Scene>
    </Stack>
  </Router>
)

export default RouterComponent;