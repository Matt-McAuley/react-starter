import PropTypes from "prop-types"
import React from "react"
import { Button } from "@mui/material"
import PokemonType from '../PokemonType';

const PokemonRow = ({ pokemon, onClick }) => (
    <>
      <tr key={pokemon.id}>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(", ")}</td>
        <td>
          <Button
            variant="outlined"
            onClick={() => onClick(pokemon)}
          >
            More Information
          </Button>
        </td>
      </tr>
    </>
  );
  
PokemonRow.propTypes = {
    pokemon: PropTypes.arrayOf(PokemonType),
};

export default PokemonRow;