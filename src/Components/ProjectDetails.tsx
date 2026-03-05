import {motion} from "motion/react";
import type { ProjectItem } from "../types/content";
import { resolveAsset } from "../utils/assetUrl";

type ProjectDetailsProps = Pick<
  ProjectItem,
  "title" | "description" | "subDescription" | "href" | "image" | "tags"
> & {
  closeModal: () => void;
};

export default function ProjectDetails(props: ProjectDetailsProps) {

    const {title, description, subDescription, href, image, tags, closeModal} = props;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-auto backdrop-blur-sm">
            <motion.div initial={{opacity: 0, scale:.5}}
                        animate={{opacity: 1, scale: 1}}
                        className='relative h-[90%] overflow-auto max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10'>
                <button onClick={closeModal}
                        className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500'>
                    <img src={resolveAsset("close.svg")} alt={'close'} className='w-6 h-6'/>
                </button>
                <img src={image} alt={title} className='w-full rounded-t-2xl'/>
                <div className='p-5'>
                    <h5 className='mb-2 text-2xl font-bold text-white'>{title}</h5>
                    <p className='mb-3 font-normal text-neutral-400'>{description}</p>
                    {subDescription.map((subDesc, i) => (
                        <p className='mb-3 font-normal text-neutral-400' key={i}>{subDesc}</p>
                    ))}
                    <div className='flex items-center justify-between mt-4'>
                        <div className='flex gap-3'>
                            {tags.map((tag) => (
                                <img key={tag.id} src={tag.path} alt={tag.name}
                                     className='rounded-lg size-10 hover-animation'/>
                            ))}
                        </div>
                        <a href={href}
                           className='inline-flex items-center gap-1 font-medium hover-animation cursor-pointer'>
                            View Project
                            <img src={resolveAsset("arrow-up.svg")} className='size-4'/>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
