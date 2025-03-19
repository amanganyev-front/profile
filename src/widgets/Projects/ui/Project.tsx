"use client";

import Image from "next/image";
import styles from "./Project.module.scss";

type ProjectProps = {
    name: string;
    link: string;
    picture: string;
};

export default function Project(props: ProjectProps) {
    const { name, link, picture } = props;
    return (
        <a href={link} className={styles.Project} target="_blank">
            <Image
                width={300}
                height={300}
                alt={name}
                src={picture}
                className={styles.Picture}
            />
            <p>{name}</p>
        </a>
    );
}
