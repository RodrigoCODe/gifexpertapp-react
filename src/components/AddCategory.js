import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    // const [inputValue, setInputValue] = useState("Hola mundo")
    // const [inputValue, setInputValue] = useState() //Aca el estado incial es undefine
    //para evitar el undefine se debe inicializar el string en vacio
    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //para prevenir el comportamiento por defecto (no recarga  pagina)
        e.preventDefault();

        if(inputValue.trim().length > 2) {

            setCategories( animeList => [inputValue, ...animeList]);
            setInputValue('');
        }
    }

    return (
         <form onSubmit={handleSubmit}>

            <input 
                type="text"
                value={inputValue}     
                onChange={ handleInputChange}   
            />   
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
