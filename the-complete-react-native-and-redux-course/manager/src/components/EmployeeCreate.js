import React, { PureComponent } from 'react';

/* Redux */
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';

/* Components */
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends PureComponent {
  onCreateEmployee() {
    const { name, phone, shift } = this.props.employeeForm;
    this.props.employeeCreate(name, phone, shift);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button 
            label='Create'
            onPress={this.onCreateEmployee.bind(this)}
          />
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = ({ employeeForm }) => ({ employeeForm });

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);