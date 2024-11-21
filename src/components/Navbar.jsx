import logo from '../assets/images/logo.png'
import coinIMG from '../assets/images/icons8-coins-48.png'
import PropTypes from 'prop-types';

const Navbar = ({coinUpdate}) => {
    function blurScroll() {
        if (window.scrollY >= 100) {
            document.getElementById('scroll').classList.add('backdrop-blur-xl');

        } else {
            document.getElementById('scroll').classList.remove('backdrop-blur-xl');

        }
    }
    window.onscroll = () => {
        blurScroll();
    };
    return (
        <>
            <div id='scroll' className='sticky top-0 z-20'>
                <div className='w-4/5 max-sm:w-[90%] mx-auto '>
                    <nav className='flex justify-between items-center py-8 px-2'>
                        <div><img src={logo} alt="Logo" /></div>
                        <div>
                            <ul className='flex gap-10 max-sm:gap-3'>
                                <li><a href="#">Home</a></li>
                                <li className='max-sm:hidden'><a href="#">Fixture</a></li>
                                <li className='max-sm:hidden'><a href="#">Teams</a></li>
                                <li className='max-sm:hidden'><a href="#">Schedules</a></li>
                                <div className='flex items-center gap-2 font-bold px-5 space-x-1'><span>{coinUpdate}</span>Coin<img className='w-5 h-5' src={coinIMG} alt="Coin" /></div>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};
Navbar.prototypes = {
    coinUpdate: PropTypes.number

}
export default Navbar;