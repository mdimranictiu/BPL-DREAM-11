import Select from "../Select/Select";
import PropTypes from "prop-types";

const AllSelect = ({ handleAddmorePlayer, players, itemDelete }) => {
    return (
        <>
            <div className="w-4/5 max-sm:w-[90%] mx-auto my-10">
                {
                    players.map(player => <Select key={player.playerId} itemDelete={itemDelete} player={player}></Select>)
                }
                <div className="py-10">
                    <button onClick={() => handleAddmorePlayer()} className=" bg-[yellow] btn px-5  rounded-xl py-5 font-bold">Add More Player</button>
                </div>
            </div>
        </>
    );
};
AllSelect.prototype = {
    handleAddmorePlayer: PropTypes.func,
    players: PropTypes.object,
    itemDelete: PropTypes.func
}
export default AllSelect;