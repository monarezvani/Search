import React from 'react'
import './searchButton.scss'

interface IsearchItem {
    searchTerm: string,
    onClick: () => void
}
export const searchButton = ({ onClick }: IsearchItem) => {


    return (

        <button
            className='search_button'
            onClick={onClick}
        >Search</button>


    )
}

export default searchButton