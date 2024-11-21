import footerlogo from '../../assets/images/logo-footer.png'
import './custom.css'


const Footer = () => {
    const year=new Date().getFullYear();
    return (
        <div className='mt-[350px]'>
            <div className="bg-[#06091A] w-full flex flex-col py-24">
                <div className='w-4/5 bg-stone-100  mx-auto absolute ml-[10%] mt-[-300px] rounded-lg p-4'>
                 
                 <div className='custom-bg-img  py-16  cover   rounded-lg  mx-auto'>
                    <div className='flex flex-col items-center justify-center py-12  text-center'>
                        <h2 className='text-[32px] font-bold'>Subscribe to our Newspletter</h2>
                        <p className='text-base text-[#6d6c6c]'>Get the latest updates and news right in your inbox!</p>
                        <div className='flex flex-row max-md:flex-col max-sm:flex-col gap-2 mt-5'>
                                <input type="email" className='px-5 py-2 rounded-lg  border-2 outline-none' placeholder="Enter Your Email" />
                                <input className='btn text-black px-5 rounded-lg  cursor-pointer py-2  outline-none bg-gradient-to-l from-[#cab17e] to-[#cc4d68]' type="submit" value="Subscribe" />
                        </div>
                    </div>
                 </div>

                </div>
                <div className='mt-[200px] max-sm:mt-[300px] flex flex-col items-center w-4/5 mx-auto text-white'>
                    <img src={footerlogo} alt="" />
                    <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mt-24 gap-24'>
                        <div className=''>
                            <h4 className='text-[18px] font-bold mb-6'>About Us</h4>
                            <p className='text-base text-[#5A5C67]'>BPL-DREAM-11 is a web based application. Here you can choose player via coin.</p>
                        </div>
                        <div className=''>
                            <h4 className='text-[18px] font-bold mb-6'>Quick Links</h4>
                            <ul className='text-base  text-[#5A5C67]'>
                                <li>Home</li>
                                <li>Service</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className=''>
                            <h4 className='text-[18px] font-bold mb-6'>Subscribe</h4>
                            <p className='text-base  text-[#5A5C67] max-w-[300px]'>Subscribe to our newsletter for the latest update</p>
                            <div className='flex flex-row max-md:flex-col max-sm:flex-col max-md:gap-2 max-sm:gap-2 mt-5'>
                                <input type="email" className='px-5 py-2 rounded-l-lg max-sm:rounded-lg outline-none' placeholder="Enter Your Email" />
                                <input className='btn text-black px-5 max-sm:rounded-lg  cursor-pointer py-2 rounded-r-lg outline-none bg-gradient-to-l from-[#cab17e] to-[#cc4d68]' type="submit" value="Subscribe" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='opacity-70 w-4/5 mx-auto mt-32 mb-5' />
                <p className='text-center text-[#5A5C67] text-[16px]'>&copy; {year} BPL DREAM 11.COM</p>
            </div>
        </div>
    );
};

export default Footer;