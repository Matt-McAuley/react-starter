import PokemonType from '../PokemonType';
import React from "react"
import PokemonContext from '../PokemonContext';

const PokemonInfo = () => {
    const { selectedItem } = React.useContext(PokemonContext);

    return selectedItem ? (
        <div>
        <h2>{selectedItem.name.english}</h2>
        <table>
            <tbody>
            {Object.keys(selectedItem.base).map((key) => (
                <tr key={key}>
                <td>{key}</td>
                <td>{selectedItem.base[key]}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    ) : null;
}

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;