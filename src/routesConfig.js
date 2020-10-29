import React, {Component} from 'react';
import Home from './pages/home/home'
import GitHub from './pages/github/github.js';
import Apidragon from './pages/api-dragon/apidragon';
import Sobre from './pages/sobre/sobre';

const routesConfig = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    
    {
        path: '/sobre',
        component: Sobre,
        exact: true,
    },

    {
        path: '/github',
        component: GitHub,
        exact: true,
    },

    {
        path: '/apidragon',
        component: Apidragon,
        exact: true,
    }
]

export default routesConfig;