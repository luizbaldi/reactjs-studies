import React, { Component } from 'react';
import CardSection from './CardSection';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { selectLibrary } from '../actions';
import { 
  TouchableWithoutFeedback, 
  View, 
  Text,
  LayoutAnimation
} from 'react-native';

class ListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  handleDescription() {
    const { expanded, description } = this.props;
    let element = null;

    if (expanded) {
      element = (
        <CardSection>
          <Text>{description}</Text>
        </CardSection>
      );
    }

    return element;
  }
  
  render() {
    const { id, title, description, selectLibrary } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Title>{title}</Title>
            {this.handleDescription()}
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const Title = styled.Text`
  font-size: 18;
  padding-left: 15;
`;

const mapStateToProps = ({ selectedLibrary }, { id }) => (
  { expanded: id === selectedLibrary }
);

const mapDispatchToProps = dispatch => bindActionCreators({ selectLibrary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);