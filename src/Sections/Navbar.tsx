import {useState} from "react";
import {motion} from 'motion/react'
import {Link} from 'react-scroll'
import { resolveAsset } from "../utils/assetUrl";



function Navigation() {
    return (
        <ul className='nav-ul'>
            <li className='nav-li'>
                <Link  className='nav-link cursor-pointer' to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='nav-li'>
                <Link className="nav-link cursor-pointer" to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='nav-li'>
                <Link className="nav-link cursor-pointer" to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className='nav-li'>
                <Link className="nav-link cursor-pointer" to="experience" smooth={true} duration={500}>
                    Experience
                </Link>
            </li>
            <li className='nav-li'>
                <Link className="nav-link cursor-pointer" to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen(!open);
    }


    return (
        <nav className="fixed top-0 inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 ">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                        <img className='w-8 h-8 ' src={resolveAsset("logo.svg")} alt="Logo" />
                    <button onClick={onClick}
                            className="flex cursor-pointer sm:hidden text-neutral-400 hover:text-white">
                        <img
                            src={open ? resolveAsset("close.svg") : resolveAsset("menu.svg")}
                            className="w-6 h-6"
                            alt="togle"/>
                    </button>
                    <nav className="hidden sm:flex ">
                        <Navigation/>
                    </nav>
                </div>
            </div>
            {
                open &&
                (<motion.div className="block overflow-hidden text-center sm:hidden"
                             initial={{ opacity:0, scale: 2, x:-10}}
                             animate={{ opacity: 1, scale: 1, x:0 }}
                             style={{maxHeight:'100vh'}}
                             transition={{duration: .7 }}
                            >
                    <nav className="pb-5">
                        <Navigation/>
                    </nav>
                </motion.div>)
            }
        </nav>
    )
}
