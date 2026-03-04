// import { IconCloud } from "@/registry/magicui/icon-cloud";
import Orbiting from "./Orbiting";
import {useMemo} from "react";

const slugs = [
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "git",
    "github",
    "figma",
    "tailwindcss",
    "mcdonalds",
    "Discord",
    "WebStorm",
    "leagueoflegends"
];


export function FrameWorks() {
    const images = useMemo(() => {
        return slugs.map(
            (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
        )
    },[])

    return (
        <div className="relative flex size-full items-center justify-center overflow-hidden">
            <Orbiting images={images} />
        </div>
    );
}
