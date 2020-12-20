import React from 'react'
import './styles/Badges.css'
import confLogo from '../Images/badge-header.svg'
import Navbar from '../components/Navbar/Navbar'
import BadgesList from '../components/BadgesList'


class Badges extends React.Component{
    state={
        data:[
            {
                "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                "firstName": "Freda",
                "lastName": "Grady",
                "email": "Leann_Berge@gmail.com",
                "jobTitle": "Legacy Brand Director",
                "twitter": "FredaGrady22221-7573",
                "avatarUrl": "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
              },
              {
                "id": "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                "firstName": "Major",
                "lastName": "Rodriguez",
                "email": "Ilene66@hotmail.com",
                "jobTitle": "Human Research Architect",
                "twitter": "MajorRodriguez61545",
                "avatarUrl": "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
              },
        ]
    }
    render(){
        
        return(
            <div>
                <Navbar/>
                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <img className='Badges_conf-logo' src={confLogo} alt='Conf Logo'/>
                        </div>
                    </div>
                </div>
                <div className='Badges__container'>
                    <div className='Badges__buttons'>
                        <a href='badges/new' className='btn btn-primary'>
                            New Badge
                        </a>
                    </div>
                    <div className='badges__container'>
                        <BadgesList Badges={this.state.data}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badges