export type ProjectTag = {
    id: number;
    name: string;
    path: string;
};

export type ProjectItem = {
    id: number;
    title: string;
    description: string;
    subDescription: string[];
    href: string;
    logo: string;
    image: string;
    year: string;
    tags: ProjectTag[];
};

export type SocialItem = {
    name: string;
    href: string;
    icon: string;
};

export type ExperienceItem = {
    title: string;
    job: string;
    date: string;
    contents: string[];
};

export type ReviewItem = {
    name: string;
    username: string;
    body: string;
    img: string;
};
