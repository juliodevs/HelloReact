import React from 'react'
import Logo from '../Images/badge-header.svg'
import "./Styles/Badge.css"

class Badge extends React.Component{
    render(){ //El metodo render define el resultado que vamos a ver en pantalla
              //Los props me permiten leer las varibles que tengo creadas en el index
           //desestructurando las variablesen this. props y con ello solo escribo esa palabra reserva
           //una sola vez
              const {
               firstName,
               lastName,
               avatar,
               jobTitle,
               twiter
           } = this.props  
        return(
                <div className="Badge">
                <div className="Badge__header">
                    <img src={Logo} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={avatar} alt="Avatar"/>
                    <h1>{firstName} <br/>{lastName}</h1> 
                </div>
                <div className="Badge__section-info">
                  <h3>{jobTitle}</h3>
                      <div>@{twiter}</div>
                </div>
                <div className="Badge__footer">
                    #Platziconf
                </div>
            </div>
        )

    }
}

export default Badge