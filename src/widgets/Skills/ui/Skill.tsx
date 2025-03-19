"use client";

import Image from "next/image";
import styles from "./Skill.module.scss";

type SkillProps = {
    name: string;
    picture: string;
    width?: number
};

export default function Skill({ name, picture, width }: SkillProps) {
    return (
        <div className={styles.Skill}>
            <Image
                width={width ? width : 60}
                height={60}
                src={picture}
                alt={name}
            />
            <p>{name}</p>
        </div>
    );
}
