import React from 'react';
import './Empresa.css';

export default class Empresa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {empresas: []};
    }

    componentDidMount() {

        fetch('http://localhost:4002/enterprise').then(res => {
          //console.log('--- Enterprise : ', res);
          if (res.ok) {
            return res.json();
          } else {
            return res.text().then(text => {throw new Error(text)})
          }
        }).then(res => {
          //console.log('--- Enterprise then: ', res);
          this.setState({empresas: res});
        }).catch(err => {
          console.log('--- Enterprise catch: ', err);
        });
    
      }

    render() {
        return (
            <div>
                <h1>Empresas</h1>
                {
                    !this.state.empresas ? 'Loading.....' : <>

                        <table id="empresas">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.empresas.map(e => {
                                        return (
                                            <tr key={e.id}>
                                                <td>{e.name}</td>
                                                <td>{e.description}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </>
                }
                
            </div>
        );
    }
}