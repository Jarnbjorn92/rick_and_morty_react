import React, { useState , useEffect } from "react";
import CharacterDetail from "../components/CharacterDetail";
import CharacterList from "../components/CharacterList";
import PageSelector from "../components/PageSelector";
import './CharacterContainer.css'

// import styled from "styled-components";

// const Title = styled.h1`
//     text-align: center;
//     font-size: 1.5em;
//     color: #fff;
//     background-color: #062c43;
//     margin: 0;
//     padding: 1em;
//     `

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
        window.scrollTo(375,375)
    }

    const handleSelectChange = event => {
        getCharacters(event.target.value);
    }

    return (
        <>
        <div className='view-box'>
            {selectedCharacter ? <CharacterDetail character={selectedCharacter}/> : <img src={require(`./plumbus_lg.png`)}/>}
        </div>
        <div className="outer-container">
            <PageSelector handleSelectChange={handleSelectChange} pages={pages}/>
        </div>
        <div className="h1-list">
            <CharacterList characters={characters} onCharacterClick={onCharacterClick}/>
        </div>
        </>
    )
}

export default CharacterContainer;