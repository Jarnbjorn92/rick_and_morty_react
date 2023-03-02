import React from 'react'
import styled from 'styled-components'

const SchwiftyCharacter = styled.div`
    display: flex;
    background: #054569;
    justify-content: space-evenly;
    color: #fff;
    `

const Plumbus = styled.p`
    margin: 0;
    padding: 1em;
    background-color: #ced7e0;
    color: #062c43;
    `

const CharacterDetail = ({character}) => {

    return (
        <div>
        <SchwiftyCharacter>
            <Plumbus><u>{character.name}</u></Plumbus>
            <img src={character.image} alt="empty"/>
            <Plumbus>Status: {character.status}</Plumbus>
            <Plumbus>Gender: {character.gender}</Plumbus>
            <Plumbus>Species: {character.species}</Plumbus>
            <Plumbus>Origin: {character.origin.name}</Plumbus>
            <Plumbus>Location: {character.location.name}</Plumbus>
        </SchwiftyCharacter>
        </div>
    )
}

export default CharacterDetail