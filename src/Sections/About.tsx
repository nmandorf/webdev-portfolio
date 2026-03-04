import Card from "../Components/Card";
import {useRef} from "react";
import {Globe} from "../Components/Globe";
import EmailButton from "../Components/EmailButton";
import {FrameWorks} from "../Components/FrameWorks";
import {motion} from "motion/react";
import { resolveAsset } from "../utils/assetUrl";

export default function About() {

    const grid2Container = useRef<HTMLDivElement | null>(null);
    return (
        <motion.section className="c-space section-spacing" id='about'>
            <h2 className='text-heading' id='AboutMe'>About Me</h2>
            <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12" >
                {/*Grid 1*/}
                <motion.div className='flex items-end grid-default-color grid-1' viewport={{ once: true, amount: 0.3 }} initial={{opacity:0, y:50}} whileInView={{opacity: 1, y:0}} transition={{delay:.2, duration:.5}}>
                    <img
                        src={resolveAsset("coding-pov.png")}
                        className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'
                    alt=''/>
                    <div className='z-10'>
                        <p className='headtext'>
                            Hi I'm Noa Mandorf
                        </p>
                        <p className='subtext'>
                            I’m a front-end web and UI developer from Sweden with a passion for crafting clean, intuitive interfaces. I thrive on learning new technologies and constantly refining my workflow to build better projects. Patient by nature, I love diving into challenges, whether that’s perfecting a design, leveling up in video games, or spinning tracks as a DJ in my downtime.
                        </p>
                        <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo op'/>
                    </div>
                </motion.div>

                {/*Grid 2*/}
                <motion.div className='grid-default-color grid-2' viewport={{ once: true, amount: 0.3 }} initial={{opacity:0, y:50}} whileInView={{opacity: 1, y:0}} transition={{delay:.2, duration:.5}}>
                    <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
                        <p className='flex items-end text-5xl text-gray-500'> Tools I use </p>
                        <Card style={{rotate: '75deg', top:'10%', left:'10%'}} image={resolveAsset("logos/react.svg")} containerRef={grid2Container}/>
                        <Card style={{rotate: '-40deg', top:'20%', left:'80%'}} text={'Figma'} containerRef={grid2Container}/>
                        <Card style={{rotate: '25deg', top:'60%', left:'5%'}} text={'Prototyping'} containerRef={grid2Container}/>
                        <Card style={{rotate: '15deg', top:'20%', left:'45%'}} text={'Usability'} containerRef={grid2Container}/>
                        <Card style={{rotate: '-10deg', top:'70%', left:'50%'}} image={resolveAsset("logos/css3.svg")} containerRef={grid2Container}/>
                        <Card style={{rotate: '10deg', top:'60%', left:'60%'}} image={resolveAsset("logos/tailwindcss.svg")} containerRef={grid2Container}/>
                        <Card style={{rotate: '30deg', top:'70%', left:'40%'}} image={resolveAsset("logos/html5.svg")} containerRef={grid2Container}/>
                        <Card style={{rotate: '35deg', top:'35%', left:'30%'}} image={resolveAsset("logos/javascript.svg")} containerRef={grid2Container}/>
                    </div>
                </motion.div>

                {/*Grid 3*/}
                <motion.div className='grid-black-color grid-3' viewport={{ once: true, amount: 0.3 }} initial={{opacity:0, y:50}} whileInView={{opacity: 1, y:0}} transition={{delay:.2, duration:.5}}>
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>Where I Work</p>
                        <p className='subtext'>I'm based in San Mateo, but am flexible to work anywhere</p>
                    </div>
                    <figure className='absolute left-[30%] top-[10%]'>
                        <Globe/>
                    </figure>
                </motion.div>

                {/*Grid 4*/}
                <motion.div className='grid-special-color grid-4' viewport={{ once: true, amount: 0.3 }} initial={{opacity:0, y:50}} whileInView={{opacity: 1, y:0}} transition={{delay:.2, duration:.5}}>
                    <div className='flex flex-col items-center justify-center gap-4 size-full'>
                        <p className='text-center headtext'> Do you want to work together? </p>
                        <EmailButton/>
                    </div>

                </motion.div>

                {/*Grid 5*/}
                <motion.div className='grid-default-color grid-5' viewport={{ once: true, amount: 0.3 }} initial={{opacity:0, y:50}} whileInView={{opacity: 1, y:0}} transition={{delay:.3, duration:.5}}>
                    <div className='w-[50%]'>
                        <p className='headtext'>My Hobbies</p>
                        <p className='subtext'> I enjoy learning more about the developing world, frameworks, styling libraries,
                            but I do like my games from time to time.</p>
                    </div>
                    <div className='absolute inset-y-0 md:inset-y-0 w-full h-full start-[20%] md:scale-125'>
                        <FrameWorks/>
                    </div>

                </motion.div>
            </motion.div>
        </motion.section>
    )
}
