import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CityState } from './context/city/CityState'
import { Home } from './pages/Home/Home'
import { CityInfo } from './pages/CityInfo/CityInfo'


ReactDOM.render(
    <CityState>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path ='/' component={Home} />
                    <Route path ='/city-info' component={CityInfo} />
                </Switch>
            </App>
        </BrowserRouter>
    </CityState>
    
    , document.getElementById('root'));

serviceWorker.unregister();
