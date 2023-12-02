import React from 'react'
import { useState } from "react";

function Filters({ setFilters }) {

    //OJO CON ESTO
    const [minPrice, setMinPrice] = useState(0)

    const handMinPrice = event => {
        //OJO CON ESTOO ACA TENEMOS DOS FUENTES DE LA VERDAD
        setMinPrice(event.target.value)
        setFilters((prevState) => ({ ...prevState, minPrice: event.target.value })) // la funcion que modifica el estado "set" recibe una funcion como parametro
    }

    const handleCategory = event => {
        setFilters(prevState => ({...prevState, category: event.target.value}))
    }


    return (
        <>
            <div>
                <label htmlFor="price">Precio</label>
                <input
                    type="range"
                    name=''
                    id='price'
                    min={0}
                    max={50}
                    value={minPrice}
                    onChange={handMinPrice}
                />
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <select name="" id="category" onChange={handleCategory}>
                    <option value="all">Todos</option>
                    <option value="Electrodomésticos">Electrodomésticos</option>
                    <option value="Hogar">Hogar</option>
                    <option value="Limpieza">Limpieza</option>
                </select>
            </div>
        </>
    )
}

export default Filters