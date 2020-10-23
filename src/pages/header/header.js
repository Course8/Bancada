import React, {Component} from 'react'
import './header.css'

class Header extends Component{
    render(){
        return<>
            <header>
                <div className="header">Portal Course</div>
            </header>
            <header>
                <div className="header2">
                    <a>Home</a>
                </div>
            </header>
        </>
    }
}

export default Header