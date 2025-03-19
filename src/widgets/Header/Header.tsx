"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.headerInner}>
                <div className={styles.logo}>AG</div>
                <div className={styles.menu}>
                    <Link href="#main">Main</Link>
                    <Link href="#aboutMe">About me</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#contacts">Contacts</Link>
                </div>
                <button className={styles.langChange}>
                    <p>Eng</p>
                    <Image
                        src="/arrow-down.svg"
                        alt="icon"
                        width={24}
                        height={24}
                    />
                </button>
            </div>
        </div>
    );
}
