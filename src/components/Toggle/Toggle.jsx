import PropTypes from "prop-types";
import './Toggle.css'
import Players from "../Players/Players";
import AllSelect from "../AllSelect/AllSelect";

const Toggle = ({ players, handleToggleState, isActive, setisActive, choosePlayer, itemDelete }) => {
    const { status, available, isPlayerVisible } = isActive

    const handleAddmorePlayer = () => {
        setisActive(prevState => ({
            ...prevState,
            isPlayerVisible: true,
            status: "available"
        }));
    };

    return (
        <>

            <div className="w-4/5 max-sm:w-[90%] mx-auto py-10">
                <div className="flex justify-between items-center ">
                    <h2 className="px-5 text-2xl max-sm:text-xl font-bold">{status === "available" ? "Available Players" : `Selected Players (${players.length}/6)`}</h2>

                    <div className="flex gap-5 max-sm:gap-2 font-bold text-[18px] max-sm:flex-col ">
                        <button className={available ? "btn px-5 rounded-lg py-2 active" : "btn px-5 rounded-lg py-2 "} onClick={() => handleToggleState('available')} >Available</button>
                        <button className={available ? "btn px-5 rounded-lg py-2 " : " active btn px-5 rounded-lg py-2 "} onClick={() => handleToggleState('select')} >Selected({`${players.length}`})</button>
                    </div>

                </div>
            </div>

            {isPlayerVisible ? (
                <Players choosePlayer={choosePlayer}>

                </Players>
            ) : (
                <AllSelect itemDelete={itemDelete} players={players} handleAddmorePlayer={handleAddmorePlayer}></AllSelect>
            )}

        </>
    );
};
Toggle.protypes = {
    handleToggleState: PropTypes.func,
    isActive: PropTypes.object,
    players: PropTypes.array
}
export default Toggle;