import * as React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Text } from '../../languages/Text/Text';
const Footer = () => {
    return (
        <footer className=" p-4 bg-[rgb(255,153,9)] bg-opacity-50  rounded-lg text-white shadow  md:px-6 md:py-8 relative">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 sm:mb-0">
                    <img src="/img/logo/logo.png" className="mr-3 h-8" alt="Investment Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap"><Text tid={"investment"} /></span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-xl text-white  sm:mb-0">
                    <li>
                        <Link to={"/about"}>
                            <p href="#" className="mr-4 text-base hover:underline md:mr-6 "><Text tid={"about"} /></p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/privacy'}>
                            <p href="#" className="mr-4 text-base hover:underline md:mr-6"><Text tid={"privacyPolicy"} /></p>
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block  text-white  sm:text-center">© 2022 <a href="#" className=""><Text tid={'investmentfooter'}/></a>. <Text tid={"alright"} />.
                <p className=' sm:text-center'><Text tid={'contact'}/> &nbsp; +971586877176 info@support-cpinvestment.com</p>
            </span>
            
        </footer>
        )
}

export default Footer;