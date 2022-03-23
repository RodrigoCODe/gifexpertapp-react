import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {


    //con esta constante es imposible cambiar o agregar cosas
    //para eso se uso un hook useState
    // const categories = ['One Punch', 'Saint seiya', 'Dragon ball'];

    //no es buena practica mutar el arreglo con push (es const)
    const [categories, setCategories] = useState(['Saint seiya']);

    // const handleAdd = () => {

    //     //2 formas de agregar un elemento al arreglo
    //     //cats estado anterior, y devuelve nuevo estado mas nuevo elemento
    //     setcategories( cats => [...cats, 'KanojoXkanojo']);
    //     // setcategories( [...categories, 'KanojoXkanojo']);

    // }; 

    // console.log(categories);


    return(
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = {category}
                            category = {category} 
                        />
                        
                    ))
                }

            </ol>
        </>
    );

};