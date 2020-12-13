import React from 'react'

class BadgeForm extends React.Component{

    // state={
       
    // }//Estoy inicializando el estado. Esto siempre debo relizarlo para poder ejecutarlo mas adelante
// La asignación de valores para los objetos es on el igual y para lo elementos dentro del objeto es dos puntos
    //Esta función permite mostrar en consola lo que estoy recibiendo en el imput
    // handlechange = e =>{
    // //  console.log({
    // //         name:e.target.name, //Pemite imprimir en consola el name  del label
    // //         value:e.target.value}) // Permite ver en consolo el value del label

    // this.setState({ //Permite escribir el estado del imput
    //     [e.target.name]: e.target.value, //Guarda la información del imput que se este ejecutando,
    //     //Eejemplo: Si el imput es el email la información se guardará en la llave email

    // })
    // }    
    handleClick = e =>{ //Esta función imprimi el evento que se ejecuta al dar click sobre el boton
        console.log('Click sobre el boton')
    }
    handleSubmit = e =>{
        e.preventDefault() //Con este metodo diciendo que no quiero enviar el formulario
        console.log("Se detiene el envio del formulario")
        console.log(this.state) //Imprimo todos los valores del estado al momento de dar click en el boton save
    }
    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>{/* Le paso al form función para que no se envíe el formulario */}
                    <div className="form-group"> {/* Clase de bootstrap que permite darle estilos a una etiqueta y a una caja de texto */}
                        <label >First Name</label> {/* Creando la primera etiqueta */}
                        <input
                         onChange={this.props.onChange}
                          className="form-control" 
                          type="text" name="firstName" 
                           value={this.props.formValues.firstName}/> {/*Me permite leer el estado */}
                    </div>
                    <div className="form-group"> 
                        <label >Last Name</label> 
                        <input onChange={this.props.onChange}
                         className="form-control" 
                         type="text" name="lastName" 
                         value={this.props.formValues.className}/>
                    </div>
                    <div className="form-group"> 
                        <label >Email</label> 
                        <input onChange={this.props.onChange} 
                        className="form-control"
                         type="email" 
                         name="email"
                         value={this.props.formValues.email}/>
                    </div>
                    <div className="form-group"> 
                        <label >Job Title</label> 
                        <input onChange={this.props.onChange}
                         className="form-control"
                          type="text" name="jobTitle"
                          value={this.props.formValues.jopTitle}/>
                    </div>
                    <div className="form-group"> 
                        <label >Twiter</label> 
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" name="twiter"
                        value={this.props.formValues.twiter}/>
                    </div>
                    <button  onClick={this.handleClick} className="btn btn-primary">SAVE</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm