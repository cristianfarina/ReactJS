import React from 'react'
import Filters from './Filters'

function Header({setFilters}) {
    return (
        <>
            <header>
                <h1>REACT SHOPPING 🛒</h1>
                <Filters setFilters={setFilters} />
            </header>
        </>
    )
}

export default Header