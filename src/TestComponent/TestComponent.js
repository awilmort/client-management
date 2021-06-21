import React from 'react';

export default class TestComponent extends React.Component {

    render() {
        let renderData = this.props.data ? this.props.data.map(e => <p key={e.id}>{e.name}</p>) : 'Loading...';
        return (
            <div>
                {renderData}
            </div>
        );
    }
}