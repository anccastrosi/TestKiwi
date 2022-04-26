import { useState } from 'react';
import APIService from './APIService'
import './Comps.css'


const Inp = (props) => {

    const [input, setInput] = useState([])

    const processInput = () => {
        APIService.ProcessInput({ input })
            .then((response) => props.processedInput(response))
            .catch(error => console.log('error', error))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        processInput()
        setInput([])
    }

    return (
        <div className='Background'>
            <form onSubmit={handleSubmit} >

                <label htmlFor="data" className="form-label">Ingresa uno a uno los números separados por comas</label>

                <div></div>
                 <input
                 name='data'
                    id='data'
                    type="text"
                    className="TextBox"
                    placeholder="ingresa un valor"
                    required
                />

                <div></div>
                <button
                    className="Button"
                    onClick={(e) => setInput(e.target.value)} >
                    Enviar lista
                </button>

            </form>
        </div>
    )
}

export default Inp;