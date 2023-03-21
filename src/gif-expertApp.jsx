import { useState } from 'react';
import { AddCategory, GifGrid } from './componentes/index';

import React from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ '' ]);

    const onAddCategory = ( newCategory ) => {
        console.log(newCategory)

        //categories.push('Valorant'); se usa para mutar un objeto y debemos evitar mutaciones

        if ( categories.includes(newCategory)) {
            return;
        }

        setCategories( [ newCategory, ...categories ] ) //esta es una forma, tambien puedo invertir el orden de categories con valornt y se inserta primero el valo.
        //setCategories( cat => [ ...cat, 'Valorant']) //es otra forma

    }


    return (
    <>
        {/* titulo */}
        <h1>Buscador de Gifs</h1>

        {/* input */}
        <AddCategory 
            onNewCategory = { value => onAddCategory(value) }
        // setCategories={ setCategories }
        // setCategories ahora es una propiedad de mi componente y va a recibir la funcion setCategories
        />


        { categories.map( ( category ) => ( <GifGrid key = { category } category = { category } />) ) }


    </>
    )
}
