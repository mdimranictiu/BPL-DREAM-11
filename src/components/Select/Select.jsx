import dElete from '../../assets/images/icons8-delete-48.png'
import PropTypes from 'prop-types';

const Select = ({ player, itemDelete }) => {

    const { name, playerId, image, role, biddingPrice } = player
    return (
        <>
            <div className='flex justify-between items-center rounded-lg gap-10 shadow-xl  p-5'>
                <div className='flex items-center gap-5'>
                    <img className='w-[150px] h-[100px] rounded-lg' src={image} alt="Selected Players" />
                    <div>
                        <h2 className='text-xl max-sm:text-base font-bold'>{name}</h2>
                        <p>{role}</p>
                        <p>Price: ${biddingPrice}</p>
                    </div>
                </div>
                <div>
                    <button title='Remove Player' onClick={() => itemDelete(playerId)}><img src={dElete} alt="Delete Icon" /></button>
                </div>
            </div>

        </>
    );
};
Select.prototype = {
    player: PropTypes.object,
    itemDelete: PropTypes.func.isRequired
}
export default Select;