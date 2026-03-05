import ProjectDetails from "./ProjectDetails";
import {useState} from "react";
import type { ProjectItem } from "../types/content";
import { resolveAsset } from "../utils/assetUrl";

type ProjectProps = ProjectItem & {
    setPreview: (value: string | null) => void;
};

export default function Project(props: ProjectProps) {

    const {title, description, subDescription, href, image, tags, setPreview, year} = props;

    const [isHidden, setIsHidden] = useState(false);


    function handleClick() {
        setIsHidden(!isHidden);
    }

    return (
        <>
            <div
                className="grid items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
                onMouseEnter={() => setPreview(image)}
                onMouseLeave={() => setPreview(null)}>
                <div className="min-w-xl">
                    <p className='text-2xl'>{title}</p>
                </div>
                <div className='flex gap-5 mt-2 text-blue-300 text-left'>
                        <span>{year}</span>
                </div>
                <button
                    onClick={handleClick}
                    className='flex items-center gap-1 cursor-pointer hover-animation'>
                    Read More
                    <img src={resolveAsset("arrow-right.svg")} alt="arrow" className='w-5'/>
                </button>
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] "/>
            {isHidden && (<ProjectDetails
                title={title}
                description={description}
                subDescription={subDescription}
                image={image}
                tags={tags}
                href={href}
                closeModal={() => {
                    setIsHidden(false)
                }}/>)}
        </>
    )
}
