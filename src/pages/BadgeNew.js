import React from 'react'
import header from '../Images/badge-header.svg'
import Navbar from '../components/Navbar/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import '../pages/styles/BadgeNew.css'

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
               <Navbar />
               <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="Logo" />
               </div>
               <div className="container">
                   <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName="Julio César" 
                            lastName="Ardila" 
                            twiter="juliocesar" 
                            jobTitle="Fronten Engineer" 
                            avatar="https://i.imgur.com/hy10FUK.jpg"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm/>
                        </div>
                   </div>
               </div>
            </div>
        )
    }
}
export default BadgeNew