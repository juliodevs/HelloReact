import React from 'react'
import './Styles/estilosJulio.css';


class BadgesListItems extends React.Component {
    render() {
        return (
            <div className='BadgesListItem'>
                <img className='BadgesListItem__avatar'
                src={this.props.badge.avatarUrl} /* Recibo la información como props proveniente de la clase badgesList */
                alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
                />

                <div>
                    <strong>
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                        <br/>@{this.props.badge.twitter}
                        <br/>
                        {this.props.badge.jobTitle}
                </div>
            </div>
        )
    }
}


class BadgesList extends React.Component{
    render(){
        return(
        <div className="BadgesList">
            <ul className='list-unstyled'>
                {this.props.Badges.map((badge)=>{/* Recibo la información como props proveniente del componente Badges y la mapeo */
                    return(/* A continuación Paso la información como props a la clase BadgesListItem */
                        <li key={badge.id}>
                            <BadgesListItems badge={badge}/>
                        </li>
                    )
                })}
            </ul>
        </div>  
        )
    }
}

export default BadgesList