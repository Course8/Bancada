import React, {Component} from 'react'
import './header.css'
import {Link, Route} from 'react-router-dom';

class Header extends Component{
    render(){
        return<>
            <header>
                <div className="header">Portal Course</div>
            </header>
            
            <header>
                <div className="header2">
                    <nav>
                        <span><Link to="/"><a href="">Home</a></Link> </span>
                        <span><Link to="/github"><a href="">GitHub</a></Link> </span>
                        <span><Link to="/apidragon"><a href="">Apidragon</a></Link> </span>
                        <span><Link to="/sobre"><a href="">Sobre</a></Link> </span>
                    </nav>
                </div>
            </header>
        </>
    }
}

export default Header