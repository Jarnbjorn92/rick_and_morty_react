import React from 'react'
import "./PageSelector.css"


const PageSelector = ({pages, handleSelectChange}) => {

    

    return (
        <div className='dropdown'>
            <select onChange={handleSelectChange} className='dropdown-selector'>
                {pages.map(page => {

                    return <option key={page.name} value={page.url} className='dropdown-content'>{page.name}</option>
                })}
            </select>
        </div>
    )
}

export default PageSelector