import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes'
import {Route,BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
const Routeha=(
    <BrowserRouter>
        {
            Routes.map((route)=>(
                <Route {...route}/>
            ))
        }
    </BrowserRouter>
)
ReactDOM.render(Routeha, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
