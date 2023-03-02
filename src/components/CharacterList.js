import React from 'react';
import ListItem from './ListItem';
import './CharacterList.css'

// import styled from 'styled-components';

// const BigPlumbus = styled.div`
//     font-size: 1.5em;
//     padding: 5em;
//     border-bottom: 1px solid #062c43;
//     `

const CharacterList = ({characters, onCharacterClick}) => {

    const allCharacters = characters.map((character, index) => {
        
        return <ListItem character={character} key={index} onCharacterClick={onCharacterClick}/>
    })

    return (
        <div>
        <ul className='list-container'>{allCharacters}</ul>
        </div>
    )
}

export default CharacterList