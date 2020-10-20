import React, {Component} from 'react';
import "./footer.css"

class Footer extends Component{
    render(){
        return(
            <footer className="pt-3">
                <div className="container">
                    <div className="row">
                        <p className="col dir pb-1">Direitos Reservados © Course</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;