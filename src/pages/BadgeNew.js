import React from 'react'
import header from '../Images/badge-header.svg'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import '../pages/styles/BadgeNew.css'

class BadgeNew extends React.Component{
    //Requiero que el estado cambie en BadgeNew y no en BadgeForm, y para hacerlo incializo en estado en BadgeNew
        
    state = {form:{ //Inicializo los valores del form vacios para evitar error
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twiter:''
    }} //Al estado vacio se le adiciona una propiedad llamada form que tambie tiene un objeto vacio interno
   
   handleChange = e => { // Creo metodo el cual recibe el evento
        
    this.setState({ // Cuando se reciba el evento va ha realizar un setState al cual le pasamos un objeto
        form:{ //El form va a contener la información del evento que acaba de ocurrir
            ...this.state.form, //Dejo caer todos los valores que estan en this.state.form y le añadimos un nuevo valor
            [e.target.name]:e.target.value
        }

       })
   }
    render(){
        return(
            <React.Fragment>
              
               <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="Logo" />
               </div>
               <div className="container">
                   <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName} 
                            twiter={this.state.form.twiter} 
                            jobTitle={this.state.form.jobTitle} 
                            email={this.state.form.email}
                            avatar="https://i.imgur.com/hy10FUK.jpg"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                             onChange={this.handleChange} 
                             formValues = {this.state.form}/> {/* Le estoy pasando el metod handleChange y los valores del formulario como props a BadgeForm */}
                        </div>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}
export default BadgeNew