import React from 'react'
import Logo from '../Images/badge-header.svg'
import "./Styles/Badge.css"

class Badge extends React.Component{
    render(){ //El metodo render define el resultado que vamos a ver en pantall
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={Logo} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://i.imgur.com/hy10FUK.jpg" alt="Avatar"/>
                    <h1>Julio César <br/>Ardila</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>Frontend ingineer</h3>
                    <div>@juliodevs</div>
                </div>
                <div className="Badge__footer">
                    #Platziconf
                </div>
            </div>
        )

    }
}

export default Badge