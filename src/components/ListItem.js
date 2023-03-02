import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    font-size: 1em;
    padding: 1em;
    margin: 0.5;
    border: 2px solid #ced7e0;
    `

const ListItem = ({character, onCharacterClick}) => {

    const handleClick = function(){
        onCharacterClick(character)
    }

    return (
        <div>
            <p>{character.name}</p>
            <img src={character.image} alt="yo"/>

            <Button onClick={handleClick}>Plumbus</Button>
        </div>
    )
    
}

export default ListItem