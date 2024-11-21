import PropTypes from "prop-types";
import playerIcon from '../../assets/images/icons8-user-40.png'
import flag from '../../assets/images/icons8-flag-48.png'

const Player = ({ player, choosePlayer }) => {

    const { name, playerId, country, image, role, battingType, bowlingType, biddingPrice } = player


    return (
        <>
            <div className="p-10 max-sm:p-5 max-sm:py-10 shadow-xl  mx-auto rounded-[25px]">
                <img className="rounded-[25px] h-[300px] w-[400px] mb-7" src={image} alt="Players-Img" />
                <div className="flex gap-2 mb-2 items-center">
                    <img className="w-[40px] h-[40px]" src={playerIcon} alt="User-Icon" />
                    <h3 className="text-2xl max-sm:text-xl font-bold">{name}</h3>
                </div>
                <div className="flex mt-5 items-center justify-between">
                    <div className="flex gap-2">
                        <img className="w-[30px] h-[30px]" src={flag} alt="Flag" />
                        <p>{country}</p>
                    </div>
                    <h4>{role}</h4>
                </div>
                <h3 className="font-semibold text-xl mt-5">Rating</h3>
                <div className="flex justify-between items-center">
                    <h5>{battingType}</h5>
                    <h5>{bowlingType}</h5>
                </div>
                <div className="flex justify-between gap-5 items-center mt-5">
                    <h5>Price: ${biddingPrice}</h5>
                    <button onClick={() => choosePlayer(player)} className="btn px-5 bg-[#D9D9D9] hover:bg-[#E7FE29] rounded-lg py-2 ">Choose Player</button>
                </div>

            </div>


        </>
    );
};

Player.prototypes = {
    player:PropTypes.object,
    choosePlayer: PropTypes.func
}
export default Player;