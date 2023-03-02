import React from 'react'
import './ListItem.css'
// import styled from 'styled-components'

// const Button = styled.button`
//     font-size: 1em;
//     padding: 1em;
//     margin: 0.5;
//     border: 2px solid #ced7e0;
//     `

const ListItem = ({character, onCharacterClick}) => {

    const handleClick = function(){
        onCharacterClick(character)
    }

    return (
        <div className='list-item'>
            <p className='char-name'>{character.name}</p>
            <img className='char-image' src={character.image} alt="yo"/>

            <button className='detail-button' onClick={handleClick}>Plumbus</button>
        </div>
    )
    
}

export default ListItem