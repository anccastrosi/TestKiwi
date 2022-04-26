import React, { Component } from "react";
import "./Comps.css";

class FormApp extends Component {
    state = { nombre: "", email: "" };

    valueToState = ({ name, value }) => {
        this.setState(() => {
            return { [name]: value };
        });
    };
    render() {
        return (
            <div className='Background'>
                <pre> {JSON.stringify(this.state, null, 2)}</pre>
                <h>Ingresa los numeros separados por comas</h>
                <form>
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        name='nombre'
                        type="text"
                        placeholder="Ingresa tu nombre"
                        onChange={event => this.valueToState(event.target)}
                    />
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="ejemplo@gmail.com"
                        onChange={event => this.valueToState(event.target)}
                    />
                </form>
            </div>
        );
    }
}
export default FormApp;