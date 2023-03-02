import React, { useState , useEffect } from "react";
import CharacterDetail from "../components/CharacterDetail";
import CharacterList from "../components/CharacterList";
import PageSelector from "../components/PageSelector";
import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
    font-size: 1.5em;
    color: #fff;
    background-color: #062c43;
    margin: 0;
    padding: 1em;
    `

const CharacterContainer = ({pages}) => {

    const [characters , setCharacters] = useState([])
    const [selectedCharacter , setSelectedCharacter] = useState(null)

    useEffect(() => {
        getCharacters(pages[0].url)
    }, [pages])

    const getCharacters = url => {
        fetch(url)
        .then(res => res.json())
        .then(characters => setCharacters(characters.results))
    }

    const onCharacterClick = (character) => {
        setSelectedCharacter(character)
    }

    const handleSelectChange = event => {
        getCharacters(event.target.value);
    }

    return (
        <>
        <div>
        <Title>Plumbus for the win!</Title>
            {selectedCharacter ? <CharacterDetail character={selectedCharacter}/> : null}
        </div>
        <div>
            <PageSelector handleSelectChange={handleSelectChange} pages={pages}/>
        </div>
        <div>
            <CharacterList characters={characters} onCharacterClick={onCharacterClick}/>
        </div>
        </>
    )
}
{/* <img src={require(`./plumbus_lg.png`)}/> */}
export default CharacterContainer;