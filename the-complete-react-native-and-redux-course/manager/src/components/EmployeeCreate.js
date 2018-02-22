import React, { PureComponent } from 'react';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';
import { Picker } from 'react-native';
import styled from 'styled-components';

/* Redux */
import { connect } from 'react-redux';
import { onInputUpdate } from '../actions';

class EmployeeCreate extends PureComponent {
  render() {
    const { name, phone, shift } = this.props.employeeForm;
    return (
      <Card>
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
        <CardSection>
          <Button 
            label='Create'
            onPress={() => console.log('create')}
          />
        </CardSection>
      </Card>
    )
  }
}

const ShiftLabel = styled.Text`
  font-size: 18;
  padding-left: 20
`;

const mapStateToProps = ({ employeeForm }) => ({ employeeForm });

export default connect(mapStateToProps, { onInputUpdate })(EmployeeCreate);