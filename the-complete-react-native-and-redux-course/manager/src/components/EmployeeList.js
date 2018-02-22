import React, { PureComponent } from 'react';
import { ListView, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import ListItem from './ListItem';

/* Redux */
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions';

class EmployeeList extends PureComponent {
  componentWillMount() {
    this.props.fetchEmployees();  

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees)
  }

  renderRow(employee) {
    return (
      <TouchableOpacity onPress={() => Actions.employeeEdit({ employee })}>
        <ListItem employee={employee} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    )
  }
}

const mapStateToProps = ({ employeeList }) => {
  const employees = _.map(employeeList, (val, uid) => ({ ...val, uid }));
  return { employees };
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);