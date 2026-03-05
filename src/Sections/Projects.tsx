import {myProjects} from "../constants/index";
import Project from "../Components/Project";
import {motion, useSpring} from "motion/react";
import {useMotionValue} from "framer-motion";
import {useState} from "react";
import type { MouseEvent } from "react";

export default function Projects() {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, {damping: 10, stiffness: 50});
    const springY = useSpring(y, {damping: 10, stiffness: 50});

    const [preview, setPreview] = useState<string | null>(null);

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    }

    const projectsByNewestFirst = [...myProjects].sort(
        (a, b) => Number(b.id) - Number(a.id)
    );

    return (
        <section onMouseMove={handleMouseMove} className="relative c-space section-spacing" id='work'>
            <h2 className='text-heading'>My Work</h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px]" />
            {projectsByNewestFirst.map((project) => (
                <motion.div
                    key={project.id}
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{delay:.2}}>
                    <Project {...project} setPreview={setPreview}/>
                </motion.div>
            ))}
            {preview && (

                <motion.img
                    className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80 hidden sm:block'
                    src={preview}
                    style={{x: springX, y: springY}}/>
            )}
        </section>
    )
}
