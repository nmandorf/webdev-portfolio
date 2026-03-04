import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { resolveAsset } from "../utils/assetUrl";

export default function ParallaxBackground() {

    const {scrollYProgress} = useScroll()
    const x = useSpring(scrollYProgress, {damping: 50})

    const mountain3Y = useTransform(x, [0,0.5], ["0%","70%"])
    const mountain2Y = useTransform(x, [0,0.5], ["0%","30%"])
    const mountain1Y = useTransform(x, [0,0.5], ["0%","0%"])

    const planetsX = useTransform(x, [0,0.5], ["0%","-50%"])
    const planets2X = useTransform(x, [0,0.5], ["0%","-10%"])
    const planets3X = useTransform(x, [0,0.5], ["0%","-10%"])

    return (
        <section className="absolute inset-0 bg-black/20">
            <div className="relative h-screen overflow-y-hidden">
                {/*Background img*/}
                <div
                    className="absolute inset-0 w-full h-screen -z-70"
                    style={{
                        backgroundImage: `url(${resolveAsset("background/backgroundsky.png")})`,
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover'
                    }}/>
                {/*Mountain 3*/}
                <motion.div
                    className="absolute inset-0 -z-30"
                    style={{
                        backgroundImage: `url(${resolveAsset("background/background-far.png")})`,
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        y: mountain2Y,
                    }}/>
                <motion.div
                    className="absolute inset-0 -z-20"
                    style={{
                        backgroundImage: `url(${resolveAsset("background/background-middel.png")})`,
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        y: mountain3Y,
                    }}/>
                <motion.div
                    className="absolute inset-0 -z-10"
                    style={{
                        backgroundImage: `url(${resolveAsset("background/foreground.png")})`,
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        y: mountain1Y,
                    }}/>
                {/*Planets*/}
                <motion.div
                    className="absolute inset-0 -z-60"
                    style={{
                        backgroundImage: `url(${resolveAsset("background/big-planet.png")})`,
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        x: planetsX,
                    }}/>

                <motion.div
                    className="absolute inset-0 -z-50"
                    style={{
                        backgroundImage: `url(${resolveAsset("background/small-planet.png")})`,
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        x: planets2X,
                    }}/>

                <motion.div
                    className="absolute inset-0 -z-40"
                    style={{
                        backgroundImage: `url(${resolveAsset("background/medium-planet.png")})`,
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        x: planets3X,
                    }}/>
            </div>
        </section>
    )
}
