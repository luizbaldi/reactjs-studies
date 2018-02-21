import React, { PureComponent } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends PureComponent {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return (
      <ListItem 
        id={library.id}
        title={library.title}  
        description={library.description}  
      />
    )
  }
  
  render() {
    return (
      <ListView 
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = ({ libraries }) => ({ libraries });

export default connect(mapStateToProps)(LibraryList);