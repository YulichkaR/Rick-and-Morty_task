import React, { useEffect, useState } from "react";
import { loadEpisode, loadSingleCharacter } from "../../api";
import "./Episodes.css";
import { Dropdown } from "../common/Dropdown";
import { CharacterCard } from "../Characters/CharacterCard";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
}

interface EpisodeData {
  name: string;
  episode: string;
  air_date: string;
  characters: string[];
}

const Episodes: React.FC = () => {
  const [episodeNumber, setEpisodeNumber] = useState<number>(1);
  const [episodeData, setEpisodeData] = useState<EpisodeData | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCharactersCards = async (characters: string[]) => {
    const charactersData = await Promise.all(
      characters.map(async (characterUrl) => {
        const res = await loadSingleCharacter(characterUrl);
        return res.data as Character;
      })
    );
    return charactersData;
  };

  const fetchEpisodeData = async (episodeNumber: number) => {
    setIsLoading(true);
    try {
      const response = await loadEpisode(episodeNumber);
      setEpisodeData(response.data);
      const characters = await fetchCharactersCards(response.data.characters);
      setCharacters(characters);
    } catch (error) {
      console.error("Error fetching episode data:", error);
      setEpisodeData(null);
      setCharacters([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEpisodeData(episodeNumber);
  }, [episodeNumber]);

  const handleClick = (index: number) => {
    setOpen(false);
    setEpisodeNumber(index);
  };

  const options = [...Array(51).keys()].map((index) => (
    <li key={index} value={index + 1}>
      <button onClick={() => handleClick(index + 1)}>
        Episode - {index + 1}
      </button>
    </li>
  ));

  return (
    <div className="episodes">
      <div className="left-menu">
        {episodeData && (
          <div className="episode-info">
            <h4>{episodeData.name}</h4>
            <p>Season and episode: {episodeData.episode}</p>
            <p>Air date: {episodeData.air_date}</p>
          </div>
        )}
        <Dropdown
          elements={options}
          currentElementNumber={episodeNumber}
          open={open}
          setOpen={setOpen}
          buttonName={"Episode"}
        />
      </div>
      <div className="cards">
        {!isLoading &&
          characters.map((character) => (
            <CharacterCard props={character} key={character.id} />
          ))}
      </div>
    </div>
  );
};

export default Episodes;
