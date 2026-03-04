import {Html, useProgress} from "@react-three/drei";

export default function Loader() {
    const { progress } = useProgress();
    return (
        <Html center className='text-center font-black text-5xl'> {progress}% Loading</Html>
    )
}