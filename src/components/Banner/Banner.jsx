import PropTypes from 'prop-types';
import banner from '../../assets/images/banner-main.png'
import './custom.css'
const Banner = ({ claimFreeCredit }) => {

    return (
        <div className='custom-bg-img w-4/5 max-sm:w-[90%] mx-auto text-center  bg-cover rounded-lg bg-no-repeat bg-black'>
            <div className='text-white items-center flex flex-col gap-6 py-16 my-10'>
                <img className='mt-10' src={banner} alt="" />
                <h2 className='font-bold text-3xl max-sm:text-2xl'>Assemble Your Ultimate Dream 11 Cricket Team </h2>
                <p className='text-white opacity-70'>Beyond Boundaries Beyond Limits</p>
                <div className='border mb-5 border-[#CEF146]  px-2 py-2 rounded-[25px]'><button onClick={() => claimFreeCredit()} className='btn bg-[#E7FE29] py-4 px-5 shadow-lg border rounded-[25px] text-black outline-2'>Claim Free Credit</button></div>
            </div>


        </div>
    );
};
Banner.prototypes = {
    claimFreeCredit: PropTypes.func

}
export default Banner;