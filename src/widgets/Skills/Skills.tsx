"use client";

import styles from "./Skills.module.scss";
import Skill from "./ui/Skill";
import { SKILLSLIST } from "./variables";

export default function Skills() {
    return (
        <div className={styles.Skills}>
            <h2>Skills</h2>
            <div className={styles.skillsList}>
                {SKILLSLIST.map((skill, i) => (
                    <Skill
                        key={i}
                        width={skill.width}
                        name={skill.name}
                        picture={skill.picture}
                    />
                ))}
            </div>
        </div>
    );
}
