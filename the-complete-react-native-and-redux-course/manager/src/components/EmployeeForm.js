import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import styled from 'styled-components';

/* Components */
import Input from './Input';
import CardSection from './CardSection';

/* Redux */
import { connect } from 'react-redux';
import { onInputUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift } = this.props.employeeForm;
    return (
      <View>
        <CardSection>
          <Input
            label='Name'
            placeholder='Jonas'
            onChangeText={text => this.props.onInputUpdate('name', text)}
            value={name}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Phone'
            placeholder='99999999'
            onChangeText={text => this.props.onInputUpdate('phone', text)}
            value={phone}
          />
        </CardSection>
        <CardSection flexDirection='column' >
          <ShiftLabel>Shift</ShiftLabel>
          <Picker
            style={{ flex: 1 }}
            selectedValue={shift}
            onValueChange={day => this.props.onInputUpdate('shift', day)}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
          </Picker>
        </CardSection>
      </View>
    )
  }
}

const ShiftLabel = styled.Text`
  font-size: 18;
  padding-left: 20
`;

const mapStateToProps = ({ employeeForm }) => ({ employeeForm }); 

export default connect(mapStateToProps, { onInputUpdate })(EmployeeForm);
