import React from 'react';

export default class Empresa extends React.Component {

    render() {
        let renderData = this.props.data ? this.props.data.map(e => <p key={e.id}>{e.name}</p>) : 'Loading...';
        return (
            <div>
                <h1>Empresa</h1>
                {renderData}
            </div>
        );
    }
}