import React from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';
import Header from './pages/header/header.js';
import Footer from './pages/footer/footer.js';
import routesConfig from './routesConfig';

function App() {
  return (
    <div className="App">
        <Header></Header>
        {routesConfig.map(
          (value, key) => {
            return <Route
            key={key}
            path={value.path}
            component={value.component}
            exact={value.exact}
            ></Route>
          }
        )}
        <Footer></Footer>
    </div>
  );
}

export default App;
