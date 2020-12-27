import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './styles/Home.css'
import platziconfLogoImage from '../Images/platziconf-logo.svg'
import astronautsImage from '../Images/astronauts.svg'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="Home-col col-12 col-md-4">
                            <img
                                src={platziconfLogoImage}
                                alt='Platzi Conf Logo'
                                className="img-fluid mb-2"
                            />
                            <h1>Badge Management System</h1>
                            <Link className="btn btn-primary" to='/badges'>
                                Start
                            </Link>
                        </div>
                        <div>
                            <img
                            className="img-fluid p-4" 
                            src={astronautsImage}
                            alt="Astronauts"                            
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home