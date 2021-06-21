import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Empresa from './Empresa/Empresa';
import Cliente from './Cliente/Cliente';


export default class Main extends React.Component {

    render() {

        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/empresa' component={Empresa}/>
                    <Route path='/cliente' component={Cliente}/>
                </Switch>
            </main>
        );
    }
}
