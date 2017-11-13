import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stuffActions from '../actions/stuffActions';
import PropTypes from 'prop-types';

class StuffList extends Component {
    componentWillMount() {
        this.props.stuffActions.fetchStuff();
    }
    renderData() {
        return (
            <div>
                {this.props.stuff}
            </div> 
        );
    }
    render() {
        return (
            <div>
                {this.props.stuff.length > 0 ?
                    this.renderData()
                    : <div>
                       No data to display 
                    </div>
                }
            </div>
        );
    }
}

StuffList.propTypes = {
    stuffActions: PropTypes.object,
    stuff: PropTypes.array
};

function mapStateToProps(state) {
    return {
        stuff: state.stuff
    };
}

function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StuffList);