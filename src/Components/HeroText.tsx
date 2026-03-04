import {FlipWords} from "./FlipWords";
import {motion} from "motion/react";
import {AuroraText} from "./AuroraText";


export default function HeroText() {

    const words = ['Interactive', 'Dynamic', 'User Friendly'];
    const variants = {
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0},
    }

    return (
        <div className="z-10 mt-20 target-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/*Desktop View*/}
            <div className='flex-col hidden md:flex c-space'>
                <motion.h1
                    className='text-4xl font-medium'
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 1}}
                >
                    Hi I'm Noa
                </motion.h1>
                <div className='flex flex-col items-start'>
                    <motion.p
                        className='text-5xl font-medium text-neutral-300'
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 1.2}}
                    >
                        A Swedish Developer <br/>
                        Who Loves Building
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 1.4}}>
                            <FlipWords words={words} className='text-7xl font-black' />
                    </motion.div>
                    <motion.p
                        className='text-4xl font-medium text-neutral-300'
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 1.6}}
                    >Web Pages
                    </motion.p>
                </div>
            </div>

            {/*Mobile View*/}
            <div className='flex flex-col space-y-6 text-center md:hidden'>
                <motion.p
                    className='text-4xl font-medium'
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 1}}
                >Hi I'm Noa
                </motion.p>
                <div>
                    <motion.p
                        className='text-5xl font-black text-neutral-300'
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 1.2}}
                    >
                        Building
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 1.4}}
                    >
                        <FlipWords
                            words={words}
                            className='text-7xl font-bold text-blue-500'
                        />
                    </motion.div>
                    <motion.p
                        className='text-5xl font-black text-neutral-300'
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 1.6}}
                    >
                        Web Pages
                    </motion.p>
                </div>

            </div>
        </div>
    )
}