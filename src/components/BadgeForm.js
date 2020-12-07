import React from 'react'

class BadgeForm extends React.Component{

    //Esta función permite mostrar en consolo lo que estoy recibiendo en el imput
    handlechange = e =>{
     console.log({
            name:e.target.name, //Pemite imprimir en consola el name  del label
            value:e.target.value}) // Permite ver en consolo el value del label
    }    
    handleClick = e =>{ //Esta función imprimi el evento que se ejecuta al dar click sobre el boton
        console.log('Click sobre el boton')
    }
    handleSubmit = e =>{
        e.preventDefault() //Con este metodo diciendo que no quiero enviar el formulario
        console.log("Se detiene el envio del formulario")
    }
    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>{/* Le paso al form función para que no se envíe el formulario */}
                    <div className="form-group"> {/* Clase de bootstrap que permite darle estilos a una etiqueta y a una caja de texto */}
                        <label >First Name</label> {/* Creando la primera etiqueta */}
                        <input onChange={this.handlechange} className="form-control" type="text" name="firstName"/>
                    </div>
                    <button  onClick={this.handleClick} className="btn btn-primary">SAVE</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm