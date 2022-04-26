import React, { Fragment, useState } from 'react'

const Formulario = () => {

    const [datos, setDatos]=useState({
        lista: []
    })

    const handleImputChange = (event) =>{
        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })
    }

    const submitData = (event)=>{
        event.preventDefault(); 
    }


    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className='row' onSubmit={submitData}>
                <div className='col-md-3'>
                    <input 
                        placeholder='ingresa Datos'
                        className='form-control'
                        type= 'text'
                        name='lista'
                        onChange={handleImputChange}
                    />
                </div>
                <div className='col-md-3'>
                    <button
                        className='btn btn-primary'
                        type='submit'
                    >Enviar</button>
                </div>

            </form>
        </Fragment>
    );
}
export default Formulario;