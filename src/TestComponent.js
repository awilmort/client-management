import React from 'react';
import PropTypes from 'prop-types';

export default class TestComponent extends React.Component {

    render() {
        return <p>{this.props.name}</p>
    }
}

TestComponent.propTypes = {
    name: PropTypes.string.isRequired
}