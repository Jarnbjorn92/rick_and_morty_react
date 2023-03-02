import React from 'react'
import './CharacterDetail.css'

// import styled from 'styled-components'

// const SchwiftyCharacter = styled.div`
//     display: flex;
//     background: #054569;
//     justify-content: space-evenly;
//     color: #fff;
//     `

// const Plumbus = styled.p`
//     margin: 0;
//     padding: 1em;
//     background-color: #ced7e0;
//     color: #062c43;
//     `

const CharacterDetail = ({character}) => {

    return (
        <div className='char-detail'>
            <div className='char-info'>
                <p><u>{character.name}</u></p>
                <img src={character.image} alt="empty"/>
                <p>Status: {character.status}</p>
                <p>Gender: {character.gender}</p>
                <p>Species: {character.species}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
            </div>
        </div>
    )
}

export default CharacterDetail