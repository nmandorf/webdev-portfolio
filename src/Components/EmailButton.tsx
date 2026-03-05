import {useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import { resolveAsset } from "../utils/assetUrl";

export default function EmailButton() {

    const [copy, setCopy] = useState(false);
    const email = 'noa01mandorf@gmail.com'

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
        setCopy(true);

        setTimeout(() => {
            setCopy(false);
        }, 2000)
    }
    return (
        <motion.button onClick={copyToClipboard}
                       whileHover={{y:-5}}
                       whileTap={{scale:1.05}}
                       className=" relative  px-1 py-4 text-sm text-center rounded-full bg-primary w-[12rem] overflow-hidden
        cursor-pointer">
            <AnimatePresence mode='wait'>
                {copy ? (
                    <motion.p className='flex justify-center gap-2'
                              key="copied"
                              initial={{opacity: 0, y:- 10}}
                              animate={{opacity: 1, y:0}}
                              exit={{opacity: 0, y: 10}}
                              transition={{duration: 0.2, ease: 'easeInOut'}}
                    >
                        <img src={resolveAsset("copy-done.svg")} className='w-5' alt='Copied Email'/>
                        Email has been copied
                    </motion.p>
                ) : (
                    <motion.p className='flex justify-center gap-2'
                              key="copy"
                              initial={{opacity: 0, y:- 10}}
                              animate={{opacity: 1, y:0}}
                              exit={{opacity: 0, y: 10}}
                              transition={{duration: 0.2}}
                    >
                        <img className='w-5' src={resolveAsset("copy.svg")} alt='Copy Email'/>
                        Copy Email Address
                    </motion.p>
                )
                }
            </AnimatePresence>
        </motion.button>
    )
}
