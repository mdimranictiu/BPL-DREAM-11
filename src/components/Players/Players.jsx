import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({ choosePlayer }) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))

    }, [])

    return (
        <>
            <div className="w-4/5 max-sm:w-[90%] max-md:w-[90%] mx-auto my-10">

                <div className="grid  grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-3 gap-5 px-5 rounded-lg">

                    {

                        players.map(player =>

                            <Player player={player} choosePlayer={choosePlayer} key={player.playerId}>

                            </Player>)


                    }

                </div>


            </div>

        </>
    );
};
Players.protypes = {
    choosePlayer: PropTypes.func
    
}
export default Players;