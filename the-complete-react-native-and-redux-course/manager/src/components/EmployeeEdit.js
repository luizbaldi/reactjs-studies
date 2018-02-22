import React, { PureComponent } from 'react';
import _ from 'lodash';
import communications from 'react-native-communications';

/* Redux */
import { connect } from 'react-redux';
import { employeeUpdate, onInputUpdate, employeeDelete } from '../actions';

/* Components */
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import EmployeeForm from './EmployeeForm';
import ConfirmModal from './ConfirmModal';

class EmployeeEdit extends PureComponent {
  state = { isModalOpen: false }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.onInputUpdate(prop, value);
    });
  }
  
  onUpdateEmployee() {
    const { name, phone, shift } = this.props.employeeForm;
    const { uid } = this.props.employee;
    
    this.props.employeeUpdate(name, phone, shift, uid);
  }

  onTextPress() {
    const { phone, shift} = this.props.employeeForm;
    communications.text(phone, `Your upcoming shift os on ${shift}.`);
  }

  onModalActionClick(action) {
    if (action === 'yes') {
      const { uid } = this.props.employee;
      this.props.employeeDelete(uid);
    }

    this.setState({ isModalOpen: false });
  }

  onFirePress() {
    this.setState({ isModalOpen: true });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button 
            label='Save Changes'
            onPress={this.onUpdateEmployee.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Button 
            label='Text Schedule'
            onPress={this.onTextPress.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Button 
            label='Fire'
            onPress={this.onFirePress.bind(this)}
          />
        </CardSection>
        <ConfirmModal
          isModalOpen={this.state.isModalOpen}
          onActionClick={this.onModalActionClick.bind(this)}
        >
          Are you sure you want to fire this employee?
        </ConfirmModal>
      </Card>
    )
  }
}

const mapStateToProps = ({ employeeForm }) => ({ employeeForm });

export default connect(mapStateToProps, 
  { employeeUpdate, onInputUpdate, employeeDelete }
)(EmployeeEdit);