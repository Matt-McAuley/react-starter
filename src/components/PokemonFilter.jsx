import React from "react"
import styled from "@emotion/styled"
import PokemonContext from "../PokemonContext";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: .2rem;
`;

const PokemonFilter = () => {
    const {filter, filterSet} = React.useContext(PokemonContext);

    return (
        <Input 
            type="text"
            value={filter}
            onChange={(evt) => filterSet(evt.target.value)}
        />
    );
}

export default PokemonFilter;