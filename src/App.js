import './App.css';
import React from "react"
import styled from "@emotion/styled"

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';

const Title = styled.h1`
  text-align: center;
`;
const TwoColumnLayout = styled.div `
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;
const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  const [filter, filterSet] = React.useState("");
  const [selectedItem, selectedItemSet] = React.useState(null);
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/my-app/pokemon.json")
    .then(resp => resp.json())
    .then(data => setPokemon(data));
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        filter,
        filterSet,
        pokemon,
        setPokemon,
        selectedItemSet,
        selectedItem
      }}
    >
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter/>
            <PokemonTable/>
          </div>
          <PokemonInfo/>
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}

export default App;