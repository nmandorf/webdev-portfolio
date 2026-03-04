import HeroText from "../Components/HeroText";
import ParallaxBackground from "../Components/ParallaxBackground";
import {Canvas, useFrame} from '@react-three/fiber'
import {Astronaut} from "../Components/Astronaut";
import { Float} from "@react-three/drei";
import {useMediaQuery} from 'react-responsive';
import {easing} from 'maath'
import {Suspense} from "react";
import Loader from "../Components/Loader";
import {SpaceShip} from "../Components/SpaceShip";



export default function Hero() {

    const isMobile = useMediaQuery({maxWidth: 853});
    return (
        <section
            id='home'
            className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
            <HeroText/>
            <ParallaxBackground/>
            <figure className='absolute inset-0'
                    style={{
                        width: '100vw',
                        height: '100vh',
                    }}>
                <Canvas camera={{position: [0, 1, 3]}}>
                    <Suspense fallback={<Loader/>}>
                        <ambientLight/>
                        <directionalLight position={[-3, 3, 1]}/>
                        <Float>
                            {isMobile ? <Astronaut scale={isMobile ? 0.23 : undefined}
                                                   position={isMobile ? [0, -1.5, 0] : undefined}/> :
                                <SpaceShip scale={isMobile ? 0.13 : undefined}
                                           position={isMobile ? [-5, .34, 0] : undefined} isMobile={isMobile}/>}

                        </Float>
                        <Rig/>
                    </Suspense>
                </Canvas>

            </figure>
        </section>
    )

    function Rig() {
        return (
            useFrame((state, delta) => {
                easing.damp3(state.camera.position, [state.mouse.x / 9, 1 + state.mouse.y / 9, 3], 0.5, delta)
            })


        )
    }
}